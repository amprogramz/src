/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */


function getTemplate(id, class_name)
{
  var header = document.getElementsByClassName(class_name)[0];
  var header_coppy = header.content.cloneNode(true);
  document.getElementById(id).appendChild(header_coppy);  
}

function getHeader()
{
  getTemplate("header", "header_template")
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
