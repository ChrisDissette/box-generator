import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



const Header = (props) => {

    const {color, onClearHandler} = props

    let empty = true

    if(color.length > 0){
        empty = false
    }

    return (
        <div>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' textAlign='center' mt={5} maxWidth='100%' mx={3}>
                <Typography  color={{xs:color, sm:color, md:color, lg:color}} variant='h2' fontWeight='bold'>Box Generator</Typography>
                <Typography variant='h3'>Enter a Color!</Typography>
                {
                    !empty ?
                    <Button type='text' onClick={onClearHandler}>Clear</Button>
                    :''
                }
                
            </Box>
        </div>
    )
}

export default Header
