# E-Commerce Frontend App

The user interface for a full-stack e-commerce store. It allows users to browse products, manage a shopping cart, and interact directly with backend services.

---

## Tech Stack

* **Frontend Library:** React.js (v18+)
* **Build Tool & Dev Server:** Vite
* **Package Manager:** npm
* **State Management:** Context API / React Hooks
* **Routing:** React Router DOM
* **Styling:** Tailwind CSS / Bootstrap / Custom CSS

---

## System Architecture

The frontend operates independently from the backend. The user interface runs entirely in the browser and communicates with the Java Spring Boot backend by sending asynchronous HTTP requests to its REST API endpoints.

### Key Concepts:
* **Component-Driven Design:** Reusable UI elements (Product Cards, Navbars, Buttons) built separately so the app is easy to scale and maintain.
* **State Management:** Centralized system to keep track of global data, like user authentication status and shopping cart data.
* **API Service Layer:** A dedicated module of code handling all communication with the backend to keep data clean and organized.

---

## Project Roadmap

### Phase 1: Setup
* [x] Initialize React project with Vite
* [x] Set up Git/GitHub repositories and independent version control
* [X] Establish project directory structure (`components`, `pages`, `services`, `assets`)
* [ ] Select and configure global styling framework

### Phase 2: Core UI Components
* [ ] Build navigation bar and footer
* [ ] Design product grid and catalog cards
* [ ] Implement product detail view pages

### Phase 3: State & Backend Integration
* [ ] Integrate React Router for multi-page navigation (Home, Cart, Product View)
* [ ] Implement global state for shopping cart management
* [ ] Integrate API service layer to fetch live data from Spring Boot backend

### Phase 4: User Experience & Polish
* [ ] Add loading indicators and error handling for API requests
* [ ] Build checkout and order summary views
* [ ] Optimize application responsiveness for mobile and tablet screens