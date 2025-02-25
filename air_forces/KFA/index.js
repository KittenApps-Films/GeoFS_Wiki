//var content = "It worked!"
//var one = "one"
export dictionary={ 
     home:"It worked!",
     one:"one",
};

var url_string = window.location.href; 
var url = new URL(url_string);
var file = url.searchParams.get("f");
var doc = document.getElementById("content");

if (file == "one") {
  doc.innerHTML = dictionary.one
} else {
  doc.innerHTML = dictionary.home
}
