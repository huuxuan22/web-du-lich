import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
  Chip,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  ImageList,
  ImageListItem,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  FlightTakeoff,
  AccessTime,
  CalendarToday,
  Group,
  Language,
  Star,
  LocationOn,
  PhotoLibrary,
  Cancel,
  CheckCircle
} from '@mui/icons-material';

// Tone màu chủ đạo
const themeColors = {
  primary: '#008b76',
  secondary: '#f50057',
  textPrimary: '#2d3748',
  textSecondary: '#718096',
  discount: '#f44336',
  bestSeller: '#ff9800'
};

// Danh sách tour chi tiết với nhiều hình ảnh
const detailedTours = [
  {
    id: 1,
    title: 'Khám phá Phố cổ Hội An - 3 Ngày 2 Đêm',
    days: '3 Ngày 2 Đêm',
    originalPrice: 5800000,
    discountPrice: 4900000,
    mainImage: 'https://th.bing.com/th/id/R.f5a5a1a5c4a4cd893a839b3034ab3794?rik=WL6mIk%2flcFi8gA&pid=ImgRaw&r=0',
    images: [
      

'https://th.bing.com/th/id/OIP.S9wcmsSaNd7CSz-rVxW0vgHaEA?rs=1&pid=ImgDetMain',
      'https://th.bing.com/th/id/OIP.sKbXwhH7nCJ3GQRiW7AbHAHaEK?w=1920&h=1079&rs=1&pid=ImgDetMain',
      'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/chua-cau-hoi-an-2.jpg',
      'https://images.baodantoc.vn/uploads/2022/Th%C3%A1ng%202/Ng%C3%A0y_18/Anh/HA4-1645003530788.jpg',
      'https://th.bing.com/th/id/R.a5a4c60e4761309d05933eb1b9801e6a?rik=afV8sL4NP16muw&pid=ImgRaw&r=0'


    ],
    isBestSeller: true,
    rating: 4.9,
    reviews: 215,
    departure: 'Thứ 6 hàng tuần',
    groupSize: '8-15 người',
    languages: ['Tiếng Việt', 'English'],
    description: 'Trải nghiệm vẻ đẹp cổ kính của Hội An - Di sản Văn hóa Thế giới được UNESCO công nhận. Tour bao gồm tham quan phố cổ, làng rau Trà Quế, thưởng thức ẩm thực địa phương và trải nghiệm đèn lồng đêm rằm.',
    highlights: [
      'Dạo bộ phố cổ về đêm với trăm ngàn đèn lồng',
      'Học làm món Cao lầu - đặc sản Hội An',
      'Tham quan làng rau Trà Quế',
      'Trải nghiệm thả đèn hoa đăng trên sông Hoài'
    ],
    itinerary: [
      { 
        day: 1, 
        title: 'Đón khách - Khám phá phố cổ', 
        description: '14:00 - Đón khách tại sân bay Đà Nẵng\n15:30 - Nhận phòng khách sạn\n17:00 - Tham quan Chùa Cầu, Hội quán Phúc Kiến\n19:00 - Ăn tối với món Cao lầu' 
      },
      { 
        day: 2, 
        title: 'Làng rau Trà Quế - Làng mộc Kim Bồng', 
        description: '8:00 - Tham quan làng rau Trà Quế\n11:00 - Học nấu ăn với đầu bếp địa phương\n14:00 - Khám phá làng mộc Kim Bồng\n18:00 - Tự do mua sắm phố đèn lồng' 
      },
      { 
        day: 3, 
        title: 'Biển An Bàng - Tiễn khách', 
        description: '7:00 - Ngắm bình minh tại biển An Bàng\n9:00 - Xe đưa về Đà Nẵng\n11:00 - Trả phòng khách sạn\n12:00 - Tiễn khách tại sân bay' 
      }
    ],
    inclusions: [
      '2 đêm khách sạn 4* trong phố cổ',
      'Xe đưa đón tiêu chuẩn',
      'Hướng dẫn viên tiếng Việt/Anh',
      'Vé tham quan tất cả điểm đến',
      '2 bữa sáng, 3 bữa trưa, 2 bữa tối',
      'Bảo hiểm du lịch'
    ],
    exclusions: [
      'Vé máy bay khứ hồi',
      'Chi phí cá nhân',
      'Thuế VAT (nếu có)',
      'Tip cho HDV và tài xế'
    ],
    tags: ['Hội An', 'Di sản UNESCO', 'Ẩm thực', 'Văn hóa', 'Làng nghề']
  },
  {
    id: 2,
    title: 'Hội An - Đà Nẵng - Bà Nà 5 Ngày 4 Đêm',
    days: '5 Ngày 4 Đêm',
    originalPrice: 9800000,
    discountPrice: 8200000,
    mainImage: 'https://th.bing.com/th/id/R.e020635f5623023e11740aa897f71e7f?rik=CuYdwdY6SJShSg&riu=http%3a%2f%2fblog.maiwolf.de%2fwp-content%2fuploads%2f2016%2f08%2f3.jpg&ehk=9ScsojHJnPZ6nfAh79F4cDggM%2fUUQhZLeGTgXootAD4%3d&risl=&pid=ImgRaw&r=0',
    images: [
      'https://th.bing.com/th/id/R.4503d45779178bfa2a8255c365797d66?rik=RFaHWjNCTm9QlA&pid=ImgRaw&r=0',
      'https://th.bing.com/th/id/OIP.2YCQF9whXARzChIataTLNAHaFs?rs=1&pid=ImgDetMain',
      'https://dulichconvoi.com/wp-content/uploads/2023/04/Banahill-D-1-1-scaled.jpg',
      'https://vecaptreo.com/wp-content/uploads/2020/09/ve-cap-treo-ba-na-gia-re00046-1.jpg',
    ],
    isBestSeller: false,
    rating: 4.7,
    reviews: 158,
    departure: 'Thứ 3 & Thứ 7 hàng tuần',
    groupSize: '6-12 người',
    languages: ['Tiếng Việt', 'English', '中文'],
    description: 'Hành trình trọn gói khám phá 3 điểm đến hấp dẫn nhất miền Trung: Phố cổ Hội An, thành phố biển Đà Nẵng và khu du lịch Bà Nà Hills trên núi.',
    highlights: [
      'Cầu Vàng Bà Nà Hills - "Bàn tay của Chúa"',
      'Đêm phố cổ Hội An rực rỡ đèn lồng',
      'Bãi biển Mỹ Khê top 50 bãi biển đẹp nhất thế giới',
      'Show "Tinh hoa Việt Nam" tại công viên châu Á'
    ],
    itinerary: [
      { 
        day: 1, 
        title: 'Đón khách - Đà Nẵng', 
        description: 'Đón sân bay - Nhận phòng khách sạn - Ăn tối hải sản' 
      },
      { 
        day: 2, 
        title: 'Bà Nà Hills', 
        description: 'Cáp treo dài nhất thế giới - Cầu Vàng - Làng Pháp' 
      },
      { 
        day: 3, 
        title: 'Hội An', 
        description: 'Phố cổ - Làng rau Trà Quế - Đèn hoa đăng' 
      },
      { 
        day: 4, 
        title: 'Đà Nẵng', 
        description: 'Bán đảo Sơn Trà - Bãi biển Mỹ Khê - Cầu Rồng' 
      },
      { 
        day: 5, 
        title: 'Tiễn khách', 
        description: 'Mua sắm đặc sản - Đưa ra sân bay' 
      }
    ],
    inclusions: [
      '4 đêm khách sạn 4*',
      'Vé tham quan tất cả điểm đến',
      'Ăn các bữa theo chương trình',
      'Xe đưa đón đời mới',
      'Bảo hiểm du lịch'
    ],
    exclusions: [
      'Vé máy bay',
      'Chi phí cá nhân',
      'Thuế VAT'
    ],
    tags: ['Hội An', 'Đà Nẵng', 'Bà Nà', 'Biển', 'Văn hóa']
  }
];

// Component IconText
const IconText = ({ icon, text }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mr: 2, mb: 1 }}>
    {React.cloneElement(icon, { sx: { fontSize: 20, mr: 1, color: themeColors.primary } })}
    <Typography variant="body2">{text}</Typography>
  </Box>
);

// Component Gallery
const TourGallery = ({ images }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <ImageList cols={isMobile ? 2 : 3} gap={8} variant="masonry">
      {images.map((img, index) => (
        <ImageListItem key={index}>
          <img
            src={`${img}?w=248&fit=crop&auto=format`}
            srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={`Tour gallery ${index + 1}`}
            loading="lazy"
            style={{ borderRadius: '8px' }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

// Component DetailedTourCard
const DetailedTourCard = ({ tour }) => {
  const [tabValue, setTabValue] = React.useState(0);
  const discountPercent = Math.round(
    ((tour.originalPrice - tour.discountPrice) / tour.originalPrice) * 100
  );

  return (
    <Grid item xs={12}>
      <Card sx={{ borderRadius: 2, boxShadow: 3, mb: 4 }}>
        {/* Main Image */}
        <Box sx={{ position: 'relative', height: '400px' }}>
          <img
            src={tour.mainImage}
            alt={tour.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px'
            }}
          />
          {tour.isBestSeller && (
            <Chip
              label="Best Seller"
              size="medium"
              sx={{
                position: 'absolute',
                top: 16,
                left: 16,
                bgcolor: themeColors.bestSeller,
                color: 'white',
                fontWeight: 'bold',
                fontSize: '0.875rem'
              }}
            />
          )}
        </Box>

        <CardContent sx={{ p: 4 }}>
          {/* Tour Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', mb: 3 }}>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                {tour.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Star color="warning" />
                <Typography variant="body1" sx={{ ml: 1, mr: 3 }}>
                  {tour.rating} ({tour.reviews} reviews)
                </Typography>
                <Chip label={tour.days} size="medium" />
              </Box>
            </Box>
            
            <Box sx={{ minWidth: '200px', textAlign: 'right' }}>
              <Typography variant="h4" sx={{ color: themeColors.primary, fontWeight: 'bold' }}>
                ${tour.discountPrice}
              </Typography>
              <Typography variant="body1" sx={{ textDecoration: 'line-through' }}>
                ${tour.originalPrice}
              </Typography>
              {discountPercent > 0 && (
                <Chip
                  label={`Save ${discountPercent}%`}
                  size="small"
                  sx={{
                    bgcolor: themeColors.discount,
                    color: 'white',
                    fontWeight: 'bold',
                    mt: 1
                  }}
                />
              )}
            </Box>
          </Box>

          {/* Quick Facts */}
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            bgcolor: '#f8f9fa',
            p: 2,
            borderRadius: 1,
            mb: 4
          }}>
            <IconText icon={<LocationOn />} text={tour.tags[0]} />
            <IconText icon={<CalendarToday />} text={`Departure: ${tour.departure}`} />
            <IconText icon={<Group />} text={`Group: ${tour.groupSize}`} />
            <IconText icon={<Language />} text={`Languages: ${tour.languages.join(', ')}`} />
          </Box>

          {/* Tabs */}
          <Tabs
            value={tabValue}
            onChange={(e, newValue) => setTabValue(newValue)}
            sx={{ mb: 3 }}
          >
            <Tab label="Overview" icon={<PhotoLibrary />} />
            <Tab label="Itinerary" icon={<AccessTime />} />
            <Tab label="Inclusions" icon={<Star />} />
          </Tabs>

          {/* Tab Content */}
          <Box sx={{ mb: 4 }}>
            {tabValue === 0 && (
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Tour Description
                </Typography>
                <Typography variant="body1" paragraph>
                  {tour.description}
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, mt: 4 }}>
                  Highlights
                </Typography>
                <List dense>
                  {tour.highlights.map((item, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <Star fontSize="small" color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, mt: 4 }}>
                  Photo Gallery
                </Typography>
                <TourGallery images={tour.images} />
              </Box>
            )}

            {tabValue === 1 && (
              <Box>
                {tour.itinerary.map((day) => (
                  <Paper key={day.day} elevation={2} sx={{ p: 3, mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Day {day.day}: {day.title}
                    </Typography>
                    <Typography variant="body1">
                      {day.description}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            )}

            {tabValue === 2 && (
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Paper elevation={2} sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      What's Included
                    </Typography>
                    <List>
                      {tour.inclusions.map((item, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <CheckCircle color="success" />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={2} sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      What's Excluded
                    </Typography>
                    <List>
                      {tour.exclusions.map((item, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <Cancel color="error" />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
              </Grid>
            )}
          </Box>

          {/* Tags */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
            {tour.tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="medium"
                sx={{
                  bgcolor: themeColors.primary,
                  color: 'white',
                  fontWeight: 'bold'
                }}
              />
            ))}
          </Box>

          {/* CTA Button */}
          <Button
            variant="contained"
            fullWidth
            size="large"
            endIcon={<FlightTakeoff />}
            sx={{
              bgcolor: themeColors.primary,
              py: 2,
              fontSize: '1.1rem',
              '&:hover': {
                bgcolor: '#00695c',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Book This Tour Now
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

// Component chính
const PopularTours = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Our Premium Tours
        </Typography>
        <Typography variant="h5" sx={{ color: themeColors.textSecondary }}>
          Carefully curated travel experiences with complete transparency
        </Typography>
      </Box>

      <Grid container spacing={6}>
        {detailedTours.map((tour) => (
          <DetailedTourCard key={tour.id} tour={tour} />
        ))}
      </Grid>
    </Container>
  );
};

export default PopularTours;