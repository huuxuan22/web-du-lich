import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import {
  TravelExplore as TravelExploreIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Search as SearchIcon,
  RoomService as RoomServiceIcon,
  Feedback as FeedbackIcon,
  ContactMail as ContactMailIcon,
  Login as LoginIcon,
  HowToReg as RegisterIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#007160",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        py: 1,
        width: "100%",
        left: 0,
        right: 0,
        mb: 5,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 4,
          flexWrap: "wrap",
        }}
      >
        {/* Logo - Left */}
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          <TravelExploreIcon sx={{ fontSize: 40, mr: 1, color: "white" }} />
          <Typography
            variant="h5"
            component="a"
            href="/"
            sx={{
              color: "white",
              textDecoration: "none",
              fontWeight: 700,
              letterSpacing: "0.1rem",
              fontFamily: "monospace",
              fontSize: "1.8rem",
            }}
          >
            SMART TRAVEL
          </Typography>
        </Box>

        {/* Main Menu - Center */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            flex: 2,
          }}
        >
          {[
            { icon: <HomeIcon />, label: "Trang Chủ", path: "/" },
            { icon: <InfoIcon />, label: "Giới Thiệu", path: "/introduce" },
            { icon: <SearchIcon />, label: "Tìm Kiếm", path: "/destination" },
            { icon: <RoomServiceIcon />, label: "Dịch Vụ", path: "/service" },
            { icon: <FeedbackIcon />, label: "Phản hồi", path: "/feedback" },
            { icon: <ContactMailIcon />, label: "Liên Hệ", path: "/contact" },
          ].map((item, index) => (
            <Button
              key={index}
              startIcon={item.icon}
              onClick={() => navigate(item.path)}
              sx={{
                color: "white",
                mx: 1,
                textTransform: "none",
                transition: "all 0.3s",
                fontWeight: 600,
                fontSize: "1.05rem",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.2)",
                  color: "#FFD700",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Login / Register - Right */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
            flex: 1,
            gap: 1,
          }}
        >
          <Button
            startIcon={<LoginIcon />}
            sx={{
              color: "white",
              textTransform: "none",
              fontWeight: 600,
              fontSize: "1rem",
              borderRadius: "20px",
              px: 2,
              backgroundColor: "transparent",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.2)",
                color: "#FFD700",
              },
            }}
            onClick={() => navigate(`/login`)}
          >
            Đăng Nhập
          </Button>

          <Button
            startIcon={<RegisterIcon />}
            sx={{
              color: "#007160",
              backgroundColor: "white",
              fontWeight: 700,
              fontSize: "1rem",
              textTransform: "none",
              borderRadius: "20px",
              px: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#f0f0f0",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              },
            }}
            onClick={() => navigate(`/register`)}
          >
            Đăng Ký
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
