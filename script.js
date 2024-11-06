// Function to generate resume preview
function generateResume() {
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const profile = document.getElementById("profile").value;
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value;

    // Populate resume content
    const resumeContent = `
        <div>
            <h1>${name}</h1>
            <p>${contact} | ${email}</p>
            <hr>
            <div class="profile-section">
                <h2>Professional Profile</h2>
                <p>${profile}</p>
            </div>
            <div class="experience-section">
                <h2>Work Experience</h2>
                <p>${experience.replace(/\n/g, "<br>")}</p>
            </div>
            <div class="education-section">
                <h2>Education</h2>
                <p>${education.replace(/\n/g, "<br>")}</p>
            </div>
            <div class="skills-section">
                <h2>Skills</h2>
                <p>${skills}</p>
            </div>
        </div>
    `;

    // Update preview section
    document.getElementById("resumeContent").innerHTML = resumeContent;
    document.querySelector(".preview-section").style.display = "block";
}

// Function to download resume as PDF
function downloadPDF() {
    const content = document.getElementById("resumeContent");

    html2canvas(content, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("resume.pdf");
    }).catch(error => {
        console.error("Error generating PDF:", error);
        alert("Failed to generate PDF. Check console for details.");
    });
}


var doc = new jsPDF();

// We'll make our own renderer to skip this editor
var specialElementHandlers = {
	'#editor': function(element, renderer){
		return true;
	}
};

// All units are in the set measurement for the document
// This can be changed to "pt" (points), "mm" (Default), "cm", "in"
doc.fromHTML($('body').get(0), 15, 15, {
	'width': 170, 
	'elementHandlers': specialElementHandlers
});
