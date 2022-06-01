import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { HomeView } from "./pages";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HomeView />
      </div>
    </ThemeProvider>
  );
}

export default App;
