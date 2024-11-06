// Function to generate resume preview
function generateResume() {
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;

    // Populate resume content
    const resumeContent = `
        <div>
            <h1>${name}</h1>
            <p>${contact} | ${email}</p>
            <hr>
            <h3>Education</h3>
            <p>${education.replace(/\n/g, "<br>")}</p>
            <h3>Experience</h3>
            <p>${experience.replace(/\n/g, "<br>")}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
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

        // Adjusting dimensions for A4 size PDF
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("resume.pdf");
    });
}
