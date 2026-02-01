# 🏠 Smart Rental System

A modern **property listing platform** inspired by PropertyPal, built with **Django** and designed for clean UX, simplicity, and future scalability.

This project is a **fully working MVP** that allows users to browse, search, and filter properties for rent or sale, with a professional, card-based UI.

---

## ✨ Features

### Public Users
- Browse properties in a modern grid layout
- Hero search experience (PropertyPal-style)
- Filter by:
  - Location (text search)
  - Rent / Sale
  - Maximum price
- Responsive design (desktop & mobile)
- Property detail pages with:
  - Large hero image
  - Clear pricing & specifications
  - Optional embedded map tile (per property)

### Admin Users
- Secure Django Admin panel
- Create, edit, delete property listings
- Manage pricing, type, bedrooms, bathrooms, and location
- Optional latitude/longitude for map display

---

## 🛠 Tech Stack

- **Backend:** Django (Python)
- **Frontend:** Django Templates (HTML + CSS)
- **Database:** SQLite (default, zero configuration)
- **Styling:** Custom CSS (PropertyPal-inspired)
- **Maps:** Google Maps embed (optional)
- **Version Control:** Git & GitHub

---
## 📂 Project Structure

rental-system/
│
├── manage.py
├── README.md
├── .gitignore
│
├── smart_rental/
│ ├── settings.py
│ ├── urls.py
│ ├── asgi.py
│ └── wsgi.py
│
├── properties/
│ ├── admin.py
│ ├── apps.py
│ ├── models.py
│ ├── views.py
│ ├── urls.py
│ └── migrations/
│
├── templates/
│ └── properties/
│ ├── base.html
│ ├── home.html
│ └── detail.html
│
└── static/
└── properties/
└── css/
└── style.css

---

## 🚀 Getting Started (macOS)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/rental-system.git
cd rental-system
```

### 2️⃣ Create and activate a virtual environment
```bash
python3 -m venv venv
source venv/bin/activate
```

### 3️⃣ Install dependencies
```bash
pip install django
```

### 4️⃣ Run database migrations
```bash
python manage.py migrate
```

### 5️⃣ Create an admin user
```bash
python manage.py createsuperuser
```

### 6️⃣ Run the development server
```bash
python manage.py runserver
```

Open in your browser:
- **Public site:** http://127.0.0.1:8000/
- **Admin panel:** http://127.0.0.1:8000/admin/

---

## 🧪 Adding Sample Properties

1. Log in to the **Admin Panel**
2. Navigate to **Properties**
3. Click **Add Property**
4. Fill in property details
5. Save

The property will immediately appear on the homepage.

---

## 🔍 Search & Filtering

The homepage supports search via query parameters:

```
/?location=Belfast&type=rent&max_price=1200
```

Supported filters:
- `location` — text search
- `type` — rent or sale
- `max_price` — maximum price

Filters are shareable and bookmarkable.

---

## 🗺 Map Support (Optional)

- Properties without coordinates display normally
- Properties with latitude and longitude display a small map tile on the detail page
- The homepage intentionally does **not** include a map for performance and clarity

---

## 🔮 Roadmap

Planned improvements:
- Image uploads and galleries
- Pagination
- Sorting options
- Saved properties ❤️
- AJAX-based filtering
- Django REST Framework API
- React frontend
- Production deployment (Docker / cloud)

---

## 🤝 Contributing

Contributions are welcome.

---

## 📄 License

This project is licensed under the **MIT License**.

---

⭐ If you find this project useful, feel free to star the repository!
