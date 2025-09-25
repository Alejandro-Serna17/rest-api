# Assignment: Build a Simple REST API Microservice

## **Objective**
The goal of this assignment is to help you understand how a RESTful API works on the server-side using **Node.js** and **Express**. You will implement a microservice that allows users to be created, retrieved, updated, and deleted. The user data will be stored in memory (no database required).

---

## **Workflow & Submission**
Follow these steps to complete the assignment:

1. **Fork the professor's repository**.
2. **Create a branch** in your forked repository.
3. **Clone your fork** to your local device.
4. **Checkout your branch** and start working on your solution.
5. **Code and test your implementation** using the instructions below.
6. **Commit and push your changes** to your branch.
7. **Merge your branch into the `main` branch of your fork**:
   - **Option 1 (Direct Merge)**: Checkout `main`, merge your branch, and push.
   - **Option 2 (Pull Request - Optional)**: Open a pull request in your fork and merge it.
8. **Submit the URL to your forked repository** to the professor.

Your repository should contain **all necessary code and test results** when you submit it.

---

## **API Specification**
Your task is to implement the following API endpoints in `src/index.js`:

### **1. Create a User**
#### **POST `/users`**
##### **Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```
##### **Response (201 Created):**
```json
{
  "id": "a1b2c3d4",
  "name": "John Doe",
  "email": "john@example.com"
}
```
- The `id` must be **a unique string** (e.g., use `uuid`).
- Returns `400 Bad Request` if `name` or `email` is missing.

---

### **2. Retrieve a User**
#### **GET `/users/:id`**
##### **Example Request:**
```
GET /users/a1b2c3d4
```
##### **Response (200 OK):**
```json
{
  "id": "a1b2c3d4",
  "name": "John Doe",
  "email": "john@example.com"
}
```
- Returns `404 Not Found` if the user ID does not exist.

---

### **3. Update a User**
#### **PUT `/users/:id`**
##### **Request Body:**
```json
{
  "name": "John Updated",
  "email": "john.updated@example.com"
}
```
##### **Response (200 OK):**
```json
{
  "id": "a1b2c3d4",
  "name": "John Updated",
  "email": "john.updated@example.com"
}
```
- Returns `404 Not Found` if the user ID does not exist.
- Returns `400 Bad Request` if `name` or `email` is missing.

---

### **4. Delete a User**
#### **DELETE `/users/:id`**
##### **Example Request:**
```
DELETE /users/a1b2c3d4
```
##### **Response (204 No Content)**
- If the user is found and deleted, **no response body** is returned.
- Returns `404 Not Found` if the user ID does not exist.

---

## **Implementation Requirements**
- Use an **in-memory array** to store users.
- Follow RESTful conventions for **HTTP methods and status codes**.
- Handle errors properly (`400`, `404`, etc.).
- Ensure all API responses are **structured correctly** as shown above.

---

## **Testing Your API**
You are required to **test your API manually** and **run the provided automated tests**.

### **Manual Testing**
Use **Postman**, **cURL**, or any HTTP client to test your API.

#### **Example cURL Request:**
```bash
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"Alice","email":"alice@example.com"}'
```

### **Automated Testing**
- The repository includes **automated tests** using **Jest** and **Supertest**.
- Run the tests with:
  ```bash
  npm test
  ```
- Ensure **all tests pass** before submitting your assignment.

---

## **GitHub Actions & Hidden Tests**
- Your repository is configured with **GitHub Actions** to **automatically test your code when you push changes**.
- **Hidden test cases** will only run when your code is submitted (pushed to GitHub).
- Locally, you will only see public tests. If your submission fails hidden tests, you will need to debug based on test logs.

---

## **Submission Instructions**
- Ensure your final implementation is **merged into the `main` branch of your fork**.
- Submit your **GitHub repository URL** via the designated submission form.

Your repository should include:
✅ All required API endpoints
✅ Passing public tests (`npm test` runs locally)
✅ Clean, well-structured code

---

## **Additional Notes**
- Follow **good coding practices** (descriptive variable names, proper indentation, and clear structure).
- API should **use correct HTTP methods and status codes**.
- Your implementation **must not modify the test files (`user.test.js` and `.github/workflows/test.yml`)**.
- You are allowed to **add files and folders** if needed.

🚀 **Good luck!**

---
