fetchImages = (term) => {
  const url = `https://api.unsplash.com/search/photos?client_id=4070052047e85343f77f7bbfb056ca4da387e25b3114baff0644247779a29964&per_page=12&query=${term}`;

  fetch(url).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
    createHTML(data);
  });
}

fetchImages('cow');

Handlebars.registerHelper('description', function(image) {
  return image.categories.length > 0 ? image.categories[0].title : image.user.name;
})

function createHTML(data) {
  // Find template source
  const source = document.getElementById('source').innerHTML;
  // Compile source
  const template = Handlebars.compile(source);
  // Send data to template to render... gives us HTML
  const html = template(data);
  // Put generated HTML back into document
  document.getElementById('main').innerHTML = html;
}
