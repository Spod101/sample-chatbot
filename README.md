
# 🌸 EternalpEASE

**EternalpEASE** is an AI-powered funeral planning platform built to ease the burden of grieving families. It allows customers to inquire about funeral services, receive personalized theme recommendations, and book packages with minimal stress — all through a calm and respectful experience powered by AI.

---

## 🧠 Key Features

- AI-powered inquiry assistant using OpenAI (GPT-3.5)
- Dynamic funeral theme recommendations with image generation (DALL·E)
- Supabase integration for database, auth, and storage
- Customer, staff, and admin interfaces
- Responsive web frontend and mobile app
- Automated reminders for booking and preparations

---

## ⚙️ Tech Stack

### 🖥 Web (Frontend)
- **React** (via Next.js)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** – Modern, accessible component library
- **Supabase** – Backend as a service (auth, database, storage)
- **OpenAI API** – GPT & DALL·E for inquiry and theme generation

### 📱 Mobile (Frontend)
- **React Native** / **Expo**
- **Supabase JS Client**
- **OpenAI API**
- **NativeWind** (Tailwind CSS for React Native)

### 💻 Backend
- **Supabase** – Database, Auth, and Storage
- **OpenAI API** – Used for AI-based recommendations and theme generation

---

## 🛠️ Installation

### Web (Frontend)

```bash
# Clone the repo
git clone https://github.com/your-org/eternalpease.git
cd eternalpease

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your keys (Supabase, OpenAI, etc.)

# Run development server
npm run dev
```

---

### Mobile (Frontend via Expo)

```bash
# Navigate to mobile folder (if separated)
cd mobile

# Install dependencies
npm install

# Start Expo server
npx expo start
```

---

### Backend Setup (Supabase)

```bash
# Set up Supabase database
# Follow the Supabase setup guide and create tables as per the schema provided in the README
# Configure your Supabase URL and API key in .env.local

# Push your schema changes
supabase db push
```

---

### Key NPM Dependencies

```bash
# Web dependencies
npm install next react react-dom typescript tailwindcss @shadcn/ui clsx lucide-react @supabase/supabase-js openai

# For mobile
npm install expo react-native @supabase/supabase-js openai nativewind react-native-paper
```

---

## 🧪 Testing

- Coming soon — unit testing with **Jest** and **React Testing Library**

---

## 📂 Project Structure

```
/frontend
  ├── pages/
  ├── components/
  ├── lib/
  └── utils/

/mobile
  ├── screens/
  ├── components/
  └── assets/

/backend
  ├── supabase/
    └── schema.sql
  ├── migrations/
  └── api/
```

---

## 🏗️ Supabase Database Schema

### **Tables:**

1. **users**
   - `id` (uuid) - Primary Key
   - `email` (varchar) - User's email address
   - `password` (varchar) - Hashed password
   - `role` (varchar) - 'customer', 'admin', 'staff'

2. **funeral_packages**
   - `id` (uuid) - Primary Key
   - `name` (varchar) - Package name
   - `description` (text) - Details about the package
   - `price` (decimal) - Price of the package
   - `floral_arrangement` (text) - Details of flowers and decorations

3. **bookings**
   - `id` (uuid) - Primary Key
   - `user_id` (uuid) - Foreign Key to `users.id`
   - `package_id` (uuid) - Foreign Key to `funeral_packages.id`
   - `date` (timestamp) - Date of the booking
   - `status` (varchar) - Status of the booking ('pending', 'confirmed', 'completed')

4. **themes**
   - `id` (uuid) - Primary Key
   - `name` (varchar) - Theme name
   - `description` (text) - Details about the theme
   - `image_url` (varchar) - URL of the theme image
   - `floral_suggestions` (text) - Suggested flowers for the theme

---

## 📑 .env Sample

```env
# Supabase settings
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your_supabase_key

# OpenAI settings
OPENAI_API_KEY=your_openai_api_key

# Next.js settings
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Tailwind CSS settings
TAILWIND_CONFIG_PATH=./tailwind.config.js
```

---

## 💬 Contact & Contributors

Made with 💐 by **Team Hexagon**  
For inquiries: [hello@eternalpease.com](mailto:hello@eternalpease.com)

---
