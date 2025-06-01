import { Box, Typography, Button, styled, keyframes } from '@mui/material';

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const VietnamTravelBanner = styled(Box)({
  position: 'relative',
  height: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5))',
    zIndex: 1
  }
});

const LuxuryVillaComponent = () => {
  return (
    <VietnamTravelBanner>
      {/* Background Image - Hội An */}
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt="Vietnam Travel"
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          transition: 'transform 0.5s ease',
          '&:hover': {
            transform: 'scale(1.03)'
          }
        }}
      />

      {/* Content */}
      <Box sx={{
        position: 'relative',
        zIndex: 2,
        color: '#fff',
        textAlign: 'center',
        px: 3,
        maxWidth: '900px',
        animation: `${fadeIn} 1s ease-out`
      }}>
        <Typography variant="overline" sx={{
          display: 'block',
          letterSpacing: '4px',
          color: '#008b76',
          mb: 2,
          fontSize: '0.9rem',
          fontWeight: 500
        }}>
          KHÁM PHÁ VIỆT NAM
        </Typography>

        <Typography variant="h2" sx={{
          fontFamily: '"Playfair Display", serif',
          fontWeight: 700,
          fontSize: { xs: '2.8rem', md: '4.2rem' },
          mb: 3,
          lineHeight: 1.2,
          textShadow: '0 2px 10px rgba(0,0,0,0.3)'
        }}>
          Hành Trình Di Sản
        </Typography>

        <Box sx={{
          width: '100px',
          height: '3px',
          bgcolor: '#008b76',
          mx: 'auto',
          mb: 4,
          boxShadow: '0 2px 10px rgba(0,139,118,0.5)'
        }} />

        {/* Đặc điểm du lịch Việt Nam */}
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 3,
          mb: 4
        }}>
          {[
            { icon: '🏮', text: 'Phố cổ Hội An' },
            { icon: '⛰️', text: 'Vịnh Hạ Long' },
            { icon: '🏞️', text: 'Ruộng bậc thang Sapa' },
            { icon: '🍜', text: 'Ẩm thực đường phố' }
          ].map((item, index) => (
            <Box key={index} sx={{
              bgcolor: 'rgba(0,139,118,0.2)',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(0,139,118,0.3)',
              borderRadius: '50px',
              px: 3,
              py: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}>
              <Typography>{item.icon}</Typography>
              <Typography variant="body2">{item.text}</Typography>
            </Box>
          ))}
        </Box>

        <Typography variant="body1" sx={{
          fontSize: '1.1rem',
          mb: 4,
          maxWidth: '700px',
          mx: 'auto',
          fontWeight: 300,
          letterSpacing: '0.5px',
          lineHeight: 1.8,
          textShadow: '0 1px 3px rgba(0,0,0,0.5)'
        }}>
          Khám phá vẻ đẹp bất tận từ di sản thế giới đến những bãi biển hoang sơ, 
          cùng nền ẩm thực độc đáo bậc nhất hành tinh.
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: '#008b76',
            color: '#fff',
            px: 5,
            py: 1.5,
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '1px',
            '&:hover': {
              bgcolor: '#006e5d',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 15px rgba(0,139,118,0.4)'
            },
            transition: 'all 0.3s ease',
            boxShadow: '0 3px 10px rgba(0,139,118,0.3)'
          }}
        >
          BẮT ĐẦU HÀNH TRÌNH
        </Button>

        {/* Địa danh nổi bật */}
        <Typography variant="caption" sx={{
          position: 'absolute',
          bottom: 40,
          left: 0,
          right: 0,
          textAlign: 'center',
          color: 'rgba(255,255,255,0.7)',
          letterSpacing: '2px'
        }}>
          HỘI AN • HẠ LONG • SAPA • PHÚ QUỐC • ĐÀ LẠT • NHA TRANG
        </Typography>
      </Box>
    </VietnamTravelBanner>
  );
};

export default LuxuryVillaComponent;