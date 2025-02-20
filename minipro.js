document
  .getElementById("resumeUploadForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const fileInput = document.getElementById("resumeFile");
    const statusDiv = document.querySelector(".upload-status");

    if (fileInput.files.length > 0) {
      // File is selected - Add your upload logic here
      statusDiv.innerHTML = `<div class="alert alert-success">${fileInput.files[0].name} uploaded successfully!</div>`;
    } else {
      statusDiv.innerHTML = `<div class="alert alert-danger">Please select a file first!</div>`;
    }
  });
document.getElementById("resumeFile").addEventListener("change", function (e) {
  const fileName = this.files[0] ? this.files[0].name : "No file chosen";
  document.querySelector(".file-input-label").textContent = fileName;
});
