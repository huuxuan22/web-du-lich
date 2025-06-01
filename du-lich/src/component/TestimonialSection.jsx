import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Avatar, Card, CardContent, Button, Stack } from '@mui/material';
import { Star, StarBorder, ArrowBack, ArrowForward } from '@mui/icons-material';
import AOS from 'aos';

const testimonials = [
  {
    name: 'JOHN SMITH',
    role: 'Solo Traveler',
    img: 'https://randomuser.me/api/portraits/men/11.jpg',
    text: 'The travel experience was absolutely amazing! The guides were knowledgeable and the itinerary was perfectly planned.',
    rating: 4
  },
  {
    name: 'JANE SMITH',
    role: 'Travel Blogger',
    img: 'https://randomuser.me/api/portraits/women/11.jpg',
    text: 'I\'ve never seen such beautiful landscapes. This trip exceeded all my expectations and I can\'t wait to come back!',
    rating: 5
  },
  {
    name: 'PAULA TANA',
    role: 'Adventure Seeker',
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
    text: 'An unforgettable journey with the perfect mix of adventure and relaxation. Highly recommended!',
    rating: 5
  },
  {
    name: 'MARK JOHNSON',
    role: 'Photographer',
    img: 'https://randomuser.me/api/portraits/men/12.jpg',
    text: 'The locations were photographer\'s paradise. Got some of my best shots during this trip.',
    rating: 4
  },
  {
    name: 'LISA RAY',
    role: 'Family Traveler',
    img: 'https://randomuser.me/api/portraits/women/13.jpg',
    text: 'Our family had the best vacation ever. The kids loved it and we felt completely taken care of.',
    rating: 5
  },
  {
    name: 'DAVID WILSON',
    role: 'Business Traveler',
    img: 'https://randomuser.me/api/portraits/men/13.jpg',
    text: 'Even on a business trip, I was able to enjoy the local culture thanks to the excellent arrangements.',
    rating: 4
  },
  {
    name: 'SARAH CONNOR',
    role: 'Honeymooner',
    img: 'https://randomuser.me/api/portraits/women/14.jpg',
    text: 'The most romantic getaway we could have imagined. Every detail was perfect for our honeymoon.',
    rating: 5
  },
  {
    name: 'MICHAEL BROWN',
    role: 'Retiree',
    img: 'https://randomuser.me/api/portraits/men/14.jpg',
    text: 'At my age, I appreciate well-planned trips. This was comfortable, interesting, and perfectly paced.',
    rating: 5
  }
];

const TestimonialSection = () => {
  const green = '#008b76';
  const lightGreen = '#e0f2f1';
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handlePrev = () => {
    setCenterIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCenterIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getIndex = (i) => {
    const len = testimonials.length;
    return (i + len) % len;
  };

  // Show 5 cards at a time (2 on left, center, 2 on right)
  const visibleIndices = [
    getIndex(centerIndex - 2),
    getIndex(centerIndex - 1),
    centerIndex,
    getIndex(centerIndex + 1),
    getIndex(centerIndex + 2)
  ];

  const cardSmallWidth = 240;
  const cardLargeWidth = 340;
  const gap = 20;
  const containerWidth = cardSmallWidth * 4 + cardLargeWidth + gap * 4;

  return (
    <Box sx={{ 
      py: 10, 
      backgroundColor: lightGreen,
      background: 'linear-gradient(to bottom, #ffffff 0%, #e0f2f1 100%)'
    }} id="testimonials">
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          mb={6}
          data-aos="fade-up"
          color={green}
          sx={{ 
            userSelect: 'none',
            textTransform: 'uppercase',
            letterSpacing: 1.5
          }}
        >
          What Our Customers Say
        </Typography>

        <Box
          sx={{
            width: '100%',
            maxWidth: containerWidth,
            height: 420,
            margin: '0 auto',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Navigation Arrows */}
          <Button 
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: { xs: 0, md: -60 },
              zIndex: 2,
              minWidth: 40,
              height: 40,
              borderRadius: '50%',
              bgcolor: green,
              color: 'white',
              '&:hover': {
                bgcolor: '#006b5f'
              }
            }}
          >
            <ArrowBack />
          </Button>

          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: `${gap}px`,
                transition: 'transform 0.5s ease',
                transform: `translateX(calc(50% - ${cardLargeWidth/2 + centerIndex * (cardSmallWidth + gap)}px))`,
                willChange: 'transform',
                position: 'absolute',
                left: 0
              }}
            >
              {testimonials.map((t, i) => {
                const isCenter = i === centerIndex;
                const isVisible = visibleIndices.includes(i);

                if (!isVisible) return null;

                return (
                  <Card
                    key={t.name}
                    data-aos={isCenter ? 'zoom-in' : undefined}
                    sx={{
                      flexShrink: 0,
                      width: isCenter ? cardLargeWidth : cardSmallWidth,
                      height: isCenter ? 380 : 320,
                      transform: isCenter ? 'scale(1)' : 'scale(0.85)',
                      transition: 'all 0.5s ease',
                      opacity: isVisible ? 1 : 0,
                      bgcolor: isCenter ? green : 'white',
                      color: isCenter ? 'white' : 'text.primary',
                      borderRadius: 3,
                      boxShadow: isCenter 
                        ? `0 20px 40px rgba(0, 139, 118, 0.3)`
                        : '0 10px 20px rgba(0,0,0,0.1)',
                      position: 'relative',
                      overflow: 'visible',
                      '&:before': isCenter ? {
                        content: '""',
                        position: 'absolute',
                        top: -10,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: 0,
                        borderLeft: '15px solid transparent',
                        borderRight: '15px solid transparent',
                        borderBottom: `15px solid ${green}`
                      } : {},
                      '&:hover': {
                        transform: isCenter ? 'scale(1.02)' : 'scale(0.9)'
                      }
                    }}
                  >
                    <CardContent
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        p: 4
                      }}
                    >
                      <Box>
                        <Typography 
                          variant="h3" 
                          sx={{ 
                            mb: 2, 
                            fontWeight: 'bold', 
                            lineHeight: 1,
                            color: isCenter ? 'white' : green
                          }}
                        >
                          “
                        </Typography>
                        <Typography
                          variant="body1"
                          fontStyle="italic"
                          sx={{
                            mb: 3,
                            fontSize: isCenter ? '1.1rem' : '0.95rem',
                            lineHeight: 1.7
                          }}
                        >
                          {t.text}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                          src={t.img}
                          alt={t.name}
                          sx={{
                            mr: 2,
                            width: isCenter ? 60 : 50,
                            height: isCenter ? 60 : 50,
                            border: `2px solid ${isCenter ? 'white' : green}`
                          }}
                        />
                        <Box>
                          <Typography
                            fontWeight="bold"
                            fontSize={isCenter ? '1.2rem' : '1rem'}
                          >
                            {t.name}
                          </Typography>
                          <Box sx={{ display: 'flex', mb: 0.5 }}>
                            {[...Array(5)].map((_, starI) =>
                              starI < t.rating ? (
                                <Star
                                  key={starI}
                                  sx={{ 
                                    color: 'gold', 
                                    fontSize: isCenter ? 22 : 18 
                                  }}
                                />
                              ) : (
                                <StarBorder
                                  key={starI}
                                  sx={{ 
                                    color: 'gold', 
                                    fontSize: isCenter ? 22 : 18 
                                  }}
                                />
                              )
                            )}
                          </Box>
                          <Typography 
                            fontSize={isCenter ? 14 : 12}
                            color={isCenter ? 'rgba(255,255,255,0.8)' : 'text.secondary'}
                          >
                            {t.role}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                );
              })}
            </Box>
          </Box>

          <Button 
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: { xs: 0, md: -60 },
              zIndex: 2,
              minWidth: 40,
              height: 40,
              borderRadius: '50%',
              bgcolor: green,
              color: 'white',
              '&:hover': {
                bgcolor: '#006b5f'
              }
            }}
          >
            <ArrowForward />
          </Button>
        </Box>

        <Stack 
          direction="row" 
          justifyContent="center" 
          spacing={2} 
          mt={5}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <Button 
            variant="contained" 
            onClick={handlePrev} 
            sx={{ 
              bgcolor: green,
              '&:hover': { bgcolor: '#006b5f' }
            }}
          >
            <ArrowBack />
          </Button>
          <Button 
            variant="contained" 
            onClick={handleNext} 
            sx={{ 
              bgcolor: green,
              '&:hover': { bgcolor: '#006b5f' }
            }}
          >
            <ArrowForward />
          </Button>
        </Stack>

        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mt: 4,
            gap: 1
          }}
        >
          {testimonials.map((_, i) => (
            <Box
              key={i}
              onClick={() => setCenterIndex(i)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                bgcolor: i === centerIndex ? green : 'rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: i === centerIndex ? green : 'rgba(0,0,0,0.3)'
                }
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialSection;