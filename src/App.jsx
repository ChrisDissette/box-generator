import {useState} from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Box from '@mui/material/Box';

function App() {

  const [input, setInput] = useState('')
  const [color, setColor] = useState([])
  const [validation, setValidation] = useState(false)



  const onSubmitHandler = event =>  {
    event.preventDefault()

    if (input.length < 1) {
      setValidation(true)
      return
    }
    setColor([
      ...color,
      input
    ])
    setInput("")
    setValidation(false)
  
  }

  const onClearHandler = () => {
    let emptyArr = []
    console.log(`Empty Array: ${emptyArr}`)
    setColor(emptyArr)
  }

  return (
    <Box>
      <Header color={color} onClearHandler={onClearHandler} />
      <Box display='flex' justifyContent='center'>
          <Form onSubmitHandler={onSubmitHandler} color={color} setColor={setColor} input={input} setInput={setInput} validation={validation} setValidation={setValidation} />
      </Box>
      <Box display='flex' maxWidth='100%' flexWrap='wrap' justifyContent={{xs:'center', sm:'center', md:'center', lg:'flex-start'}}>
        {
          color.map((color) => (
            <Box sx={{height:250, width:250, m:2, border: '1px solid black', bgcolor:color}}>

            </Box>
          ))
        }
      </Box>
    </Box>
  );
}

export default App;
