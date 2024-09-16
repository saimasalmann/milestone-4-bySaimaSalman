var form = document.getElementById("res-form");
var generatedResume = document.getElementById("resume");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var resumeContent = "\n    <h2> <b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\"> ".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Contact Number:</b><span contenteditable=\"true\">").concat(contact, "</span></p>\n    \n    <h3>Education:</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    \n    <h3>Experience:</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills:</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n\n  ");
    if (generatedResume) {
        generatedResume.innerHTML = resumeContent;
    }
    else {
        console.error(" The Resume display is Unavailable.");
    }
    ;
});
