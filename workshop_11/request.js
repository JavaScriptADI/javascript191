fetch("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString")
    .then(function(response) {
        return response.text();
    })
    .then(function(content) {
        console.log(content);
    })