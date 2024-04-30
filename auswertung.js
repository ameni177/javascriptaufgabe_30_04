   
    function auswerten()
    {
   console.log("ameni");
      var punktzahl = prompt("give a number");
      if (punktzahl > 90) {
        console.log("sehr gut");
      } else if (punktzahl >= 80 && punktzahl <= 90) {
        console.log("gut");
      } else if (punktzahl >= 70 && punktzahl < 80) {
        console.log("befriedigend");
      } else if (punktzahl >= 60 && punktzahl < 70) {
        console.log("ausreichend");
      } else if (punktzahl < 60) {
        console.log("nicht bestanden");
      }
    }
    auswerten();