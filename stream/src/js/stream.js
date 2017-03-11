$(document).ready(function() {
    actionkit.forms.contextRoot = 'https://go.peoplepower.org/context/';
    actionkit.forms.initPage();
    actionkit.forms.initForm('act');

    // I'll admit. Not the cleanest way but it'll work!
    $('#signup-form').submit(function(e) {
        var form = $(e.target);
        var button = form.find('input.btn');
        var sign_up_text = button.val();
        var handle_success = function(form) {
            // Let user know that it's done

            button.addClass('btn-success').val('SUCCESS!');
            setTimeout(function() {
                button.removeClass('btn-success').addClass('btn-primary').val(sign_up_text);
            }, 5000);
            // Reset the form for next submission
            form.trigger('reset');
        };
        var handle_failure = function(form) {
            // Let user know that it failed
            // Keep the form as is for resubmission
            button.addClass('btn-warning').val('Error. Try again?');
            setTimeout(function() {
                button.removeClass('btn-warning').addClass('btn-primary').val(sign_up_text);
            }, 5000);
        };

        if (!form.hasClass('contains-errors')) {
            e.preventDefault();
            form.find('input.btn').removeClass('btn-primary').val('SUBMITTING...');
            $.ajax({
                type: "POST",
                url: form.attr('action'),
                data: form.serialize(),
                dataType: "jsonp",
                success: function(data, textStatus, jqXHR) {
                    if (data.result == "success") {
                        // Form submitted!
                        handle_success(form);
                    } else {
                        // Handle error
                        handle_failure(form);
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // Handle error
                    handler_failure(form);
                }
            });
        }
    });

    $('#video').on('click', function() {
        $(this).html('<iframe title="Live Stream Video" src="https://www.youtube.com/embed/8mR449w4Qmo?autoplay=1&rel=0" allowfullscreen></iframe>');

        $('.hero').addClass('video-playing');
    });

});
