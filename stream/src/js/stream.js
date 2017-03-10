$(document).ready(function() {
    actionkit.forms.contextRoot = 'https://go.peoplepower.org/context/';
    actionkit.forms.initPage();
    actionkit.forms.initForm('act');

    // I'll admit. Not the cleanest way but it'll work!
    $('#signup-form').submit(function(e) {
        var form = $(e.target);

        var handler = function(form, success) {
            if (success) {
                // Let user know that it's done
                form.find('input.btn').addClass('btn-success').val('Successfully Submitted!');
                setTimeout(function() {
                    form.find('input.btn').removeClass('btn-success').addClass('btn-primary').val('SIGN UP');
                }, 5000);
                // Reset the form for next submission
                form.trigger('reset');
            } else {
                // Let user know that it failed
                // Keep the form as is for resubmission
                form.find('input.btn').addClass('btn-warning').val('Error. Try again?');
                setTimeout(function() {
                    form.find('input.btn').removeClass('btn-warning').addClass('btn-primary').val('SIGN UP');
                }, 5000);
            }
        };

        if (!form.hasClass('contains-errors')) {
            e.preventDefault();
            form.find('input.btn').removeClass('btn-primary').val('Submitting...');
            $.ajax({
                type: "POST",
                url: form.attr('action'),
                data: form.serialize(),
                dataType: "jsonp",
                success: function(data, textStatus, jqXHR) {
                    if (data.result == "success") {
                        // Form submitted!
                        handler(form, true);
                    } else {
                        // Handle error
                        handler(form, false);
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // Handle error
                    handler(form, false);
                }
            });
        }
    });

    $('#video').on('click', function() {
        /* TODO: Correct video URL */
        $(this).html('<div class="video-background"><iframe title="Live Stream Video" src="https://www.youtube.com/embed/e2axToBYD68?autoplay=1" allowfullscreen></iframe></div>');
    });

});
