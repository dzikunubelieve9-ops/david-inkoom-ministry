# MIN DAVID INKOOM MINISTRY — Global Portal
**"Raising A Generation of True Worshippers"**

A high-performance, mobile-first, production-ready web platform built for **Min David Inkoom Ministry** (Divine Impact Worship Center - DIWC, Gbetsile U.S Junction, Greater Accra, Ghana).

---

## 🌟 Core Architecture & Key Modules

### 1. 🛡️ Secure Admin Access & Executive Authentication System
- **Hidden Footer Admin Button**:
  - Discreetly located in the website footer.
  - Invisible by default (`opacity-0`), reveals smoothly on mouse hover or with keyboard shortcut: `Ctrl + Shift + A` (or `Cmd + Shift + A`).
  - Styled with a lock icon and "Admin" label, navigating directly to the secure login page.
- **Admin Login Experience (`/admin` & `/admin/login`)**:
  - Centered executive login portal with gold and black theme matching the ministry brand.
  - Official Ministry Logo at the top.
  - **Credentials**: Email: `admin@davidinkoom.org` | Password hashed with `bcryptjs`.
  - **Session Security**: JWT session authentication stored in HTTP-Only cookies and cryptographic session storage.
  - **CSRF Protection**: Unique double-submit CSRF token validation on all administrative requests.
  - **Forgot Password Clearance**: Direct modal allowing authorized password reset dispatches to Minister David Inkoom (+233 25 711 2267).
- **Protected Executive Dashboard (`/admin/dashboard`)**:
  - All `/admin/*` routes strictly protected; unauthenticated sessions automatically redirected to login.
  - **Top Header**: "Welcome Minister David Inkoom" with verified status badge and instant Logout button.
  - **Modular Sidebar**:
    - `Dashboard`: Live traffic analytics, today/weekly/monthly visits, and Honorarium pipeline estimation.
    - `Sermons`: Real-time video URL updater for livestream & sanctuary recordings.
    - `Events`: Ministry calendar and flagship event scheduler (*Mi Noche Mi Adoracion*).
    - `Gallery`: Photo management to publish stage and encounter photography.
    - `Donations`: Mobile Money and direct banking altar account details.
    - `Members`: Covenant partner and newsletter subscriber overview.
    - `Settings`: Administrative clearance, password management, and notification routes.
    - `Logout`: Secure session revocation.

### 2. 📅 Intelligent Booking System (`/book-david`)
- **Complete Booking Intake Form**:
  - Name / Ministry
  - Church
  - Event Type (Revival, Worship Night, Sunday Anointing, Youth Conference, Wedding, Crusade)
  - Date & Time
  - Location with Google Maps autocomplete & interactive live preview
  - Purpose
  - **Honorarium Section**:
    - *Label*: "Honorarium"
    - *Sub-label*: "Please indicate the honorarium you would like to bless Minister David with"
    - *Field Type*: Optional free text input (e.g., `GHS 500, $100, or Any amount as led + accommodation`)
    - Saved to database, displayed in `/admin` table, synced to Google Calendar description, included in WhatsApp auto-dispatch, and computed in Analytics pipeline.
  - Live Stream Links (Facebook / YouTube) - optional
  - Additional Details (open text area)
  - Action Button: **INVITE MINISTER DAVID**
- **Smart Calendar & Conflict Management**:
  - Real-time itinerary checking against pre-scheduled dates.
  - Conflict warning banner & interactive decision modal ("Minister David has a scheduled engagement on this date. Do you still want to proceed?").
  - Instant WhatsApp notification to **+233 25 711 2267** with formatted booking and honorarium details.
  - Instant Google Calendar 1-click sync with complete event details and honorarium in description.

### 3. 🌌 WebGL Worship Stage Atmosphere & Tilt Physics
- **Three.js Golden Worship Particle Cloud**: Real-time WebGL particles drifting with mouse physics (*Shekinah Glory* effect).
- **Stage Moving Spotlights**: Volumetric gold and crimson spotlights sweeping across the stage.
- **Interactive Tilt Cards**: Glassmorphic cards responding to cursor movement with specular depth.

### 4. 🔴 Global Livestream Hub (`/live`)
- **Multi-Source Live Player**: YouTube Live, Facebook Live, and custom RTMP/HLS streams.
- **Dynamic Live Viewer Ticker**: Active worshipper counter (1,400+ online).
- **Real-Time Prayer & Praise Feed**: Interactive chat feed for instant praise reports and prayer requests.
- **Next Program Countdown**: Live countdown clock to *Mi Noche Mi Adoracion (1st Nov 2026)*.
- **Past Replays Archive**: Filterable on-demand library.

### 5. 💳 Direct Giving & Seed Channels (No Third-Party Fees)
- **Direct Mobile Money & Bank Transfer**:
  - **MTN MoMo**: `025 711 2267` (David Amoah / Min David Inkoom)
  - **Telecel Cash**: `050 009 8877` (David Nana Kweku Amoah)
  - **Fidelity Bank Ghana**: `2030763999318` (David Nana Kweku Amoah)
- **WhatsApp Seed Notification**: Pre-filled message dispatched to the ministry altar.
- **Celebration Animation**: Confetti burst & scriptural blessing modal upon commitment.

### 6. 🎟️ Digital Event Passes (*Mi Noche Mi Adoracion*)
- Interactive registration for General Admission (Free), VIP Kingdom Partner, and Golden Sponsor.
- Client-side scannable QR ticket generation via `QRCode.js`.

### 7. 🖼️ Authentic Client Stage Photography & Logo
- Uses only the official `iD` ministry logo (`assets/logo.jpg`) and authentic stage photos:
  - Photo 0: White shirt with Yamaha keyboards (Hero)
  - Photo 1: Yellow African tunic with mic (About & Anointing)
  - Photo 2: Dark suit open-hand surrender (Prophetic Release)
  - Acoustic intimacy sessions, crusade stages, and official contact flyer.

---

## 🛠️ Stack Architecture

- **Next.js 14 (App Router)**:
  - Route components in `/components/admin`
  - Pages and layouts in `/app/admin` (`/login`, `/dashboard`)
  - API Routes: `/api/admin/auth/login`, `/api/admin/auth/logout`, `/api/admin/auth/me`, `/api/admin/auth/csrf`
  - Cryptography & Auth: `bcryptjs` for password hashing, `jsonwebtoken` for secure JWT cookies
- **Static Single-Page Application (`index.html`)**:
  - Complete zero-build standalone deployment capable of running directly in any modern browser.
  - Tailwind CSS, Three.js, Lucide Icons, Canvas-Confetti, QRCode.js.

---

## 🚀 Running Locally

### Option A: Static Single Page
Open `index.html` directly in any web browser, or serve via:
```bash
npx serve .
# or
python -m http.server 3000
```
Access at `http://localhost:3000`.

### Option B: Next.js Production Build
```bash
npm install
npm run dev
```
Access Admin login at `http://localhost:3000/admin/login` or footer link.
- **Admin Email**: `admin@davidinkoom.org`
- **Default Password**: `Anointing2026!`
- **Shortcut**: `Ctrl + Shift + A`
"# david-inkoom-ministry" 
