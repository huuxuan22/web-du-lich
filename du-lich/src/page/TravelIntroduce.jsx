import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Avatar,
  Stack,
  useTheme,
  Fade,
  Slide,
  Grow,
  Zoom,
  useScrollTrigger,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton
} from '@mui/material';
import {
  Flight,
  Hotel,
  Restaurant,
  Attractions,
  Map,
  LocalOffer,
  Star,
  CheckCircle,
  Groups,
  Public,
  Phone,
  Email,
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  Search,
  ExpandMore,
  DateRange,
  Person,
  Place,
  Favorite,
  Share,
  Directions,
  LocalAirport,
  BeachAccess,
  Terrain,
  Nightlife,
  Museum
} from '@mui/icons-material';
import Header from './Header';
import Footer from './Footer';

const primaryColor = '#008b76';
const secondaryColor = '#ff7e67';

const TravelIntroduce = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Hiệu ứng scroll
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Dữ liệu các dịch vụ
  const services = [
    {
      icon: <Flight fontSize="large" sx={{ color: primaryColor }} />,
      title: "Đặt vé máy bay",
      description: "Hệ thống so sánh giá từ 100+ hãng hàng không, tìm chuyến bay giá rẻ nhất"
    },
    {
      icon: <Hotel fontSize="large" sx={{ color: primaryColor }} />,
      title: "Khách sạn",
      description: "Hơn 2 triệu khách sạn trên toàn cầu với mức giá tốt nhất và nhiều ưu đãi"
    },
    {
      icon: <Restaurant fontSize="large" sx={{ color: primaryColor }} />,
      title: "Ẩm thực",
      description: "Gợi ý nhà hàng ngon, địa điểm ăn uống địa phương với đánh giá thực tế"
    },
    {
      icon: <Attractions fontSize="large" sx={{ color: primaryColor }} />,
      title: "Trải nghiệm",
      description: "Tour du lịch và hoạt động độc đáo do người bản địa thiết kế"
    }
  ];

  // Điểm đến phổ biến
  const popularDestinations = [
    {
      name: "Đà Nẵng",
      image: "https://vietfuntravel.com/image/data/Blog/Dalat/valley-of-love-dalat-Dalat.jpeg",
      description: "Thành phố đáng sống nhất Việt Nam với những bãi biển tuyệt đẹp",
      type: "Biển",
      rating: 4.8,
      price: "VND 2.500.000"
    },
    {
      name: "Phú Quốc",
      image: "https://th.bing.com/th/id/R.16e37ab399eb6ff6ea9863f1048954b1?rik=XrRqYQG1jUvoEQ&pid=ImgRaw&r=0",
      description: "Đảo ngọc với những resort sang trọng và thiên nhiên hoang sơ",
      type: "Đảo",
      rating: 4.9,
      price: "VND 3.200.000"
    },
    {
      name: "Hà Nội",
      image: "https://static.vinwonders.com/2022/06/dia-diem-du-lich-ha-noi-thumb.jpg",
      description: "Thủ đô nghìn năm văn hiến với ẩm thực phong phú và di tích lịch sử",
      type: "Văn hóa",
      rating: 4.7,
      price: "VND 1.800.000"
    },
    {
      name: "Nha Trang",
      image: "https://bomanhatrang.com/wp-content/uploads/2023/04/bai-bien-nha-trang-1.jpg",
      description: "Thành phố biển xinh đẹp với những hòn đảo và hệ sinh thái biển đa dạng",
      type: "Biển",
      rating: 4.6,
      price: "VND 2.700.000"
    }
  ];

  // Tính năng nổi bật
  const features = [
    {
      title: "Gợi ý thông minh",
      description: "Hệ thống AI phân tích sở thích và đề xuất lịch trình phù hợp",
      icon: <CheckCircle sx={{ fontSize: 40, mb: 2, color: 'white' }} />
    },
    {
      title: "Giá tốt nhất",
      description: "Đảm bảo giá rẻ nhất với chính sách hoàn tiền chênh lệch",
      icon: <LocalOffer sx={{ fontSize: 40, mb: 2, color: 'white' }} />
    },
    {
      title: "Đánh giá thực",
      description: "Nhận xét từ khách du lịch thực tế, không review ảo",
      icon: <Star sx={{ fontSize: 40, mb: 2, color: 'white' }} />
    },
    {
      title: "Hỗ trợ 24/7",
      description: "Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ mọi lúc",
      icon: <Groups sx={{ fontSize: 40, mb: 2, color: 'white' }} />
    }
  ];

  // Đánh giá từ khách hàng
  const testimonials = [
    {
      name: "Nguyễn Thị Hương",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      comment: "Tôi đã tiết kiệm được 30% chi phí chuyến đi nhờ TravelSmart. Dịch vụ tuyệt vời!",
      rating: 5,
      date: "15/03/2023"
    },
    {
      name: "Trần Văn Minh",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      comment: "Lịch trình thông minh giúp tôi khám phá được nhiều điểm đến thú vị mà không bỏ lỡ gì.",
      rating: 4,
      date: "22/04/2023"
    },
    {
      name: "Lê Thị Lan",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      comment: "Ứng dụng dễ sử dụng, thông tin chính xác. Tôi sẽ tiếp tục sử dụng cho các chuyến đi sau.",
      rating: 5,
      date: "05/05/2023"
    }
  ];

  // Loại hình du lịch
  const travelTypes = [
    { icon: <BeachAccess sx={{ mr: 1 }} />, label: "Biển đảo" },
    { icon: <Terrain sx={{ mr: 1 }} />, label: "Núi rừng" },
    { icon: <Museum sx={{ mr: 1 }} />, label: "Văn hóa" },
    { icon: <Nightlife sx={{ mr: 1 }} />, label: "Giải trí" },
    { icon: <LocalAirport sx={{ mr: 1 }} />, label: "Nước ngoài" }
  ];

  // Câu hỏi thường gặp
  const faqs = [
    {
      question: "TravelSmart có phí dịch vụ không?",
      answer: "TravelSmart hoàn toàn miễn phí khi sử dụng các dịch vụ tìm kiếm và so sánh giá. Chúng tôi chỉ thu phí khi bạn thực hiện đặt chỗ qua hệ thống của chúng tôi."
    },
    {
      question: "Làm sao để đảm bảo giá tốt nhất?",
      answer: "Hệ thống của chúng tôi liên tục cập nhật và so sánh giá từ các nhà cung cấp. Chúng tôi cam kết hoàn tiền chênh lệch nếu bạn tìm thấy giá rẻ hơn với cùng điều kiện."
    },
    {
      question: "Tôi có thể hủy đặt phòng không?",
      answer: "Tùy thuộc vào chính sách của từng nhà cung cấp. Bạn có thể kiểm tra điều kiện hủy phòng trước khi đặt và thực hiện hủy phòng trực tiếp trên ứng dụng."
    },
    {
      question: "TravelSmart có hỗ trợ khách hàng 24/7 không?",
      answer: "Đội ngũ hỗ trợ khách hàng của chúng tôi luôn sẵn sàng 24/7 qua nhiều kênh: điện thoại, email, chat trực tuyến để giải quyết mọi thắc mắc của bạn."
    }
  ];

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      <Header />
      
      {/* Phần Hero Banner với hiệu ứng parallax */}
      <Box sx={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1506929562872-bb421503ef21)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        color: 'white',
        py: 15,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container maxWidth="md">
          <Fade in={isVisible} timeout={1000}>
            <Box>
              <Typography variant="h2" component="h1" sx={{ 
                mb: 3, 
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                animation: 'fadeInDown 1s ease'
              }}>
                TravelSmart - Du Lịch Thông Minh
              </Typography>
              <Typography variant="h5" sx={{ 
                mb: 5,
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                animation: 'fadeInUp 1s ease'
              }}>
                Công nghệ AI giúp bạn lên kế hoạch du lịch hoàn hảo với chi phí tối ưu
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                <Button 
                  variant="contained" 
                  size="large" 
                  sx={{ 
                    backgroundColor: primaryColor,
                    '&:hover': { backgroundColor: '#00695f' },
                    animation: 'pulse 2s infinite'
                  }}
                >
                  Bắt đầu ngay
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  color="inherit"
                  sx={{
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                  }}
                >
                  Tìm hiểu thêm
                </Button>
              </Stack>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Thanh tìm kiếm nổi */}
      <Slide direction="down" in={trigger} mountOnEnter unmountOnExit>
        <Paper elevation={3} sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1100,
          p: 2,
          mx: 'auto',
          maxWidth: 'lg',
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: `0 4px 20px 0 rgba(0,139,118,0.2)`,
          transform: 'translateY(-30px)',
          width: '90%'
        }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: primaryColor
              }
            }}
          >
            <Tab label="Khách sạn" icon={<Hotel />} iconPosition="start" />
            <Tab label="Vé máy bay" icon={<Flight />} iconPosition="start" />
            <Tab label="Tour du lịch" icon={<Directions />} iconPosition="start" />
            <Tab label="Thuê xe" icon={<Directions />} iconPosition="start" />
            <Tab label="Ẩm thực" icon={<Restaurant />} iconPosition="start" />
          </Tabs>
          
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                placeholder="Điểm đến"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Place color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                type="date"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DateRange color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                placeholder="Số khách"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Button 
                fullWidth 
                variant="contained" 
                size="large"
                sx={{
                  backgroundColor: primaryColor,
                  '&:hover': { backgroundColor: '#00695f' },
                  height: '56px'
                }}
                startIcon={<Search />}
              >
                Tìm kiếm
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Slide>

      {/* Giới thiệu ngắn với hiệu ứng */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Slide direction="right" in={isVisible} mountOnEnter>
              <Box>
                <Chip 
                  label="Giới thiệu" 
                  color="primary" 
                  sx={{ 
                    backgroundColor: primaryColor,
                    color: 'white',
                    mb: 2,
                    px: 1,
                    fontSize: '0.8rem'
                  }} 
                />
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: primaryColor }}>
                  Tại sao chọn TravelSmart?
                </Typography>
                <Typography paragraph sx={{ mb: 3 }}>
                  TravelSmart là nền tảng du lịch thông minh ứng dụng trí tuệ nhân tạo để mang đến cho bạn những trải nghiệm du lịch hoàn hảo nhất.
                </Typography>
                <Typography paragraph sx={{ mb: 3 }}>
                  Chúng tôi kết hợp công nghệ hiện đại với hiểu biết sâu sắc về du lịch để tạo ra các giải pháp đặt chỗ thông minh, gợi ý lịch trình tối ưu và tiết kiệm chi phí cho bạn.
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button 
                    variant="contained" 
                    size="large"
                    sx={{
                      backgroundColor: primaryColor,
                      '&:hover': { backgroundColor: '#00695f' }
                    }}
                  >
                    Khám phá ngay
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="large"
                    sx={{
                      color: primaryColor,
                      borderColor: primaryColor,
                      '&:hover': { borderColor: '#00695f' }
                    }}
                  >
                    Xem video
                  </Button>
                </Stack>
              </Box>
            </Slide>
          </Grid>
          <Grid item xs={12} md={6}>
            <Zoom in={isVisible} timeout={1000}>
              <Box sx={{ 
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: `0 10px 30px -5px rgba(0,139,118,0.3)`,
                '&:hover img': {
                  transform: 'scale(1.05)'
                }
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b" 
                  alt="Travel Smart" 
                  style={{ 
                    width: '100%', 
                    transition: 'transform 0.5s ease',
                    display: 'block'
                  }} 
                />
                <Box sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,139,118,0.7), transparent)',
                  color: 'white',
                  p: 3,
                  textAlign: 'center'
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Hơn 1 triệu khách hàng hài lòng
                  </Typography>
                </Box>
              </Box>
            </Zoom>
          </Grid>
        </Grid>
      </Container>

      {/* Dịch vụ với hiệu ứng hover */}
      <Box sx={{ 
        backgroundColor: '#f9f9f9', 
        py: 8,
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '10px',
          background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`
        }
      }}>
        <Container maxWidth="lg">
          <Fade in={isVisible} timeout={1000}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h4" sx={{ 
                mb: 2, 
                fontWeight: 'bold',
                color: primaryColor,
                position: 'relative',
                display: 'inline-block',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '3px',
                  backgroundColor: secondaryColor,
                  borderRadius: '3px'
                }
              }}>
                Dịch vụ của chúng tôi
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Tất cả những gì bạn cần cho một chuyến đi hoàn hảo
              </Typography>
            </Box>
          </Fade>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Grow in={isVisible} timeout={index * 500}>
                  <Card sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                    transition: 'all 0.3s ease',
                    borderRadius: '12px',
                    border: '1px solid rgba(0,139,118,0.1)',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: `0 15px 30px -5px rgba(0,139,118,0.2)`,
                      borderColor: primaryColor
                    }
                  }}>
                    <Box sx={{ 
                      mb: 2,
                      width: '80px',
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0,139,118,0.1)'
                    }}>
                      {service.icon}
                    </Box>
                    <Typography variant="h6" sx={{ 
                      mb: 2, 
                      fontWeight: 'bold',
                      color: primaryColor
                    }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                    <Button 
                      variant="text" 
                      size="small" 
                      sx={{ 
                        mt: 2,
                        color: primaryColor,
                        '&:hover': {
                          backgroundColor: 'rgba(0,139,118,0.1)'
                        }
                      }}
                    >
                      Xem chi tiết
                    </Button>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Loại hình du lịch */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" sx={{ 
          mb: 6, 
          fontWeight: 'bold',
          color: primaryColor,
          position: 'relative',
          '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '3px',
            backgroundColor: secondaryColor,
            borderRadius: '3px'
          }
        }}>
          Loại hình du lịch
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {travelTypes.map((type, index) => (
            <Grid item key={index}>
              <Button
                variant="outlined"
                startIcon={type.icon}
                sx={{
                  borderRadius: '20px',
                  borderColor: primaryColor,
                  color: primaryColor,
                  '&:hover': {
                    backgroundColor: 'rgba(0,139,118,0.1)',
                    borderColor: '#00695f'
                  }
                }}
              >
                {type.label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Điểm đến phổ biến với hiệu ứng */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" sx={{ 
          mb: 6, 
          fontWeight: 'bold',
          color: primaryColor
        }}>
          Điểm đến phổ biến
        </Typography>
        <Grid container spacing={4}>
          {popularDestinations.map((destination, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Slide direction="up" in={isVisible} timeout={index * 300}>
                <Card sx={{ 
                  position: 'relative',
                  height: 350,
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: `0 10px 25px rgba(0,139,118,0.2)`
                  },
                  '&:hover img': {
                    transform: 'scale(1.1)'
                  }
                }}>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={destination.image}
                    sx={{ 
                      transition: 'transform 0.5s ease',
                      filter: 'brightness(0.8)'
                    }}
                  />
                  <Box sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                    color: 'white',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                  }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Chip 
                        label={destination.type} 
                        size="small" 
                        sx={{ 
                          backgroundColor: primaryColor,
                          color: 'white'
                        }} 
                      />
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Star sx={{ color: '#ffc107', fontSize: '18px', mr: 0.5 }} />
                        <Typography variant="body2">{destination.rating}</Typography>
                      </Box>
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {destination.name}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      {destination.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                        {destination.price}
                      </Typography>
                      <Button 
                        variant="contained" 
                        size="small"
                        sx={{
                          backgroundColor: primaryColor,
                          '&:hover': { backgroundColor: '#00695f' },
                          minWidth: 'unset',
                          p: '4px 8px',
                          borderRadius: '12px'
                        }}
                      >
                        Xem
                      </Button>
                    </Box>
                  </Box>
                  <Box sx={{ 
                    position: 'absolute', 
                    top: 16, 
                    right: 16,
                    display: 'flex'
                  }}>
                    <IconButton sx={{ color: 'white' }}>
                      <Favorite />
                    </IconButton>
                    <IconButton sx={{ color: 'white' }}>
                      <Share />
                    </IconButton>
                  </Box>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button 
            variant="outlined" 
            sx={{ 
              color: primaryColor,
              borderColor: primaryColor,
              '&:hover': { borderColor: '#00695f' },
              px: 4,
              py: 1.5
            }}
          >
            Xem tất cả điểm đến
          </Button>
        </Box>
      </Container>

      {/* Tính năng nổi bật */}
      <Box sx={{ 
        background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`, 
        py: 8, 
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)'
        }
      }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" sx={{ 
            mb: 6, 
            fontWeight: 'bold',
            position: 'relative'
          }}>
            Tính năng nổi bật
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Fade in={isVisible} timeout={index * 500}>
                  <Paper sx={{ 
                    p: 3, 
                    height: '100%',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 3,
                    border: '1px solid rgba(255,255,255,0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                    }
                  }}>
                    {feature.icon}
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2">
                      {feature.description}
                    </Typography>
                  </Paper>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Cách hoạt động */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" sx={{ 
          mb: 6, 
          fontWeight: 'bold',
          color: primaryColor
        }}>
          TravelSmart hoạt động như thế nào?
        </Typography>
        <Grid container spacing={6}>
          {[1, 2, 3].map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Zoom in={isVisible} timeout={index * 500}>
                <Box sx={{ 
                  textAlign: 'center', 
                  p: 3,
                  position: 'relative',
                  '&:after': index !== 2 ? {
                    content: '""',
                    position: 'absolute',
                    top: '80px',
                    right: '-50px',
                    width: '100px',
                    height: '20px',
                    backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzAwOGI3NiIgZD0iTTgsNUwxNSwxMkw4LDE5VjVaIi8+PC9zdmc+")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    display: { xs: 'none', md: 'block' }
                  } : null
                }}>
                  <Avatar sx={{ 
                    bgcolor: primaryColor, 
                    width: 80, 
                    height: 80, 
                    mb: 3,
                    mx: 'auto',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                  }}>
                    {step}
                  </Avatar>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                    {step === 1 ? "Nhập thông tin" : step === 2 ? "Nhận lịch trình" : "Đặt vé & Tận hưởng"}
                  </Typography>
                  <Typography>
                    {step === 1 
                      ? "Cho chúng tôi biết điểm đến, ngày đi, sở thích và ngân sách của bạn" 
                      : step === 2 
                        ? "Hệ thống AI sẽ tạo lịch trình tối ưu với các điểm đến, khách sạn và hoạt động phù hợp" 
                        : "Đặt vé, khách sạn và các dịch vụ ngay trên ứng dụng với giá tốt nhất"}
                  </Typography>
                </Box>
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Thống kê ấn tượng */}
      <Box sx={{ 
        backgroundColor: '#f9f9f9',
        py: 8,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(https://images.unsplash.com/photo-1499678329028-101435549a4e)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {[
              { value: '1M+', label: 'Khách hàng' },
              { value: '50+', label: 'Quốc gia' },
              { value: '10K+', label: 'Đối tác' },
              { value: '98%', label: 'Hài lòng' }
            ].map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Fade in={isVisible} timeout={index * 500}>
                  <Box sx={{ 
                    textAlign: 'center',
                    p: 3,
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    borderRadius: 3,
                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 10px 25px rgba(0,139,118,0.1)`
                    }
                  }}>
                    <Typography variant="h3" sx={{ 
                      fontWeight: 'bold',
                      color: primaryColor,
                      mb: 1
                    }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Đánh giá khách hàng */}
      <Box sx={{ backgroundColor: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" sx={{ 
            mb: 6, 
            fontWeight: 'bold',
            color: primaryColor
          }}>
            Khách hàng nói gì về chúng tôi
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Grow in={isVisible} timeout={index * 500}>
                  <Card sx={{ 
                    height: '100%', 
                    p: 3,
                    position: 'relative',
                    border: '1px solid rgba(0,139,118,0.1)',
                    boxShadow: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: `0 10px 30px rgba(0,139,118,0.1)`
                    },
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`
                    }
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                     
                                            
                        <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.date}
                        </Typography>
                      </Box>
                    </Box>
                    
                    {/* Rating Stars */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          sx={{
                            color: i < testimonial.rating ? secondaryColor : '#e0e0e0',
                            fontSize: '20px',
                            mr: 0.5
                          }}
                        />
                      ))}
                    </Box>

                    <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                      "{testimonial.comment}"
                    </Typography>

                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      mt: 'auto'
                    }}>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          borderColor: primaryColor,
                          color: primaryColor,
                          '&:hover': { borderColor: '#00695f' }
                        }}
                      >
                        Xem chi tiết
                      </Button>
                      <Box sx={{ display: 'flex' }}>
                        <IconButton sx={{ color: primaryColor }}>
                          <Favorite />
                        </IconButton>
                        <IconButton sx={{ color: primaryColor }}>
                          <Share />
                        </IconButton>
                      </Box>
                    </Box>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Câu hỏi thường gặp */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" sx={{ 
          mb: 6, 
          fontWeight: 'bold',
          color: primaryColor
        }}>
          Câu hỏi thường gặp
        </Typography>
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {faqs.map((faq, index) => (
            <Accordion 
              key={index} 
              elevation={2} 
              sx={{ 
                mb: 2, 
                borderRadius: '8px!important',
                '&:before': { display: 'none' }
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: primaryColor }} />}
                sx={{
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  '&:hover': { backgroundColor: '#f1f5f9' }
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ borderTop: `1px solid ${primaryColor}20` }}>
                <Typography>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>

      {/* Liên hệ */}
     

      <Footer />
    </Box>
  );
};

export default TravelIntroduce;