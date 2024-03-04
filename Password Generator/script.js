    const passwordbox = document.getElementById("Password");
    const length = 12;

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbols = "!@#$%^&*(){}[]-=~";

   
    const allchar =  uppercase + lowercase + symbols + number;

    function generatepassword (){
        let Password = "";
        Password +=  uppercase[Math.floor(Math.random() * uppercase.length)];
        Password +=  lowercase[Math.floor(Math.random() * lowercase.length)];
        Password +=  number[Math.floor(Math.random() * number.length)];
        Password +=  symbols[Math.floor(Math.random() * symbols.length)];

        while(length > Password.length){
            Password +=  allchar[Math.floor(Math.random() * allchar.length)];
        }
        passwordbox.value = Password;
    } 
   function copypass(){
    passwordbox.select();
    document.execCommand("copy");
   }

      