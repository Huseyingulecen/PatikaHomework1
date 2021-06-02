var name = prompt("Adiniz nedir ?");
document.getElementById("userName").innerText = name








function getDate()
{
    var date = new Date();
    console.log(date);  // tarihi ayrintili yazdiriyor 

    var justdate = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var day = date.getDay();

    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();


    justdate = justdate>=10 ? justdate.toString() : "0"+justdate.toString();
    month = month>=10 ? month.toString() : "0"+month.toString();


    hour = hour >= 10 ? hour.toString() : "0"+hour.toString();
    minutes = minutes >= 10 ? minutes.toString() : "0"+minutes.toString();
    seconds = seconds >= 10 ? seconds.toString() : "0"+seconds.toString();


    if(day ==1)
    {
        day = "Pazartesi";
    }else if(day ==2)
    {
       day = "Sali";
    }else if(day ==3)
    {
        day = "Carsamba";
    }else if(day ==4)
    {
        day = "Persembe";
    }else if(day ==5)
    {
        day = "Cuma";
    }else if(day ==6)
    {
        day = "Cumartesi";
    }else if(day ==7)
    {
        day = "Pazar";  
    }   


//console.log(justdate);
/// 2 haziran 2021  gun     Saat: dakika : saniye 
/*
console.log("################")
console.log(date.getDate());  // ayin kaci oldugu 
console.log(date.getMonth());  // ay 
console.log(date.getFullYear()); // yil geliyor 
console.log(date.getDay());  // gunler rakam olarak geliyor 
*/


    console.log(date.getHours());   // saat 
    console.log(date.getMinutes()); // dakika 
    console.log(date.getSeconds());  //saniye


    console.log(hour);
    console.log(minutes);
    console.log(seconds);



    //console.log(justdate +"."+month+ "."+ year.toString() + "" + "   "+ day.toString()+"   "+hour+":"+minutes+":"+seconds);

    var dateAndTime = justdate +"."+month+ "."+ year.toString() + "" + "   "+ day.toString()+"   "+hour+":"+minutes+":"+seconds;

    document.getElementById("myClock").innerText = dateAndTime;
    document.getElementById("myClock").textContent = dateAndTime;

    setTimeout(getDate, 1000)

}

getDate();




