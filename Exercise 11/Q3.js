function startTime() {
    setInterval(() => {
      const now = new Date();
      document.getElementById("time").innerText =
        "Time: " + now.toLocaleTimeString();
    }, 1000);
  }
  
  function printForm() {
    const gender = document.getElementsByName("gender");
    const country = document.getElementsByName("country")[0].value;
    const prefs = document.getElementsByName("pref");
    let selectedGender = "";
    let selectedPrefs = [];
  
    for (let g of gender) {
      if (g.checked) selectedGender = g.value;
    }
  
    for (let p of prefs) {
      if (p.checked) selectedPrefs.push(p.value);
    }
  
    alert("Gender: " + selectedGender + "\nCountry: " + country + "\nPreferences: " + selectedPrefs.join(", "));
  }
  
  function validateForm() {
    const form = document.forms["testForm"];
    const name = form["name"].value.trim();
    const address = form["address"].value.trim();
    const zip = form["zip"].value.trim();
    const phone = form["phone"].value.trim();
    const email = form["email"].value.trim();
    const password = form["password"].value;
    const vpassword = form["vpassword"].value;
    const pan = form["pan"].value.trim();
  
    document.getElementById("nameErr").innerText = "";
    document.getElementById("zipErr").innerText = "";
    document.getElementById("phoneErr").innerText = "";
    document.getElementById("emailErr").innerText = "";
    document.getElementById("passErr").innerText = "";
    document.getElementById("panErr").innerText = "";
  
    if (name === "") {
      form["name"].focus();
      document.getElementById("nameErr").innerText = "Please enter your name!";
      return false;
    }
    if (name.length > 15) {
      form["name"].focus();
      document.getElementById("nameErr").innerText = "Name must not exceed 15 characters!";
      return false;
    }
    if (zip === "" || isNaN(zip) || zip.length > 6) {
      form["zip"].focus();
      document.getElementById("zipErr").innerText = "Invalid zip code!";
      return false;
    }
    if (form["country"].value === "") {
      form["country"].focus();
      alert("Please select a country!");
      return false;
    }
    const gender = document.getElementsByName("gender");
    if (![...gender].some(g => g.checked)) {
      alert("Please select gender!");
      return false;
    }
    const prefs = document.getElementsByName("pref");
    if (![...prefs].some(p => p.checked)) {
      alert("Please select at least one preference!");
      return false;
    }
    if (phone === "" || isNaN(phone) || phone.length !== 10) {
      form["phone"].focus();
      document.getElementById("phoneErr").innerText = "Enter valid 10-digit phone number!";
      return false;
    }
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
      form["email"].focus();
      document.getElementById("emailErr").innerText = "Invalid email format!";
      return false;
    }
    const passRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,15}$/;
    if (!passRegex.test(password)) {
      form["password"].focus();
      document.getElementById("passErr").innerText = "Password must include letter, number, special char (8-15 chars)";
      return false;
    }
    if (password !== vpassword) {
      form["vpassword"].focus();
      alert("Passwords do not match!");
      return false;
    }
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (pan !== "" && !panRegex.test(pan)) {
      form["pan"].focus();
      document.getElementById("panErr").innerText = "Invalid PAN (e.g., ABCDE1234F)";
      return false;
    }
  
    alert("Form submitted successfully!");
    return true;
  }
  