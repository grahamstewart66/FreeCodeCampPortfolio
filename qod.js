/**
 * Created by graha on 04/07/2017.
 */


$(document).ready(function () {

    function createInput() {
        var $input = $('<input type="button" value="new buttons" />');
        $input.appendTo($("body"));
    }


    $("#getMessage").on("click", function () {

// remove twitter button created last time (if it exists)
        $(".fa-twitter").remove();

// toggle color to show change of state
        $("#idContainer").toggleClass('changeToNewColor');

// JSON call from CS quote archive
           $.getJSON("https://quotes.stormconsultancy.co.uk/random.json", function (json) {


       // var x = $.getJSON("http://quotes.rest/qod.json", function (json) {

// quote and author sent to screen
//             $(".quote").html(json.quote);
//             $(".author").html(json.author);

           var quote = json.quote;
           var author = json.author;

            $(".quote").html(quote);
            $(".author").html(author);

// create twitter button attributes - needs to be done each time since twitter button can't be changed after it is created
            var b = document.createElement('a');
            b.setAttribute('class', 'btn btn-primary fa fa-twitter');
            b.setAttribute('id', 'btn-new');
            b.setAttribute('href', 'https://twitter.com/intent/tweet?text=' + quote + '  -  ' + author + '&hashtags=Quotes');
            b.innerHTML = 'Tweet ' + author + '!';

// send twitter button to screen
            $('#tweetbutton').append(b);

        });

    });

});
