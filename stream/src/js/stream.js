$(document).ready(function(){

        // Form submission method
        $("#signup-form").submit(function(event) {
                // Don't reload the page
                event.preventDefault();

                // TODO make an ajax call to load info to db

                // stash original form content before replacing with a message
                var originalFormContent = $("#join-us-form").html();
                $("#join-us-form").html("<div class='thanks-message-div'><h3>Thanks!</h3></div>");

                // Replace the form content after 5 seconds
                setTimeout(function() { $("#join-us-form").html(originalFormContent); }, 5000);
            });
    });
