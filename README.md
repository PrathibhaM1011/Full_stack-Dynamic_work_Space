# Worksy React Project

## Introduction

I started this project to build a modern, WeWork-inspired workspace discovery and merchant listing platform using React. My goal was to create a visually appealing, responsive, and easy-to-use web app where users can find flexible workspaces and merchants can list their properties.

---

## How I Built This Project

### 1. **Project Setup**

- I created the project using [Create React App](https://create-react-app.dev/):
  ```bash
  npx create-react-app React-Project
  ```
- I organized the folder structure for clarity, separating components, pages, and assets.

### 2. **Installing Dependencies**

To enhance the UI and add animations, I installed these packages:
- **react-icons** for scalable vector icons:
  ```bash
  npm install react-icons
  ```
- **framer-motion** for smooth animations:
  ```bash
  npm install framer-motion
  ```
- **react-intersection-observer** for scroll-based animations:
  ```bash
  npm install react-intersection-observer
  ```
- **json-server** for a mock backend API using `db.json`:
  ```bash
  npm install --save-dev json-server
  ```

### 3. **Setting Up db.json (Mock Backend)**

- I created a `db.json` file in the project root to simulate backend data for workspaces, merchants, or any other resources.
- Example structure for `db.json`:
  ```json
  {
    "workspaces": [
      { "id": 1, "name": "SkyTower", "city": "Hyderabad", "type": "Co Working Spaces" }
    ],
    "merchants": [
      { "id": 1, "name": "Elite Spaces", "tagline": "Luxury meets productivity" }
    ]
  }
  ```
- To run the mock backend, I use:
  ```bash
  npx json-server --watch db.json --port 5000
  ```
- This exposes a REST API at `http://localhost:5000` which I use in my React app for fetching and posting data.

### 4. **Building the Navbar**

- I created a `Navbar.jsx` component with dropdown menus for Centres, Workspaces, and Referrals.
- The navbar is fully responsive, includes a phone number, login, and a "Get in touch" button.
- I used React state to handle dropdowns and embedded CSS for styling.

### 5. **Adding the Video Banner**

- I made a `VideoBanner.jsx` component with a full-width background video and a glassmorphism effect.
- The banner includes a title, two dropdowns (for city and solution), and an "Explore" button.
- I used a sample video in `src/assets/video.mp4` (you can replace it with your own).

### 6. **Explore Section**

- I built an `Explore.jsx` component to highlight workspace solutions.
- The heading and "View all" link are aligned left and right, with a subheading below.
- I used flexbox and padding for a clean, balanced look.

### 7. **Merchant Sections**

- **MerchantSecOne.jsx:**  
  I created a section for merchant onboarding with a large heading, description, bullet points, and a right-aligned image. Font sizes were increased for clarity.
- **MerchantSecTwo.jsx:**  
  This section explains "Why List With Us?" using animated bullet points and large, colored icons. I used `framer-motion` for animation and `react-icons` for the icons.
- **MerchantSecThree.jsx:**  
  I showcased trusted merchants in a responsive grid of cards, each with an image, name, and tagline.

### 8. **Fetching Data from db.json**

- Wherever dynamic data is needed (like workspace or merchant lists), I fetch it from the mock API using `fetch` or `axios`:
  ```js
  useEffect(() => {
    fetch('http://localhost:5000/workspaces')
      .then(res => res.json())
      .then(data => setWorkspaces(data));
  }, []);
  ```
- This allows the app to simulate real backend interactions.

### 9. **Styling**

- I used a mix of inline styles and embedded `<style>` tags for quick and easy customization.
- The design is fully responsive, adapting to mobile and desktop screens.
- I focused on a modern, clean, and premium look throughout the app.

---

## How to Run the Project

1. **Install all dependencies:**
   ```bash
   npm install
   ```
2. **Start the mock backend (db.json):**
   ```bash
   npx json-server --watch db.json --port 5000
   ```
3. **Start the development server:**
   ```bash
   npm start
   ```
4. **Open your browser and go to:**  
   [http://localhost:3000](http://localhost:3000)

---

## Customization

- **Change the video:**  
  Replace `src/assets/video.mp4` with your own video for the banner.
- **Edit dropdowns:**  
  Update city and solution options in `VideoBanner.jsx`.
- **Update merchants:**  
  Edit the merchants array in `MerchantSecThree.jsx` or update `db.json` for dynamic content.
- **Change colors or fonts:**  
  Adjust inline styles or add a global CSS file for further theming.

---

## Dependencies Used

- **React** – UI framework
- **react-icons** – For icons
- **framer-motion** – For animations
- **react-intersection-observer** – For scroll-based effects
- **json-server** – For mock backend API

---

## Notes

- All components are modular and easy to modify.
- The project is fully responsive and mobile-friendly.
- You can add routing with `react-router-dom` if you want to make it multi-page.
- For production, optimize images and video for faster loading.

---

**Project is in progress. More features**