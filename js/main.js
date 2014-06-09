var app = {


    showAlert: function (message, title) {
    if (navigator.notification) {
        navigator.notification.alert(message, null, title, 'OK');
    } else {
        alert(title ? (title + ": " + message) : message);
    }
},


    findByName: function() {
        console.log('findByName');
        this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
        });
    },

    initialize: function() {
         var self = this;
        this.store = new MemoryStore();
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    }

};

//app.initialize();

    var resumes=0;
    // Call onDeviceReady when PhoneGap is loaded.
    //
    // At this point, the document has loaded but phonegap-1.2.0.js has not.
    // When PhoneGap is loaded and talking with the native device,
    // it will call the event `deviceready`.
    //
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
        //alert('hello');
    }

    // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
    //
    function onDeviceReady() {
        document.addEventListener("resume", function() {
            setTimeout(function(){
                navigator.notification.alert({
                    "Aaaaaan we're back!!",
                    noticeDismissed,
                    "Missed You",
                    "OK (but that's kinda creepy)"
                });
            }, 0);
        });
    }

    // Handle the resume event
    //
    function onResume() {
        resumes++;
        
            $('#resumes').html(resumes);
        

    }

    window.addEventListener('touchstart', hello, false);
   function hello() {
        alert('hello');
      }