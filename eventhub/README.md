# EventHub - Static Event Management Website

Built with **HTML, CSS, JavaScript, and XML** only. **No PHP required!**

## 📂 File Structure
```
eventhub/
├── index.html          - Homepage with banner & countdown
├── events.html         - Events list (loaded from XML)
├── register.html       - Registration form with JS validation
├── contact.html        - Contact info + view registrations
├── css/style.css       - Modern responsive styles (blue/black/white)
├── js/
│   ├── main.js         - Common helpers (XML loader, menu)
│   ├── countdown.js    - Live countdown timer
│   ├── events.js       - Render events from XML
│   └── register.js     - Form validation + localStorage save
└── data/events.xml     - Event database (XML)
```

## 🚀 How to Run

Because the site fetches `events.xml` via `fetch()`, browsers block this on `file://`.
Run a tiny local server (any of these works):

**Option 1 - Python (built-in):**
```bash
cd eventhub
python -m http.server 8000
```
Then open http://localhost:8000

**Option 2 - VS Code:** install "Live Server" extension → right-click `index.html` → "Open with Live Server".

**Option 3 - Node:** `npx serve eventhub`

## ✨ Features
- 📅 Live countdown timer to the next event
- 📜 Events loaded dynamically from `data/events.xml`
- ✅ JS form validation (name, email, 10-digit Indian phone)
- 💾 Registrations saved in browser **localStorage** (no backend needed)
- 💰 Prices shown in **₹ (Indian Rupees)**
- 📱 Fully responsive (mobile + desktop)
- 🎨 Modern blue/black/white theme with hover effects

## ➕ Add a New Event
Edit `data/events.xml` and add a new `<event>` block — it will appear automatically on the Events page and in the registration dropdown.
