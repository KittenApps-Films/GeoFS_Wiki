//var content = "It worked!"
//var one = "one"
import { dictionary } from './data.js'

var url_string = window.location.href; 
var url = new URL(url_string);
var file = url.searchParams.get("f");
var doc = document.getElementById("content");

var found = false

Object.keys(dictionary).forEach(function(key) {
  if (file == key) {
    doc.innerHTML = dictionary[key]
    found = true
    return; 
  }
})
if (found === false) {
  doc.innerHTML = "Page doesn't exist"
}
