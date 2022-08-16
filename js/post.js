const formEl = document.getElementById('form');

// var fileName = document.getElementById('file').files[0].name;


function fileInfo() {
  var fileName = document.getElementById('file').files[0].name;
  var fileSize = document.getElementById('file').files[0].size;
  var fileType = document.getElementById('file').files[0].type;
  var fileModifiedDate = document.getElementById('file').files[0].lastModifiedDate;

  var file_info = fileName + "\n" + fileSize + "\n" + fileType + "\n" + fileModifiedDate;
  console.log(file_info);
  // alert(file_info);
}
formEl.addEventListener('submit', (e) => {
  e.preventDefault()

  const formData = new FormData(formEl);
  formData.append('image', 'assets/' + document.getElementById('file').files[0].name)
  const data = Object.fromEntries(formData);

  console.log(data)

  fetch('http://localhost:3000/products', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))


})