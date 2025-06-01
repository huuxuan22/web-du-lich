import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  Grid, 
  Container,
  Chip,
  Divider
} from '@mui/material';
import { 
  Restaurant as RestaurantIcon, 
  Hotel as HotelIcon, 
  DirectionsCar as TransportIcon 
} from '@mui/icons-material';

// Tone màu chủ đạo - màu xanh dương nhạt và các màu bổ trợ
const themeColors = {
  primary: '#4a8fe7',       // Màu chủ đạo
  secondary: '#e9f2ff',     // Màu nền nhạt
  accent: '#ff7e5f',        // Màu nhấn cho nút bấm
  textPrimary: '#2d3748',   // Màu chữ chính
  textSecondary: '#718096', // Màu chữ phụ
};

const services = {
  food: [
    {
      id: 1,
      name: 'Nhà hàng Hải Sản Biển Đông',
      description: 'Chuyên các món hải sản tươi sống, view biển tuyệt đẹp',
      image: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: '$$$',
      rating: 4.5,
      tags: ['Hải sản', 'View biển', 'Lãng mạn']
    },
    {
      id: 2,
      name: 'Quán Ăn Gia Truyền',
      description: 'Món ăn truyền thống đặc trưng của địa phương',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: '$$',
      rating: 4.2,
      tags: ['Truyền thống', 'Gia đình', 'Giá rẻ']
    }
  ],
  hotel: [
    {
      id: 1,
      name: 'Khách sạn Luxury Resort',
      description: 'Khu nghỉ dưỡng 5 sao với đầy đủ tiện nghi cao cấp',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: '$$$$',
      rating: 4.8,
      tags: ['5 sao', 'Hồ bơi', 'Spa']
    },
    {
      id: 2,
      name: 'Homestay Sunset View',
      description: 'Homestay giá rẻ với view hoàng hôn tuyệt đẹp',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: '$',
      rating: 4.3,
      tags: ['Giá rẻ', 'View đẹp', 'Thân thiện']
    }
  ],
  transport: [
    {
      id: 1,
      name: 'Dịch vụ xe máy thuê',
      description: 'Xe máy đời mới, giá thuê theo ngày hợp lý',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: '$',
      rating: 4.0,
      tags: ['Tiện lợi', 'Giá rẻ', 'Tự do']
    },
    {
      id: 2,
      name: 'Taxi Du Lịch',
      description: 'Dịch vụ taxi đưa đón tận nơi, lái xe nhiệt tình',
      image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: '$$',
      rating: 4.1,
      tags: ['Tiện nghi', 'An toàn', '24/7']
    }
  ]
};

const ServiceCard = ({ service, icon, color }) => {
  return (
    <Card sx={{ 
      maxWidth: 345, 
      m: 2, 
      borderRadius: 2,
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)'
      }
    }}>
      <CardMedia
        component="img"
        height="140"
        image={service.image}
        alt={service.name}
      />
      <CardContent sx={{ bgcolor: themeColors.secondary }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          {React.cloneElement(icon, { 
            sx: { 
              color: color, 
              mr: 1 
            } 
          })}
          <Typography 
            gutterBottom 
            variant="h6" 
            component="div"
            sx={{ 
              color: themeColors.textPrimary,
              fontWeight: 'bold'
            }}
          >
            {service.name}
          </Typography>
        </Box>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ 
            color: themeColors.textSecondary,
            mb: 1
          }}
        >
          {service.description}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Typography 
            variant="body2"
            sx={{ 
              color: themeColors.accent,
              fontWeight: 'bold',
              mr: 2
            }}
          >
            {service.price}
          </Typography>
          <Typography 
            variant="body2"
            sx={{ 
              color: themeColors.textPrimary
            }}
          >
            ⭐ {service.rating}
          </Typography>
        </Box>
        <Divider sx={{ my: 1 }} />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {service.tags.map((tag, index) => (
            <Chip 
              key={index} 
              label={tag} 
              size="small" 
              sx={{ 
                bgcolor: color, 
                color: 'white',
                fontSize: '0.7rem'
              }} 
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

const ServiceSection = ({ title, services, icon, color }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        mb: 3,
        p: 2,
        bgcolor: themeColors.primary,
        borderRadius: 1,
        boxShadow: 2
      }}>
        {React.cloneElement(icon, { 
          sx: { 
            color: 'white', 
            fontSize: '2rem', 
            mr: 2 
          } 
        })}
        <Typography 
          variant="h4" 
          sx={{ 
            color: 'white',
            fontWeight: 'bold'
          }}
        >
          {title}
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center">
        {services.map(service => (
          <Grid item key={service.id}>
            <ServiceCard service={service} icon={icon} color={color} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const TravelServices = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography 
        variant="h3" 
        align="center" 
        gutterBottom
        sx={{ 
          color: themeColors.textPrimary,
          fontWeight: 'bold',
          mb: 4
        }}
      >
        Dịch Vụ Du Lịch
      </Typography>
      
      <ServiceSection 
        title="Ẩm Thực Địa Phương" 
        services={services.food} 
        icon={<RestaurantIcon />} 
        color="#4CAF50" 
      />
      
      <ServiceSection 
        title="Khách Sạn & Nơi Lưu Trú" 
        services={services.hotel} 
        icon={<HotelIcon />} 
        color="#2196F3" 
      />
      
      <ServiceSection 
        title="Phương Tiện Di Chuyển" 
        services={services.transport} 
        icon={<TransportIcon />} 
        color="#FF9800" 
      />
    </Container>
  );
};

export default TravelServices;