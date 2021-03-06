$(document).ready(function () {
    /* 
        First, call `gadget.ready()` to make sure the gadget has obtained an API token
        to use for making OU Campus API calls. If your gadget will not make any API calls,
        you can dispense with this method. This asynchronous method returns a jQuery
        Promise object.
        
        Then, call `gadget.fetch()` to get the gadget's config data from the system. This
        method, which also returns a jQuery Promise object, uses the API, which is why it
        needs to follow the call to `gadget.ready()`.
        
        If you don't need the config data, you don't need to call gadget.fetch().
    */
    gadget.ready().then(gadget.fetch).then(function () {
        
        $("#main").addClass( gadget.get('place') );

        $("#status").html("Gadget Loaded.");
        
    });
});

$(gadget).on({
    'expanded': function (evt) {
        // This event is triggered when the user expands (makes visible) a sidebar gadget.
        console.log('Gadget expanded.');
    },
    'collapsed': function (evt) {
        // This event is triggered when the user collapses (hides) a sidebar gadget.
        console.log('Gadget collapsed.');
    },
    'configuration': function (evt, config) {
        // If the user changes the gadget's configuration through the configuration modal,
        // the gadget will hear about it and get the new config in the data argument here.
        console.log('New config:', config);
        $('#main').css({ 'font-size': config.font_size });
    },
    'notification': function (evt, notification) {
        // If the gadget's config.xml contains a "notification" entry, any notifications
        // of the specified type(s) generated by OU Campus will trigger 'notification'
        // events that can be handled here.
        console.log('Notification received:', notification);
    }
});