const API_KEY = 'YOUR_API_KEY'; // Replace with your actual OpenWeatherMap API Key
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherResult = document.getElementById('weatherResult');
const historyList = document.getElementById('historyList');
const logOutput = document.getElementById('logOutput');

// 1. Helper function to log events to the UI (Requirement #5)
function logToUI(message, type = 'sync') {
    const timestamp = new Date().toLocaleTimeString();
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerHTML = `<span>[${type.toUpperCase()}] ${message}</span>`;
    logOutput.appendChild(entry);
    console.log(`[${type}] ${message}`);
}

// 2. Fetch Weather Data using Async/Await
async function fetchWeather(city) {
    logToUI("Sync Start");

    // Demonstrating Microtask (Promise)
    Promise.resolve().then(() => logToUI("Promise .then (Microtask)", "async"));

    // Demonstrating Macrotask (setTimeout)
    setTimeout(() => logToUI("setTimeout (Macrotask)", "async"), 0);

    logToUI("Starting fetching...", "async");

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        
        // Requirement #3: Handle invalid API responses
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        logToUI("Data received successfully", "async");
        displayWeather(data);
        saveToHistory(city);

    } catch (error) {
        logToUI(`Error: ${error.message}`, "error");
        weatherResult.innerHTML = `<h3 class="error">City not found</h3>`;
    }

    logToUI("Sync End");
}

// 3. Display Weather in the UI
function displayWeather(data) {
    weatherResult.innerHTML = `
        <h3>Weather Info</h3>
        <div class="weather-info-row"><span>City:</span> <span>${data.name}, ${data.sys.country}</span></div>
        <div class="weather-info-row"><span>Temp:</span> <span>${data.main.temp} °C</span></div>
        <div class="weather-info-row"><span>Weather:</span> <span>${data.weather[0].main}</span></div>
        <div class="weather-info-row"><span>Humidity:</span> <span>${data.main.humidity}%</span></div>
        <div class="weather-info-row"><span>Wind:</span> <span>${data.wind.speed} m/s</span></div>
    `;
}

// 4. Local Storage Handling (Requirement #4)
function saveToHistory(city) {
    let history = JSON.parse(localStorage.getItem('weatherHistory')) || [];
    if (!history.includes(city)) {
        history.push(city);
        localStorage.setItem('weatherHistory', JSON.stringify(history));
        loadHistory();
    }
}

function loadHistory() {
    const history = JSON.parse(localStorage.getItem('weatherHistory')) || [];
    historyList.innerHTML = '';
    history.forEach(city => {
        const btn = document.createElement('button');
        btn.className = 'history-btn';
        btn.innerText = city;
        btn.onclick = () => fetchWeather(city);
        historyList.appendChild(btn);
    });
}

// Event Listeners
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        logOutput.innerHTML = ''; // Clear logs for new search
        fetchWeather(city);
    }
});

// Load history on page load
window.onload = loadHistory;