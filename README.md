🎵 VinylVault

A modern web application to manage and organize your personal vinyl record collection.

About the Project

VinylVault was created to solve a simple problem: keeping track of a growing vinyl collection.

Whether browsing through records at home or standing in a record store wondering “Do I already own this album?” — VinylVault aims to provide a simple and intuitive way to manage your collection.

The application allows you to store, organize, and explore your records while providing an overview of your entire collection.

Features

Current Version

- 🎵 Manage your personal vinyl collection
- ➕ Add new albums
- ✏️ Edit album information
- 🗑️ Remove albums
- 🔍 Search and filter your collection
- 🖼️ Display album covers
- 📊 View collection statistics

Planned Features

- 📷 Barcode scanning for quick album lookup
- 🌐 Integration with music databases
- ❤️ Wishlist for albums you want to buy
- ⭐ Personal ratings and notes
- 📍 Storage location tracking (shelf / box)
- 📱 Mobile application support

Technology Stack

Frontend

- React
- Vite
- Tailwind CSS

Backend

- Node.js
- Express

Database

- SQLite
- Prisma ORM

Project Goals

VinylVault is not only a collection management tool but also a learning project focused on building a complete full-stack application.

The project explores:

- Modern React development
- Component-based UI design
- REST APIs
- Database design
- Full-stack application architecture
- Clean and maintainable code structure

Screenshots

Coming soon

Getting Started

Prerequisites

- [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) — works the same way on Linux and macOS
- npm (comes with Node.js)

This project pins its Node version in `.nvmrc`. Always run `nvm use` (or `nvm install`) inside the project directory before installing dependencies, so Linux and macOS machines stay on the same Node version.

Installation

Clone the repository:

git clone <repository-url>
cd VinylVault

Install and select the correct Node version:

nvm install
nvm use

Install dependencies:

cd frontend
npm install

Start the development server:

npm run dev

Backend

The API lives in a separate `backend` folder (Node.js + Express + Prisma + SQLite).

cd backend
npm install
cp .env.example .env
npm run prisma:migrate
npm run dev

The API listens on `http://localhost:3001` by default. Endpoints:

- `GET /api/health`
- `GET /api/albums`
- `GET /api/albums/:id`
- `POST /api/albums`
- `PUT /api/albums/:id`
- `DELETE /api/albums/:id`

License

This project is for personal use and learning purposes.
