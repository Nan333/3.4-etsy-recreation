var url = "https://api.etsy.com/v2/listings/active.js?api_key=cdwxq4soa7q4zuavbtynj8wx&keywords=tacos&includes=Images,Shop";
fetchJSONP(url, app);

function fetchJSONP(url, callback) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    var script = document.createElement('script');

    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
}

function app(response) {
  var products = response.results;
  console.log(products);
}

function displayCharacterNames(characters) {
  var source   = document.querySelector("#character-template").innerHTML;
  var template = Handlebars.compile(source);
  characters.forEach(function(character){
    var output = template(character);
    ulElement.insertAdjacentHTML('beforeend', output);
  });
}
