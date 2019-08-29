///*
document.write('\
<template class="header_template">\
  <div class="logosec">\
    <img src="https://cdn.glitch.com/8054e39f-4be7-4727-bc4e-c1bdcf586881%2Flogo_4_with_slogan.png?v=1566767741084"  \
         width="40%" alt="AMProgramz TM 2018" id="logo"> \
\
    <!-- Navbar start --> \
    <div class="navbar">\
      <a href="index.html">Home</a>\
      <a href="about-me.html">About Me</a>\
\
      <div class="dropdown">\
        <button class="dropbtn">CS\
        </button>\
        <div class="dropdown-content">\
          <a href="topic1.html">Topic 1</a>\
        </div>\
      </div> \
        <div class="dropdown">\
        <button class="dropbtn">More\
        </button>\
        <div class="dropdown-content">\
          <a href="resources.html">Resources</a>\
          <a href="edit-page-help.html">Web Design Help</a>\
          <a href="credits.html">Credits</a>\
        </div>\
      </div>   \
    </div><!-- end of nav bar menu-->\
  </div><!-- end of Header -->\
</template>\
\
<template class="footer_template">\
<div class="footer">\
  <img src="https://cdn.glitch.com/8054e39f-4be7-4727-bc4e-c1bdcf586881%2Flogo_4_with_slogan.png?v=1566767741084"  \
       width="10%" alt="AMProgramz TM 2018"> \
  <div>\
    <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" id="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.\
  </div>\
</div>\
</template>');
//*/
const fs = require('fs')
var text = "";
fs.readFile('template.txt', 'utf-8', (err,data) => {
  if (err) throw err;
  
  document.write(data);
});

document.write(text);

