# 🏨 Hotilier — Luxury Hotel Booking Website

A fully responsive, dark-themed luxury hotel booking website built with pure **HTML, CSS and JavaScript** — no frameworks, no dependencies, single file.

---

## 🖥️ Live Preview

> Clone or download the repository, then open `Hotilier.html` in any browser. Make sure `style.css` and `function.js` are in the same folder — the page won't look correct without them.

---

## ✨ Features

- **Clean file separation** — HTML structure in `Hotilier.html`, styles in `style.css`, logic in `function.js`
- **Fully responsive** — works on mobile, tablet and desktop
- **Dark luxury theme** — deep black with gold accents
- **Smooth animations** — scroll-triggered fade-ins, hero entrance animations
- **Interactive booking bar** — check-in/out date pickers, guest selector, room type
- **Booking modal** — full reservation form with validation
- **Auto-scrolling gallery** — infinite loop, pauses on hover
- **Toast notifications** — feedback for all user actions
- **Back to top button** — appears on scroll
- **Mobile hamburger menu** — fully functional navigation

---

## 📸 Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen landing with animated headline, CTAs and stats |
| **Booking Bar** | Quick availability checker below the hero |
| **Rooms** | 5 room types with pricing in INR |
| **Experience** | Amenities grid + detailed features list |
| **Testimonials** | Guest reviews from across South India |
| **Gallery** | Auto-scrolling photo strip |
| **Special Packages** | 4 curated stay packages |
| **Location** | Map visual + property info |
| **Newsletter** | Email subscription with validation |
| **Footer** | Links, contact, social media |

---

## 🗂️ Project Structure

```
Hotilier/
│
├── Hotilier.html       # Main HTML — structure and content
├── style.css           # All styling — layout, theme, animations, responsive
├── function.js         # All JavaScript — booking logic, modal, scroll effects
└── README.md           # This file
```

---

## 🚀 Getting Started

### Option 1 — Open directly
```bash
# Just double-click Hotilier.html
# OR right-click → Open with → Browser
# Make sure style.css and function.js are in the same folder
```

### Option 2 — Using VS Code Live Server
```bash
# 1. Open the project folder in VS Code
# 2. Install the Live Server extension
# 3. Right-click Hotilier.html → Open with Live Server
```

### Option 3 — Using Python
```bash
python -m http.server 3000
# Then open http://localhost:3000/Hotilier.html
```

> ⚠️ All three files — `Hotilier.html`, `style.css` and `function.js` — must be in the **same folder** for the site to work correctly.

---

## 🎨 Design Decisions

### Typography
- **Cormorant Garamond** — elegant serif for headings, giving a luxury feel
- **DM Sans** — clean sans-serif for body text, readable at small sizes

### Colour Palette
| Name | Hex | Usage |
|---|---|---|
| Gold | `#c9a84c` | Accents, headings, CTAs |
| Gold Light | `#e5c97e` | Hover states |
| Background | `#0a0a0a` | Primary background |
| Surface | `#111111` | Cards, nav |
| Surface 2 | `#181818` | Inputs, overlays |
| Text | `#e8e0d0` | Body text |
| Text Muted | `#7a7060` | Subtitles, labels |

### Layout
- CSS Grid for rooms, footer and amenity panels
- Flexbox for nav, booking bar and inline components
- CSS custom properties (`--variables`) for consistent theming throughout

---

## 🌍 Indian Context

This website is built specifically for a South Indian hotel brand:

- Prices displayed in **Indian Rupees (₹)**
- Properties across **Chennai, Bengaluru, Kochi, Hyderabad and Mysuru**
- Amenities relevant to Indian hospitality — Ayurvedic Spa, South Indian Dining, Grand Banquet
- Guest testimonials from Indian cities
- Local phone format `+91`

---

## 🧠 JavaScript Features

### Intersection Observer
Sections fade in as the user scrolls — uses the native `IntersectionObserver` API, no libraries needed.

### Booking Bar
Date inputs are hidden behind styled divs. When a date is selected, the display updates to a human-readable format (`15 Jan 2025`).

### Modal
Opens on "Book Now" or any room/offer card click. Closes on outside click or `Escape` key.

### Toast Notifications
Lightweight feedback system — appears at bottom of screen and auto-dismisses after 3 seconds.

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout Changes |
|---|---|
| `< 1100px` | Rooms switch to 2 columns, experience stacks vertically |
| `< 820px` | Hamburger menu, booking bar goes to 2 columns |
| `< 600px` | Everything single column, reduced padding |

---

## 🛠️ Built With

- HTML5 — `Hotilier.html`
- CSS3 — `style.css` (Grid, Flexbox, Custom Properties, Animations)
- Vanilla JavaScript — `function.js` (ES6+)
- [Google Fonts](https://fonts.google.com/) — Cormorant Garamond + DM Sans

> No npm. No build tools. No frameworks. Just open and run.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> *"Where Luxury Meets Legacy"* — Hotilier Hotels, South India
