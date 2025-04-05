# 🧪 Potion Brewing App Installer

Welcome to the **Potion Brewing App Installer** – a magical, interactive, and AI-powered app installer built for Harry Potter-themed Linux operating systems. With bubbling cauldrons, swirling potion effects, and spell commands, this project reimagines software installation as an enchanting potion-making experience. Designed with beginners, wizards, and curious Muggles in mind!

---

## ✨ Features

🔹 **Drag & Drop App Installation**  
Simply drag `.desktop` files (Linux app launchers) into the cauldron to "add ingredients" and install them with a magical brewing process.

🔹 **Animated Magical UI**  
Watch potion bubbles, smoke effects, glowing cauldrons, and sparkles animate as apps are installed.

🔹 **AI-Powered Agent.ai Integration**  
- **Intelligent App Recommendations** based on your system and installed apps.  
- **AI Troubleshooting** for failed installations with real-time suggestions.  
- **Voice Command Activation** using spells like _"Install Firefox"_ or _"Clear cauldron."_  
- **AI-Assisted App Removal** with optional alternatives and history tracking.

🔹 **Manual App Search & XP Unlocks**  
Search for apps manually or earn XP to unlock hidden apps and secret spells.

🔹 **Gamified XP System**  
Earn experience points for using features, solving clues, and exploring the app. Unlock themes, hidden files, and Horcruxes.

🔹 **Tabbed UI**  
Switch between installation and uninstallation tabs seamlessly.

🔹 **History Log**  
Automatically saves and displays your potion (installation) history.

---

## 🖼️ Screenshots

| Brewing Interface | AI Recommendations | Voice Command |
|-------------------|--------------------|----------------|
| ![Brewing](./screenshots/cauldron.png) | ![AI Recommend](./screenshots/recommendations.png) | ![Voice](./screenshots/voice-command.png) |

---

## 🧰 Prerequisites

Before you begin, make sure you have the following installed:

1. **Operating System**: Linux Mint or any Ubuntu-based distro  
2. **Node.js**: v18 or above  
   - Install via: https://nodejs.org/en/download
3. **npm**: Comes with Node.js (use `npm -v` to check)
4. **Git**: Version control tool  
   - Install via: `sudo apt install git`
5. **Electron**: Desktop app framework  
   - Will be installed with project dependencies

💡 _No prior programming experience needed — just follow the steps!_

---

## 📦 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/potion-brewing-installer.git
cd potion-brewing-installer
```

### 2. Install Dependencies
```bash
npm install
```
This command installs Electron and other required libraries.

### 3. Run the App
``` bash
npm start
```
The magical brewing app will open in a window!

---

## 🧙 Usage Instructions

### Step-by-Step

1. **Open the App**: Launch the app with `npm start`.
2. **Drag `.desktop` Files**: Drop Linux app files into the cauldron.
3. **Brew the Potion**: Click the “Brew” button to start installing the app.
4. **Watch the Magic**: Experience a magical animation as your app is installed.
5. **Check History**: View installed app logs.
6. **Use AI Features**:
   - Click "🔍 Recommend Apps" for Agent.ai to suggest useful software.
   - Tap "🎙️ Voice Spell" to use spell commands.
   - Click "🛠 Troubleshoot" if an installation fails.

---

## 🧙‍♂️ Spell Commands (Voice Control)

To activate voice input, click the microphone icon in the app. Speak one of the following spells:

| Spell / Command         | Action                                      |
|-------------------------|---------------------------------------------|
| _"Install Firefox"_     | Adds Firefox to cauldron & installs it      |
| _"Clear cauldron"_      | Removes all dropped apps                    |
| _"Install all ingredients"_ | Installs everything in the cauldron       |
| _"Open settings"_       | Opens the settings menu                     |
| _"Help me"_             | Shows help overlay and documentation        |

---

## 🌟 XP System & Unlockables

The app includes a gamified XP (Experience Point) system.

| Action                                | XP Earned |
|--------------------------------------|-----------|
| Installing an app                    | +10 XP    |
| Using a voice command                | +5 XP     |
| Solving a hidden riddle              | +25 XP    |
| Discovering a Horcrux (hidden file)  | +50 XP    |
| Exploring a new feature or tab       | +2 XP     |

### XP Unlockables

| XP Threshold | Unlockable                  |
|--------------|-----------------------------|
| 50 XP        | New spell-themed UI theme   |
| 100 XP       | Hidden "Forbidden Apps" tab |
| 200 XP       | Custom brew effects & colors|

XP is stored locally and tracked per session.

---

## 📂 Supported File Types

- `.desktop` (Standard Linux app launcher files)
- `.sh` (Shell install scripts)
- `.deb` (Planned)
- `.tar.gz` (Future support)

---

## 🛠 Troubleshooting

| Problem                         | Solution                                       |
|----------------------------------|------------------------------------------------|
| App fails to install             | Click “🛠 Troubleshoot” to activate Agent.ai help |
| Voice command not working        | Ensure microphone permissions are enabled     |
| XP not increasing                | Make sure the XP module is turned on in settings |
| Blank or glitchy UI              | Restart the app or clear the cache            |

---

## 🎨 Customization

You can customize the app easily!

- **Themes & Textures**: Edit `styles.css` for parchment, font, or animation tweaks.
- **Animations**: Modify `effects.js` for smoke, sparkles, glow, etc.
- **XP System Rules**: Found in `xp.js` or integrated logic in `renderer.js`
- **Agent.ai Behavior**:
   - Go to your [Agent.ai dashboard](https://docs.agent.ai)  
   - Set up your **Agent Personality**, API key, and behavior rules

---

## 🤝 Contribution

We welcome your contributions! Here's how to contribute:

1. **Fork the repository**
2. **Create a new branch**  
   ```bash
   git checkout -b feature/my-feature
   ```
3. **Make your Changes**
4. **Commit your code**
   ```bash
   git commit -m "Add my magical feature"
   ```
6. **Push to Github**
   ```bash
   git push origin feature/my-feature
   ```
7. **Magical ideas, UI designs, spells, and bug fixes are all welcome!**

## 🪄 Credits

- ⚡ Agent.ai – For AI integration and smart recommendations
- 🧠 OpenAI – For the foundational intelligence behind the assistant
- 🎨 The Wizarding World – For inspiration, aesthetics & spells
- 🧑‍💻 Your name here – Project wizard and developer
- 🔮 All Contributors – Thank you for adding magic to the project
