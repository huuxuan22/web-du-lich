import React from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Paper,
  Fade
} from '@mui/material';
import {
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  Google,
  Facebook
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const backgroundImage = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

const Background = styled('div')({
  position: 'relative',
  height: '100vh',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  fontFamily: `'Segoe UI', 'Roboto', sans-serif`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.45)'
  }
});

const LoginForm = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: 450,
  padding: theme.spacing(4),
  borderRadius: 20,
  boxShadow: theme.shadows[10],
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(8px)',
  fontFamily: `'Segoe UI', 'Roboto', sans-serif`,
}));

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <Background>
      <Fade in timeout={800}>
        <LoginForm elevation={6}>
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 700, color: '#008b76' }}
            >
              Đăng Nhập
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Chào mừng trở lại! Vui lòng đăng nhập để tiếp tục
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="action" />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Mật khẩu"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 3 }}
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              size="large"
              sx={{
                py: 1.5,
                mb: 2,
                backgroundColor: '#008b76',
                fontWeight: '600',
                '&:hover': {
                  backgroundColor: '#007462'
                }
              }}
            >
              Đăng Nhập
            </Button>

            <Box textAlign="center" mb={3}>
              <Typography variant="body2" color="text.secondary">
                Hoặc đăng nhập bằng
              </Typography>
            </Box>

            <Box display="flex" justifyContent="center" gap={2} mb={3}>
              <IconButton
                sx={{
                  backgroundColor: '#DB4437',
                  color: 'white',
                  borderRadius: '50%',
                  '&:hover': { backgroundColor: '#c1351d' }
                }}
              >
                <Google />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: '#4267B2',
                  color: 'white',
                  borderRadius: '50%',
                  '&:hover': { backgroundColor: '#365899' }
                }}
              >
                <Facebook />
              </IconButton>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box textAlign="center" mt={2}>
              <Typography variant="body2">
                Chưa có tài khoản?{' '}
                <Button
                  color="primary"
                  size="small"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    color: '#008b76',
                    '&:hover': { color: '#007462' }
                  }}
                  onClick={() => {navigate(`/register`)}}
                >
                  Đăng ký ngay
                </Button>
              </Typography>
            </Box>
          </form>
        </LoginForm>
      </Fade>
    </Background>
  );
};

export default Login;
