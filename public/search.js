// $(".cookieChoice").click(function() {
//     var cookieType = $(this).text()
//     $("#displayCookies").html(cookieType + " cookies go here")
// })

$(document).ready(function() {

    var cookies = [ "holiday", "special event", "birthday", "all"];

    var birthdayCookies =["https://s3-us-west-1.amazonaws.com/cookiepics/bdayCookie1.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/bdayCookie2.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/bdayCookie3.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/bdayCookie4.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/bdayCookie6.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/bdayCookie7.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/bdayCookie8.jpg"];
    var specialeventCookies=["https://s3-us-west-1.amazonaws.com/cookiepics/eventCookie1.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/eventCookie2.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/eventCookie3.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/eventCookie4.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/eventCookie5.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/eventCookie6.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/eventCookie7.jpg"];
    var holidayCookies=["https://s3-us-west-1.amazonaws.com/cookiepics/holidayCookie1.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/holidayCookie2.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/holidayCookie3.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/holidayCookie4.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/holidayCookie5.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/holidayCookie6.jpg"];
    var allCookies=["https://s3-us-west-1.amazonaws.com/cookiepics/bdayCookie1.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/bdayCookie2.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/bdayCookie3.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/bdayCookie4.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/bdayCookie6.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/bdayCookie7.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/bdayCookie8.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/holidayCookie1.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/holidayCookie2.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/holidayCookie3.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/holidayCookie4.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/holidayCookie5.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/holidayCookie6.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/eventCookie1.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/eventCookie2.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/eventCookie3.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/eventCookie4.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/eventCookie5.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/eventCookie6.jpg", "https://s3-us-west-1.amazonaws.com/cookiepics/eventCookie7.jpg"];
  
    // function to make buttons and add to page
    function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
      $(areaToAddTo).empty();
  
      for (var i = 0; i < arrayToUse.length; i++) {
        var a = $("<button>");
        a.addClass(classToAdd);
        a.attr("data-type", arrayToUse[i]);
        a.text(arrayToUse[i]);
        $(areaToAddTo).append(a);
      }
  
    }
  
    $(document).on("click", ".cookieChoice", function() {
        var cookieType=$(this).text()
        console.log(cookieType)
      $("#displayCookies").empty();
      $(".cookie-button").removeClass("active");
      $(this).addClass("active");

      var chosenArr;
        if (cookieType === "Holiday") {
            chosenArr = holidayCookies;
        } else if (cookieType === "Special Event") {
            chosenArr = specialeventCookies;
        } else if (cookieType === "Birthday") {
            chosenArr = birthdayCookies;
        } else if (cookieType === "All") {
            chosenArr = allCookies;
        }

        for (var i = 0; i < chosenArr.length; i ++) {
            var image = $("<img src='" + chosenArr[i] + "' />");
            $("#displayCookies").append(image);
        }
  
//       var type = $(this).attr("data-type");
//       var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10";
  
//       $.ajax({
//         url: queryURL,
//         method: "GET"
//       })
//       .then(function(response) {
//         var results = response.data;
  
//         for (var i = 0; i < results.length; i++) {
//           var cookieDiv = $("<div class=\"cookie-item\">");
  
//           var rating = results[i].rating;
  
//           var p = $("<p>").text("Rating: " + rating);
  
//           var still = results[i].images.fixed_height_still.url;
  
//           var cookieImage = $("<img>");
//           cookieImage.attr("src", still);
//           cookieImage.addClass("cookie-image");
  
  
// cookieDiv.append(p);
// cookieDiv.append(cookieImage);

// $("#cookies").append(cookieDiv);
// }
//});
});

$(document).on("click", ".cookie-image", function() {

var state = $(this).attr("data-state");

if (state === "still") {
$(this).attr("src", $(this).attr("data-animate"));
$(this).attr("data-state", "animate");
}
else {
$(this).attr("src", $(this).attr("data-still"));
$(this).attr("data-state", "still");
}
});

$("#add-cookie").on("click", function(event) {
event.preventDefault();
var newCookie = $("input").eq(0).val();

if (newCookie.length > 2) {
cookies.push(newCookie);
}

populateButtons(cookies, "cookie-button", "#cookie-buttons");

});

populateButtons(cookies, "cookie-button", "#cookie-buttons");
});
