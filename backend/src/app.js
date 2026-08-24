import express from "express"
import cors from "cors"
import albumsRouter from "./routes/albums.js"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" })
})

app.use("/api/albums", albumsRouter)

export default app
