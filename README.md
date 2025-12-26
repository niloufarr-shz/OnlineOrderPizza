# 🍕 Online Pizza Ordering App

A simple pizza ordering application where users can order one or more pizzas from a dynamic menu without creating an account.

---

## 📌 Project Overview

This project is a lightweight pizza ordering app built to practice modern React concepts, state management, and routing.  
Users can browse a pizza menu, add items to a cart, and place an order with minimal required information.

---

## ✨ Features

- 🍕 Order **one or more pizzas** from a menu
- 👤 **No authentication** required (no login / no accounts)
- 📡 Pizza menu is **fetched from an API**
- 🛒 Add multiple pizzas to a **shopping cart**
- 📝 Order with:
  - Name
  - Phone number
  - Address
- 📍 Optional **GPS location** for easier delivery
- ⚡ Mark order as **priority** (adds 20% to cart price)
- 🔄 Priority can be added **even after placing the order**
- 📬 Orders are sent via **POST request** to an API
- 💵 **Payment on delivery** (no online payment)
- 🆔 Each order gets a **unique order ID** for later lookup

---

## 🧠 State Management Design

The application state is divided into logical domains (slices) that map directly to app features:

| State Slice | Type | Description |
|------------|------|-------------|
| User | Global UI State | Stores user name (no account system) |
| Menu | Global Remote State | Pizza menu fetched from API |
| Cart | Global UI State | Selected pizzas stored locally |
| Order | Global Remote State | Orders fetched from and sent to API |

---

## 🛠️ Technology Stack

### 🔀 Routing
- **React Router**  
  Standard routing solution for React Single Page Applications.

### 🎨 Styling
- **Tailwind CSS**  
  Utility-first CSS framework for fast and responsive UI development.

### 🌐 Remote State Management
- **React Router (v6.4+) Data APIs**  
  Used for fetching and submitting data with a *render-as-you-fetch* approach.

### 🧩 UI State Management
- **Redux**  
  Chosen due to relatively complex UI state (cart, user, priority orders).

---

## 🚀 Project Goals

- Practice modern React architecture
- Learn state separation (UI state vs remote state)
- Use Redux in a real-world scenario
- Work with API-based data fetching
- Build a clean and scalable project structure

---

## 📂 Getting Started

```bash
npm install
npm run dev
