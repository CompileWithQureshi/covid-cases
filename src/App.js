import './App.css';
// import Card from 'react-bootstrap/Card';
import { Logo } from './component/logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        {/* <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              <h1>HEllo world</h1>
            </Card.Text>
          </Card.Body>
        </Card> */}
      </header>
    </div>
  );
}

export default App;
