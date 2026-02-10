let db;

const request = indexedDB.open("MyDB", 2);

request.onupgradeneeded = (event) => {
    db = event.target.result;

    const store = db.createObjectStore("users", {
        keyPath: "id",
    });

    store.createIndex("email", "email", { unique: true, });
};

request.onsuccess = (event) => {
    db = event.target.result;
    console.log("DB ready");
};

request.onerror = () => {
    console.error("Failed to open DB");
};

// Helper to log output
function log(data) {
    document.getElementById("output").textContent =
        JSON.stringify(data, null, 2);
}

// 2️⃣ ADD
function addUser(user) {
    const tx = db.transaction("users", "readwrite");
    const store = tx.objectStore("users");

    const req = store.add(user);

    req.onsuccess = () => log("User added");
    req.onerror = () => log("Add failed");
}

// 3️⃣ DELETE
function deleteUser(id) {
    const tx = db.transaction("users", "readwrite");
    const store = tx.objectStore("users");

    const req = store.delete(id);

    req.onsuccess = () => log("User deleted");
}

// 4️⃣ GET ONE
function getUser(id) {
    const tx = db.transaction("users", "readonly");
    const store = tx.objectStore("users");

    const req = store.get(id);

    req.onsuccess = () => log(req.result);
}

// 5️⃣ GET ALL
function getUsers() {
    const tx = db.transaction("users", "readonly");
    const store = tx.objectStore("users");

    const req = store.getAll();

    req.onsuccess = () => log(req.result);
}
