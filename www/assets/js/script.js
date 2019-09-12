var SERVER_API = "https://nize.app/api_app/";

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) 
    {
        if ((new Date().getTime() - start) > milliseconds)
        {
            break;
        }
    }
}


/* Page Splash - indicateur btn 0 */


/* Page Connexion - indicateur btn 1 */
$('#btn_1_new_account').click(function(){
    window.location.href = 'inscription.html';
});

$('#btn_1_connect').click(function(){
    window.location.href = 'connexion-form.html';
});

/* Page inscription - indicateur btn 2 */


$('#btn_2_connect').click(function(){
    window.location.href = 'connexion.html';
});

/* Page connexion form - indicateur btn 3 */


/* Page inscription pass - indicateur btn 4 */
$('#btn_4_connect').click(function(){
    window.location.href = 'connexion.html';
});


/* Page passe oublie pass - indicateur btn 5 */
$('#btn_5_connect').click(function(){
    window.location.href = 'connexion.html';
});

/* Page passe oublie code - indicateur btn 6 */
$('#btn_6_retour').click(function(){
    window.location.href = 'connexion.html';
});






/* Fonctions génériques */
(function($){
    $.fn.shake = function(settings) {
        if(typeof settings.interval == 'undefined'){
            settings.interval = 100;
        }

        if(typeof settings.distance == 'undefined'){
            settings.distance = 10;
        }

        if(typeof settings.times == 'undefined'){
            settings.times = 4;
        }

        if(typeof settings.complete == 'undefined'){
            settings.complete = function(){};
        }

        $(this).css('position','relative');

        for(var iter=0; iter<(settings.times+1); iter++){
            $(this).animate({ left:((iter%2 == 0 ? settings.distance : settings.distance * -1)) }, settings.interval);
        }

        $(this).animate({ left: 0}, settings.interval, settings.complete);  
    }; 
    $.fn.bounce = function(settings) {
        if(typeof settings.interval == 'undefined'){
            settings.interval = 100;
        }

        if(typeof settings.distance == 'undefined'){
            settings.distance = 10;
        }

        if(typeof settings.times == 'undefined'){
            settings.times = 4;
        }

        if(typeof settings.complete == 'undefined'){
            settings.complete = function(){};
        }

        $(this).css('position','relative');

        for(var iter=0; iter<(settings.times+1); iter++){
            $(this).animate({ top:((iter%2 == 0 ? settings.distance : settings.distance * -1)) }, settings.interval);
        }

        $(this).animate({ top: 0}, settings.interval, settings.complete);  
    };


    $(".tb-logo").click(function(){
        window.location.href = 'tableau-de-bord.html';
    });

})(jQuery);
