$(document).ready(function() {
    $('#video').on('click', function() {
        /* TODO: Correct video URL */
        $(this).html('<div class="video-background"><iframe title="Live Stream Video" src="https://www.youtube.com/embed/e2axToBYD68?autoplay=1" allowfullscreen></iframe></div>');
    });

    actionkit.forms.contextRoot = 'https://go.peoplepower.org/context/';
    actionkit.forms.initPage();
    actionkit.forms.initForm('act');
});
