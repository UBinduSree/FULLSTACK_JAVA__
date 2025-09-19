import React, { useState } from "react";

function Contact({ DarkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    address: "",
    phone: "",
    email: "",
    course: "",
    opinion: "",
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Details:", formData);
    alert("Form submitted successfully!");
    setFormData({
      name: "",
      gender: "",
      dob: "",
      address: "",
      phone: "",
      email: "",
      course: "",
      opinion: "",
    });
  };

  // styles that depend on dark mode
  const themeStyles = {
    container: {
      padding: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: DarkMode ? "#1e1e1e" : "#f4f7f9",
      minHeight: "100vh",
      transition: "0.3s ease",
    },
    form: {
      background: DarkMode ? "#2c2c2c" : "#fff",
      color: DarkMode ? "#f1f1f1" : "#2c3e50",
      padding: "25px",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
      width: "100%",
      maxWidth: "500px",
      transition: "0.3s ease",
    },
    title: {
      textAlign: "center",
      marginBottom: "20px",
      color: DarkMode ? "#f5f5f5" : "#2c3e50",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold",
      color: DarkMode ? "#ddd" : "#34495e",
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "14px",
      background: DarkMode ? "#3b3b3b" : "#fff",
      color: DarkMode ? "#fff" : "#000",
    },
    textarea: {
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "14px",
      resize: "none",
      background: DarkMode ? "#3b3b3b" : "#fff",
      color: DarkMode ? "#fff" : "#000",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: DarkMode ? "#27ae60" : "#2ecc71",
      color: "white",
      fontSize: "16px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "0.3s",
    },
  };

  return (
    <div style={themeStyles.container}>
      <form onSubmit={handleSubmit} style={themeStyles.form}>
        <h1 style={themeStyles.title}>📩 Student Contact Form</h1>

        {/* Name */}
        <div>
          <label style={themeStyles.label}>Full Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={themeStyles.input}
            required
          />
        </div>

        {/* Gender */}
        <div>
          <label style={themeStyles.label}>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            style={themeStyles.input}
            required
          >
            <option value="">-- Select --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Date of Birth */}
        <div>
          <label style={themeStyles.label}>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            style={themeStyles.input}
            required
          />
        </div>

        {/* Address */}
        <div>
          <label style={themeStyles.label}>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            style={themeStyles.textarea}
            rows="3"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label style={themeStyles.label}>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={themeStyles.input}
            placeholder="Enter 10-digit number"
            pattern="[0-9]{10}"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label style={themeStyles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={themeStyles.input}
            required
          />
        </div>

        {/* Interested Course */}
        <div>
          <label style={themeStyles.label}>Interested Course:</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            style={themeStyles.input}
            required
          />
        </div>

        {/* Opinion */}
        <div>
          <label style={themeStyles.label}>Your Opinion:</label>
          <textarea
            name="opinion"
            value={formData.opinion}
            onChange={handleChange}
            style={themeStyles.textarea}
            rows="4"
          />
        </div>

        {/* Submit */}
        <button type="submit" style={themeStyles.button}>
          ✅ Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
