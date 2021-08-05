// ADD NEW ITEM TO END OF LIST

var div = document.getElementById("page");
var li = document.createElement("li");
li.appendChild(document.createTextNode("cream"));

// ADD NEW ITEM START OF LIST

// Could not figure out how to add this item to the top of the list without id
// it looks like the selectElementsById returns HTMLcollection which does not 
// have append() method.

// Could you please let me know what is the code snippet that I am missing

li = document.createElement("li");
li.appendChild(document.createTextNode("kale"));
var list = document.getElementsByTagName("ul")[0];
list.append(li);

// ADD A CLASS OF COOL TO ALL LIST ITEMS

var elm = document.getElementsByTagName('li')
var length = elm.length;
for (var i = 0; i < length; i++) {
    elm[i].className = elm[i].className + "cool";
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

var numOfItems = document.querySelectorAll("li").length
var element = document.querySelectorAll("h2")[0];
element.innerHTML += "<span>" + numOfItems + "</span>";