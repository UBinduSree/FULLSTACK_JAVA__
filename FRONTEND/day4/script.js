// //json is a javascript storage format
// console.log("=== Hour1: JSON Basics ===");
// let student = {
//     name: "Bindu",
//     age: 21,
//     marks: [32, 33, 34]
// };
// //object to json string
// let jsonString = JSON.stringify(student);
// console.log("JSON String:", jsonString);
// //json string to object
// let parsedObj = JSON.parse(jsonString);
// console.log("Parsed Object:", parsedObj);
// let books = [
//     {
//         title: "JavaScript Basics",
//         author: "John Doe",
//         price: 29.99
//     },
//     {
//         title: "Learning Python",
//         author: "Jane Smith",
//         price: 24.99
//     },
//     {
//         title: "Web Development with React",
//         author: "Mike Johnson",
//         price: 39.99
//     }
// ]
// let booksJSON = JSON.stringify(books);
// console.log("Books JSON:", booksJSON);
// let parsedBooks = JSON.parse(booksJSON);
// console.log("Parsed Books:", parsedBooks);

// // fetch sample JSON FROM API
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response => response.json())
//     .then(data => console.log("Feteched Data:", data))
//     .catch(error => console.error("Error:", error));

// fetch("https://jsonplaceholder.typicode.com/posts/")
//     .then(response => response.json())
//     .then(data => console.log("Feteched Data:", data))
//     .catch(error => console.error("Error:", error));

// //fetch all users and show in console + page
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(users => {
//         let output = "<h3>Users List</h3><ul>";
//         users.forEach(user => {
//             output += `<li>${user.name}-${user.email}</li>`;
//         });
//         output += "</ul>";
//         //Append result to page
//         document.body.innerHTML += output;
//     });

// //Weather Info Fetcher Project
// console.log("=== Weather Info Fetcher Project ===");

//predifened cities and coordinates
const cityCoords = {
    "new york": { lat: 40.7128, lon: -74.0060 },
    "london": { lat: 51.5074, lon: -0.1278 },
    "tokyo": { lat: 35.6895, lon: 139.6917 },
    "delhi": { lat: 28.7041, lon: 77.1025 },
    "sydney": { lat: -33.8688, lon: 151.2093 }
};
//event listener for button
document.getElementById("fetchBtn").addEventListener("click", () => {
    let city = document.getElementById("cityInput").value.toLowerCase();
    if (!cityCoords[city]) {
        document.getElementById("weather").innerHTML = " ⚠️City not found in predefined list.";
        return;
    }
    let coords = cityCoords[city];
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

    //AJAX Fetch
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.current_weather) {
                document.getElementById("weather").innerHTML = `
            <h3>Weather in ${city}</h3>
            <p>🌡️ Temperature: ${data.current_weather.temperature}°C</p>
            <p>💨 Wind Speed: ${data.current_weather.windspeed}km/h</p>
            <p>🕒 Time: ${data.current_weather.time}</p>
            `;
            } else {
                document.getElementById("weather").innerHTML = " ⚠️No data Available.";
            }
        })
        .catch(error => {
            console.error(error);
            document.getElementById("weather").innerHTML = " ⚠️Error fetching data.";
        });
});

//api link new api
//url="https://newsapi.org/v2/everything?q=tesla&from=2025-08-12&sortBy=publishedAt&apiKey=5529ea051c742eaa88d6e1a86c6d788"