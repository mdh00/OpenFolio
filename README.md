# OpenFolio

A modern, customizable portfolio built with Next.js, Tailwind CSS, and TypeScript. Features dark/light mode, modular sections, and centralized data management.

---

## 🚀 Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone [https://github.com/your-username/your-portfolio.git](https://github.com/mdh00/OpenFolio)
   cd your-portfolio
   ```

2. **Install dependencies (use pnpm):**
   ```sh
   pnpm install
   ```

3. **Set up environment variables:**
   - Create a `.env.local` file in the root directory.
   - Add your SMTP credentials for contact form email:
     ```
     SMTP_USER=your_gmail_address@gmail.com
     SMTP_PASS=your_gmail_app_password
     ```

4. **Run the development server:**
   ```sh
   pnpm dev
   ```
   - Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌍 Live Demo  

🔗 [https://openfolio.netlify.app/](https://openfolio.netlify.app/)  


## 🛠️ Customization

- **Portfolio Data:**  
  Edit `components/data.ts` to update your name, bio, skills, projects, and contact info.

- **Theme & Styles:**  
  Modify `app/globals.css` for custom colors, gradients, and animations.

- **Sections:**  
  Each section (Hero, Skills, Projects, Contact) is a separate component in `components/`.  
  You can add, remove, or customize sections as needed.

- **Contact Form:**  
  The contact form sends messages to your email using Nodemailer.  
  Update SMTP settings in `.env.local` as needed.

---

## 🤝 Contributing

We welcome contributions! To contribute:

1. **Fork the repository** and create your branch:
   ```sh
   git checkout -b feature/your-feature
   ```

2. **Make your changes** and commit:
   ```sh
   git commit -m "Add your feature"
   ```

3. **Push to your fork** and open a Pull Request:
   ```sh
   git push origin feature/your-feature
   ```

4. **Describe your changes** clearly in the PR.

### Guidelines

- Use clear, descriptive commit messages.
- Follow the existing code style and structure.
- Document any new features or changes in the README.
- Be respectful and constructive in code reviews and discussions.

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

## 💡 Questions or Issues?

- For help or feature requests, open an issue on GitHub.
- For direct contact, use the portfolio's contact form.

---
