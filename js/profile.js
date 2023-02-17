/*
- Об'єкти window і document
- Ієрархія DOM-елементів
- Пошук DOM-елементів із querySelector
- Властивість textContent
- Робота з classList і атрибутами
- Створення елементів
- Вставка елементів: append, prepend, before і after
- Видалення методом remove
- Властивість innerHTML і метод insertAdjacentHTML

    Створити сайт з такою розміткою використовуючи лише JS в html файлі має бути пусто
*/

//main
const mainRef = document.createElement('main');
mainRef.id = 'main';

//h1
const h1Ref = document.createElement('h1');
h1Ref.id = 'title';
h1Ref.textContent = '- Michel Legrand -';
mainRef.prepend(h1Ref);

//figure
const figureRef = document.createElement('figure');
figureRef.classList.add('img-div');
mainRef.append(figureRef);

const figureImgRef = document.createElement('img');
figureImgRef.classList.add('img');
figureImgRef.src =
  'https://images.mubicdn.net/images/cast_member/2693/cache-136-1593328014/image-w856.jpg?size=320x';
figureImgRef.alt = 'Michel Legrand conducting his orchestra.';
figureRef.append(figureImgRef);

const figureCaptionRef = document.createElement('figcaption');
figureCaptionRef.id = 'img-caption';
figureCaptionRef.textContent = 'Michel Legrand conducting his orcherstra.';

figureRef.before(figureCaptionRef);

//article
const articleRef = document.createElement('article');
articleRef.id = 'tribute-info';
// mainRef.append(articleRef);

const articleIntroRef = document.createElement('div');
articleIntroRef.id = 'intro';
articleRef.append(articleIntroRef);

const articleIntroParagraphRef = document.createElement('p');
articleIntroParagraphRef.textContent =
  '• Michel Legrand (1932 - 2019) was a famous French musician. •';

articleIntroRef.append(articleIntroParagraphRef);

articleIntroRef.insertAdjacentHTML(
  'afterend',
  `
<p><u>Here are some major facts about him:</u></p>
<ul>
    <li>He was born in Paris, France on February 24<sup>th</sup>, 1932.</li>
    <li>His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of
        a
        conductor.</li>
    <li>His sister was a Soprano and a member of the Swingle Singers.</li>
    <li>Along his career, he composed more than two hundred film and television scores.</li>
    <li>He was also a Jazz player and worked with giants like Miles Davis or Stan Getz.</li>
    <li>He won a huge amount of awards, including Oscars, Grammy Awards and Golden Globes.</li>
    <li>He died of sepsis during the night of the 25<sup>th</sup> to 26<sup>th</sup> January 2019 in the
        American Hospital of Paris.</li>
    <li>He was interred at the P&egrave;re Lachaise Cemetery in Paris, France.</li>
</ul>
<blockquote id="quote">
<p>Writing is a mental thing, while playing is essentially a physical feeling.</p>
<cite>-- Michel Legrand</cite>
</blockquote>
<hr>
<p>To find out more about him, feel free to have a look at his biography on <a id="tribute-link"
    href="https://en.wikipedia.org/wiki/Michel_Legrand" target="_blank">Wikipedia</a>.
</p>
`,
);

document.body.append(mainRef); //Звертання до DOM!!!

{
  /* <main id="main" style="display: none;">
<h1 id="title">- Michel Legrand -</h1>
<figure class="img-div">
    <img class="image"
        src="https://images.mubicdn.net/images/cast_member/2693/cache-136-1593328014/image-w856.jpg?size=320x"
        alt="Michel Legrand conducting his orchestra.">
    <figcaption id="img-caption">Michel Legrand conducting his orcherstra.</figcaption>
</figure>
<article id="tribute-info">
    <div id="intro">
        <p>&bull; Michel Legrand (1932 - 2019) was a famous French musician. &bull;</p>
    </div>
    <p><u>Here are some major facts about him:</u></p>
    <ul>
        <li>He was born in Paris, France on February 24<sup>th</sup>, 1932.</li>
        <li>His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of
            a
            conductor.</li>
        <li>His sister was a Soprano and a member of the Swingle Singers.</li>
        <li>Along his career, he composed more than two hundred film and television scores.</li>
        <li>He was also a Jazz player and worked with giants like Miles Davis or Stan Getz.</li>
        <li>He won a huge amount of awards, including Oscars, Grammy Awards and Golden Globes.</li>
        <li>He died of sepsis during the night of the 25<sup>th</sup> to 26<sup>th</sup> January 2019 in the
            American Hospital of Paris.</li>
        <li>He was interred at the P&egrave;re Lachaise Cemetery in Paris, France.</li>
    </ul>
    <blockquote id="quote">
        <p>Writing is a mental thing, while playing is essentially a physical feeling.</p>
        <cite>-- Michel Legrand</cite>
    </blockquote>
    <hr>
    <p>To find out more about him, feel free to have a look at his biography on <a id="tribute-link"
            href="https://en.wikipedia.org/wiki/Michel_Legrand" target="_blank">Wikipedia</a>.
    </p>
</article>
</main> */
}
