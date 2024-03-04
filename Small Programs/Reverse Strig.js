let str = "HELLO MY WORLD";

  let newstr = str.split(" ").map(function(value){

      return value.split("").reverse().join("");
  })

    console.log(newstr.join(" "))



    //First take string and devide it into words//
    //then splic it tot words like this  HELLO to H E L L O
    //then reverse it O L L E H
    //then join them they will became words OLLEH
    //JOin them again it will be sentence again