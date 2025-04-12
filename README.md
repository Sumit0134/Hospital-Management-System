# Hospital Management System API

## Description

A RESTful API to manage hospital-related functionalities like booking appointments, managing patient records, and handling doctor availability. It provides endpoints to create, update, retrieve, and delete doctor and patient data, as well as manage appointments between patients and doctors.

## Features

- **Patient Management**: Register and fetch patient details.
- **Doctor Management**: Add and fetch doctor details.
- **Appointment Management**: Create, fetch, cancel and update existing appointments.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
  - [Doctors](#doctors)
  - [Patients](#patients)
  - [Appointments](#appointments)
- [Running the Application](#running-the-application)

---

## Prerequisites

- Node.js (v14.x or higher)
- MongoDB
- Postman or any API testing tool (Optional, for testing API)

---

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/hospital-management-system.git
    cd hospital-management-system
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Setup `.env`**:

    Create a `.env` file based on `.env.example`:

    ```bash
    cp .env.example .env
    ```

    Update `.env` with your environment variables:
    ```plaintext
    PORT=3000
    APP_NAME=Hospital Management System
    MONGO_URI=mongodb://localhost:27017/hospital-management
    NODE_ENV=development
    ```

---

## Environment Variables

- **PORT**: Port for the server to run on.
- **APP_NAME**: Application name
- **MONGO_URI**: MongoDB connection string (local or remote).
- **NODE_ENV**: Node environment

---

## API Endpoints

### Patients

| Method | Endpoint                         | Description                    |
|--------|----------------------------------|--------------------------------|
| POST   | `/api/v1/create-patient`         | Create a new patient           |
| GET    | `/api/v1/get-all-patients`       | Get all patients               |
| GET    | `/api/v1/get-patient-id/:id`     | Get patient by ID              |

### Doctors

| Method | Endpoint                         | Description                    |
|--------|----------------------------------|--------------------------------|
| POST   | `/api/v1/create-doctor`          | Create a new doctor            |
| GET    | `/api/v1/get-all-doctors`        | Get a list of all doctors      |
| GET    | `/api/v1/get-doctor-id/:id`      | Get doctor by ID               |


### Appointments

| Method | Endpoint                         | Description                    |
|--------|----------------------------------|--------------------------------|
| POST   | `/api/v1/create-appointment`     | Book a new appointment         |
| GET    | `/api/v1/get-all-appointments`   | Get all appointments           |
| GET    | `/api/v1/get-appointment-id/:id` | Get appointment by ID          |
| PATCH  | `/api/v1/update-appointment-id/:id` | Update appointment details |
| DELETE | `/api/v1/cancel-appointment-id/:id` | Cancel an appointment |

---

## Running the Application

1. **Start MongoDB**:

   Make sure MongoDB is running locally or use a cloud MongoDB service like MongoDB Atlas.

   For local MongoDB, run:
   
   ```bash
   mongod
   ```

2. **Start the server**:

In your project directory, run the following command:

npm run dev
The API will be available at http://localhost:3000.

3. **For API Testing**:

Follow the documentation pdf where sample testing is available.

## License 📄

This project is licensed under the MIT License. See the `LICENSE` file for more details.

```text
MIT License

Copyright (c) 2025 Sumit Kumar Shaw

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


