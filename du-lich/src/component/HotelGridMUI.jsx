import {
  Box,
  Button,
  Grid,
  Typography,
  Paper,
  Rating,
  Chip,
  useTheme,
  styled,
  Pagination
} from '@mui/material';
import { LocationOn, Star } from '@mui/icons-material';
import { useState } from 'react';

const HotelCard = styled(Paper)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '0px', // Thay 12px -> 0px
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
    '& .hotel-image': {
      transform: 'scale(1.05)'
    }
  }
}));

const HotelGridMUI = () => {
  const theme = useTheme();
  const primaryColor = '#008b76';
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const hotels = [
    { id: 1, name: 'Vinpearl Luxury Nha Trang', rating: 5, price: '12.500.000', location: 'Nha Trang', image: 'https://th.bing.com/th/id/OIP.LVFtar7Vzh2s8ZFAPTGcqQHaG6?rs=1&pid=ImgDetMain' },
    { id: 2, name: 'InterContinental Danang', rating: 5, price: '10.800.000', location: 'Đà Nẵng', image: 'https://th.bing.com/th/id/OIP.L7tgKLixgafPqkR3GgQ39AHaFj?w=1280&h=959&rs=1&pid=ImgDetMain' },
    { id: 3, name: 'The Reverie Saigon', rating: 5, price: '15.000.000', location: 'TP.HCM', image: 'https://th.bing.com/th/id/OIP.QjZm2cjuetVJsAvyV4iyXwHaE8?w=960&h=640&rs=1&pid=ImgDetMain' },
    { id: 4, name: 'JW Marriott Hanoi', rating: 5, price: '9.500.000', location: 'Hà Nội', image: 'https://th.bing.com/th/id/OIP.ivW50jVrS-0srANNgxxULAHaE8?rs=1&pid=ImgDetMain' },
    { id: 5, name: 'Azerai La Residence', rating: 5, price: '8.200.000', location: 'Huế', image: 'https://th.bing.com/th/id/OIP.E4tQ1hhuVYw-VhFE5GzHNgHaDp?rs=1&pid=ImgDetMain' },
    { id: 6, name: 'Fusion Maia Da Nang', rating: 5, price: '11.000.000', location: 'Đà Nẵng', image: 'https://th.bing.com/th/id/OIP.nSSc4u1Z3srdQ5guL-kvbgHaE7?w=500&h=333&rs=1&pid=ImgDetMain' },
    { id: 7, name: 'Six Senses Ninh Van Bay', rating: 5, price: '18.000.000', location: 'Nha Trang', image: 'https://i.ytimg.com/vi/Rl6x26dFTE4/maxresdefault.jpg' },
    { id: 8, name: 'Park Hyatt Saigon', rating: 5, price: '13.500.000', location: 'TP.HCM', image: 'https://th.bing.com/th/id/OIP.8nox8yr5Lwy2XWa2dresCAHaEK?w=634&h=356&rs=1&pid=ImgDetMain' }
  ];
  const paginatedHotels = hotels.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <Box sx={{ 
      maxWidth: 1600,
      mx: 'auto',
      px: 4,
      py: 10,
      bgcolor: 'background.default'
    }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Chip 
          icon={<Star sx={{ color: '#ffd700' }} />} 
          label="5 SAO" 
          sx={{ 
            bgcolor: '#fff9e6', 
            color: '#ffab00', 
            mb: 3,
            fontSize: '1.1rem',
            px: 2
          }} 
        />
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 800,
            color: primaryColor,
            mb: 2,
            [theme.breakpoints.down('md')]: { fontSize: '2.25rem' }
          }}
        >
          Khách Sạn Cao Cấp
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            maxWidth: 800,
            mx: 'auto',
            color: 'text.secondary',
            fontSize: '1.1rem'
          }}
        >
          Trải nghiệm dịch vụ đẳng cấp thế giới tại những khách sạn sang trọng bậc nhất Việt Nam
        </Typography>
      </Box>

      {/* Hotel Grid */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {hotels.map((hotel) => (
          <Grid item xs={12} sm={6} md={3} key={hotel.id}>
            <HotelCard elevation={3}>
              {/* Image Section */}
              <Box sx={{ 
                height: 220,
                width:350,
                overflow: 'hidden',
                position: 'relative'
              }}>
                <Box
                  className="hotel-image"
                  component="img"
                  src={hotel.image}
                  alt={hotel.name}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s'
                  }}
                />
                <Chip
                  label={`${hotel.price} VND/đêm`}
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: 16,
                    bgcolor: 'rgba(0, 139, 118, 0.9)',
                    color: 'white',
                    fontWeight: 600
                  }}
                />
              </Box>

              {/* Content Section */}
              <Box sx={{ p: 3 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 700,
                    mb: 1,
                    minHeight: 64,
                    lineHeight: 1.3
                  }}
                >
                  {hotel.name}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOn sx={{ color: primaryColor, fontSize: 20, mr: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    {hotel.location}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Rating 
                    value={hotel.rating} 
                    readOnly 
                    precision={0.5}
                    sx={{ color: '#ffab00' }}
                  />
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: primaryColor,
                      color: primaryColor,
                      '&:hover': {
                        bgcolor: '#008b7610',
                        borderColor: '#007a66'
                      }
                    }}
                  >
                    Đặt ngay
                  </Button>
                </Box>
              </Box>
            </HotelCard>
          </Grid>
        ))}
      </Grid>
 <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        mb: 6,
        '& .MuiPaginationItem-root': {
          color: primaryColor,
          fontSize: '1.1rem'
        },
        '& .Mui-selected': {
          backgroundColor: `${primaryColor} !important`,
          color: 'white'
        }
      }}>
        <Pagination
          count={Math.ceil(hotels.length / itemsPerPage)}
          page={page}
          onChange={(e, value) => setPage(value)}
          shape="rounded"
          color="primary"
          sx={{
            '& .MuiPaginationItem-page:hover': {
              backgroundColor: '#008b7620'
            }
          }}
        />
      </Box>

      {/* View More Button */}
      
    </Box>
  );
};

export default HotelGridMUI;