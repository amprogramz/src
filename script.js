/*     
/** 
 @function - handleConversion() 
 @description - converts user input into hex or dex.
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

/**
  @function convertBase Converts a base 10 number to any other base.
  
  @returns the converted value.
 */
function convertBase(num, base)
{
  var converted = parseInt(num, 10).toString(base);
  return converted;
}

/**
  @function initAJAX Initialize the AJAZ object.
  
  @returns The AJAX object if possible.
*/
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

/**
@function getHTML_Template Copys htm to another doccument.
 */
function getHTML_Template(fd)
{
  var ajax =  initAJAX();

  ajax.onreadystatechange = function()
  {
    if (this.readyState == 4 && this.status == 200)
    {
        var response, htmlDoc;
        
        htmlDoc = this.responseText;
        //response = htmlDoc.getElementByClassName("logosec");
        document.getElementById(fd).innerHTML = htmlDoc;
        getHeader();
        getFooter();
    }
  };
  
  ajax.open("GET", "template.html", true);
  ajax.send();  
}

/**
  @function setHtml Sets the html using the DOM.
*/
function setHTML(id, text)
{
  document.getElementById(id).innerHTML = text;
}

/**
  @function getTemplate Coppys html from witin a template 
                        to use elsewhere.  
*/
/*function getTemplate(id, class_name)
{
  var header, header_coppy;
  header = document.getElementsByClassName(class_name)[0];
  header_coppy = header[0].content.cloneNode(true);
  document.getElementById(id).appendChild(header_coppy);  
}
*/
/**
  @function getHeader Calls getTemplate to retrieve the header.
*/
//function getHeader()
//{
  //getTemplate("header", "header_template")
  $(document).ready(function(){
    $("#header").load("template.html .logosec");
  });
//}

/**
  @function getfooter Calls getTemplate to retrieve the footer.
*/
function getFooter()
{
  getTemplate("foot", "footer_template")
}
