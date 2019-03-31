var twitterShare = document.querySelector('[data-js="twitter-share"]');

twitterShare.onclick = function (e) {
    e.preventDefault();
    var twitterWindow = window.open('https://twitter.com/intent/tweet?hashtags=laravelaceh&original_referer=' + document.URL + '&ref_src=twsrc%5Etfw&text=' + document.title + '&tw_p=tweetbutton&url=' + document.URL, 'twitter-popup', 'height=350,width=600');
    if (twitterWindow.focus) {
        twitterWindow.focus();
    }
    return false;
}

var facebookShare = document.querySelector('[data-js="facebook-share"]');

facebookShare.onclick = function (e) {
    e.preventDefault();
    var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.URL, 'facebook-popup', 'height=350,width=600');
    if (facebookWindow.focus) {
        facebookWindow.focus();
    }
    return false;
}