// Public Unit Tests for User Management API
const request = require("supertest");
const app = require("../src/index");

describe("User Management API (Grading)", () => {
    let userId;

    beforeAll(async () => {
        const response = await request(app)
            .post("/users")
            .send({ name: "John Doe", email: "john@example.com" })
            .expect(201);

        userId = response.body.id;
    });

    it("POST /users should create a new user (1 point)", async () => {
        const response = await request(app)
            .post("/users")
            .send({ name: "Alice", email: "alice@example.com" })
            .expect(201);

        expect(response.body).toHaveProperty("id");
        expect(response.body.name).toBe("Alice");
        expect(response.body.email).toBe("alice@example.com");
    });

    it("GET /users/:id should return user details (1 point)", async () => {
        const response = await request(app).get(`/users/${userId}`).expect(200);

        expect(response.body).toHaveProperty("id", userId);
        expect(response.body.name).toBe("John Doe");
        expect(response.body.email).toBe("john@example.com");
    });

    it("GET /users/:id should return 404 for non-existent user", async () => {
        await request(app).get("/users/nonexistent").expect(404);
    });
});
