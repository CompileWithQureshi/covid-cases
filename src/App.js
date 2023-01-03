import './App.css';
import Card from 'react-bootstrap/Card';
import { Logo } from './component/logo';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [data, steData] = useState([])
  const covidUrl = 'https://data.covid19india.org/data.json'
  const getCovidData = async () => {
    try {
      const res = await axios.get(covidUrl)
      // const actualData = await res.json();
      console.log(res.data.statewise[0]);
      steData(res.data.statewise[0])
    } catch (error) {
      console.error(error[0]);
    }

  }


  useEffect(() => {
    getCovidData()
  }, [])
  return (
    <div className="App">
      <Logo />
      <header className="App-header">
        <div className='container'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>Our</h1></Card.Title>
              <Card.Subtitle className="mb-2 text-muted"><span>Country</span></Card.Subtitle>
              <Card.Text>
                <h1>INDIA</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='container'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>Total</h1></Card.Title>
              <Card.Subtitle className="mb-2 text-muted"><span>RECOVERED</span></Card.Subtitle>
              <Card.Text>
                <h1>{data.recovered}</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='container'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>Total</h1></Card.Title>
              <Card.Subtitle className="mb-2 text-muted"><span>Confirmed</span></Card.Subtitle>
              <Card.Text>
                <h1>{data.confirmed}</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='container'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>Total</h1></Card.Title>
              <Card.Subtitle className="mb-2 text-muted"><span>Death</span></Card.Subtitle>
              <Card.Text>
                <h1>{data.deaths}</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='container'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>Total</h1></Card.Title>
              <Card.Subtitle className="mb-2 text-muted"><span>Active</span></Card.Subtitle>
              <Card.Text>
                <h1>{data.active}</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='container'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>Last</h1></Card.Title>
              <Card.Subtitle className="mb-2 text-muted"><span>Update</span></Card.Subtitle>
              <Card.Text>
                <h1>{data.lastupdatedtime}</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>


      </header>
    </div >
  );
}

export default App;
