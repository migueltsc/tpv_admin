import { Card, CardContent, Typography, Box } from '@mui/material'

export const Homepage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Card sx={{ maxWidth: 400, padding: 2, textAlign: 'center' }} >
                <CardContent>
                    <Typography variant='h4' component='div' gutterBottom>
                        Welcome to the admin panel tpv
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                        Aqui puedes modificar tus datos
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};