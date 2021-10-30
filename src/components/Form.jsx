import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';




const Form = (props) => {

    const {input, setInput, color, setColor, onSubmitHandler, validation} = props

    return (
        <Box width={{xs: 350, sm: 450, md: 500, lg:600}} height={300} display='flex' justifyContent='center' alignItems='center'>
            <FormControl fullWidth>
                <form onSubmit={onSubmitHandler}>
                    <TextField
                        fullWidth
                        onChange={(event) => {setInput(event.target.value)}}
                        value={input}
                        label='Enter a Color'
                        error={validation}
                    />
                    <Button type='submit' variant="contained" fullWidth sx={{mt:1}}>Submit</Button>
                </form>
            </FormControl>
        </Box>
    )
}

export default Form
