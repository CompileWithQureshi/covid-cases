import './App.css';
import Card from 'react-bootstrap/Card';
import { Logo } from './component/logo';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";



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
        <motion.div whileHover={{ scale: 1.2 }} className='container'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='title'> <h1>Our</h1></Card.Title>
              <Card.Subtitle className="mb-2 text-muted title" ><span>Country</span></Card.Subtitle>
              <Card.Text>
                <h1 className='title'>INDIA</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className='container'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='title'><h1>Total</h1></Card.Title>
              <Card.Subtitle className="mb-2 text-muted title"><span>RECOVERED</span></Card.Subtitle>
              <Card.Text>
                <h1 className='title'>{data.recovered}</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className='container'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='title'><h1>Total</h1></Card.Title>
              <Card.Subtitle className="mb-2 text-muted title"><span>Confirmed</span></Card.Subtitle>
              <Card.Text>
                <h1 className='title'>{data.confirmed}</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className='container'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='title'><h1>Total</h1></Card.Title>
              <Card.Subtitle className="mb-2 text-muted title"><span>Death</span></Card.Subtitle>
              <Card.Text>
                <h1 className='title'>{data.deaths}</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className='container'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='title'><h1>Total</h1></Card.Title>
              <Card.Subtitle className="mb-2 text-muted title"><span>Active</span></Card.Subtitle>
              <Card.Text>
                <h1 className='title'>{data.active}</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className='container'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='title'><h1>Last</h1></Card.Title>
              <Card.Subtitle className="mb-2 text-muted title"><span>Update</span></Card.Subtitle>
              <Card.Text>
                <h1 className='title'>{data.lastupdatedtime}</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>


      </header>
    </div >
  );
}

export default App;
