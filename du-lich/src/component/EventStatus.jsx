import  { useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  Event as EventIcon,
  Groups as GroupsIcon,
  Celebration as CelebrationIcon,
  CalendarToday as CalendarIcon,
  EmojiEvents as AwardIcon,
  PeopleAlt as AttendeesIcon,
  LocationCity as VenueIcon,
  Star as StarIcon
} from '@mui/icons-material';

// Styled components
const StatCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  padding: theme.spacing(3),
  textAlign: 'center',
  boxShadow: '0 8px 20px rgba(0, 139, 118, 0.12)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 12px 24px rgba(0, 139, 118, 0.18)'
  }
}));

const StatNumber = styled(Typography)(({ theme }) => ({
  color: '#008b76',
  fontWeight: 700,
  fontSize: '2rem',
  marginBottom: theme.spacing(0.5),
  lineHeight: 1,
  [theme.breakpoints.up('md')]: {
    fontSize: '2.25rem'
  }
}));

const StatLabel = styled(Typography)(({ theme }) => ({
  color: '#555',
  fontWeight: 500,
  fontSize: '0.95rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.05rem'
  }
}));

const PlusSign = styled('span')({
  verticalAlign: 'super',
  fontSize: '1.25rem',
  fontWeight: 400,
  color: '#00b894'
});

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  background: 'linear-gradient(135deg, #008b76, #00b894)',
  color: 'white',
  '& svg': {
    fontSize: '2rem'
  }
}));

const EventStatus = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const stats = [
    {
      number: '5.000',
      label: 'Sự Kiện Hằng Năm',
      icon: <EventIcon fontSize="inherit" />
    },
    {
      number: '1.000',
      label: 'Nhà Tài Trợ',
      icon: <GroupsIcon fontSize="inherit" />
    },
    {
      number: '500',
      label: 'Sự Kiện Quy Mô Lớn',
      icon: <CelebrationIcon fontSize="inherit" />
    },
    {
      number: '100',
      label: 'Sự Kiện Mỗi Ngày',
      icon: <CalendarIcon fontSize="inherit" />
    },
    {
      number: '50',
      label: 'Giải Thưởng Đạt Được',
      icon: <AwardIcon fontSize="inherit" />
    },
    {
      number: '1.000.000',
      label: 'Lượt Tham Dự',
      icon: <AttendeesIcon fontSize="inherit" />
    },
    {
      number: '200',
      label: 'Địa Điểm Tổ Chức',
      icon: <VenueIcon fontSize="inherit" />
    },
    {
      number: '4.9',
      label: 'Đánh Giá Trung Bình',
      icon: <StarIcon fontSize="inherit" />
    }
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#f8faf9',
        padding: theme.spacing(6, 2),
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #008b76, #00b894)'
        }
      }}
    >
      <Box maxWidth="lg" margin="0 auto" width="100%">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          sx={{
            color: '#008b76',
            fontWeight: 600,
            mb: 4,
            fontSize: '1.75rem',
            [theme.breakpoints.up('md')]: {
              fontSize: '2rem'
            }
          }}
        >
          Thành Tựu Nổi Bật
        </Typography>

        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            pb: 2,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            gap: 3
          }}
        >
          {stats.map((stat, index) => (
            <Box
              key={index}
              sx={{
                minWidth: '220px',
                flex: '0 0 auto'
              }}
              data-aos="fade-up"
            >
              <StatCard>
                <IconWrapper>{stat.icon}</IconWrapper>
                <StatNumber variant="h3">
                  {stat.number.includes('.') ? (
                    <>
                      {stat.number.split('.')[0]}
                      <span style={{ fontSize: '0.8em' }}>.{stat.number.split('.')[1]}</span>
                      {!stat.number.includes('4.9') && <PlusSign>+</PlusSign>}
                    </>
                  ) : (
                    stat.number
                  )}
                </StatNumber>
                <StatLabel variant="h6">{stat.label}</StatLabel>
              </StatCard>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default EventStatus;
