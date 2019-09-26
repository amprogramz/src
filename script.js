/*     
/** 
 @function - handleConversion() 
 @description - converts user input into hex or dex.
*/
function handleConversion()
{
  var user_input = document.getElementById("input_num").value;
  var convert_from = -1;
  var convert_to = -1;
  var num;
  
  if (document.getElementById("decimal_from").checked)
  {
    convert_from = 10;
  }
  else if(document.getElementById("binary_from").checked)
  {
    convert_from = 2;
  }
  else if(document.getElementById("hexidecimal_from").checked)
  {
    convert_from = 16;
  }
  
  if (document.getElementById("decimal").checked)
  {
    convert_to = 10;
  }
  else if(document.getElementById("binary").checked)
  {
    convert_to = 2;
  }
  else if(document.getElementById("hexidecimal").checked)
  {
    convert_to = 16;
  }
  
  if (convert_from != -1 && convert_to != -1)
  {
    num = convertBase(user_input, convert_from, convert_to);
    setHTML("converted_txt", num);
  }
  else
  {
    setHTML("converted_text", "select conversions")
  }
}

/**
  @function convertBase Converts a base 10 number to any other base.
  
  @returns the converted value.
 */
function convertBase(num, from_base, to_base)
{
  var converted = parseInt(num, from_base).toString(to_base);
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
{ $(document).load(external_file_item)
             .append('body');
                //.append('body');
  //$.noConflict();
  //$(document).ready(function(){
   // $(local_item).load(external_file_item);
  //});
}

function animateLogo()
{
  $(document).ready(function(){
    $("#logo").animate({width:"100%"}, "10000").animate({height:"40%"}, "10000");
  });
}