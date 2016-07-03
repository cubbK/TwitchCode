$(document).ready(function(){
  var profiles = ['syndicate' , 'riotgames' , 'esl_csgo' , 'summit1g', 'Nightblue3' , 'LIRIK' , 'PhantomL0rd' , 'captainsparklez','sodapoppin', 'imaqtpie'];

  $.getJSON('https://api.twitch.tv/kraken/channels/syndicate?callback=?',function (data) {
    console.log(data);
  });


});
