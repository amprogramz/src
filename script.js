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
  @function setHtml Sets the html using the DOM.
*/
function setHTML(id, text)
{
  document.getElementById(id).innerHTML = text;
}

/**
  @function getHTML Retrieves html attributes from another file and 
            implements them localy using AJAX.
            
  @param local_item The local elem you wish to set the HTML.
  @param external_file_item The file you wish to coppy.
*/
function getHTML(local_item, external_file_item)
{
  //$.noConflict();
  $(document).ready(function(){
    $(local_item).load(external_file_item);
  });
}

function animateLogo()
{
  $(document).ready(function(){
    $("#logo").animate({width:"100%"}, "1000").animate({height:"40%"}, "1000");
  });
}