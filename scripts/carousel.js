$(document).ready(function () {
  $("#carousel1").removeClass("hide");
  $("#next").on("click", function () {
    if ($("#carousel1").is(":visible")) {
      $("#carousel1").addClass("hide");
      $("#carousel2").removeClass("hide");
    } else if ($("#carousel2").is(":visible")) {
      $("#carousel2").addClass("hide");
      $("#carousel3").removeClass("hide");
    } else if ($("#carousel3").is(":visible")) {
      $("#carousel3").addClass("hide");
      $("#carousel1").removeClass("hide");
    }
  });

  $("#glacier1").removeClass("hide");
  $("#nextglacier").on("click", function () {
    if ($("#glacier1").is(":visible")) {
      $("#glacier1").addClass("hide");
      $("#glacier2").removeClass("hide");
    } else if ($("#glacier2").is(":visible")) {
      $("#glacier2").addClass("hide");
      $("#glacier3").removeClass("hide");
    } else if ($("#glacier3").is(":visible")) {
      $("#glacier3").addClass("hide");
      $("#glacier1").removeClass("hide");
    }
  });

  $("#lagoon1").removeClass("hide");
  $("#nextlagoon").on("click", function () {
    if ($("#lagoon1").is(":visible")) {
      $("#lagoon1").addClass("hide");
      $("#lagoon2").removeClass("hide");
    } else if ($("#lagoon2").is(":visible")) {
      $("#lagoon2").addClass("hide");
      $("#lagoon3").removeClass("hide");
    } else if ($("#lagoon3").is(":visible")) {
      $("#lagoon3").addClass("hide");
      $("#lagoon1").removeClass("hide");
    }
  });

  $("#volcano1").removeClass("hide");
  $("#nextvolcano").on("click", function () {
    if ($("#volcano1").is(":visible")) {
      $("#volcano1").addClass("hide");
      $("#volcano2").removeClass("hide");
    } else if ($("#volcano2").is(":visible")) {
      $("#volcano2").addClass("hide");
      $("#volcano3").removeClass("hide");
    } else if ($("#volcano3").is(":visible")) {
      $("#volcano3").addClass("hide");
      $("#volcano1").removeClass("hide");
    }
  });
});