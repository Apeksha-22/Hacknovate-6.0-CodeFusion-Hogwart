# 🧙‍♂️ Hogwarts OS – A Magical Linux-Based Operating System

Welcome to **Hogwarts OS**, a fully immersive and wizardry-themed operating system built on top of Linux Mint Cinnamon 21.3. Inspired by the world of **Harry Potter**, this project reimagines the computing experience with a unique blend of **custom themes, spell-based terminal commands, AI-powered tools, gamification, and interactive visuals**.

Developed as part of the **Hackanovate Hackathon** at **ABES Institute**, Hogwarts OS is designed to combine fun, functionality, and fantasy for all magic and tech enthusiasts.

---

## 🧩 Problem Statement

Most operating systems offer a generic, monotonous user experience, especially for creative users and students who crave engagement, personalization, and intuitive design.

Hogwarts OS solves this by:

- ✨ Turning the entire OS into a **magical universe** with house-based personalization.
- 🧠 Embedding **AI-powered tools** for intuitive interactions.
- 🧪 Introducing **gamification, XP, and unlockables** to make computing enjoyable and rewarding.
- 💻 Offering both **a full OS experience** and **installable modules**, making it versatile for all users.

---

## ✨ Key Features

| Feature | Description |
|--------|-------------|
| 🧙 **Sorting Hat on First Login** | Assigns a Hogwarts House (Gryffindor, Ravenclaw, Hufflepuff, or Slytherin) via random choice or quiz, dynamically applying matching themes, wallpapers, and system sounds. |
| 🗺️ **Marauder’s Map File Explorer** | Electron-based custom file explorer with parchment UI, spell-based navigation, XP unlocking, folder animations, and **Agent AI** for semantic search and smart file organization. |
| 🔥 **House-Themed Common Room Desktop** | A fullscreen control panel with animated fireplace, house points tracker, Daily Prophet widget, Owl Post notifications, and ambient visuals. |
| ✨ **Spell-Based Terminal** | Replace boring commands with magical spells like `Lumos` (light mode), `Nox` (dark mode), `Accio` (search), `Evanesco` (delete), `Expelliarmus` (kill process), and more. |
| 📬 **Owl Post Notification System** | System notification system with parchment-styled popup UI and owl sounds for alerts, messages, and system events. |
| 🧪 **Potion Brewing App Installer** | An animated app installer where users drag and drop “ingredients” (app components) to brew and install applications magically. |
| 🧠 **AI-Powered Portrait Assistant** | A living portrait built using Agent AI / Akash Chat API, providing help, commands, and interaction like Dumbledore’s enchanted frame. |
| 🔐 **Patronus Lock Screen** | Custom glowing Patronus-themed lock/login screen via GDM customization. |
| 🎮 **Gamification Layer** | Earn XP, unlock secret Hogwarts areas, track House Points, uncover hidden folders/passages, and access the **Room of Requirement**. |
| 🧹 **Secret Mode Switches** | Spell commands like `Homenum Revelio` (show users), `Sectumsempra` (force delete), and more. |
| 🧙‍♀️ **Quidditch Mini-Game** | A fun Quidditch game built using Python & Pygame for entertainment. |

---

## 🧰 Architecture Overview

- **Frontend**: Electron (for file explorer & UI tools), HTML/CSS, GTK theming, Cinnamon customizations  
- **Backend**: Node.js (for Electron apps), Python (for AI, automation, games), Shell scripting  
- **AI Integration**: Agent AI / Akash Chat for smart assistant and search  
- **System Customization**: GDM, Plymouth, Grub, GNOME/GTK for visuals, startup logos, and lock screen  

📌 _Full system architecture diagram available in `/docs/architecture.png`_

---

## 🛠️ How to Use Hogwarts OS

We offer **two flexible options** for trying out Hogwarts OS:

### 🧙‍♂️ Option 1: Full Hogwarts OS (ISO File)

Get the **ready-to-install Hogwarts OS ISO** – a fully pre-configured Linux Mint distro with all features, themes, and magic built-in.

> ✅ Best for immersive experience with everything out-of-the-box  
> ⚠️ Requires VirtualBox, bare metal, or a USB installer

📥 [Download Hogwarts OS ISO](#)

---

### 🧩 Option 2: Modular App Installation on Linux Mint

Install individual magical components (Sorting Hat, Marauder’s Map, Owl Post, etc.) on **your existing Linux Mint** system.

> ✅ Best for developers and users who want to add only selected features  
> 💡 Each module comes with installation guide, setup script & dependencies

📁 Visit the [`modules/`](#) folder to get started!

---

## 📁 Repository Structure
hogwarts-os/
├── iso/                        # Complete OS build files (for full ISO)
├── modules/                   # Individual magical features/modules
│   ├── sorting-hat/
│   ├── marauders-map/
│   ├── owl-post/
│   ├── potion-installer/
│   ├── enchanted-portrait/
│   └── ...
├── assets/                    # Wallpapers, animations, icons
├── scripts/                   # Startup, theme switchers, and spell-terminal logic
├── docs/                      # Architecture diagrams, presentation, etc.
├── README.md
└── LICENSE

---

## 🧪 Tech Stack

| Stack | Description |
|-------|-------------|
| 🧰 OS Base | Linux Mint Cinnamon 21.3 |
| 🎨 UI | Electron, HTML, CSS, GTK, Plymouth |
| 🧠 AI | Agent AI, Akash Chat API |
| 🐍 Logic | Node.js, Python, Bash |
| 🎮 Game | Python + Pygame |
| 🖼️ Graphics | Blender (optional), GIMP, Inkscape |

---

## 📸 Screenshots

> Coming soon in `/docs/screenshots/`

---

## 🎥 Demo Video

> Coming soon in `/docs/demo.mp4`

---

## 🙌 Team Credits

> Project by: **[Your Team Name / Members]**  
> Built with 💛 at **Hackanovate Hackathon** – ABES Institute of Technology

---

## 🛡️ License

This project is licensed under the [MIT License](LICENSE).

---

### ⭐ If you love magic + Linux, consider giving us a star!
