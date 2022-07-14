function modalTarget(param, id) {
  if (param == "open") {
    document.getElementById(id).classList.remove("off");
    document.getElementById(id).classList.add("active");
  }
  if (param == "close") {
    document.getElementById(id).classList.add("off");
    document.getElementById(id).classList.remove("active");
  }
}
// function getFile(filePath) {
//   return filePath.substr(filePath.lastIndexOf("\\") + 1).split(".")[0];
// }
// function getoutput() {
//   outputfile.value = getFile(inputfile.value);
//   extension.value = inputfile.value.split(".")[1];
// }
function getNameFile() {
  const nameFile = document.getElementById("fileTinjau").value;
  document.getElementById("nameFileTinjau").value = nameFile.substr(
    nameFile.lastIndexOf("\\") + 1
  );
  // console.log(nameFile.substr(nameFile.lastIndexOf("\\") + 1));
}
