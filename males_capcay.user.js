// ==UserScript==
// @name           Males capcay
// @namespace      pedox
// @description    buat yang males matematika
// @include        http://www.kaskus.us/newreply.php?*
// ==/UserScript==


var $;

// Add jQuery
    (function(){
        if (typeof unsafeWindow.jQuery == 'undefined') {
            var GM_Head = document.getElementsByTagName('head')[0] || document.documentElement,
                GM_JQ = document.createElement('script');
    
            GM_JQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
            GM_JQ.type = 'text/javascript';
            GM_JQ.async = true;
    
            GM_Head.insertBefore(GM_JQ, GM_Head.firstChild);
        }
        GM_wait();
    })();

// Check if jQuery's loaded
    function GM_wait() {
        if (typeof unsafeWindow.jQuery == 'undefined') {
            window.setTimeout(GM_wait, 100);
        } else {
            $ = unsafeWindow.jQuery.noConflict(true);
            letsJQuery();
        }
    }

// All your GM code must be inside this function
    function letsJQuery() {
		var capcay = $('label[for="humanverify"]').html();
		var pemisa = capcay.split(" ");
		
		if(pemisa[2] == "x"){
			var hasil = parseInt(pemisa[1]) * parseInt(pemisa[3]);
		}else if(pemisa[2] == ":"){
			var hasil = parseInt(pemisa[1]) / parseInt(pemisa[3]);
		}else if(pemisa[2] == "+"){
			parseInt(pemisa[1])
			var hasil = parseInt(pemisa[1]) + parseInt(pemisa[3]);
		}else if(pemisa[2] == "-"){
			var hasil = parseInt(pemisa[1]) - parseInt(pemisa[3]);
		}else{
			return false;
		}
		if(hasil){
			$('#humanverify').val(hasil);
			$('label[for="humanverify"]').append(' BAAA !!!  <img src="http://static.kaskus.us/images/smilies/sumbangan/14.gif"/>');
			$('#humanverify').after('<br/><small>Jangan Gunakan Skrip ini untuk tujuan ngejunk atau anda akan bangun rumah</small> -Pedox-');
		}else{
		}
		
    }
