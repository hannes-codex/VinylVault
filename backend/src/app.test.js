import { test } from "node:test"
import assert from "node:assert/strict"
import request from "supertest"
import app from "./app.js"

test("GET /api/health returns ok", async () => {
  const res = await request(app).get("/api/health")
  assert.equal(res.status, 200)
  assert.deepEqual(res.body, { status: "ok" })
})

test("GET /api/albums returns a list", async () => {
  const res = await request(app).get("/api/albums")
  assert.equal(res.status, 200)
  assert.ok(Array.isArray(res.body))
})
