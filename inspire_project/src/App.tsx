import { AppFooter, AppHeader } from "./components/common";
import { ThemeProvider } from "./components/theme-providar";
const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="page">
        <AppHeader />
        <div className="container"></div>
        <AppFooter />
      </div>
    </ThemeProvider>
  );
};

export default App;
