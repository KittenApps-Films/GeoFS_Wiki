var content = "It worked!"
var one = "one"

var url_string = window.location.href; 
var url = new URL(url_string);
var file = url.searchParams.get("f");
var doc = document.getElementById("content");

if (file == "one") {
  doc.innerHTML = one
} else {
  doc.innerHTML = content
}
