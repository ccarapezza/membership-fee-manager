import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CodeloIcon from '../../assets/icons/CodeloIcon';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { getCsrfToken, getProviders, getSession, signIn, useSession } from "next-auth/react"
import 'animate.css';
import Copyright from '../../src/Copyright';
import { useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { useRouter } from 'next/router';
import Loading from '../../src/Loading';


export default function SignIn({ csrfToken }) {
    const { status } = useSession();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        setLoading(true);
        setErrorMessage("");

        const data = await signIn('credentials', { email, password, redirect: false });
        if(data.status === 200){
            router.push(`${window.location.origin}/dashboard`)
        }else if(data.status === 401){
            setErrorMessage("Usuario y/o contraseñas incorrectos.")
        }else{
            setErrorMessage("ERROR "+data.status+": Contáctese con el administrador.")
        }
        setLoading(false);
    }

    return (
        <>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random/?cannabis-bud)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {loading||status!=="unauthenticated"?
                            <Loading/>
                            :
                            <>
                                <CodeloIcon />
                                <Typography component="h1" variant="h5">
                                    Portal de Socios
                                </Typography>
                                <small>Cogollos del Oeste</small>
                                <Box sx={{ mt: 1 }}>
                                    <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        value={email}
                                        error={errorMessage?true:false}
                                        onChange={(e) => { setEmail(e?.target?.value) }}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        value={password}
                                        error={errorMessage?true:false}
                                        onChange={(e) => { setPassword(e?.target?.value) }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Recordar"
                                    />
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                        onClick={() => { handleLogin() }}
                                    >
                                        Ingresar
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="#" variant="body2">
                                                Olvidaste tu contraseña?
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    <Copyright sx={{ mt: 5 }} />
                                </Box>
                            </>
                        }
                    </Box>
                </Grid>
            </Grid>
            <Snackbar open={errorMessage?true:false} onClose={()=>setErrorMessage("")} autoHideDuration={6000} anchorOrigin={{ vertical:"bottom", horizontal:"right" }}>
                <Alert severity="error">
                    {errorMessage}
                </Alert>
            </Snackbar>
        </>
    );
}

export async function getServerSideProps(context) {
    
    const { req } = context;
    const session = await getSession({ req });
    console.log("session", session)
    /*
    if (session) {
        return {
            redirect: { destination: "/" },
        };
    }
    */

    return {
        props: {
            /*
            providers: await getProviders(context),
            csrfToken: await getCsrfToken(context),
            */
        },
    };
}