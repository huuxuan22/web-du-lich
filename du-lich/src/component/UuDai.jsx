import { useRef } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Button,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
const cardData = [
  {
    image: "https://th.bing.com/th/id/R.c1f7bde69bf35159fca326558caf58a3?rik=ekMdnKF9eyxEBQ&pid=ImgRaw&r=0",
    location: "Hạ Long, Việt Nam",
    title: "Khám phá Vịnh Hạ Long",
    duration: "3 ngày",
    rating: 4.7,
    ratingCount: 120,
    price: 200,
    discount: "10% OFF",
  },
  {
    image: "https://statics.vinpearl.com/kinh-nghiem-du-lich-hoi-an-0_1661247876.JPG",
    location: "Hội An, Việt Nam",
    title: "Tham quan phố cổ Hội An",
    duration: "2 ngày",
    rating: 4.8,
    ratingCount: 98,
    price: 150,
    discount: "12% OFF",
  },
  {
    image: "https://th.bing.com/th/id/R.4ebeca73d4c0b42504ed55e8936acbfc?rik=xTGiTYuGRlEpiw&pid=ImgRaw&r=0",
    location: "Sa Pa, Việt Nam",
    title: "Trekking ở Sa Pa",
    duration: "4 ngày",
    rating: 4.6,
    ratingCount: 85,
    price: 280,
  },
  {
    image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/9/14/1093152/Halongbay.jpg",
    location: "Đà Nẵng, Việt Nam",
    title: "Nghỉ dưỡng tại biển Đà Nẵng",
    duration: "5 ngày",
    rating: 4.5,
    ratingCount: 110,
    price: 320,
    discount: "15% OFF",
  },
  {
    image: "https://gonatour.vn/vnt_upload/tour/05_2022/HA_LONG_1.jpg",
    location: "Đồng bằng sông Cửu Long",
    title: "Du lịch miền Tây sông nước",
    duration: "4 ngày",
    rating: 4.4,
    ratingCount: 75,
    price: 230,
  },
  {
    image: "https://th.bing.com/th/id/OIP.g6JC8SOLgt74ps7FwtePWgHaE7?rs=1&pid=ImgDetMain",
    location: "Phú Quốc, Việt Nam",
    title: "Phú Quốc - Thiên đường biển đảo",
    duration: "6 ngày",
    rating: 4.9,
    ratingCount: 140,
    price: 450,
  },
  {
    image: "https://pacificcross.com.vn/wp-content/uploads/2021/06/du-lich-da-lat-1-1024x675.jpg",
    location: "Đà Lạt, Việt Nam",
    title: "Thăm Đà Lạt mộng mơ",
    duration: "3 ngày",
    rating: 4.7,
    ratingCount: 95,
    price: 210,
  },
];

const primaryColor = "#008b76";

const UuDai = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        backgroundImage: `linear-gradient(rgba(0, 139, 118, 0.3), rgba(0, 139, 118, 0.3)), url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconButton
        onClick={scrollLeft}
        sx={{
          position: "absolute",
          top: "50%",
          left: 16,
          transform: "translateY(-50%)",
          zIndex: 2,
          color: "white",
          bgcolor: "rgba(0,0,0,0.3)",
          "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
        }}
      >
        <ArrowBackIosNewRoundedIcon />
      </IconButton>

      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          gap: 3,
          maxWidth: "90vw",
          overflowX: "auto",
          padding: 3,
          position: "relative",
          zIndex: 2,
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {cardData.map((card, idx) => (
          <Card
            key={idx}
            sx={{
              cursor: 'pointer',
              width: 400,
              height: 430,
              borderRadius: 2,
              boxShadow: 5,
              position: "relative",
              flexShrink: 0,
            }}
          >
            {card.discount && (
              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  left: 8,
                  bgcolor: "#ff9800",
                  color: "white",
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                  zIndex: 3,
                }}
              >
                {card.discount}
              </Box>
            )}
            <Typography
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: primaryColor,
                fontWeight: "bold",
                fontSize: "1rem",
                zIndex: 3,
              }}
            >
              {`From $${card.price}`}
            </Typography>
            <CardMedia
              component="img"
              height="180"
              image={card.image}
              alt={card.title}
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography
                sx={{ fontSize: "0.9rem", color: "text.secondary", mb: 0.5 }}
              >
                {card.location}
              </Typography>
              <Typography
                sx={{ fontSize: "1.2rem", fontWeight: "bold", mb: 1 }}
              >
                {card.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "text.secondary",
                  fontSize: "0.85rem",
                  mb: 1,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="18"
                  height="18"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17v-6h2v6h-2zm0-8v-2h2v2h-2z" />
                </svg>
                {card.duration}
              </Box>
              <Rating
                name={`rating-${idx}`}
                value={card.rating}
                precision={0.5}
                readOnly
                sx={{ color: primaryColor }}
              />
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                ({card.ratingCount} reviews)
              </Typography>
              <Button
                variant="outlined"
                fullWidth
                endIcon={<ArrowForwardIosRoundedIcon />}
                sx={{
                  color: primaryColor,
                  borderColor: primaryColor,
                  "&:hover": {
                    bgcolor: primaryColor,
                    borderColor: primaryColor,
                    color: "white",
                  },
                }}
              >
                More Information
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      <IconButton
        onClick={scrollRight}
        sx={{
          position: "absolute",
          top: "50%",
          right: 16,
          transform: "translateY(-50%)",
          zIndex: 2,
          color: "white",
          bgcolor: "rgba(0,0,0,0.3)",
          "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
        }}
      >
        <ArrowForwardIosRoundedIcon />
      </IconButton>
    </Box>
  );
};

export default UuDai;
