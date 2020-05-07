

// Husk den ekstra del
var modal = document.getElementById('id04');
// Get the modal
var modal = document.getElementById('id01');

var modal = document.getElementById('id02');

var modal = document.getElementById('id03');


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function check(form)
{

if(form.userid.value == "multi" && form.pwd.value == "2020")
{
  window.open("FM.html");
}
else
{
  alert("Error Password or Username")
  return false;
}
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
