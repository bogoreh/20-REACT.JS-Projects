import { useTheme } from './hooks/useTheme';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import Button from './components/UI/Button';
import './styles/globals.css';
import './styles/themes/light.css';
import './styles/themes/dark.css';

function App() {
  const { theme } = useTheme();

  return (
    <div className="app">
      <div className="container">
        {/* Header */}
        <header style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '3rem',
          padding: '1rem 0'
        }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800' }}>
            <span className="gradient-text">Theme</span>
            <span className="text-primary">Switcher</span>
          </h1>
          <ThemeToggle />
        </header>

        {/* Main Content */}
        <main>
          <div className="card" style={{ marginBottom: '2rem' }}>
            <h2 className="text-primary" style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>
              Beautiful Theme Switching
            </h2>
            <p className="text-secondary" style={{ marginBottom: '1.5rem' }}>
              Experience seamless transitions between light and dark modes. 
              Your preference is automatically saved and will be remembered 
              on your next visit.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button variant="primary" size="medium">
                Primary Action
              </Button>
              <Button variant="secondary" size="medium">
                Secondary
              </Button>
              <Button variant="ghost" size="medium">
                Ghost Button
              </Button>
            </div>
          </div>

          {/* Feature Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {[1, 2, 3].map((item) => (
              <div key={item} className="card">
                <h3 className="text-primary" style={{ marginBottom: '0.5rem' }}>
                  Feature {item}
                </h3>
                <p className="text-secondary">
                  This card demonstrates how components adapt to the current theme. 
                  Notice the smooth transitions and consistent styling.
                </p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="card">
            <h3 className="text-primary" style={{ marginBottom: '1.5rem' }}>
              Current Theme: <span style={{ textTransform: 'capitalize' }}>{theme}</span>
            </h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1rem'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div className="text-primary" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                  ∞
                </div>
                <div className="text-secondary">Smooth Transitions</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="text-primary" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                  💾
                </div>
                <div className="text-secondary">Auto Save</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="text-primary" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                  🎨
                </div>
                <div className="text-secondary">Beautiful Design</div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer style={{ 
          marginTop: '3rem', 
          paddingTop: '2rem', 
          borderTop: `1px solid var(--border-color)`,
          textAlign: 'center'
        }}>
          <p className="text-secondary">
            Switch between themes effortlessly • Built with React & Vite
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;