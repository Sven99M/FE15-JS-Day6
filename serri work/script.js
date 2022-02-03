// document.getElementById("result").innerHTML = `
// My name is ${array[0].name}, and i am ${array[0].age} <hr>`;
// console.log(array);
var arr = JSON.parse(array);
console.table(arr);

// document.getElementById("result").innerHTML += `
// My name is ${array[1].name}, and i am ${array[1].age} <hr>`;

// for (let value of arr) {
//     document.getElementById("result").innerHTML += `
//     <div class="card m-2" style="width: 18rem;">
//     <img src="${value.img}" class="card-img-top" alt="${value.name}">
//     <div class="card-body">
//       <h5 class="card-title">${value.name}</h5>
//       <p class="card-text">I am working as ${value.jobTitle}.</p>
//     </div>
//   </div>
//     `;
// }

// for (let i in arr) {
//     document.getElementById("result").innerHTML += `
//   <div class="card m-2" style="width: 18rem;">
//   <img src="${arr[i].img}" class="card-img-top" alt="${arr[i].name}">
//   <div class="card-body">
//     <h5 class="card-title">${arr[i].name}</h5>
//     <p class="card-text">I am working as ${arr[i].jobTitle}.</p>
//   </div>
// </div>
//   `;
// }

// arr.forEach(function(value, i) {
//     // console.log(arr[i]);
//     document.getElementById("result").innerHTML += `
//   <div class="card m-2" style="width: 18rem;">
//   <img src="${arr[i].img}" class="card-img-top" alt="${arr[i].name}">
//   <div class="card-body">
//     <h5 class="card-title">${value.name}</h5>
//     <p class="card-text">I am working as ${arr[i].jobTitle}.</p>
//   </div>
// </div>
//   `;
// })

for (let i = 0; i < arr.length; i++) {
    document.getElementById("result").innerHTML += `
  <div class="card m-2" style="width: 18rem;">
  <img src="${arr[i].img}" class="card-img-top" alt="${arr[i].name}">
  <div class="card-body">
    <h5 class="card-title">${arr[i].name}</h5>
    <p class="card-text">I am working as ${arr[i].jobTitle}.</p>
  </div>
</div>
  `;
}

// var firstName = prompt("type your name");
// console.log(firstName);

// localStorage.setItem("arr", JSON.stringify(arr));

// document.getElementById("name").innerHTML = localStorage.getItem("name");

// localStorage.removeItem("arr");