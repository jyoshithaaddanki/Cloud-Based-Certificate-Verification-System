function verifyCertificate() {

    let id = document.getElementById("certificateId").value;
    let result = document.getElementById("result");

    if (id === "CERT1001") {

        result.innerHTML =
            "<h3>Certificate Verified ✓</h3>" +
            "<p>Name: Jyoshitha</p>" +
            "<p>Course: Python Programming</p>" +
            "<p>Certificate ID: CERT1001</p>" +
            "<p>Status: Valid</p>";

        result.style.color = "green";

    } else {

        result.innerHTML =
            "<h3>Certificate Not Found ✗</h3>" +
            "<p>Invalid Certificate ID</p>";

        result.style.color = "red";
    }
}