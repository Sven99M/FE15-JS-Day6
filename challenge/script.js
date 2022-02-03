let data = JSON.parse(cars);
console.log(data)

for (let index in data) {
    document.getElementById("result").innerHTML +=
        `<div class="col">
            <div class="card " style="width: 18rem; margin-bottom:30px;">
                <img src="${data[index].img}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title" id="title">${data[index].name}</h5>
                  <p class="card-text">${data[index].year}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><h6>Color:</h6> ${data[index].color} </li>
                  <li class="list-group-item"><h6>Price:</h6> ${data[index].price}</li>
                </ul>             
             </div>
        </div>`
}