import React from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  Chip,
  Rating,
  IconButton,
  Paper,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Tabs,
  Tab,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  LocationOn,
  Favorite,
  FavoriteBorder,
  Share,
  Directions,
  AttachMoney,
  Star,
  Close,
  AccessTime,
  CalendarToday,
  Phone,
  Language,
  LocalParking,
  Restaurant,
  Wifi,
  Pets,
  AirlineSeatReclineNormal,
  Accessibility,
  ThumbUpAlt,
  ChatBubbleOutline,
  CloudUpload,
  Send,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Footer from "./Footer";
import Header from "./Header";

// Styled components
const DetailContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: "12px",
  boxShadow: theme.shadows[4],
  marginBottom: theme.spacing(4),
}));

const GalleryImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.03)",
  },
}));

const ReviewItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderRadius: "8px",
}));

const PlaceDetail = ({
  place,
  open,
  onClose,
  favorites,
  toggleFavorite,
  onDirectionClick,
}) => {
  const [currentTab, setCurrentTab] = React.useState(0);
  const [reviewText, setReviewText] = React.useState("");
  const [reviewRating, setReviewRating] = React.useState(0);
  const [reviewDialogOpen, setReviewDialogOpen] = React.useState(false);

  if (!place) return null;

  // Sample data for the component
  const placeDetails = {
    facilities: [
      { icon: <LocalParking />, text: "Bãi đỗ xe" },
      { icon: <Restaurant />, text: "Nhà hàng" },
      { icon: <Wifi />, text: "Wifi miễn phí" },
      { icon: <Pets />, text: "Cho phép thú cưng" },
      { icon: <Accessibility />, text: "Tiếp cận người khuyết tật" },
    ],
    openingHours: [
      { day: "Thứ 2 - Thứ 6", time: "8:00 - 18:00" },
      { day: "Thứ 7 - Chủ nhật", time: "7:30 - 19:00" },
    ],
    contact: {
      phone: "0235 3861 527",
      website: "www.hoianheritage.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      place?.image,
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    reviews: [
      {
        id: 1,
        user: "Nguyễn Văn A",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        rating: 5,
        date: "12/05/2023",
        comment:
          "Địa điểm tuyệt vời! Kiến trúc cổ rất đẹp, ẩm thực ngon. Nhân viên thân thiện và nhiệt tình.",
      },
      {
        id: 2,
        user: "Trần Thị B",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        rating: 4,
        date: "28/04/2023",
        comment:
          "Rất thích không gian ở đây, nhưng hơi đông khách. Nên đi vào buổi sáng sớm để tránh đám đông.",
      },
      {
        id: 3,
        user: "Lê Văn C",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        rating: 4.5,
        date: "15/04/2023",
        comment:
          "Đèn lồng về đêm rất đẹp. Giá vé hơi cao nhưng xứng đáng với trải nghiệm.",
      },
    ],
    nearbyPlaces: [
      {
        name: "Chùa Cầu Nhật Bản",
        distance: "500m",
        image:
          "https://th.bing.com/th/id/OIP.9GFZndIuHwbhrrenm6mt-gHaE8?rs=1&pid=ImgDetMain",
        rating: 4.7,
        type: "Di tích lịch sử",
        price: "Miễn phí",
        time: "10-15 phút đi bộ",
      },
      {
        name: "Bảo tàng Văn hóa Hội An",
        distance: "1.2km",
        image:
          "https://th.bing.com/th/id/OIP.8oVn4shv_Tru9fwVbjT6iAHaE6?rs=1&pid=ImgDetMain",
        rating: 4.3,
        type: "Bảo tàng",
        price: "80.000 VND",
        time: "5 phút đi xe",
      },
      {
        name: "Chợ đêm Hội An",
        distance: "800m",
        image:
          "https://th.bing.com/th/id/OIP.Pf5fNkBa5YA-wvEpbPIJ0AHaE8?rs=1&pid=ImgDetMain",
        rating: 4.5,
        type: "Chợ đêm",
        price: "Tự do",
        time: "10 phút đi bộ",
      },
      {
        name: "Bãi biển An Bàng",
        distance: "3.5km",
        image:
          "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        type: "Bãi biển",
        price: "Miễn phí",
        time: "15 phút đi xe",
      },
      {
        name: "Làng rau Trà Quế",
        distance: "4km",
        image:
          "https://ik.imagekit.io/tvlk/blog/2023/03/lang-rau-tra-que-9.jpg?tr=dpr-2,w-675",
        rating: 4.4,
        type: "Làng nghề",
        price: "50.000 VND",
        time: "20 phút đi xe",
      },
      {
        name: "Xưởng làm lồng đèn",
        distance: "1km",
        image:
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.2,
        type: "Trải nghiệm",
        price: "100.000 VND",
        time: "12 phút đi bộ",
      },
    ],
  };

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleReviewSubmit = () => {
    // In a real app, you would send this to your backend
    console.log({
      placeId: place.id,
      rating: reviewRating,
      comment: reviewText,
    });
    setReviewDialogOpen(false);
    setReviewText("");
    setReviewRating(0);
  };

  return (
    <div>
      <Header></Header>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth="lg"
        scroll="body"
        PaperProps={{
          sx: {
            borderRadius: "12px",
            overflow: "hidden",
          },
        }}
      >
        <DialogTitle>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4" fontWeight="bold">
              {place.name}
            </Typography>
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ mb: 4 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Rating
                value={place.rating}
                precision={0.1}
                readOnly
                sx={{ mr: 1 }}
              />
              <Typography variant="body1" sx={{ mr: 2 }}>
                {place.rating} ({place.reviews} đánh giá)
              </Typography>
              <Typography
                variant="body1"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <LocationOn
                  fontSize="small"
                  sx={{ verticalAlign: "middle", mr: 0.5 }}
                />
                {place.distance}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
              <Button
                variant="outlined"
                startIcon={
                  favorites.includes(place.id) ? (
                    <Favorite />
                  ) : (
                    <FavoriteBorder />
                  )
                }
                onClick={() => toggleFavorite(place.id)}
                sx={{
                  color: favorites.includes(place.id)
                    ? "error.main"
                    : "inherit",
                }}
              >
                {favorites.includes(place.id) ? "Đã thích" : "Yêu thích"}
              </Button>
              <Button variant="outlined" startIcon={<Share />}>
                Chia sẻ
              </Button>
              <Button
                variant="outlined"
                startIcon={<Directions />}
                onClick={onDirectionClick}
              >
                Chỉ đường
              </Button>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Mô tả
              </Typography>
              <Typography>{place.description}</Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                {place.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="medium"
                    sx={{
                      backgroundColor: "rgba(0,139,118,0.1)",
                      color: "#008b76",
                      fontSize: "0.875rem",
                    }}
                  />
                ))}
              </Box>
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center", mb: 1 }}
              >
                <AttachMoney sx={{ mr: 1 }} />
                {place.priceRange}
              </Typography>
            </Box>

            <Tabs
              value={currentTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                mb: 3,
                "& .MuiTabs-indicator": {
                  backgroundColor: "#008b76",
                },
              }}
            >
              <Tab
                label="Tổng quan"
                sx={{
                  "&.Mui-selected": {
                    color: "#008b76",
                    fontWeight: "bold",
                  },
                }}
              />
              <Tab
                label="Hình ảnh"
                sx={{
                  "&.Mui-selected": {
                    color: "#008b76",
                    fontWeight: "bold",
                  },
                }}
              />
              <Tab
                label="Đánh giá"
                sx={{
                  "&.Mui-selected": {
                    color: "#008b76",
                    fontWeight: "bold",
                  },
                }}
              />
              <Tab
                label="Địa điểm gần đó"
                sx={{
                  "&.Mui-selected": {
                    color: "#008b76",
                    fontWeight: "bold",
                  },
                }}
              />
            </Tabs>

            {/* Overview Tab */}
            {currentTab === 0 && (
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <DetailContainer>
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                      Tiện nghi
                    </Typography>
                    <List>
                      {placeDetails.facilities.map((facility, index) => (
                        <ListItem key={index}>
                          <ListItemIcon sx={{ minWidth: "36px" }}>
                            {facility.icon}
                          </ListItemIcon>
                          <ListItemText primary={facility.text} />
                        </ListItem>
                      ))}
                    </List>
                  </DetailContainer>

                  <DetailContainer sx={{ mt: 3 }}>
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                      Giờ mở cửa
                    </Typography>
                    <List>
                      {placeDetails.openingHours.map((hour, index) => (
                        <ListItem key={index}>
                          <ListItemIcon sx={{ minWidth: "36px" }}>
                            <AccessTime />
                          </ListItemIcon>
                          <ListItemText
                            primary={hour.day}
                            secondary={hour.time}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </DetailContainer>
                </Grid>

                <Grid item xs={12} md={6}>
                  <DetailContainer>
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                      Thông tin liên hệ
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemIcon sx={{ minWidth: "36px" }}>
                          <Phone />
                        </ListItemIcon>
                        <ListItemText primary={placeDetails.contact.phone} />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon sx={{ minWidth: "36px" }}>
                          <Language />
                        </ListItemIcon>
                        <ListItemText primary={placeDetails.contact.website} />
                      </ListItem>
                    </List>
                  </DetailContainer>

                  <DetailContainer sx={{ mt: 3 }}>
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                      Mẹo du lịch
                    </Typography>
                    <Typography paragraph>
                      - Nên đi vào sáng sớm hoặc chiều muộn để tránh đám đông
                    </Typography>
                    <Typography paragraph>
                      - Mang theo ô/dù và kem chống nắng vào mùa hè
                    </Typography>
                    <Typography paragraph>
                      - Có thể mua vé combo nếu tham quan nhiều địa điểm
                    </Typography>
                    <Typography paragraph>
                      - Thử các món ăn địa phương tại các quán nhỏ ven đường
                    </Typography>
                  </DetailContainer>
                </Grid>
              </Grid>
            )}

            {/* Gallery Tab */}
            {currentTab === 1 && (
              <Grid container spacing={2}>
                {placeDetails.gallery.map((image, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <GalleryImage
                      src={image}
                      alt={`${place.name} ${index + 1}`}
                    />
                  </Grid>
                ))}
              </Grid>
            )}

            {/* Reviews Tab */}
            {currentTab === 2 && (
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      Đánh giá ({placeDetails.reviews.length})
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                      <Rating 
                        value={place.rating} 
                        precision={0.1} 
                        readOnly 
                        size="medium"
                      />
                      <Typography variant="body1" sx={{ ml: 1 }}>
                        {place.rating} trên 5 ({place.reviews} đánh giá)
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    startIcon={<Star />}
                    onClick={() => setReviewDialogOpen(true)}
                    sx={{ 
                      backgroundColor: "#008b76",
                      "&:hover": { backgroundColor: "#006b5f" }
                    }}
                  >
                    Viết đánh giá
                  </Button>
                </Box>

                {/* Review Filter/Sort Section */}
                <Box sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  mb: 3,
                  gap: 2,
                  flexWrap: 'wrap'
                }}>
                  <Typography variant="body1">Lọc theo:</Typography>
                  <Chip label="Tất cả" variant="outlined" clickable />
                  <Chip 
                    label="5 sao" 
                    variant="outlined" 
                    clickable 
                    icon={<Star fontSize="small" sx={{ color: "#ffc107" }} />}
                  />
                  <Chip 
                    label="4 sao" 
                    variant="outlined" 
                    clickable 
                    icon={<Star fontSize="small" sx={{ color: "#ffc107" }} />}
                  />
                  <Chip 
                    label="Có hình ảnh" 
                    variant="outlined" 
                    clickable 
                  />
                </Box>

                {placeDetails.reviews.length === 0 ? (
                  <Box sx={{ 
                    textAlign: 'center', 
                    py: 4,
                    border: '1px dashed #ddd',
                    borderRadius: 2
                  }}>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      Chưa có đánh giá nào cho địa điểm này
                    </Typography>
                    <Button
                      variant="outlined"
                      onClick={() => setReviewDialogOpen(true)}
                      sx={{ color: "#008b76", borderColor: "#008b76" }}
                    >
                      Trở thành người đầu tiên đánh giá
                    </Button>
                  </Box>
                ) : (
                  placeDetails.reviews.map((review) => (
                    <ReviewItem key={review.id} elevation={0} sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          mb: 2,
                        }}
                      >
                        <Avatar 
                          src={review.avatar} 
                          sx={{ 
                            mr: 2,
                            width: 48,
                            height: 48
                          }} 
                        />
                        <Box sx={{ flex: 1 }}>
                          <Box sx={{ 
                            display: "flex", 
                            justifyContent: "space-between",
                            flexWrap: 'wrap'
                          }}>
                            <Typography fontWeight="bold">{review.user}</Typography>
                            <Typography variant="body2" color="text.secondary">
                              {review.date}
                            </Typography>
                          </Box>
                          
                          <Box sx={{ 
                            display: "flex", 
                            alignItems: "center",
                            my: 1
                          }}>
                            <Rating
                              value={review.rating}
                              precision={0.5}
                              readOnly
                              size="small"
                              sx={{ mr: 1 }}
                            />
                            <Typography variant="body2" color="text.secondary">
                              {review.rating} sao
                            </Typography>
                          </Box>
                          
                          <Typography paragraph sx={{ mb: 1 }}>
                            {review.comment}
                          </Typography>
                          
                          {/* Review Actions */}
                          <Box sx={{ 
                            display: "flex", 
                            gap: 2,
                            mt: 1
                          }}>
                            <Button 
                              size="small" 
                              startIcon={<ThumbUpAlt fontSize="small" />}
                              sx={{ color: 'text.secondary' }}
                            >
                              Hữu ích
                            </Button>
                            <Button 
                              size="small" 
                              startIcon={<ChatBubbleOutline fontSize="small" />}
                              sx={{ color: 'text.secondary' }}
                            >
                              Phản hồi
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </ReviewItem>
                  ))
                )}
              </Box>
            )}

            {/* Nearby Places Tab */}
            {currentTab === 3 && (
              <Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  fontWeight="bold"
                  sx={{ mb: 3 }}
                >
                  Địa điểm gần đó ({placeDetails.nearbyPlaces.length})
                </Typography>
                <Grid container spacing={3}>
                  {placeDetails.nearbyPlaces.map((nearby, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Paper
                        sx={{
                          p: 0,
                          borderRadius: "12px",
                          overflow: "hidden",
                          transition: "transform 0.3s, box-shadow 0.3s",
                          "&:hover": {
                            transform: "translateY(-5px)",
                            boxShadow: 3,
                          },
                        }}
                      >
                        <Box sx={{ position: "relative" }}>
                          <GalleryImage
                            src={nearby.image}
                            alt={nearby.name}
                            style={{
                              height: "180px",
                              width: "100%",
                              objectFit: "cover",
                            }}
                          />
                          <Box
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bgcolor: "rgba(0,0,0,0.4)",
                              color: "white",
                              p: 1,
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Chip
                              label={nearby.type}
                              size="small"
                              sx={{
                                backgroundColor: "rgba(0,139,118,0.8)",
                                color: "white",
                                fontWeight: "bold",
                              }}
                            />
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Star
                                fontSize="small"
                                sx={{ color: "#ffc107", mr: 0.5 }}
                              />
                              <Typography variant="body2" fontWeight="bold">
                                {nearby.rating}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>

                        <Box sx={{ p: 2 }}>
                          <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            sx={{ mb: 1 }}
                          >
                            {nearby.name}
                          </Typography>

                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mb: 1,
                            }}
                          >
                            <LocationOn
                              fontSize="small"
                              sx={{ mr: 1, color: "#008b76" }}
                            />
                            <Typography variant="body2">
                              Cách {nearby.distance} • {nearby.time}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography variant="body2" color="text.secondary">
                              {nearby.price}
                            </Typography>
                            <Button
                              size="small"
                              sx={{
                                color: "#008b76",
                                fontWeight: "bold",
                                textTransform: "none",
                              }}
                            >
                              Xem chi tiết
                            </Button>
                          </Box>
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} sx={{ color: "#008b76" }}>
            Đóng
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#008b76" }}
            onClick={() => {
              /* Handle booking */
            }}
          >
            Đặt vé/Đặt tour
          </Button>
        </DialogActions>

        {/* Review Dialog */}
        <Dialog
          open={reviewDialogOpen}
          onClose={() => setReviewDialogOpen(false)}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: { borderRadius: 2 }
          }}
        >
          <DialogTitle sx={{ 
            borderBottom: '1px solid #eee',
            pb: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Typography variant="h6" fontWeight="bold">
              Viết đánh giá
            </Typography>
            <IconButton onClick={() => setReviewDialogOpen(false)}>
              <Close />
            </IconButton>
          </DialogTitle>
          
          <DialogContent sx={{ py: 3 }}>
            <Box sx={{ mb: 3, textAlign: 'center' }}>
              <Typography variant="body1" gutterBottom>
                Bạn đánh giá địa điểm này như thế nào?
              </Typography>
              <Rating
                value={reviewRating}
                onChange={(event, newValue) => setReviewRating(newValue)}
                precision={0.5}
                size="large"
                sx={{ 
                  fontSize: '2.5rem',
                  '& .MuiRating-iconFilled': {
                    color: '#ffc107'
                  }
                }}
              />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {reviewRating === 5 ? 'Tuyệt vời!' : 
                 reviewRating === 4 ? 'Rất tốt' : 
                 reviewRating === 3 ? 'Tốt' : 
                 reviewRating === 2 ? 'Không tốt lắm' : 
                 reviewRating === 1 ? 'Tệ' : 'Chọn số sao'}
              </Typography>
            </Box>
            
            <TextField
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              label="Chia sẻ trải nghiệm của bạn"
              placeholder="Địa điểm này có gì đặc biệt? Dịch vụ thế nào? Có đáng giá không?..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              sx={{ mb: 2 }}
            />
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" gutterBottom>
                Thêm hình ảnh (tối đa 3 ảnh)
              </Typography>
              <Box sx={{ 
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap'
              }}>
                <Button 
                  variant="outlined" 
                  component="label"
                  startIcon={<CloudUpload />}
                >
                  Tải ảnh lên
                  <input type="file" hidden accept="image/*" multiple />
                </Button>
              </Box>
            </Box>
            
            <Box sx={{ 
              backgroundColor: '#f9f9f9',
              borderRadius: 1,
              p: 2,
              mb: 2
            }}>
              <Typography variant="body2">
                <strong>Lưu ý khi đánh giá:</strong>
              </Typography>
              <ul style={{ 
                paddingLeft: 20,
                margin: '8px 0',
                fontSize: '0.875rem'
              }}>
                <li>Không sử dụng ngôn ngữ thiếu văn hóa</li>
                <li>Không đăng thông tin cá nhân</li>
                <li>Đánh giá dựa trên trải nghiệm thực tế</li>
              </ul>
            </Box>
          </DialogContent>
          
          <DialogActions sx={{ 
            borderTop: '1px solid #eee',
            px: 3,
            py: 2
          }}>
            <Button 
              onClick={() => setReviewDialogOpen(false)} 
              sx={{ color: 'text.secondary' }}
            >
              Hủy bỏ
            </Button>
            <Button
              onClick={handleReviewSubmit}
              variant="contained"
              sx={{ 
                backgroundColor: "#008b76",
                "&:hover": { backgroundColor: "#006b5f" },
                px: 3
              }}
              disabled={!reviewText || reviewRating === 0}
              startIcon={<Send />}
            >
              Đăng đánh giá
            </Button>
          </DialogActions>
        </Dialog>
      </Dialog>
      <Footer></Footer>
    </div>
  );
};

export default PlaceDetail;