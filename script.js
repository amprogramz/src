/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
    
/** 
 @function - handleConversion() 
 @description - converts user input into hex or dex.
 
 @param - 
*/
function handleConversion()
{
  var user_input = document.getElementById("input_num").value;
  var num;
  
  if(document.getElementById("binary").checked)
  {
    num = convertBase(user_input, 2);
    
    setHTML("converted_txt", num);
  }
  else if(document.getElementById("hexidecimal").checked)
  {
    num = convertBase(user_input, 16);
    setHTML("converted_txt", num);
  }
  else
  {
    setHTML("converted_txt", "Pick a conversion type.");
  }
}

function convertBase(num, base)
{
  var converted = parseInt(num, 10).toString(base);
  return converted;
}

function initAJAX()
{
  var ajaxObject;
  try
  {
    ajaxObject = new XMLHttpRequest();
    console.log("AJAX init...");
  }
  catch(e)
  {
    
  }
  return ajaxObject;
}


function getHTML_Template(fd)
{
  var ajax = initAJAX();
  console.log("Starting ajax. fd=" + fd);
  ajax.onreadystatechange = function()
  {
    if (this.readyState == 4 && this.status == 200)
    {
        console.log("Appending elm to document.");
        document.getElementById(fd).innerHTML = this.getAllResponseHeaders;
        //document.write(toString(this.responseText));
    }
  };
  
  console.log("Ajax get.");
  ajax.open("GET", "template.html", true);
  console.log("ajax send.");
  ajax.send();
}

function setHTML(id, text)
{
  document.getElementById(id).innerHTML = text;
}


function getTemplate(id, class_name)
{
  var header = document.getElementsByClassName(class_name)[0];
  var header_coppy = header.content.cloneNode(true);
  document.getElementById(id).appendChild(header_coppy);  
}

function getHeader()
{
  getTemplate("headerThing", "header_template")
}

function getFooter()
{
  getTemplate("foot", "footer_template")
}

/* This function is called  on the mouseover event
obj is the parameter to know what object to change */ 
function mOver(obj) {
  /* innerHTML puts the text in inner object */
  obj.innerHTML = "Thank You"
}


/* This function is called  on the mouseout event
obj is the parameter to know what object to change */ 
function mOut(obj) {
   /* innerHTML puts the text in inner object */
  obj.innerHTML = "Mouse Over Me"
}
