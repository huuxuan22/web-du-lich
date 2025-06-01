import React from 'react';
import { Box, Typography, Paper, Grid, Chip, Rating, Button, useMediaQuery, useTheme } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
`;

const FavoriteDestinations = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const destinations = [
    { 
      name: 'Hà Nội', 
      visitors: '14,963', 
      image: 'https://th.bing.com/th/id/OIP.-vqadOV2iJuwWXN-C4PQQQAAAA?rs=1&pid=ImgDetMain',
      rating: 4.5,
      price: '3.500.000 VND',
      description: 'Thủ đô ngàn năm văn hiến với ẩm thực phong phú',
      tags: ['Phố cổ', 'Văn hóa', 'Ẩm thực'],
      days: '3N2Đ'
    },
    { 
      name: 'Hạ Long', 
      visitors: '1,867', 
      image: 'https://th.bing.com/th/id/OIP.wBNNbqjveKbsyuJZktu8uAHaEK?rs=1&pid=ImgDetMain',
      rating: 4.8,
      price: '4.200.000 VND',
      description: 'Vịnh biển đẹp nhất thế giới di sản UNESCO',
      tags: ['Du thuyền', 'Thiên nhiên', 'Biển'],
      days: '2N1Đ'
    },
    { 
      name: 'Đà Nẵng', 
      visitors: '1,532', 
      image: 'https://th.bing.com/th/id/OIP.IKjN77jXr80Yr_sSA-BRDAHaEU?rs=1&pid=ImgDetMain',
      rating: 4.3,
      price: '3.800.000 VND',
      description: 'Thành phố đáng sống với nhiều bãi biển đẹp',
      tags: ['Biển Mỹ Khê', 'Cầu Vàng', 'Bà Nà'],
      days: '3N2Đ'
    },
    { 
      name: 'Nha Trang', 
      visitors: '1,245', 
      image: 'https://th.bing.com/th/id/OIP.2oCFmzD4IgKbjCOu0oZ49wHaFD?rs=1&pid=ImgDetMain',
      rating: 4.2,
      price: '3.200.000 VND',
      description: 'Thành phố biển xinh đẹp với các resort sang trọng',
      tags: ['Vinpearl', 'Lặn biển', 'Hòn Chồng'],
      days: '4N3Đ'
    },
    { 
      name: 'Đà Lạt', 
      visitors: '1,187', 
      image: 'https://th.bing.com/th/id/OIP.S4-hwonRPjNG6KPvDONVjgHaFQ?rs=1&pid=ImgDetMain',
      rating: 4.6,
      price: '3.600.000 VND',
      description: 'Thành phố ngàn hoa với khí hậu mát mẻ quanh năm',
      tags: ['Hồ Xuân Hương', 'Đồi chè', 'Vườn hoa'],
      days: '3N2Đ'
    },
    { 
      name: 'Phú Quốc', 
      visitors: '987', 
      image: 'https://th.bing.com/th/id/OIP.bBbQ8M1VCFwnGfGpkHWtWQHaDX?rs=1&pid=ImgDetMain',
      rating: 4.7,
      price: '5.000.000 VND',
      description: 'Đảo ngọc miền Nam với bãi biển cát trắng',
      tags: ['Safari', 'Vinpearl', 'Hải sản'],
      days: '4N3Đ'
    },
    { 
      name: 'Trung Quốc', 
      visitors: '461', 
      image: 'https://vtcpay.vn/blog/wp-content/uploads/2022/07/du-lich-Quang-Nam-1.jpg',
      rating: 4.0,
      price: '12.000.000 VND',
      description: 'Khám phá văn hóa và ẩm thực Trung Hoa',
      tags: ['Vạn Lý Trường Thành', 'Tử Cấm Thành'],
      days: '5N4Đ'
    },
    { 
      name: 'Hàn Quốc', 
      visitors: '425', 
      image: 'https://dulichconvoi.com/wp-content/uploads/2024/03/352521770_6922050131.jpg',
      rating: 4.4,
      price: '15.000.000 VND',
      description: 'Xứ sở kim chi với công nghệ và văn hóa K-pop',
      tags: ['Seoul', 'Đảo Jeju', 'Lotte World'],
      days: '5N4Đ'
    },
  ];

  const StyledCard = styled(Paper)(({ theme }) => ({
    borderRadius: '16px',
    boxShadow: '0 8px 16px rgba(0, 139, 118, 0.1)',
    overflow: 'hidden',
    width: 400,
    transition: 'all 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 20px rgba(0, 139, 118, 0.2)',
      animation: `${pulseAnimation} 2s infinite`
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      backgroundColor: '#008b76'
    }
  }));

  const getGridLayout = () => {
    if (isMobile) return { xs: 12 };
    if (isTablet) return { sm: 6 };
    return { md: 6, lg: 3 };
  };

  return (
    <Box sx={{ 
      p: { xs: 2, md: 4 },
      maxWidth: '1800px',
      margin: '0 auto'
    }}>
      <Typography 
        variant="h3" 
        component="h2" 
        gutterBottom
        sx={{ 
          fontWeight: 'bold', 
          mb: 4,
          color: '#008b76',
          textAlign: 'center',
          fontSize: { xs: '1.8rem', md: '2.4rem' },
          position: 'relative',
          '&::after': {
            content: '""',
            display: 'block',
            width: '80px',
            height: '4px',
            backgroundColor: '#008b76',
            margin: '16px auto 0',
            borderRadius: '2px'
          }
        }}
      >
        ĐIỂM ĐẾN YÊU THÍCH
      </Typography>
      
      <Grid container spacing={3} justifyContent="center">
        {destinations.map((destination, index) => (
          <Grid item {...getGridLayout()} key={destination.name}>
            <StyledCard>
              <Box 
                sx={{ 
                  height: { xs: 180, md: 200 },
                  backgroundImage: `url(${destination.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}
              >
                <Chip 
                  label={`TOP ${index + 1}`} 
                  size="small" 
                  sx={{ 
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    backgroundColor: '#008b76',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '0.7rem',
                    height: '24px'
                  }} 
                />
              </Box>
              
              <Box sx={{ 
                p: 2, 
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    sx={{ 
                      fontWeight: 'bold',
                      color: '#008b76'
                    }}
                  >
                    {destination.name}
                  </Typography>
                  
                  <Chip 
                    label={destination.days} 
                    size="small" 
                    sx={{ 
                      backgroundColor: 'rgba(0, 139, 118, 0.1)',
                      color: '#008b76',
                      fontWeight: 'bold'
                    }} 
                  />
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Rating 
                    value={destination.rating} 
                    precision={0.5} 
                    readOnly 
                    size="small" 
                    sx={{ color: '#008b76' }}
                  />
                  <Typography variant="body2" sx={{ ml: 1, color: '#008b76', fontWeight: '500' }}>
                    {destination.rating}
                  </Typography>
                </Box>
                
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    mb: 1,
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                    flexGrow: 1
                  }}
                >
                  {destination.description}
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  {destination.tags.map(tag => (
                    <Chip 
                      key={tag}
                      label={tag} 
                      size="small" 
                      sx={{ 
                        mr: 1, 
                        mb: 1,
                        backgroundColor: 'rgba(0, 139, 118, 0.08)',
                        color: '#008b76'
                      }} 
                    />
                  ))}
                </Box>
                
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    fontWeight: 'bold', 
                    color: '#008b76',
                    mb: 1
                  }}
                >
                  {destination.price}
                </Typography>
              </Box>
              
              <Box sx={{ 
                p: 2, 
                backgroundColor: 'rgba(0, 139, 118, 0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <Typography variant="body2" sx={{ color: '#008b76' }}>
                  <Box component="span" sx={{ fontWeight: 'bold' }}>{destination.visitors}</Box> lượt khách
                </Typography>
                <Button 
                  variant="contained" 
                  size="small"
                  sx={{
                    backgroundColor: '#008b76',
                    '&:hover': {
                      backgroundColor: '#00695f',
                      boxShadow: '0 4px 8px rgba(0, 139, 118, 0.3)'
                    },
                    borderRadius: '20px',
                    px: 2,
                    textTransform: 'none',
                    fontWeight: 'bold'
                  }}
                >
                  Xem tour
                </Button>
              </Box>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FavoriteDestinations;