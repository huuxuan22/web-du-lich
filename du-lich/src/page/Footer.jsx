import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Link,
  Divider,
  IconButton,
  TextField,
  Button,
  Container,
  useTheme,
  useMediaQuery,
  Fade
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  Email,
  LocalPhone,
  LocationOn,
  Flight,
  Hotel,
  Directions,
  Send,
  PhoneInTalk,
  Info,
  Article,
  Work
} from "@mui/icons-material";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubscribe = () => {
    if (!email) {
      setError("Vui lòng nhập email!");
      setSubscribed(false);
      return;
    }
    if (!validateEmail(email)) {
      setError("Email không hợp lệ!");
      setSubscribed(false);
      return;
    }
    setError("");
    setSubscribed(true);
    alert(`Cảm ơn bạn đã đăng ký nhận tin du lịch với email ${email}!`);
    setEmail("");
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#ffffff",
        color: "#333",
        padding: isMobile ? "40px 20px" : "60px 0",
        marginTop: "auto",
        borderTop: "1px solid rgba(0, 0, 0, 0.05)"
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={isMobile ? 4 : 6} sx={{ mb: isMobile ? 4 : 6 }}>
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="body1"
                sx={{
                  color: "#555",
                  lineHeight: 1.6,
                  mb: 2,
                  fontStyle: "italic",
                  fontWeight: "500",
                  fontSize: "1.1rem"
                }}
              >
                "Khám phá thế giới với những trải nghiệm đáng nhớ"
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                {[
                  { icon: <Facebook />, color: "#3b5998", label: "Facebook" },
                  { icon: <Instagram />, color: "#E1306C", label: "Instagram" },
                  { icon: <Twitter />, color: "#1DA1F2", label: "Twitter" },
                  { icon: <YouTube />, color: "#FF0000", label: "YouTube" }
                ].map((social, index) => (
                  <IconButton
                    key={index}
                    aria-label={social.label}
                    sx={{
                      color: social.color,
                      backgroundColor: "rgba(0,0,0,0.02)",
                      border: "1px solid rgba(0,0,0,0.05)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: social.color,
                        color: "#fff",
                        transform: "scale(1.1)"
                      }
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mb: 1.5, gap: 1 }}>
              <LocalPhone sx={{ color: "#008b76", fontSize: "20px" }} />
              <Typography variant="body2" sx={{ color: "#555" }}>
                +84 123 456 789 (Hỗ trợ 24/7)
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1.5, gap: 1 }}>
              <Email sx={{ color: "#008b76", fontSize: "20px", mt: 0.5 }} />
              <Typography variant="body2" sx={{ color: "#555" }}>
                info@dulich.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
              <LocationOn sx={{ color: "#008b76", fontSize: "20px", mt: 0.5 }} />
              <Typography variant="body2" sx={{ color: "#555" }}>
                123 Đường Du Lịch, Quận 1, TP.HCM
              </Typography>
            </Box>
          </Grid>

          {/* Tour du lịch */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: "#008b76",
                mb: 3,
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: 0,
                  width: "40px",
                  height: "2px",
                  backgroundColor: "#008b76"
                }
              }}
            >
              Tour du lịch
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", padding: 0 }}>
              {[
                "Tour trong nước",
                "Tour nước ngoài",
                "Tour du lịch biển",
                "Tour khám phá",
                "Tour nghỉ dưỡng"
              ].map((item) => (
                <li key={item} style={{ marginBottom: "12px" }}>
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      color: "#555",
                      "&:hover": {
                        color: "#008b76",
                        paddingLeft: "8px",
                        transition: "all 0.3s ease"
                      }
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </Box>
          </Grid>

          {/* Dịch vụ */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: "#008b76",
                mb: 3,
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: 0,
                  width: "40px",
                  height: "2px",
                  backgroundColor: "#008b76"
                }
              }}
            >
              Dịch vụ
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", padding: 0 }}>
              {[
                "Đặt vé máy bay",
                "Đặt khách sạn",
                "Thuê xe du lịch",
                "Bảo hiểm du lịch",
                "Visa các nước"
              ].map((item) => (
                <li key={item} style={{ marginBottom: "12px" }}>
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      color: "#555",
                      "&:hover": {
                        color: "#008b76",
                        paddingLeft: "8px",
                        transition: "all 0.3s ease"
                      }
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </Box>
          </Grid>

          {/* Về chúng tôi */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: "#008b76",
                mb: 3,
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: 0,
                  width: "40px",
                  height: "2px",
                  backgroundColor: "#008b76"
                }
              }}
            >
              Về chúng tôi
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", padding: 0 }}>
              {[
                { label: "Giới thiệu", icon: <Info sx={{ fontSize: 18, mr: 0.5 }} /> },
                { label: "Blog", icon: <Article sx={{ fontSize: 18, mr: 0.5 }} /> },
                { label: "Tuyển dụng", icon: <Work sx={{ fontSize: 18, mr: 0.5 }} /> }
              ].map(({ label, icon }) => (
                <li key={label} style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      color: "#555",
                      display: "flex",
                      alignItems: "center",
                      "&:hover": {
                        color: "#008b76",
                        paddingLeft: "8px",
                        transition: "all 0.3s ease"
                      }
                    }}
                  >
                    {icon}
                    {label}
                  </Link>
                </li>
              ))}
            </Box>
          </Grid>

          {/* Đăng ký nhận tin */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: "#008b76",
                mb: 3,
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: 0,
                  width: "40px",
                  height: "2px",
                  backgroundColor: "#008b76"
                }
              }}
            >
              Đăng ký nhận tin
            </Typography>

            <Typography variant="body2" sx={{ mb: 2, color: "#555" }}>
              Nhận các ưu đãi và tin tức du lịch mới nhất qua email của bạn.
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Nhập email của bạn"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={Boolean(error)}
                helperText={error}
                sx={{
                  backgroundColor: "#f7f7f7",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "4px"
                  }
                }}
              />
              <Button
                variant="contained"
                onClick={handleSubscribe}
                sx={{
                  textTransform: "none",
                  px: 3,
                  bgcolor: "#008b76",
                  "&:hover": {
                    bgcolor: "#006d5e",
                    transform: "scale(1.05)",
                    transition: "all 0.3s ease"
                  }
                }}
                endIcon={<Send />}
              >
                Gửi
              </Button>
            </Box>

            {subscribed && (
              <Fade in={subscribed}>
                <Typography variant="body2" color="success.main" sx={{ mt: 2 }}>
                  Cảm ơn bạn đã đăng ký nhận tin!
                </Typography>
              </Fade>
            )}
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(0,0,0,0.1)" }} />

        <Box
          sx={{
            mt: 3,
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#999"
          }}
        >
          © 2024 Công ty Du lịch ABC. Bản quyền thuộc về Công ty Du lịch ABC.
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
