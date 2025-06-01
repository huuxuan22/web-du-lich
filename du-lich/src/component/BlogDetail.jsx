import { useLocation } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Card,
  Chip,
  Divider,
  Grid,
  Avatar,
  Stack,
  IconButton,
  Fade,
  Zoom,
} from '@mui/material';
import {
  CalendarMonth,
  Person,
  Favorite,
  Share,
  Comment,
  LocationOn,
  AccessTime,
  ArrowBack,
} from '@mui/icons-material';

import { keyframes } from '@emotion/react';
import Footer from '../page/Footer';
import Header from '../page/Header';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const BlogDetail = () => {
  const location = useLocation();
  const post = location.state?.post;

  if (!post) {
    return (
      <Box sx={{ textAlign: 'center', p: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Bài viết không tồn tại
        </Typography>
        <Button
          href="/blogs"
          startIcon={<ArrowBack />}
          sx={{ color: '#008b76' }}
        >
          Quay lại danh sách
        </Button>
      </Box>
    );
  }

  return (
   <div>
    <Header></Header>
     <Box sx={{ maxWidth: 1200, mx: 'auto',mt: 10, py: 8, px: { xs: 2, md: 4 }, animation: `${fadeInUp} 0.8s ease` }}>
      {/* Navigation */}
      <Fade in timeout={600}>
        <Button
          startIcon={<ArrowBack />}
          sx={{
            mb: 4,
            color: '#008b76',
            transition: 'transform 0.3s ease',
            '&:hover': { transform: 'translateX(-4px)' }
          }}
          href="/"
        >
          Quay lại danh sách
        </Button>
      </Fade>

      {/* Featured Image */}
      <Zoom in timeout={700}>
        <Box sx={{
          position: 'relative',
          borderRadius: 4,
          overflow: 'hidden',
          mb: 6,
          height: { xs: 300, md: 500 },
          '&:hover img': {
            transform: 'scale(1.05)'
          }
        }}>
          <Box
            component="img"
            src={post.image}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease'
            }}
          />
          <Box sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            p: 4,
            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'
          }}>
            <Typography variant="h1" sx={{
              color: 'white',
              fontFamily: '"Playfair Display", serif',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              lineHeight: 1.2,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              mb: 2,
              animation: `${fadeInUp} 1s ease`
            }}>
              {post.title}
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap">
              {post.tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  sx={{
                    bgcolor: '#008b76',
                    color: 'white',
                    fontSize: '0.8rem',
                    mb: 1,
                    animation: `${fadeInUp} 1s ${index * 0.1}s ease`,
                    animationFillMode: 'both'
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </Zoom>

      <Grid container spacing={6}>
        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Fade in timeout={800}>
            <Card sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
              bgcolor: '#f8fafc',
              transition: 'box-shadow 0.3s ease',
              '&:hover': {
                boxShadow: '0 16px 35px rgba(0,0,0,0.1)'
              }
            }}>
              <Stack spacing={3}>
                <Box>
                  <Typography variant="h6" sx={{ mb: 2, color: '#008b76' }}>
                    Thông tin bài viết
                  </Typography>
                  {[{
                    icon: <Person sx={{ color: '#008b76', mr: 1 }} />,
                    text: post.author
                  }, {
                    icon: <CalendarMonth sx={{ color: '#008b76', mr: 1 }} />,
                    text: post.date
                  }, {
                    icon: <LocationOn sx={{ color: '#008b76', mr: 1 }} />,
                    text: post.location
                  }, {
                    icon: <AccessTime sx={{ color: '#008b76', mr: 1 }} />,
                    text: `Thời điểm: ${post.bestTime}`
                  }].map((item, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      {item.icon}
                      <Typography variant="body2">{item.text}</Typography>
                    </Box>
                  ))}
                </Box>

                <Divider />

                <Box>
                  <Typography variant="h6" sx={{ mb: 2, color: '#008b76' }}>
                    Tương tác
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Button startIcon={<Favorite />} sx={{
                      color: '#ff6b6b',
                      transition: 'transform 0.3s ease',
                      '&:hover': { transform: 'scale(1.1)' }
                    }}>
                      {post.likes}
                    </Button>
                    <Button startIcon={<Comment />} sx={{
                      color: '#008b76',
                      transition: 'transform 0.3s ease',
                      '&:hover': { transform: 'scale(1.1)' }
                    }}>
                      {post.comments}
                    </Button>
                    <IconButton sx={{
                      color: '#008b76',
                      transition: 'transform 0.3s ease',
                      '&:hover': { transform: 'scale(1.2)' }
                    }}>
                      <Share />
                    </IconButton>
                  </Stack>
                </Box>
              </Stack>
            </Card>
          </Fade>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={8}>
          <Box sx={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            color: '#4a5568',
            '& > div': { mb: 3 },
            animation: `${fadeInUp} 0.9s ease`
          }}>
            {post.experience.split('\n').map((paragraph, index) => {
              const isHeading = index === 0;
              const hasBullet = paragraph.includes('•');
              return (
                <Typography
                  key={index}
                  component="div"
                  sx={{
                    fontSize: isHeading ? '1.3rem' : 'inherit',
                    fontWeight: isHeading ? 600 : 'inherit',
                    pl: hasBullet ? 3 : 0,
                    position: 'relative',
                    '&:before': hasBullet ? {
                      content: '"•"',
                      position: 'absolute',
                      left: 0,
                      color: '#008b76',
                      fontWeight: 'bold'
                    } : {}
                  }}
                >
                  {paragraph.replace('•', '').trim()}
                </Typography>
              );
            })}
          </Box>

          {/* Author Section */}
          <Fade in timeout={1000}>
            <Box sx={{
              mt: 8,
              p: 4,
              borderRadius: 3,
              bgcolor: '#f8fafc',
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              boxShadow: '0 6px 20px rgba(0,0,0,0.05)',
              transition: 'box-shadow 0.3s ease',
              '&:hover': {
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
              }
            }}>
              <Avatar sx={{
                width: 80,
                height: 80,
                bgcolor: '#008b76',
                fontSize: '2rem'
              }}>
                {post.author[0]}
              </Avatar>
              <Box>
                <Typography variant="h6" sx={{ color: '#008b76' }}>
                  {post.author}
                </Typography>
                <Typography variant="body2" sx={{ color: '#718096' }}>
                  Chuyên gia du lịch với 10 năm kinh nghiệm khám phá Việt Nam
                </Typography>
              </Box>
            </Box>
          </Fade>
        </Grid>
      </Grid>
    </Box>
    <Footer></Footer>
   </div>
  );
};

export default BlogDetail;
