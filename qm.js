$(document).ready(function() {
  //Quote is an object with keys 'quote' and 'author' which hold the
  //quote and author that will be displayed
  let quote;

  getQuote();

  function getQuote() {
    //Don't cache results
    $.ajaxSetup({ cache: false });

    $.ajax({
      url:
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
      type: "GET",
      headers: {
        Accept: "application/json"
      },
      success: function(data) {
        //Get a random quote object from the site
        quote = JSON.parse(data).quotes[
          Math.floor(Math.random() * JSON.parse(data).quotes.length)
        ];
        //Display quote and author
        $("#text").text(quote.quote);
        $("#author").text("-" + quote.author);
        //Set up 'Tweet' button to publish quote and author
        $("#tweet-quote").attr(
          "href",
          "https://twitter.com/intent/tweet?text=" +
            quote.quote +
            " -" +
            quote.author
        );
      }
    });
  }
  //Generate new quote when button is clicked
  $("#new-quote").on("click", function() {
    getQuote();
  });
});
