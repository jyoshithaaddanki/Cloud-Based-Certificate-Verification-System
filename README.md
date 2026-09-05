# Cloud-Based Certificate Verification System

## 📌 Project Overview

The **Cloud-Based Certificate Verification System** is a simple web-based application designed to verify certificates using a unique Certificate ID.

The system allows an administrator to add certificate details, while users can enter a Certificate ID and instantly check whether the certificate is valid or invalid.

## 🎯 Objectives

* To provide a simple certificate verification system.
* To reduce manual certificate verification.
* To provide quick and easy access to certificate details.
* To prevent the use of invalid or fake certificates.
* To demonstrate the concept of cloud-based certificate management.

## ✨ Features

* 🎓 Add certificate details
* 🔍 Verify certificates using Certificate ID
* ✅ Display valid certificate information
* ❌ Display invalid certificate message
* 💾 Store certificate data
* 🖥️ Simple and user-friendly interface
* 📱 Responsive design

## 🛠️ Technologies Used

* **HTML** – Website structure
* **CSS** – Website design and styling
* **JavaScript** – Application functionality
* **Local Storage** – Data storage for the prototype

## 📂 Project Structure

```text
Cloud-Certificate-Verification/
│
├── index.html
├── admin.html
├── style.css
├── script.js
└── README.md
```

## 🚀 How to Run

### Step 1

Download or clone this repository.

### Step 2

Open the project folder in **Visual Studio Code**.

### Step 3

Install the **Live Server** extension in VS Code.

### Step 4

Right-click `index.html`.

### Step 5

Select **Open with Live Server**.

The application will open in your web browser.

## 🧪 How to Use

### Admin

1. Open `admin.html`.
2. Enter the Certificate ID.
3. Enter the student name.
4. Enter the course name.
5. Enter the institution name.
6. Select the issue date.
7. Click **Add Certificate**.

### User

1. Open `index.html`.
2. Enter the Certificate ID.
3. Click **Verify Certificate**.
4. The system displays the certificate details if the ID exists.
5. An invalid message is displayed if the ID does not exist.

## 📋 Example

```text
Certificate ID: CERT001
Student Name: Jyoshitha
Course: Cloud Computing
Institution: ABC Engineering College
```

When `CERT001` is entered on the verification page, the certificate information will be displayed.

## ☁️ Cloud Computing Concept

The project demonstrates the basic concept of storing and verifying certificate information digitally.

The prototype currently uses browser Local Storage. It can be extended to use a cloud database such as Firebase, AWS, or Google Cloud for real cloud-based storage.

## 🔮 Future Enhancements

* Firebase Cloud Firestore integration
* Admin authentication
* QR code-based verification
* Certificate PDF generation
* Certificate download option
* Cloud storage
* Admin dashboard
* Certificate expiry tracking
* Search and filter functionality

## 👩‍💻 Project Type

**Mini Project – Cloud Computing / Web Technology**

## 📄 License

This project is created for educational purposes.
