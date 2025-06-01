import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
} from '@mui/material';
import {
  CalendarMonth,
  Person,
  Favorite,
  Share,
  Comment,
  LocationOn,
  AccessTime,
  EmojiEmotions,
  ArrowForward,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const VietnamTravelBlog = () => {

    const navigate = useNavigate();
  const blogPosts = [
    {
      id: 1,
      title: 'Hội An - Nét Đẹp Cổ Kính Giữa Lòng Hiện Đại',
      excerpt: 'Khám phá những giá trị văn hóa đặc sắc của phố cổ Hội An...',
      image: 'https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-hoi-an-cover.jpg',
      date: '15/03/2023',
      author: 'Nguyễn Văn An',
      tags: ['Di sản', 'Văn hóa', 'Ẩm thực'],
      likes: 124,
      comments: 28,
      location: 'Quảng Nam',
      bestTime: 'Tháng 2 - Tháng 4',
      experience: `
        Đến với Hội An, bạn sẽ được trải nghiệm:
        
        • Dạo bộ dọc những con phố cổ ngập tràn ánh đèn lồng vào buổi tối
        • Tham gia lớp học làm đèn lồng truyền thống tại các xưởng thủ công
        • Thưởng thức món Cao Lầu đặc sản - sự kết hợp độc đáo giữa mỳ Quảng và hương vị Nhật Bản
        • Thả hoa đăng trên sông Hoài - nghi thức mang đậm nét văn hóa tâm linh
        • Khám phá Chùa Cầu - biểu tượng kiến trúc giao thoa Việt-Nhật
        • Thuê xe đạp thong thả ngắm nhìn những cánh đồng lúa bạt ngàn ở ngoại ô
        
        Đặc biệt vào ngày 14 âm lịch hàng tháng, thành phố tổ chức "Đêm phố cổ" 
        với các hoạt động văn hóa dân gian đặc sắc.`,
      featured: true
    },
    {
      id: 3,
      title: 'Vũng Tàu - Thành Phố Biển Năng Động',
      excerpt: 'Điểm đến lý tưởng cho chuyến du lịch ngắn ngày từ Sài Gòn...',
      image: 'https://admin.freetour.com/images/tours/7741/vung-tau-walking-tour-08.jpg',
      date: '25/05/2023',
      author: 'Lê Minh Khôi',
      tags: ['Biển', 'Lịch sử', 'Ẩm hải sản'],
      likes: 178,
      comments: 32,
      location: 'Bà Rịa - Vũng Tàu',
      bestTime: 'Quanh năm',
      experience: `
        Vũng Tàu hấp dẫn bởi:
        
        • Leo núi Nhỏ ngắm tượng Chúa Kitô Vua cao 32m
        • Dạo Bãi Sau - bãi biển dài 8km với sóng vừa phải
        • Thăm Bạch Dinh - dinh thự cổ thời thuộc địa Pháp
        • Thưởng thức hải sản tươi sống tại khu phố ẩm thực Thùy Vân
        • Check-in Cầu cảng 914 - điểm sống ảo mới nổi
        • Ngắm hoàng hôn từ đỉnh Hải Đăng cổ - ngọn hải đăng cổ nhất Việt Nam
        
        Đặc sản không thể bỏ qua:
        - Bánh khọt Cô Giang
        - Sữa đậu nành nóng
        - Gỏi cá mai
        - Khô cá đuối nướng`,
      featured: false
    },
    {
      id: 4,
      title: 'Phú Quốc - Đảo Ngọc Giữa Biển Đông',
      excerpt: 'Thiên đường nghỉ dưỡng với những bãi biển nguyên sơ và hệ sinh thái độc đáo...',
      image: 'https://th.bing.com/th/id/OIP.nEgZFf5oVekxNc9GC3drZgHaEK?rs=1&pid=ImgDetMain',
      date: '12/06/2023',
      author: 'Nguyễn Thảo Nguyên',
      tags: ['Đảo ngọc', 'Du lịch cao cấp', 'Thiên nhiên'],
      likes: 342,
      comments: 67,
      location: 'Kiên Giang',
      bestTime: 'Tháng 11 - Tháng 4',
      experience: `
        Phú Quốc đốn tim du khách bởi:
        
        • Trải nghiệm cáp treo Hòn Thơm - tuyến cáp treo qua biển dài nhất thế giới
        • Lặn ngắm san hô ở Bãi Sao - bãi biển đẹp nhất đảo
        • Tham quan làng chài Hàm Ninh thưởng thức hải sản tươi sống
        • Khám phá Vườn Quốc gia Phú Quốc - khu dự trữ sinh quyển thế giới
        • Trải nghiệm tour đêm câu mực cùng ngư dân
        • Thăm cơ sở sản xuất nước mắm Phú Quốc nổi tiếng
        
        Các hoạt động đặc biệt:
        - Tắm bùn tại Suối Tranh
        - Ngắm hoàng hôn tại Mũi Gành Dầu
        - Check-in Nhà thờ Đá Dinh Cậu
        - Mua sắm tại chợ đêm Phú Quốc`,
      featured: true
    }
  ];

  // Tìm bài viết featured đầu tiên
  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];

  // Các bài viết không phải featured
  const regularPosts = blogPosts.filter(post => post.id !== featuredPost.id);

  return (
    <Box sx={{ maxWidth: 1400, mx: 'auto', py: 8, px: { xs: 2, md: 4 } }}>
      {/* Featured Post */}
      <Card sx={{ 
        mb: 6,
        borderRadius: 4,
        boxShadow: '0 15px 30px rgba(0,0,0,0.12)',
        overflow: 'hidden',
        position: 'relative',
        bgcolor: 'background.paper'
      }}>
        <Box sx={{ 
          position: 'relative',
          height: { xs: 300, md: 500 },
          overflow: 'hidden',
          '&:hover img': {
            transform: 'scale(1.05)'
          }
        }}>
          <CardMedia
            component="img"
            image={featuredPost.image}
            sx={{
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
            <Chip 
              label="Bài viết nổi bật"
              sx={{ 
                bgcolor: '#ff6b6b', 
                color: 'white', 
                mb: 2,
                fontSize: '0.8rem',
                fontWeight: 600
              }}
            />
            <Typography variant="h2" sx={{ 
              color: 'white',
              fontFamily: '"Playfair Display", serif',
              fontSize: { xs: '2rem', md: '3rem' },
              lineHeight: 1.2,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              {featuredPost.title}
            </Typography>
          </Box>
        </Box>

        <CardContent sx={{ p: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ 
                bgcolor: '#f8f9fa',
                p: 3,
                borderRadius: 2,
                height: '100%'
              }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#008b76' }}>
                  Thông tin chuyến đi
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOn sx={{ color: '#008b76', mr: 1 }} />
                  <Typography variant="body2">{featuredPost.location}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <AccessTime sx={{ color: '#008b76', mr: 1 }} />
                  <Typography variant="body2">Thời điểm: {featuredPost.bestTime}</Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  {featuredPost.tags.map((tag, i) => (
                    <Chip
                      key={i}
                      label={tag}
                      size="small"
                      sx={{ 
                        mr: 1,
                        mb: 1,
                        bgcolor: '#e9f5f3',
                        color: '#008b76',
                        fontWeight: 500
                      }}
                       
                    />
                   
                  ))}
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Person sx={{ color: 'text.secondary', mr: 1 }} />
                    <Typography variant="caption">{featuredPost.author}</Typography>
                  </Box>
                  <Typography variant="caption">{featuredPost.date}</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography variant="h5" sx={{ 
                mb: 3,
                fontFamily: '"Playfair Display", serif',
                color: '#2d3436'
              }}>
                Trải nghiệm đáng nhớ
              </Typography>
              
              {featuredPost.experience.split('\n').map((line, i) => (
                <Typography 
                  key={i} 
                  paragraph 
                  sx={{ 
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    '&:before': {
                      content: line.trim() ? '"• "' : '""',
                      color: '#008b76',
                      fontWeight: 'bold',
                      display: i > 0 ? 'inline' : 'none'
                    }
                  }}
                >
                  {line.trim()}
                </Typography>
              ))}

              <Box sx={{ 
                mt: 4,
                display: 'flex',
                gap: 2,
                borderTop: '1px solid #eee',
                pt: 3
              }}>
                <Button 
                  variant="contained" 
                  startIcon={<Favorite />}
                  sx={{
                    bgcolor: '#ff6b6b',
                    '&:hover': { bgcolor: '#ff5252' },
                    textTransform: 'none'
                  }}
                >
                  {featuredPost.likes} Lượt thích
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<Comment />}
                  sx={{
                    borderColor: '#008b76',
                    color: '#008b76',
                    textTransform: 'none'
                  }}
                >
                  {featuredPost.comments} Bình luận
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Các bài viết khác */}
      <Grid container spacing={4}>
        {regularPosts.map((post) => (
          <Grid item xs={12} md={6} key={post.id}>
            <Card sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 3,
              boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
              
            }}
            >
              <CardMedia
                component="img"
                height="240"
                image={post.image}
                sx={{ 
                  objectFit: 'cover',
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12 
                }}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography variant="h6" sx={{ 
                  mb: 2,
                  fontFamily: '"Playfair Display", serif',
                  lineHeight: 1.3
                }}>
                  {post.title}
                </Typography>
                
                <Typography paragraph sx={{ 
                  color: 'text.secondary',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  WebkitLineClamp: 3,
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {post.excerpt}
                </Typography>
                
                <Button
                  fullWidth
                  endIcon={<ArrowForward />}
                  sx={{
                    color: '#008b76',
                    fontWeight: 500,
                    mt: 'auto'
                  }}
                   onClick={() => navigate(`/detail/${post.id}`, { state: { post } })}
                >
                  Đọc tiếp
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VietnamTravelBlog;