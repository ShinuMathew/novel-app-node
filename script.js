function getnovelers() {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/author");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();
    if (xhr.status === 200) {
      resolve(xhr.responseText);
    } else {
      reject(xhr.status);
    }
  });
}

function getnovels() {
  var novels = "";
  fetch("http://localhost:3002/novels")
    .then(res1 => res1.json())
    .then(noveldata => {
      noveldata.forEach(novel => {
        fetch(`http://localhost:3002/author/${novel.authorid}`)
          .then(res2 => res2.json())
          .then(authordata => {
            authordata.forEach(author => {
              novels += `<tr>
                <th scope="col">${novel.authorid}</th>
                <th scope="col"><img src=${author.img} hieght=100px width=100px></th>
                <th scope="col">${novel.author}</th>
                <th scope="col">${novel.name}</th>
                <th scope="col">${author.address.street}, ${author.address.city}, ${author.address.state}-${author.address.zip}</th>
                </tr>`;
            });
            console.log("NOVELS:" + novels);
            document.getElementById("noveltable").innerHTML = novels;
          });
      
      });      
    });
}
