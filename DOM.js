console.dir(window);  //prints window object created by browser
console.dir(window.document.body);   //prints body object
console.log(window.document.body);   //prints the body tag code

let heading1 = document.getElementById("heading1");   //returns an element with specified id
console.dir(heading1);
console.log(heading1);

let paragraphs = document.getElementsByClassName("para");  //returns an HTML collection with specified class name
console.dir(paragraphs);  //shows the complete HTML list
console.dir(paragraphs[0]);
console.log(paragraphs[0]);

// paragraphs[0].textContent = "HELLO WORLD"   //this changes the text of first paragraph in the collection

//the following function of document object is used to get any kind of HTML(tag,class,id). It will automatically match

//to search for classes or id start the specified value with a "." or "#", respectively.
//Note: querySelectorAll returns a Node List

let para = document.querySelector("p");    //It will return the first tag present with the specified value
console.dir(para);
console.log(para);


let all_paras = document.querySelectorAll(".p");  //It returns all the classes present with the specified value
console.dir(all_paras);
console.log(all_paras[0]);

let all_Headings = document.querySelectorAll("#heading1"); //returns all the tags with the given id
console.dir(all_Headings);
console.log(all_Headings[0]);

//Nodes in DOM
/*
There are 3 types of nodes in DOM:
1) #text
2) #comment
3) element
*/


//DOM Manipulation

console.log(para.tagName);

let bodyTag = document.querySelector("body");
console.log(bodyTag.firstChild);   //prints #text , because there are spaces after the body opening tag which is considered as text and becomes a node.
console.log(bodyTag.firstElementChild);

let second_Heading = document.querySelector("h2");
console.dir(second_Heading.firstChild); //prints #comment because there is a comment right after the opening tag
console.log(second_Heading.firstElementChild);

//Creating a new element and adding it to frontend

let body_Tag = document.querySelector("body");

let my_Button = document.createElement("Button");
my_Button.innerText = "Click me";
body_Tag.prepend(my_Button);         //prepend adds at the start of the node(inside)
                                    //append adds at the end of the node(inside)
                                    //before add at the start of the node(outside)
                                    //after adds at end of the node(outside)

my_Button.style.color = "white";
my_Button.style.backgroundColor = "red";

// let el = bodyTag.firstElementChild;
// console.log(el.tagName);
// el.style.backgroundColor = "magenta";


//appending a class to an element

let tag = document.querySelector(".para");
let class_Name = tag.className;
console.log(class_Name);
cls = ["para1"]
tag.classList.add(...cls);