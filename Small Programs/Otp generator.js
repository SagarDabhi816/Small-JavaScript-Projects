let otp = "";
let otp_length = 4;

 
for(i=1;i<=otp_length;i++)
    {  
      //Get otp as number 
      otp = otp * 11 + Math.floor(Math.random() * 10);
      
      // Get otp as a string 
      //otp += Math.floor(Math.random() * 10);
      
    }

    console.log(otp);