import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

vi.mock("./lib/api", () => ({
  getAlbums: vi.fn().mockResolvedValue([]),
  getAlbum: vi.fn(),
  createAlbum: vi.fn(),
  updateAlbum: vi.fn(),
  deleteAlbum: vi.fn(),
}))

import App from "./App"

describe("App", () => {
  it("renders the shell without crashing", async () => {
    render(<App />)
    expect(await screen.findByText("🎵 VinylVault")).toBeTruthy()
  })
})
