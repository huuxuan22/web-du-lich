import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Divider,
  Link,
  Paper,
  Avatar,
  IconButton,
} from "@mui/material";
import {
  LocationOn,
  Phone,
  Email,
  Schedule,
  Reply,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
} from "@mui/icons-material";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <Header></Header>
      <Container maxWidth="lg" sx={{ py: 8, mt: 10 }}>
      <Grid container spacing={4}>
        {/* Cột thông tin liên hệ */}
        <Grid item xs={12} md={6} width="30%">
          <Paper sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Thông Tin Liên Hệ
            </Typography>

            <ContactItem icon={<LocationOn />} title="Địa chỉ">
              123 Đường ABC, Quận 1, TP.HCM
            </ContactItem>

            <ContactItem icon={<Phone />} title="Điện thoại">
              0901 234 567 (Hotline/Zalo/Viber)
            </ContactItem>

            <ContactItem icon={<Email />} title="Email">
              support@example.com
            </ContactItem>

            <ContactItem icon={<Schedule />} title="Giờ làm việc">
              Thứ 2 - Thứ 7: 8h00 - 17h00
            </ContactItem>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
              Mạng xã hội
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <SocialIcon icon={<Facebook />} />
              <SocialIcon icon={<Twitter />} />
              <SocialIcon icon={<Instagram />} />
              <SocialIcon icon={<YouTube />} />
            </Box>

            <Link href="#" sx={{ mt: 3, display: 'flex', alignItems: 'center' }}>
              <Reply sx={{ mr: 1 }} /> Chính sách đổi trả
            </Link>
          </Paper>
        </Grid>

        {/* Cột form liên hệ */}
        <Grid item xs={12} md={6} width="63%">
          <Paper sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Gửi Thông Tin
            </Typography>

            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField fullWidth label="Họ và tên" variant="outlined" />
              <TextField fullWidth label="Email" type="email" />
              <TextField fullWidth label="Số điện thoại" />
              <TextField fullWidth label="Chủ đề" />
              <TextField fullWidth multiline rows={4} label="Nội dung" />

              <Button 
                variant="contained" 
                size="large" 
                sx={{ 
                  mt: 2,
                  bgcolor: '#039278',
                  '&:hover': { bgcolor: '#00644a' }
                }}
              >
                Gửi liên hệ
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Bản đồ */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Vị trí cửa hàng
        </Typography>
        <iframe
          title="Bản đồ"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.126365377024!2d106.66001031526053!3d10.801834361948813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2sHo%20Chi%20Minh%20City%20University%20of%20Technology!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: 8 }}
          loading="lazy"
        />
      </Box>
    </Container>
      <Footer></Footer>
    </div>
  );
};

// Component phụ cho các mục liên hệ
const ContactItem = ({ icon, title, children }) => (
  <Box sx={{ display: 'flex', alignItems: 'start', mb: 3 }}>
    <Avatar sx={{ 
      bgcolor: '#039278', 
      color: 'white', 
      mr: 2,
      width: 40,
      height: 40,
      borderRadius: 1
    }}>
      {icon}
    </Avatar>
    <Box>
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{title}</Typography>
      <Typography variant="body2" color="text.secondary">{children}</Typography>
    </Box>
  </Box>
);

// Component cho icon mạng xã hội
const SocialIcon = ({ icon }) => (
  <IconButton
    sx={{
      bgcolor: 'rgba(0,0,0,0.08)',
      '&:hover': { bgcolor: '#039278', color: 'white' }
    }}
  >
    {icon}
  </IconButton>
);

export default Contact;