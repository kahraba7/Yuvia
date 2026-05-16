# Perfecta Clinics — Clinic Template

## ✏️ How to Edit This Template

**All editable content lives in ONE file: `clinic-data.js`**

Open `clinic-data.js` and you'll find clearly labeled sections:

| Section | What it controls |
|---|---|
| `CLINIC` | Name, logo, phones, WhatsApp, social links, hours, trust stats, hero image |
| `FOUNDER` | Featured doctor — photo, name, credentials, bio paragraphs |
| `DOCTORS` | Team grid cards (photo, name, role, booking link) |
| `BA_IMAGES` | Before & After gallery (filenames + treatment labels, EN + AR) |
| `REVIEWS` / `REVIEWS_AR` | Testimonial cards (EN + AR) |
| `FAQS` / `FAQS_AR` | FAQ accordion (EN + AR) |
| `SERVICES_DEFAULT` | Fallback services (if Firestore is empty) |
| `AVAILABILITY` | Booking time slots by day (0=Sun … 6=Sat) |

---

## 🖼️ Media Files

All image/video files should be placed in the **root folder** (same level as `index.html`).

Current media files:
- `hero_new.jpg` — Hero background image
- `dr_entsar.jpg` — Founder doctor photo
- `dr_mai.jpg` — Team doctor photo
- `ba_1.jpg` … `ba_8.jpg` — Before & After gallery images
- `perfecta_logo.jpg` — Clinic logo

To change a file, replace it with a same-named file, or update the filename in `clinic-data.js` under `CLINIC.heroImage` or `DOCTORS[].img` or `BA_IMAGES[].img`.

> **Note:** The `assets/` folder contains duplicates of the root images from an earlier version. It is not used by the site and can be deleted.

---

## 🔥 Firebase

Edit `firebase-config.js` to point to a different Firebase project. Never commit real API keys to public repos.

---

## 🌐 Deployment

Deploy with Netlify (drag & drop the folder, or connect to GitHub). The `netlify.toml` is already configured.
