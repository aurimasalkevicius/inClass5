// ADD NEW ITEM TO END OF LIST
var div = document.getElementById("page");
var li = document.createElement("li");
li.appendChild(document.createTextNode("cream"));
div.append(li);

// ADD NEW ITEM START OF LIST

console.log(div);
li = document.createElement("li");
li.appendChild(document.createTextNode("kale"));

var list = document.getElementsByTagName("ul")[0];
console.log(list);
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
console.log(element)


//var ele = div.nextElementSibling.nextElementSibling;

console.log(div);
element.innerHTML += "<span>" + numOfItems + "</span>";