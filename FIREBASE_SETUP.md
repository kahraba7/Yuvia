# REJOV Clinic — Firebase + Netlify Setup Guide

## Overview
Bookings are stored in **Firebase Firestore** (free tier, no backend needed).  
The site is deployed on **Netlify** with a one-minute build step that injects your Firebase keys securely.

---

## Step 1 — Create a Firebase Project (5 min)

1. Go to https://console.firebase.google.com
2. Click **"Add project"** → name it `rejov-clinic` → Continue
3. Disable Google Analytics (optional) → **Create project**

### Create Firestore Database
1. Sidebar → **Build → Firestore Database** → **Create database**
2. Choose **"Start in test mode"**
3. Region: `europe-west2` (closest to Middle East) → Done

### Get Your Config Keys
1. ⚙️ **Project Settings** (gear icon, top-left)
2. Scroll to **"Your apps"** → click `</>` Web → Register app (`rejov-web`)
3. Copy the `firebaseConfig` values — you'll need them in Step 2

---

## Step 2 — Deploy to Netlify (3 min)

### Option A — Drag & Drop (easiest)
1. Go to https://app.netlify.com → **Add new site → Deploy manually**
2. Drag the entire `rejov-netlify` folder onto the page
3. Netlify deploys instantly (no build needed for first drop)
4. Then set env vars (Step 3) and trigger a redeploy

### Option B — GitHub (recommended for updates)
1. Push this folder to a GitHub repo
2. Netlify → **Add new site → Import from Git** → pick the repo
3. Build command: `node generate-config.js`  
   Publish directory: `.`  
   (These are already set in `netlify.toml`)
4. Set env vars (Step 3) → Deploy site

---

## Step 3 — Add Environment Variables in Netlify

In Netlify dashboard → **Site settings → Environment variables → Add a variable**:

| Variable name                  | Value (from Firebase)          |
|-------------------------------|-------------------------------|
| `FIREBASE_API_KEY`            | your `apiKey`                 |
| `FIREBASE_AUTH_DOMAIN`        | your `authDomain`             |
| `FIREBASE_PROJECT_ID`         | your `projectId`              |
| `FIREBASE_STORAGE_BUCKET`     | your `storageBucket`          |
| `FIREBASE_MESSAGING_SENDER_ID`| your `messagingSenderId`      |
| `FIREBASE_APP_ID`             | your `appId`                  |

After adding all 6 variables → **Trigger deploy** (Deploys tab → Trigger deploy).

---

## How the Build Works

At deploy time, `generate-config.js` reads the env vars above and writes  
`firebase-config.js` — so your secret keys never live in source control.

---

## Firestore Security (Before Going Live)

Test mode expires after 30 days. Before launch, update rules:

1. Firebase Console → **Firestore Database → Rules**
2. Replace with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /bookings/{bookingId} {
      allow create: true;
      allow read, update: if request.auth != null;
    }
  }
}
```

---

## Free Tier Limits (Spark Plan — free forever)
- 50,000 reads/day · 20,000 writes/day · 1 GB storage

More than enough for a clinic.
