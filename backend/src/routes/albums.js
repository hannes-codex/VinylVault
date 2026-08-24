import { Router } from "express"
import { prisma } from "../lib/prisma.js"

const router = Router()

router.get("/", async (req, res) => {
  const albums = await prisma.album.findMany({ orderBy: { createdAt: "desc" } })
  res.json(albums)
})

router.get("/:id", async (req, res) => {
  const album = await prisma.album.findUnique({ where: { id: Number(req.params.id) } })
  if (!album) return res.status(404).json({ error: "Album not found" })
  res.json(album)
})

router.post("/", async (req, res) => {
  const { title, artist, year, genre, coverUrl } = req.body

  if (!title || !artist || !year || !genre) {
    return res.status(400).json({ error: "title, artist, year and genre are required" })
  }

  const album = await prisma.album.create({
    data: { title, artist, year: Number(year), genre, coverUrl },
  })
  res.status(201).json(album)
})

router.put("/:id", async (req, res) => {
  const { title, artist, year, genre, coverUrl } = req.body

  try {
    const album = await prisma.album.update({
      where: { id: Number(req.params.id) },
      data: { title, artist, year: year !== undefined ? Number(year) : undefined, genre, coverUrl },
    })
    res.json(album)
  } catch {
    res.status(404).json({ error: "Album not found" })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    await prisma.album.delete({ where: { id: Number(req.params.id) } })
    res.status(204).send()
  } catch {
    res.status(404).json({ error: "Album not found" })
  }
})

export default router
