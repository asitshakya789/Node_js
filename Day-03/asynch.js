// Function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Data fetched!";
            resolve(data);
        }, 2000);
    });
}

// Using async/await to handle the asynchronous operation
async function getData() {
    try {
        console.log("Fetching data...");
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getData();