import moment from 'moment';

const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '364fa8ee9d7346e7bae6dc97f478dce1';
const OPTIONS = {
  headers: {
    Authorization: API_KEY,
  },
};

class ArticlesService {
  #page = 1;
  #previousQuery = null;

  fetchData(searchQuery) {
    this.#page = searchQuery === this.#previousQuery ? this.#page + 1 : 1;
    this.#previousQuery = searchQuery;

    const searchParams = new URLSearchParams({
      q: searchQuery,
      sortBy: 'publishedAt',
      pageSize: 10,
      page: this.#page,
    });

    return fetch(`${BASE_URL}/everything?${searchParams}`, OPTIONS)
      .then((response) => response.json())
      .then(({ articles }) => ArticlesService.prepareData(articles))
      .catch((error) => {
        console.error(error);
      });
  }

  static prepareData(articles) {
    return articles.map((article) => {
      const { author, title, content, url, urlToImage, publishedAt } = article;
      const { text, timeForReading } = ArticlesService.parseContent(content);

      return {
        url,
        text,
        author,
        title,
        urlToImage,
        timeForReading,
        publishDate: moment(publishedAt).format('lll'),
      };
    });
  }

  static parseContent(content) {
    const firstSeparatorPosition = content.indexOf('[');
    const secondSeparatorPosition = content.indexOf(']');
    const parseResult = {
      text: null,
      timeForReading: null,
    };

    if (firstSeparatorPosition >= 0 && secondSeparatorPosition >= 0) {
      const numberOfChars = parseInt(content.substring(firstSeparatorPosition + 1, secondSeparatorPosition));

      parseResult.text = content.substring(0, firstSeparatorPosition);
      parseResult.timeForReading = ArticlesService.calculateTimeForReading(numberOfChars);
    }

    return parseResult;
  }

  static calculateTimeForReading(numberOfChars) {
    const minutes = Math.floor(numberOfChars / 255);

    if (minutes === 0) {
      return 'less then one minute';
    }

    if (minutes > 0 && minutes < 2) {
      return 'more then one minute';
    }

    return `${minutes} minutes`;
  }
}

export default new ArticlesService();
