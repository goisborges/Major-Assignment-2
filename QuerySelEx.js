//create a function to change the page background color to fucsia
function changeBackgroundColor() {
    document.body.style.backgroundColor = "fuchsia";
}

//create a function to change the color of the h1 element class title to green and change the text to "Welcome to Georgian College"
function changeTitle() {
    var title = document.getElementsByClassName("title");
    title[0].style.color = "green";
    title[0].innerHTML = "Welcome to Georgian College";
}

function insertCourses(){

    var ulFromList = document.querySelector("#course-list ul");
    console.log(ulFromList);
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
    newCourse.textContent = "This Is a New Course";
    newCourse.className = "newCourse";
    document.querySelector("#course-list ul").appendChild(newCourse);

  
    
}

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

var getDeleteButtons = 
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

