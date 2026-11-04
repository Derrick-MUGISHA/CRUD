import axios from "axios";
//  Get 

const query = "phone";
const params = new URLSearchParams({ q: query, limit: 10, skip: 20 })

// const response = await fetch('https://jsonplaceholder.typicode.com/posts');

const search = await fetch(`https://dummyjson.com/products/search?${params}`);

if (!search.ok) {
  throw new Error(`HTTP error! status: ${search.status}`);
}

const data = await search.json();
// const text = await response.text();
// const blob = await response.blob();
// const content = response.headers.get("content-type")

console.log(data);

// Post

const postData = { title: "Muraho Kigali", body: "My first post", userId: 1 }

const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(postData),
})

if (!response.ok) throw new Error(`HTTP ${response.status}`)
const created = await response.json()
console.log(created) 
console.log(response.status) 

// PUT

const putData = { title: "Muraho Kigali", body: "My first post", userId: 1 }
const id = 1

const putResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(putData),
});

if (!putResponse.ok) throw new Error(`HTTP ${putResponse.status}`)
const newPutData = await putResponse.json()
console.log(newPutData) 
console.log(putResponse.status) 


// PATCH

const patchData = { title: "Muraho Kigali", body: "My first post", userId: 1 }
const patchId = 1

const patchResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${patchId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patchData),
});

if (!patchResponse.ok) throw new Error(`HTTP ${patchResponse.status}`)
const newPatchData = await patchResponse.json()
console.log(newPatchData) 
console.log(patchResponse.status)

// DELETE

const deleteId = 1

const deleteResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${deleteId}`, {
    method: "DELETE",
});

if (!deleteResponse.ok) throw new Error(`HTTP ${deleteResponse.status}`)
console.log(`Deleted post with ID: ${deleteId}, Status: ${deleteResponse.status}`)


// Axios 
// const 
// const axios = require("axios");

const axiosResponse = await axios.get("https://jsonplaceholder.typicode.com/posts");
// const axiosData = axiosResponse.json();
console.log(`The data is: ${axiosResponse.data}`);