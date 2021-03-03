function delay(ms) {

  var cur_d = new Date();
  var cur_ticks = cur_d.getTime();
  var ms_passed = 0;
  while (ms_passed < ms) {

    var d = new Date();
    var ticks = d.getTime();
    ms_passed = ticks - cur_ticks;
  }
}

function displayText() {
  if (document.getElementById("nextbtn").innerHTML == "Next") {
    document.getElementById("coax").style.visibility = "hidden";
    document.getElementById("nextbtn").innerHTML = "Back";
    document.getElementById("sub").style.display = "none";
    document.getElementById("text1").style.display = "block";
    document.getElementById("random").style.visibility = "visible";
    document.getElementById("chuck").style.visibility = "visible";
    document.getElementById("post").style.visibility = "visible";
    document.getElementById("spam").style.display = "block";
    document.getElementById("sentence").style.display = "block";
    document.getElementById("joke").style.display = "block";

  } else {
    document.getElementById("coax").style.visibility = "visible";
    document.getElementById("nextbtn").innerHTML = "Next";
    document.getElementById("sub").style.display = "block";
    document.getElementById("text1").style.display = "none";
    document.getElementById("random").style.visibility = "hidden";
    document.getElementById("chuck").style.visibility = "hidden";
    document.getElementById("post").style.visibility = "hidden";
    document.getElementById("spam").style.display = "none";
    document.getElementById("sentence").style.display = "none";
    document.getElementById("joke").style.display = "none";

  }
}

var content = "";
var verbs, nouns, adjectives, adverbs, preposition;
nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
conjunctions = [" as the ", " because the ", " since the ", " judging as the ", " for the ", "; the ", ". The "]
adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

function randGen() {
  return Math.floor(Math.random() * 5);
}

function sentence() {
  var rand1 = Math.floor(Math.random() * 10);
  var rand2 = Math.floor(Math.random() * 10);
  var rand3 = Math.floor(Math.random() * 10);
  var rand4 = Math.floor(Math.random() * 10);
  var rand5 = Math.floor(Math.random() * 10);
  var rand6 = Math.floor(Math.random() * 10);
  var rand7 = Math.floor(Math.random() * 7);

  var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] +
    " " + verbs[rand4] + conjunctions[rand7] + nouns[rand1] + " " + adverbs[rand1] + " " +
    verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + ", which became a " +
    adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";
  document.getElementById('sentence').innerHTML = content;
};

function loadJoke() {
  $.ajax({
    type: "GET",
    url: "https://api.icndb.com/jokes/random",
    dataType: "json",
    success: function(msg) {
      $("#joke").html(msg.value.joke);
    }
  });
};

function req(n) {

  var da = {};

  for (var i = 0; i < $('#sub').val(); i += 1) {
    i+=1;
    da["entry.910209338"] = $('#text1').val()+"\n\nAttempt "+i;
    i-=1;
    $.ajax({
      url: "https://docs.google.com/forms/d/e/1FAIpQLSd5-f6oYEZ2GM_1XiMdOVDDxHNQV8Nx2WB6dyMNhLv82UQJ_w/formResponse",
      type: "post",
      data: da,
      success: function(data) {}
    });
  }

  $('#myModal').modal('show');
  $('#modalbody').html("");
}
