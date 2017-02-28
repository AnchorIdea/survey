$(document).ready(function() {
  $(".text-field, #blue, #cyan, #aqua, #turquoise, #green, #chartreuse, #yellow, #gold, #orange, #coral, #salmon, #pink, #hotPink, #fuchsia, #mauve, #lavender, #plum, #indigo, #purple, #maroon, #scarlet, #red, #tan, #khaki, #beige, #grey, #black, #white, #thankYou, .glyphicon-home, .tooltip").hide();
});

$(document).on("click", "button", function() {
  $(".begin-button, .call-to-action, .intro-text-area").fadeOut("500ms", function() {
    $(".text-field, #blue, .tooltip").show();
  });
});

$(document).keypress(function (e) {
  if (e.which == 13) {
    if($('#blue').is(':visible')) {
      $('#blue').fadeOut("100ms", function() {
        $('#cyan').fadeIn("100ms");
      });
    } else if($('#cyan').is(':visible')) {
      $('#cyan').fadeOut("100ms", function() {
        $('#aqua').fadeIn("100ms");
      });
    } else if($('#aqua').is(':visible')) {
      $('#aqua').fadeOut("100ms", function() {
        $('#turquoise').fadeIn("100ms");
      });
    } else if($('#turquoise').is(':visible')) {
      $('#turquoise').fadeOut("100ms", function() {
        $('#green').fadeIn("100ms");
      });
    } else if($('#green').is(':visible')) {
      $('#green').fadeOut("100ms", function() {
        $('#chartreuse').fadeIn("100ms");
      });
    } else if($('#chartreuse').is(':visible')) {
      $('#chartreuse').fadeOut("100ms", function() {
        $('#yellow').fadeIn("100ms");
      });
    } else if($('#yellow').is(':visible')) {
      $('#yellow').fadeOut("100ms", function() {
        $('#gold').fadeIn("100ms");
      });
    } else if($('#gold').is(':visible')) {
      $('#gold').fadeOut("100ms", function() {
        $('#orange').fadeIn("100ms");
      });
    } else if($('#orange').is(':visible')) {
      $('#orange').fadeOut("100ms", function() {
        $('#coral').fadeIn("100ms");
      });
    } else if($('#coral').is(':visible')) {
      $('#coral').fadeOut("100ms", function() {
        $('#salmon').fadeIn("100ms");
      });
    } else if($('#salmon').is(':visible')) {
      $('#salmon').fadeOut("100ms", function() {
        $('#pink').fadeIn("100ms");
      });
    } else if($('#pink').is(':visible')) {
      $('#pink').fadeOut("100ms", function() {
        $('#hotPink').fadeIn("100ms");
      });
    } else if($('#hotPink').is(':visible')) {
      $('#hotPink').fadeOut("100ms", function() {
        $('#fuchsia').fadeIn("100ms");
      });
    } else if($('#fuchsia').is(':visible')) {
      $('#fuchsia').fadeOut("100ms", function() {
        $('#mauve').fadeIn("100ms");
      });
    } else if($('#mauve').is(':visible')) {
      $('#mauve').fadeOut("100ms", function() {
        $('#lavender').fadeIn("100ms");
      });
    } else if($('#lavender').is(':visible')) {
      $('#lavender').fadeOut("100ms", function() {
        $('#plum').fadeIn("100ms");
      });
    } else if($('#plum').is(':visible')) {
      $('#plum').fadeOut("100ms", function() {
        $('#indigo').fadeIn("100ms");
      });
    } else if($('#indigo').is(':visible')) {
      $('#indigo').fadeOut("100ms", function() {
        $('#purple').fadeIn("100ms");
      });
    } else if($('#purple').is(':visible')) {
      $('#purple').fadeOut("100ms", function() {
        $('#maroon').fadeIn("100ms");
      });
    } else if($('#maroon').is(':visible')) {
      $('#maroon').fadeOut("100ms", function() {
        $('#scarlet').fadeIn("100ms");
      });
    } else if($('#scarlet').is(':visible')) {
      $('#scarlet').fadeOut("100ms", function() {
        $('#red').fadeIn("100ms");
      });
    } else if($('#red').is(':visible')) {
      $('#red').fadeOut("100ms", function() {
        $('#tan').fadeIn("100ms");
      });
    } else if($('#tan').is(':visible')) {
      $('#tan').fadeOut("100ms", function() {
        $('#khaki').fadeIn("100ms");
      });
    } else if($('#khaki').is(':visible')) {
      $('#khaki').fadeOut("100ms", function() {
        $('#beige').fadeIn("100ms");
      });
    } else if($('#beige').is(':visible')) {
      $('#beige').fadeOut("100ms", function() {
        $('#grey').fadeIn("100ms");
      });
    } else if($('#grey').is(':visible')) {
      $('#grey').fadeOut("100ms", function() {
        $('#black').fadeIn("100ms");
      });
    } else if($('#black').is(':visible')) {
      $('#black').fadeOut("100ms", function() {
        $('#white').fadeIn("100ms");
      });
    } else if($('#white').is(':visible')) {
      $('#white, .text-field').fadeOut("100ms", function() {
        $('#thankYou, .glyphicon-home').fadeIn("1000ms");
      });
    };
    $("#userInput").val('');
  };
});

$(document).on("click", ".glyphicon-home", function() {
  $("#thankYou, .glyphicon-home").fadeOut("500ms", function() {
    $(".begin-button, .call-to-action, .intro-text-area").show();
  });
});

$(document).keypress(function(e) {
  if (e.which == 13) {
  	var current_time = new Date($.now());
  	var colour = $(".colourTag:visible").text();
  	var inputValue = $('input#userInput').val();
    var dataString = 'Current Time: '+ current_time + 'Colour: ' + colour + "Input: " + inputValue;

    $.post("survey_inputs.php", {
            colour: colour,
            inputValue: inputValue,
            current_time: current_time
        });
  	return false;
    };
});
