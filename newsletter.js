const dropdownbtn = document.getElementById("dropdownbtn");
const dropdownbtn2 = document.getElementById("dropdownbtn2");
const dropdownbtn3 = document.getElementById("dropdownbtn3");
const dropdownbtn4 = document.getElementById("dropdownbtn4");
const cheapencontent = document.getElementById("cheap-content");
const shorecontent = document.getElementById("shore-content");
const electriccontent = document.getElementById('electric-content');
const developcontent = document.getElementById('develop-content');
dropdownbtn.addEventListener('click', function(){
    cheapencontent.scrollIntoView({behavior: 'smooth'});
});
dropdownbtn2.addEventListener('click', function(){
    shorecontent.scrollIntoView({behavior: 'smooth'});
});
dropdownbtn3.addEventListener('click', function(){
    electriccontent.scrollIntoView({behavior: 'smooth'});
});
dropdownbtn4.addEventListener('click', function(){
    developcontent.scrollIntoView({behavior: 'smooth'});
});