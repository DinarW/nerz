import './styles/index.scss';
import { useTheme } from "./theme/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h1>Nerz</h1>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  )
}

export default App;
