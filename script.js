// Sample user data
const users = {
    "1": { "name": "John Doe", "email": "john@example.com", "picture": "https://mhshimul85.github.io/json/images/john.jpg" },
    "2": { "name": "Jane Smith", "email": "jane@example.com", "picture": "https://mhshimul85.github.io/json/images/jane.jpg" },
    // Add more users as needed
};

// Function to get query parameters from URL
function getQueryParams() {
    const params = {};
    window.location.search.substr(1).split("&").forEach(function(part) {
        const item = part.split("=");
        params[item[0]] = decodeURIComponent(item[1]);
    });
    return params;
}

// Function to return user info as JSON
function getUserInfoAsJson(userId) {
    const user = users[userId];
    if (user) {
        return JSON.stringify(user);
    } else {
        return JSON.stringify({ "error": "User not found" });
    }
}

// Get user ID from URL and display JSON output
const params = getQueryParams();
const userId = params.user_id;

if (userId) {
    const userInfoJson = getUserInfoAsJson(userId);

    // Display JSON output
    document.body.innerHTML = `<pre>${userInfoJson}</pre>`;
} else {
    document.body.innerHTML = `<pre>${JSON.stringify({ "error": "No user_id provided" })}</pre>`;
}
