import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useTheme
} from '@mui/material';

const FoodGridMUI = () => {
  const theme = useTheme();
  const primaryColor = '#008b76';

  const foodItems = [
    {id: 1, title: 'Phở Hà Nội', desc: 'Tinh hoa ẩm thực Bắc Bộ với nước dùng thanh ngọt', image: 'https://th.bing.com/th/id/OIP.OV-6AC4Y9OeX-Is2M_nWFAHaGX?rs=1&pid=ImgDetMain'},
    {id: 2, title: 'Bánh Mì Sài Gòn', desc: 'Hương vị hòa quyện giữa Á - Âu độc đáo', image: 'https://th.bing.com/th/id/OIP.4ek4yjNQipDhoxjP-LgKhwHaJQ?rs=1&pid=ImgDetMain'},
    {id: 3, title: 'Cơm Tấm Sườn', desc: 'Hạt cơm dẻo thơm cùng sườn nướng đậm vị', image: 'https://th.bing.com/th/id/R.9c6b0d5433212ccef914997e1581bc78?rik=khkBWQW7qxsaQg&pid=ImgRaw&r=0'},
    {id: 4, title: 'Bún Chả Hà Nội', desc: 'Đặc sản truyền thống với nước chấm đặc biệt', image: 'https://th.bing.com/th/id/OIP.KR6pyE9gFQZOgUNNdySh9gHaFj?rs=1&pid=ImgDetMain'},
    {id: 5, title: 'Cao Lầu Hội An', desc: 'Sợi mì dai ngon cùng thịt xá xíu thơm lừng', image: 'https://th.bing.com/th/id/R.a3dd3b74ca25186439a1e5bf9f0b334b?rik=lQXKr8b%2byCe5BQ&riu=http%3a%2f%2flantanariverside.com%2fwp-content%2fuploads%2f2024%2f02%2fcao-lau-min.jpg&ehk=mYbdTqmSo3ec%2fHw7mP%2fy3KoQPyw%2ftL110jlsEG4V1xk%3d&risl=&pid=ImgRaw&r=0'},
    {id: 6, title: 'Bánh Xèo Miền Tây', desc: 'Vị giòn tan với nhân tôm thịt đầy đặn', image: 'https://th.bing.com/th/id/OIP.zLkq4t3UnFMDtHhkQJP9BwHaEL?rs=1&pid=ImgDetMain'},
  ];

  return (
    <Box sx={{ 
      maxWidth: 1400,
      mx: 'auto',
      px: 4,
      py: 8,
      bgcolor: 'background.paper'
    }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 700,
            color: primaryColor,
            mb: 2,
            [theme.breakpoints.down('md')]: { fontSize: '2rem' }
          }}
        >
          6 Ẩm Thực
        </Typography>
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 600,
            color: primaryColor,
            mb: 3
          }}
        >
          Tinh Hoa Ẩm Thực Việt
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            maxWidth: 800,
            mx: 'auto',
            color: 'text.secondary'
          }}
        >
          Khám phá những món ăn đặc trưng làm nên tên tuổi ẩm thực Việt Nam qua các vùng miền
        </Typography>
      </Box>

      {/* Food Grid */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {foodItems.map((item) => (
          <Grid item xs={12} md={4} key={item.id}>
            <Card sx={{ 
              height: '100%',
              width: 400,
              transition: 'transform 0.3s, boxShadow 0.3s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 3
              }
            }}>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
                sx={{
                  objectFit: 'cover',
                  width: '100%',
                  borderBottom: `4px solid ${primaryColor}`
                }}
              />
              <CardContent sx={{ px: 3, py: 3 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 700,
                    color: primaryColor,
                    mb: 1.5
                  }}
                >
                  {item.title}
                </Typography>
                <Box 
                  sx={{ 
                    width: 48,
                    height: 2,
                    bgcolor: primaryColor,
                    mb: 2
                  }} 
                />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    lineHeight: 1.6
                  }}
                >
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* View All Button */}
      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: primaryColor,
            '&:hover': { bgcolor: '#007a66' },
            px: 6,
            py: 1.5,
            borderRadius: 4,
            fontSize: '1.1rem'
          }}
        >
          XEM TẤT CẢ MÓN ĂN
        </Button>
      </Box>
    </Box>
  );
};

export default FoodGridMUI;