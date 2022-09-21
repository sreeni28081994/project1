function check() {
  var pic = document.getElementById("pic").value;
  var current = document.getElementById("current").value;
  var schools = document.getElementById("school").value;
  var bedrooms = document.getElementById("bedrooms").value;
  var loc = document.getElementById("loc").value;

  if (
    pic == "" ||
    current == "" ||
    schools == "" ||
    bedrooms == " " ||
    loc == ""
  ) {
    alert("please fill All mandatory fields");
    return false;
  }
}
