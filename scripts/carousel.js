$(document).ready(function () {
  $("#carousel1").removeClass("hidden");
  $("#next").on("click", function () {
    if ($("#carousel1").is(":visible")) {
      $("#carousel1").addClass("hidden");
      $("#carousel2").removeClass("hidden");
    } else if ($("#carousel2").is(":visible")) {
      $("#carousel2").addClass("hidden");
      $("#carousel3").removeClass("hidden");
    } else if ($("#carousel3").is(":visible")) {
      $("#carousel3").addClass("hidden");
      $("#carousel1").removeClass("hidden");
    }
  });

  $("#glacier1").removeClass("hidden");
  $("#nextglacier").on("click", function () {
    if ($("#glacier1").is(":visible")) {
      $("#glacier1").addClass("hidden");
      $("#glacier2").removeClass("hidden");
    } else if ($("#glacier2").is(":visible")) {
      $("#glacier2").addClass("hidden");
      $("#glacier3").removeClass("hidden");
    } else if ($("#glacier3").is(":visible")) {
      $("#glacier3").addClass("hidden");
      $("#glacier1").removeClass("hidden");
    }
  });

  $("#lagoon1").removeClass("hidden");
  $("#nextlagoon").on("click", function () {
    if ($("#lagoon1").is(":visible")) {
      $("#lagoon1").addClass("hidden");
      $("#lagoon2").removeClass("hidden");
    } else if ($("#lagoon2").is(":visible")) {
      $("#lagoon2").addClass("hidden");
      $("#lagoon3").removeClass("hidden");
    } else if ($("#lagoon3").is(":visible")) {
      $("#lagoon3").addClass("hidden");
      $("#lagoon1").removeClass("hidden");
    }
  });

  $("#volcano1").removeClass("hidden");
  $("#nextvolcano").on("click", function () {
    if ($("#volcano1").is(":visible")) {
      $("#volcano1").addClass("hidden");
      $("#volcano2").removeClass("hidden");
    } else if ($("#volcano2").is(":visible")) {
      $("#volcano2").addClass("hidden");
      $("#volcano3").removeClass("hidden");
    } else if ($("#volcano3").is(":visible")) {
      $("#volcano3").addClass("hidden");
      $("#volcano1").removeClass("hidden");
    }
  });
});