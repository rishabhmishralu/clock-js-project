setInterval( () => {
    const date = new Date()

     let hr=date.getHours();
     let mi=date.getMinutes();
     let sec=date.getSeconds();
     let session=document.querySelector("#session")
    //  let session=document.querySelector('#session').textContent
     if(hr<10){
        hr="0"+hr
     }
      else if(mi<10){
        mi="0"+mi
     }
     else if(sec<10){
        sec="0"+sec
     }


     if(hr>=12){
      document.querySelector("#session").textContent = "PM"
     
  }
  else{
      document.querySelector("#session").textContent = "AM"

  }
  if(hr>12){
   hr = hr-12
  }

   document.querySelector('#hour').textContent=hr;
   document.querySelector('#minute').textContent=mi;
   document.querySelector('#second').textContent=sec;



}, 1000 )

 
     document.querySelector('.main-4').addEventListener('click',(e)=>{
      let text1=document.querySelector('#text-input').value;
      let   text2=document.querySelector('#text-input-2').value;
      let  text3=document.querySelector('#text-input-3').value;
      let text4=document.querySelector('#text-input-4').value;

    
      document.querySelector(".wakeData").textContent=`Wake Up Time : ${text1}`;
      document.querySelector(".lunchData").textContent=`Lunch Time : ${text2}`;
      document.querySelector(".napData").textContent=`Nap Time : ${text3}`;
      document.querySelector(".nightData").textContent=`Night Time : ${text4}`;


      let wakeArr = text1.split(" ")
      let lunchArr = text2.split(" ")
      let napArr = text3.split(" ")
      let sleepArr = text4.split(" ")



      console.log(wakeArr);
      console.log(lunchArr);
      console.log(napArr);
      console.log(sleepArr);
      

     let hr=document.querySelector('#hour').textContent
     let session=document.querySelector('#session').textContent
    // // console.log(ph);
    // console.log(wakeArr);
     if(wakeArr[0]==hr && wakeArr[1]==session){
        console.log("if lunch");
      document.querySelector('.image').style.backgroundImage="url(./images/goodmorning.png)"
     document.querySelector('.card-2').textContent="GRAB SOME HEALTHY BREAKFAST!!!"
    document.querySelector('.main-3').textContent="GOOD MORNING...."
    }
     else if (lunchArr[0]==hr && lunchArr[1]==session){
      document.querySelector('.image').style.backgroundImage="url(./images/lunchtym.jpg)"
      document.querySelector('.card-2').textContent="LET'S HAVE SOME LUNCH !!"
       document.querySelector('.main-3').textContent="GOOD AFTERNOON !! TAKE SOME SLEEP"
     }
    else if  (napArr[0]==hr && napArr[1]==session) {
      document.querySelector('.image').style.backgroundImage="url(./images/lunch_image.jpg)"
      document.querySelector('.card-2').textContent="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
      document.querySelector('.main-3').textContent="GOOD EVENING !!"
       }
       else if  (sleepArr[0]==hr && sleepArr[1]==session)
     {
       document.querySelector('.main-3').textContent="GOOD NIGHT !!"
       document.querySelector('.image').style.backgroundImage="url(./images/goodnight_image.jpg)"
       document.querySelector('.card-2').textContent="CLOSE YOUR EYES AND GO TO SLEEP"
       }

    })



    function msg(){
      const newtime = new Date()

      let hr=newtime.getHours();
      console.log(hr);

         if(hr>=4&&hr<12){
      console.log("good morning");
      document.querySelector('.image').style.backgroundImage="url(./images/goodmorning.png)"
      document.querySelector(".card-2").textContent="GRAB SOME HEALTHY BREAKFAST!!!"
     }
     else if(hr>=12&&hr<16){
            console.log("take some lunch")
            document.querySelector('.image').style.backgroundImage="url(./images/lunchtym.jpg)"
            document.querySelector(".card-2").textContent="LET'S HAVE SOME LUNCH !!"
     }
      else if(hr>=16 && hr<20){
      console.log("take nape");
      document.querySelector('.image').style.backgroundImage="url(./images/lunch_image.jpg)"
      document.querySelector(".card-2").textContent="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
     }
 else 
      {
          document.querySelector('.image').style.backgroundImage="url(./images/goodnight_image.jpg)"
      document.querySelector(".card-2").textContent="CLOSE YOUR EYES AND GO TO SLEEP"
     }
    



    }

    msg();




