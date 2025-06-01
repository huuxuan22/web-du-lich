import React, { useEffect } from 'react';
import { Box, Typography, Card, CardContent, Avatar, Grid, Rating } from '@mui/material';
import { styled } from '@mui/system';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    name: 'Nguyễn Văn A',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    comment: 'Một trải nghiệm du lịch tuyệt vời! Mọi thứ đều được sắp xếp chuyên nghiệp và thuận tiện.',
  },
  {
    name: 'Trần Thị B',
    avatar: 'https://i.pravatar.cc/150?img=2',
    rating: 4.5,
    comment: 'Dịch vụ rất tốt, tư vấn nhiệt tình. Sẽ tiếp tục ủng hộ Smart Travel.',
  },
  {
    name: 'Lê Quốc C',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
    comment: 'Trang web dễ sử dụng, tour chất lượng. Đáng tiền!',
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  background: '#ffffff',
  borderRadius: '20px',
  padding: theme.spacing(3),
  boxShadow: '0 12px 24px rgba(0, 139, 118, 0.15)',
  border: '1px solid #e0f2ef',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 20px 40px rgba(0, 139, 118, 0.25)',
  },
}));

const   CustomerTestimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 8 }, backgroundColor: '#f7faf9' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          color: '#008b76',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: 1.5,
        }}
      >
        Phản hồi từ khách hàng
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ mb: 6, color: 'text.secondary' }}>
        Những lời chia sẻ chân thành từ những người đã trải nghiệm dịch vụ của Smart Travel
      </Typography>

      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={4} key={index} data-aos="fade-up">
            <StyledCard>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ width: 60, height: 60, mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {testimonial.name}
                    </Typography>
                    <Rating
                      name="read-only"
                      value={testimonial.rating}
                      precision={0.5}
                      readOnly
                      sx={{ color: '#008b76' }}
                    />
                  </Box>
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                  “{testimonial.comment}”
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CustomerTestimonials;
