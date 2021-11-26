//"COMP 1073: Client-Side JavaScript"
//"Assignment 2"
//Team 5
//Members:Jennifer Mendez Chan, Marcos De Gois Borgues, Alex Victor Marques Moreira, Amra Mohamed Akram"


//Question 1
//A)Create a function to change the page background color to fucsia

//Event listener
document.getElementById("changeBackgroundColor").addEventListener("click", changeBackgroundColor);

//Function to change background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = "fuchsia";
}

//B)Create a function to change the color of the h1 element class title to green and change the text to "Welcome to Georgian College"

//Event listener
document.getElementById("changeTitle").addEventListener("click", changeTitle);

//Function to change title
function changeTitle() {
    var title = document.getElementsByClassName("title");
    title[0].style.color = "green";
    title[0].innerHTML = "Welcome to Georgian College";
}

//C)Inside “<div id="course-list">” create and insert two ordered list displaying two more coursesIOS-1 &IOS-2.
// You also have to create classes for these courses. The newly added course & delete button should have a 
//different Text color(yellow), font size (40), font family (Algerian). With both new courses append a text
//” This a new course”

	//Add first course
    var li = document.createElement("li");
    var courseSpan = document.createElement("span");
    var deleteButton = document.createElement("span");
	var ulFromList = document.querySelector("#course-list ul");	
	
	//Add text inside elements
    li.appendChild(courseSpan).innerHTML="IOS-1";
    li.appendChild(deleteButton).innerHTML="delete";
	ulFromList.appendChild(li);
	
	//Add classes
	deleteButton.className = "deleteNew";
    courseSpan.className = "nameNew"

	//Append text
	li.appendChild(courseSpan).textContent+="This is a new course";



	//Add second course
    var li = document.createElement("li");
    var courseSpan = document.createElement("span");
    var deleteButton = document.createElement("span");
	var ulFromList = document.querySelector("#course-list ul");
	
	//Add text inside elements
    li.appendChild(courseSpan).innerHTML="IOS-2";
    li.appendChild(deleteButton).innerHTML="delete";
	ulFromList.appendChild(li);
	
	//Add classes
	deleteButton.className = "deleteNew";
    courseSpan.className = "nameNew"

	//Append text
	li.appendChild(courseSpan).textContent+="This is a new course";
	
	//functioning delete buttons
	

	//Add second course
/*  var node = document.createElement("li");
  var textnode = document.createTextNode("IOS-2");
  node.appendChild(textnode);
  document.querySelector("#course-list ul").appendChild(node);
*/

 // ul.appendChild(li);
/*    var ulFromList = document.querySelector("#course-list ul");
    //store text inside the textarea in a variable
    var textArea = document.getElementById("course-name").value;

    var li = document.createElement("li");
    var courseSpan = document.createElement("span");
    var deleteButton = document.createElement("span");
    li.appendChild(courseSpan);
    li.appendChild(deleteButton);

    //insert text inside the tags
    courseSpan.textContent = textArea;
    deleteButton.textContent = "delete";
    deleteButton.className = "deleteNew";
    courseSpan.className = "nameNew";

    //li.appendChild(document.createTextNode(textArea));
    ulFromList.appendChild(li);
    
    //append a text that says "new course"
    var newCourse = document.createElement("p");
	newCourse.innerHTML="IOS-1";
    newCourse.textContent = "This Is a New Course";
    newCourse.className = "newCourse";
    document.querySelector("#course-list ul").appendChild(newCourse);
    console.log(ulFromList);
  */

// var newTitles = document.getElementsByClassName("title");
// Array.from(newTitles).forEach(function(element){
//     console.log(element);
// }
// );

// var getElementFromCSS = document.querySelector("#wrapper");
// console.log(getElementFromCSS);

// var getListElementFromCourseList = document.querySelectorAll("#course-list ul");
// console.log(getListElementFromCourseList);

// var test3 = document.querySelector("#course-list h2");
// console.log(test3);
// test3.addEventListener("click", function(e){
//     console.log(e);
// });

/*var getDeleteButtons = 
    document.getElementsByClassName("delete");
    console.log(getDeleteButtons);
    //create an Array from the getDeleteButtons variable
    var deleteButtons = Array.from(getDeleteButtons);
    deleteButtons.forEach(function(element){
        element.addEventListener("click", function(e){
            e.target.parentElement.remove();
        });
    });
    



var addForm = document.forms["add-course"];
addForm.addEventListener("submit", function(e){
    e.preventDefault();
    insertCourses();
});
*/


//Question 2
//A) Using DOM, add a link (like www.yahoo.com) to the source of text after Paragraph tag in
//given HTML File(attached).
	//anchor
	
    var a = document.createElement("a");
	const target = document.querySelector("#changeBackgroundColor");
	target.parentNode.insertBefore(a, target);

	
	
	//Add text and link inside elements
    a.innerHTML="Click Me";
	a.setAttribute("href", "https://www.youtube.com/watch?v=QH2-TGUlwu4")
	a.className="name";
