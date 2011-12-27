// ==UserScript==
// @name           Males capcay
// @namespace      pedox
// @description    buat yang males ngitung kek ane :cool:
// @include        http://www.kaskus.us/newreply.php?*
// @include        http://www.kaskus.us/newthread.php?*
// ==/UserScript==


function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

// All your GM code must be inside this function
    function main() {
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
addJQuery(main);
