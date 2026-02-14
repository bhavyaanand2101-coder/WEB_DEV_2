// 1. Selection
const eventForm = document.getElementById('eventForm');
const eventContainer = document.getElementById('eventContainer');
const clearAllBtn = document.getElementById('clearAllBtn');
const addSampleBtn = document.getElementById('addSampleBtn');
const keyPressedText = document.getElementById('keyPressed');

// 2. Event Creation logic
eventForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;

    addEventToDOM(title, date, category, description);
    eventForm.reset();
});

function addEventToDOM(title, date, category, desc) {
    // Remove "No events yet" message if it exists
    const emptyMsg = eventContainer.querySelector('.empty-msg');
    if (emptyMsg) emptyMsg.remove();

    // Dynamically create HTML element
    const div = document.createElement('div');
    div.classList.add('event-item');
    
    div.innerHTML = `
        <h3>${title}</h3>
        <p>📅 ${date}</p>
        <span class="badge">${category}</span>
        <p>${desc}</p>
        <button class="delete-btn">×</button>
    `;

    eventContainer.appendChild(div);
}

// 3. Event Delegation (Deleting an event)
eventContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
        
        // Check if list is empty to show message again
        if (eventContainer.children.length === 0) {
            eventContainer.innerHTML = '<p class="empty-msg">No events yet. Add your first event!</p>';
        }
    }
});

// 4. Clear All & Sample Events
clearAllBtn.addEventListener('click', () => {
    eventContainer.innerHTML = '<p class="empty-msg">No events yet. Add your first event!</p>';
});

addSampleBtn.addEventListener('click', () => {
    addEventToDOM("Tech Conference", "2024-05-20", "Conference", "A great day for JS learning.");
    addEventToDOM("React Workshop", "2024-06-15", "Workshop", "Hands-on coding session.");
});

// 5. Event Handling: Keypress demo
window.addEventListener('keydown', (e) => {
    keyPressedText.textContent = e.key;
});

// 6. Text Manipulation Demo (Comparing innerHTML vs innerText)
const propertyDemo = document.getElementById('propertyDemo');
const demoText = "<strong>Demo:</strong> Testing <span>Properties</span>";

propertyDemo.innerHTML = `
    <p><strong>Original HTML:</strong> &lt;strong&gt;Bold Text&lt;/strong&gt; with spaces</p>
    <div id="testArea" style="display:none;"><strong>Bold Text</strong>     with spaces</div>
    <ul>
        <li><strong>innerHTML:</strong> Renders tags</li>
        <li><strong>innerText:</strong> Removes HTML, collapses spaces</li>
        <li><strong>textContent:</strong> Removes HTML, keeps spaces</li>
    </ul>
`;