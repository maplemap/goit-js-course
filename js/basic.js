document.querySelector('button.image').onclick = () => {
  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="https://placehold.it/1400x900">
	`,
    )
    .show();
};

document.querySelector('button.iframe').onclick = () => {
  basicLightbox
    .create(
      `
		<iframe width="560" height="315" src="https://www.youtube.com/embed/Scxs7L0vhZ4" frameborder="0" allowfullscreen></iframe>
	`,
    )
    .show();
};

document.querySelector('button.video').onclick = () => {
  basicLightbox
    .create(
      `
		<video controls data-id="2">
			<source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4">
		</video>
	`,
    )
    .show();
};

document.querySelector('button.html').onclick = () => {
  basicLightbox
    .create(
      `
		<h1>HTML</h1>
		<p>HTML inside a lightbox.</p>
	`,
    )
    .show();
};

document.querySelector('button.callbacks').onclick = (e) => {
  const html = `
		<h1>Callbacks</h1>
		<p>Take a look at the console of your browser.<br>This lightbox will close automaticly to demonstrate the close-callback.</p>
	`;

  const instance = basicLightbox.create(html, {
    onShow: (instance) => console.log('onShow', instance),
    onClose: (instance) => console.log('onClose', instance),
  });

  instance.show((instance) => console.log('finished show()', instance));

  setTimeout(() => {
    instance.close((instance) => console.log('finished close()', instance));
  }, 3000);
};

document.querySelector('button.blocked').onclick = () => {
  const html = `
		<h1>Blocked</h1>
		<p>It's not possible to close this lightbox,<br>because the onClose function returns false.</p>
	`;

  basicLightbox
    .create(html, {
      onClose: () => false,
    })
    .show();
};

document.querySelector('button.notClosable').onclick = () => {
  const html = `
		<h1>Not closable</h1>
		<p>It's not possible to close this lightbox with a click.</p>
	`;

  basicLightbox
    .create(html, {
      closable: false,
    })
    .show();
};

document.querySelector('button.modify').onclick = () => {
  const instance = basicLightbox.create(`
		<h1>Modify HTML</h1>
		<p>You can modify the HTML of the lightbox using JS.</p>
	`);

  instance
    .element()
    .insertAdjacentHTML('afterbegin', '<p>Before placeholder</p>');
  instance
    .element()
    .insertAdjacentHTML('beforeend', '<p>After placeholder</p>');

  instance.show();
};

document.querySelector('button.classNames').onclick = () => {
  const html = `
		<h1>Custom classNames</h1>
		<p>You can add custom classNames to the lightbox element.</p>
	`;

  basicLightbox
    .create(html, {
      className: 'classNames one two three',
    })
    .show();
};

const stack = () => {
  const html = `<button>Open another lightbox</button>`;
  const instance = basicLightbox.create(html);

  instance.element().querySelector('button').onclick = stack;
  instance.show();
};

document.querySelector('button.stack').onclick = stack;
