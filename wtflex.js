// JavaScript Document
// lingua.js



// Commonly used vars
var sDblQuoteChar = String.fromCharCode(34);
var sSnglQuote = String.fromCharCode(39);
var sSnglQuote2 = sSnglQuote + sSnglQuote;
var sSnglQuote3 = sSnglQuote + sSnglQuote + sSnglQuote;

var sNL = "\n";
var sNL2 = "\n\n";

var gIsMobile = false;


 


// Let's go!
// window.onload = initAll;





function initAll()
{
	//window.alert('In initAll');

	if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
            || navigator.userAgent.match(/Opera Mini/i)
            || navigator.userAgent.match(/IEMobile/i)
            )
		{gIsMobile = true;}

	if (gIsMobile) 
	{
		window.location.href = 'moab/index.html';
	};
}









function handle_btn_Login()
{     // window.alert('In handle_btn_Login');
      var bOK = false;

      var tEmail = document.getElementById("email").value;
      var tPassword = document.getElementById("password").value;

      // window.alert('email: ' + tEmail);
      // window.alert('PW: ' + tPassword);

      var iEmailLen = tEmail.length;
      var iPWLen = tPassword.length;

      // Check for blanks
      var tMsg = '';

      if (iEmailLen < 1)
      {
            tMsg = 'Please enter an email address!';
      }
      
      if (iPWLen < 1)
      {
            tMsg = 'Please enter a password!';
      }

      if (tMsg > '')
      {
            window.alert('tMsg = ' + tMsg);
      }
      


      // Check for data entry errors
      var tMsg = '';
      iFound = 0;

      //var iFound = atUsername.indexOf(tEmail);



      var iFound = iz_in(atUsername, tEmail);
      //window.alert('iz_in found is ' + iFound);

      if (iFound<0)
      {
            tMsg = 'Invalid email address!';
            window.alert(tMsg);
      }
      else
      {
            thePW = atPW[iFound]
            if (thePW == tPassword)
            {
                  // all is cool
                  //window.alert('we are cool!');
                  bOK = true;

            }
            else
            {
                  // we are not cool!
                  // window.alert('we are NOT cool!');
            }
      }


       
      
     

     if(bOK)
     {
            //re-route to personal site
            if(gIsMobile)
            {
                  //window.alert('we are mobile!');
                  window.location.href = 'moab/home.html';
            }
            else
            {
                  //window.alert('we are NOT mobile!');
                  window.location.href = 'home.html';  
            }

     }





} // function handle_btn_Login()









function iz_in(arr, obj)
{
      var retValue = -1;


      if(false)
      {
            window.alert('usernames are ' + arr);
            window.alert('email is ' + obj);
            window.alert('length is ' + arr.length);  

      }
     
      for(var i=0; i<arr.length; i++)
      {
            if (arr[i] == obj)
            {
                  retValue = i;
            }
      }

      return retValue;
}





















