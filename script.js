$(document).ready(function() {
    setHeight();
    $(window).resize(function() {
        setHeight();
    })
})

function setHeight() {
    var scrHeight = $(window).height();
    $('main section').css('height', scrHeight+'px');
}
