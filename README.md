# Select Skip – Choose Your Skip Size  
*A feature of WeWantWaste.co.uk built with React + Vite*

This component powers the **"Select Skip"** step on [WeWantWaste.co.uk](https://wewantwaste.co.uk), allowing users to choose the appropriate skip size for their waste removal needs.

## 🔧 Tech Stack

- ⚛️ **React** – for building a responsive and interactive skip selection UI
- ⚡ **Vite** – for fast bundling, HMR, and lightning-quick development
- 📝 **JSDoc** – used to document all components and logic
- 📄 Documentation is auto-generated and available at:  
  👉 **`{your-domain}/docs/index.html`**
- **Axios** – for handling HTTP requests and managing interceptors
- **React Query** – for caching, background updates, and simplified async state

## 📁 Usage

This feature allows users to:
- View available skip sizes (mini, midi, builder, etc.)
- See pricing and descriptions for each size
- Select a skip and proceed to the next booking step

## 📜 Scripts

| Command            | Description                                  |
|--------------------|----------------------------------------------|
| `npm run dev`      | Starts the development server with Vite      |
| `npm run build`    | Builds the app for production                |
| `npm run preview`  | Previews the production build                |
| `npm run docs`     | Generates documentation using JSDoc          |

## 🌐 API Layer Setup

This project uses a clean service-based structure for API calls.

### 📁 File Structure
```bash
src/
├── services/                  # Central API interaction layer
│   ├── apiClient.js           # Axios instance with base config & interceptors
│   ├── skipsService.js        # Skip-related API calls
│   └── ...                    # Add more
├── hooks/                     # React Query-based reusable hooks
│   ├── useSkips.js            # React Query hook for fetching skips
│   └── ...                    # Add more
└── App.jsx / main.jsx         # App entry point with React Query setup
```
## 🌍 Environment Variables

This project uses environment variables to configure API endpoints and other runtime options.

- `.env` is **ignored** via `.gitignore` to keep sensitive data private
- `.env.example` is provided as a template for contributors

### 🛠 Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Update the variables as needed:
  ```bash
  VITE_API_BASE_URL=https://api.wewantwaste.co.uk/api
  ```
3. Access variables in code using import.meta.env:
  ```bash
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  ```