# ⚽ Sports Matches - Live Football Fixtures App

A modern, responsive React application that displays live football matches and fixtures from around the world using the API-FOOTBALL service.

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.8-06B6D4?logo=tailwindcss)

## 🌟 Features

- **Real-time Match Data**: Fetches live football fixtures using API-FOOTBALL
- **Responsive Design**: Beautiful, mobile-first UI built with TailwindCSS
- **Loading States**: Skeleton loaders for better UX
- **Error Handling**: Comprehensive error management with user feedback
- **Team Logos**: Displays team crests and league emblems
- **Match Details**: Shows fixture date, time, venue, and status
- **Modern Icons**: Uses Lucide React for consistent iconography

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS 4.1.8
- **HTTP Client**: Axios
- **Date Handling**: date-fns
- **Icons**: Lucide React
- **API**: API-FOOTBALL (api-sports.io)

## 📦 Project Structure

```
sports_matches/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx       # App header with navigation
│   │   ├── Footer.tsx       # App footer with attribution
│   │   ├── MatchList.tsx    # Main matches container
│   │   ├── MatchCard.tsx    # Individual match display
│   │   └── MatchCardSkeleton.tsx # Loading placeholder
│   ├── hooks/              # Custom React hooks
│   │   └── useMatches.tsx  # Match data fetching logic
│   ├── services/           # API services
│   │   └── api.ts          # API-FOOTBALL integration
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts        # Match and API response types
│   ├── utils/              # Utility functions
│   │   └── dateUtils.ts    # Date formatting helpers
│   └── App.tsx             # Main application component
├── public/                 # Static assets
├── .env                    # Environment variables (API key)
└── package.json           # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- API-FOOTBALL API key (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sports_matches
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_API_FOOTBALL_KEY=your_api_key_here
   ```
   
   Get your free API key from [API-FOOTBALL](https://dashboard.api-football.com/)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔗 API Integration

This app uses the [API-FOOTBALL](https://www.api-football.com/) service to fetch live match data.

### Key Endpoints Used:
- `GET /fixtures` - Retrieve football fixtures by date
- Query Parameters:
  - `date`: Date in YYYY-MM-DD format
  - `league`: Optional league ID filter
  - `season`: Current season year

### Response Structure:
```typescript
interface MatchesResponse {
  get: string;
  parameters: Record<string, any>;
  errors: any[];
  results: number;
  response: Match[];
}
```

## 🎨 UI/UX Features

- **Responsive Grid Layout**: Adapts to different screen sizes
- **Skeleton Loading**: Smooth loading experience
- **Error States**: User-friendly error messages
- **Dark Mode**: System preference detection
- **Hover Effects**: Interactive card animations
- **Team Branding**: Dynamic team logos and colors

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📲 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## 🔄 State Management

The app uses React's built-in state management:

- **Local State**: `useState` for component-level state
- **Side Effects**: `useEffect` for API calls
- **Custom Hooks**: `useMatches` for match data logic
- **Props**: Data flow from parent to child components

## 🌐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_API_FOOTBALL_KEY` | Your API-FOOTBALL API key | Yes |

## 🚧 Error Handling

The app includes comprehensive error handling:

- **API Errors**: 401 (Unauthorized), 429 (Rate Limit)
- **Network Errors**: Connection timeouts, CORS issues
- **Data Errors**: Missing or malformed response data
- **User Feedback**: Clear error messages and retry options

## 🔮 Future Enhancements

- [ ] Live score updates with WebSocket
- [ ] Match predictions and statistics
- [ ] Favorite teams and personalization
- [ ] Push notifications for match events
- [ ] Historical match data and trends
- [ ] Multiple league support with tabs
- [ ] Advanced filtering (by team, competition)
- [ ] Match details modal with lineup information

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Data Provider**: [API-FOOTBALL](https://www.api-football.com/) for comprehensive football data
- **Icons**: [Lucide React](https://lucide.dev/) for beautiful SVG icons
- **Styling**: [TailwindCSS](https://tailwindcss.com/) for utility-first CSS
- **Build Tool**: [Vite](https://vitejs.dev/) for lightning-fast development

## 📞 Support

If you have any questions or run into issues:

1. Check the [API-FOOTBALL Documentation](https://www.api-football.com/documentation-v3)
2. Review the error messages in the browser console
3. Ensure your API key is valid and has sufficient quota
4. Open an issue in this repository

---

**Made with ⚽ and ❤️ for football fans worldwide**

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
