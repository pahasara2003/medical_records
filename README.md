# Medical Record Web App

A PHP + MySQL based system for managing medical records, appointments, and more.

## Features
- User login/logout
- Patient record management
- Appointment scheduling
- Help/documentation page

## Technologies
- PHP 8.x
- MySQL
- HTML/CSS/JS
- [phpdotenv](https://github.com/vlucas/phpdotenv) for env vars

## Setup
1. Clone the repo
2. Create `.env` with your DB credentials
3. Import `/sql/schema.sql` into your MySQL server
4. Run using Apache or PHP built-in server:
   ```bash
   php -S localhost:8000 -t public
