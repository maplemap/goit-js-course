import articlesService from '../service/articles';
import notifier from '../service/notifier';
import articleTpl from './templates/article.hbs';

/* 
    Написати додаток пошуку новин
*/

class NewsBox {
  #markup = `
    <section class="news-app">
    <section class="header">
        <div class='header__wrapper'>
            <a class='header__logo'>
                <i class="fa-regular fa-newspaper"></i>
            </a>
            <div class='header__brand'>News Box</div>
        </div>
    </section>
    <form class="search">
        <div class="search__wrapper">
            <input class="search__field" type="text" placeholder="What are you looking for?" name="search">
            <button class="search__btn" type="submit">
            <span class="search__icon">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-circle-notch"></i>
            </span>
            </button>
        </div>
    </form>
      <div class="articles"></div> 
      </div>
      <section class="load-more">
        <button class="load-more__btn load-more__btn_hidden">More</button>
      </section>
    </section>
    `;
  #targetElement = null;
  #infinityLoading = false;
  #searchQuery = null;
  #refs = {};
  #articles = [];

  constructor({ targetElement, infinityLoading = false } = {}) {
    this.#targetElement = targetElement || document.body;
    this.#infinityLoading = infinityLoading;
  }

  init() {
    this.#targetElement.innerHTML = this.#markup;
    this.#initRefs();
    this.#initListeners();

    if (this.#infinityLoading) {
      this.#initInfinityLoading();
    }
  }

  #initRefs() {
    this.#refs.search = document.querySelector('.news-app .search');
    this.#refs.articles = document.querySelector('.news-app .articles');
    this.#refs.moreBtn = document.querySelector('.news-app .load-more__btn');
  }

  #initListeners() {
    this.#refs.search.addEventListener('submit', this.#onSearch.bind(this));
    this.#refs.moreBtn.addEventListener('click', this.#onClickLoadMoreBtn.bind(this));
  }

  #updateArticles(articles) {
    this.#articles = articles;
    this.#render();

    if (!this.#infinityLoading) {
      this.#toggleMoreButton();
    }
  }

  #onSearch(e) {
    e.preventDefault();
    this.#searchQuery = e.currentTarget.elements.search.value;

    this.#fetchArticles()
      .then((articles) => {
        if (articles.length === 0) {
          return notifier.info('No results. Please clarify your search');
        }

        this.#updateArticles(articles);
      })
      .finally(() => {
        e.target.reset();
      });
  }

  #fetchArticles() {
    return articlesService
      .fetchData(this.#searchQuery)
      .then((articles) => articles)
      .catch((error) => {
        console.error(error); // dev
        notifier.error('Something went wrong. Please try later'); //
      });
  }

  #loadMore() {
    return this.#fetchArticles().then((articles) => {
      this.#updateArticles([...this.#articles, ...articles]);
    });
  }

  #onClickLoadMoreBtn() {
    this.#refs.moreBtn.classList.add('load-more__btn_loading');
    this.#refs.moreBtn.disabled = true;

    this.#loadMore().finally(() => {
      this.#refs.moreBtn.classList.remove('load-more__btn_loading');
      this.#refs.moreBtn.disabled = false;
    });
  }

  #toggleMoreButton() {
    if (this.#articles.length > 0) {
      this.#refs.moreBtn.classList.remove('load-more__btn_hidden');
    } else {
      this.#refs.moreBtn.classList.add('load-more__btn_hidden');
    }
  }

  #initInfinityLoading() {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && this.#articles.length > 0) {
            this.#loadMore();
          }
        }
      },
      { rootMargin: '400px' },
    );

    observer.observe(this.#refs.moreBtn);
  }

  #render() {
    const mockup = this.#articles.map((data) => articleTpl({ ...data })).join('');

    this.#refs.articles.innerHTML = mockup;
  }
}

const newsBox = new NewsBox({ infinityLoading: true });
newsBox.init();
