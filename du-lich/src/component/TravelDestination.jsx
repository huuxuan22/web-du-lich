import  { useState, useEffect, useMemo } from "react";
import {
  Container,
  Select,
  MenuItem,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Box,
  Chip,
  TextField,
  InputAdornment,
  Divider,
  Rating,
  Paper,
  IconButton,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Search,
  LocationOn,
  Favorite,
  FavoriteBorder,
  Share,
  Directions,
  Close,
} from "@mui/icons-material";
import Header from "../page/Header";
import Footer from "../page/Footer";
import PlaceDetail from "../page/PlaceDetail";
// Styled components
const SearchContainer = styled(Paper)(({ theme }) => ({
  padding: "16px 24px",
  marginBottom: theme.spacing(4),
  borderRadius: "12px",
  boxShadow: theme.shadows[2],
  backgroundColor: "rgba(0,139,118,0.05)",
  border: "1px solid rgba(0,139,118,0.1)",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "0.3s",
  borderRadius: "12px",
  overflow: "hidden",
  position: "relative",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[6],
    "& .card-actions": {
      opacity: 1,
    },
  },
}));

const CardActions = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "16px",
  right: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  opacity: 0,
  transition: "0.3s",
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: "#008b76",
  fontWeight: "bold",
  marginBottom: theme.spacing(3),
  borderBottom: "2px solid #008b76",
  paddingBottom: theme.spacing(1),
}));

const TravelDestination = () => {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [filteredProvinces, setFilteredProvinces] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);
  const [surveyOpen, setSurveyOpen] = useState(false);
  const [travelPurpose, setTravelPurpose] = useState("");
  const [travelCompanion, setTravelCompanion] = useState("");
  const [travelBudget, setTravelBudget] = useState("");
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const handleOpenDetail = (place) => {
    setSelectedPlace(place);
    setDetailOpen(true);
  };
  const handleCloseDetail = () => {
    setDetailOpen(false);
  };
  const handleDirection = (place) => {
    // Logic để mở bản đồ chỉ đường
    console.log("Opening directions to", place.name);
  };
  // Travel purposes for survey
  const travelPurposes = [
    "Tham quan di tích lịch sử",
    "Nghỉ dưỡng, thư giãn",
    "Khám phá ẩm thực",
    "Trải nghiệm văn hóa địa phương",
    "Du lịch mạo hiểm",
    "Chụp ảnh check-in",
  ];

  // Travel companions for survey
  const travelCompanions = [
    "Một mình",
    "Gia đình",
    "Bạn bè",
    "Người yêu",
    "Đồng nghiệp",
  ];

  // Travel budgets for survey
  const travelBudgets = [
    "Tiết kiệm (dưới 1 triệu)",
    "Trung bình (1-3 triệu)",
    "Thoải mái (3-5 triệu)",
    "Cao cấp (trên 5 triệu)",
  ];

  // Dữ liệu mở rộng với nhiều tỉnh thành và địa điểm
  const provinces = useMemo(() => [
    {
      name: "Quảng Nam",
      places: [
        {
          id: 1,
          name: "Phố cổ Hội An",
          description:
            "Di sản văn hóa thế giới với kiến trúc cổ độc đáo, đèn lồng rực rỡ và ẩm thực phong phú.",
          image:
            "https://th.bing.com/th/id/OIP.1zq4a7G007iHUBybiLxrTwHaEn?rs=1&pid=ImgDetMain",
          tags: ["Di sản UNESCO", "Kiến trúc cổ", "Ẩm thực"],
          rating: 4.8,
          reviews: 1245,
          distance: "30km từ Đà Nẵng",
          price: 500000,
          priceRange: "500.000 - 2.000.000 VND",
          category: "popular", // Phổ biến, đáp ứng nhu cầu khảo sát
        },
        {
          id: 2,
          name: "Thánh địa Mỹ Sơn",
          description:
            "Quần thể đền tháp Chăm Pa cổ với kiến trúc độc đáo, nằm trong thung lũng hùng vĩ.",
          image:
            "https://tourdanangcity.vn/wp-content/uploads/2019/06/du-lich-thanh-dia-my-son-6.jpg",
          tags: ["Di sản UNESCO", "Văn hóa Chăm", "Kiến trúc cổ"],
          rating: 4.5,
          reviews: 876,
          distance: "70km từ Đà Nẵng",
          price: 300000,
          priceRange: "300.000 - 1.500.000 VND",
          category: "popular",
        },
        {
          id: 9,
          name: "Cù Lao Chàm",
          description:
            "Quần đảo với bãi biển hoang sơ, làn nước trong xanh và hệ sinh thái biển phong phú.",
          image:
            "https://th.bing.com/th/id/OIP.0vrRTc5eBnizyMjzHThCVwHaE7?rs=1&pid=ImgDetMain",
          tags: ["Biển đảo", "Lặn biển", "Hoang sơ"],
          rating: 4.6,
          reviews: 765,
          distance: "20km từ Hội An",
          price: 700000,
          priceRange: "700.000 - 2.500.000 VND",
          category: "popular",
        },
        {
          id: 10,
          name: "Bãi biển An Bàng",
          description:
            "Bãi biển đẹp với cát trắng mịn, nước biển trong xanh và không gian yên tĩnh.",
          image:
            "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2016/01/bai-bien-an-bang-hoi-an.jpg",
          tags: ["Biển", "Nghỉ dưỡng", "Yên tĩnh"],
          rating: 4.4,
          reviews: 543,
          distance: "5km từ Hội An",
          price: 400000,
          priceRange: "400.000 - 1.800.000 VND",
          category: "popular",
        },
        // Tours from popular places
        {
          id: 101,
          name: "Tour Hội An - Cù Lao Chàm 1 ngày",
          description:
            "Trải nghiệm trọn vẹn Hội An và Cù Lao Chàm với tour du lịch biển đảo đặc sắc.",
          image:
            "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          tags: ["Tour", "Biển đảo", "1 ngày"],
          rating: 4.7,
          reviews: 342,
          distance: "Hội An - Cù Lao Chàm",
          price: 1200000,
          priceRange: "1.200.000 - 1.800.000 VND",
          category: "popular-tour",
        },
        {
          id: 102,
          name: "Tour di sản Hội An - Mỹ Sơn",
          description:
            "Khám phá hai di sản văn hóa thế giới tại Quảng Nam trong một ngày.",
          image:
            "https://ik.imagekit.io/tvlk/blog/2023/03/du-lich-mien-trung-6.jpg?tr=dpr-2,w-675",
          tags: ["Tour", "Di sản", "Văn hóa"],
          rating: 4.6,
          reviews: 289,
          distance: "Hội An - Mỹ Sơn",
          price: 900000,
          priceRange: "900.000 - 1.500.000 VND",
          category: "popular-tour",
        },
        // Hidden gems - less known places
        {
          id: 201,
          name: "Làng rau Trà Quế",
          description:
            "Làng rau hữu cơ truyền thống với không gian xanh mát và trải nghiệm làm nông dân.",
          image:
            "",
          tags: ["Làng quê", "Trải nghiệm", "Ẩm thực"],
          rating: 4.3,
          reviews: 321,
          distance: "3km từ Hội An",
          price: 150000,
          priceRange: "150.000 - 500.000 VND",
          category: "hidden-gem",
        },
        {
          id: 202,
          name: "Bãi biển Bình Minh",
          description:
            "Bãi biển hoang sơ ít người biết đến với bãi cát dài và cảnh bình minh tuyệt đẹp.",
          image:
            "https://th.bing.com/th/id/R.6234c4789ad7029b7d69d3bbfaa8dd4c?rik=Fh7GmaFAoi0tjg&pid=ImgRaw&r=0",
          tags: ["Biển", "Hoang sơ", "Bình minh"],
          rating: 4.5,
          reviews: 187,
          distance: "15km từ Hội An",
          price: 0,
          priceRange: "Miễn phí",
          category: "hidden-gem",
        },
        {
          id: 203,
          name: "Thác Grăng",
          description:
            "Thác nước đẹp ít người biết ở vùng núi phía Tây Quảng Nam, lý tưởng cho trekking.",
          image: "https://image.vietgoing.com/editor/image_cnz1623590790.jpg",
          tags: ["Thác nước", "Trekking", "Thiên nhiên"],
          rating: 4.6,
          reviews: 156,
          distance: "60km từ Hội An",
          price: 200000,
          priceRange: "200.000 - 800.000 VND",
          category: "hidden-gem",
        },
        // Tours from hidden gems
        {
          id: 301,
          name: "Tour trải nghiệm làng rau Trà Quế",
          description:
            "Trải nghiệm làm nông dân và thưởng thức ẩm thực từ rau hữu cơ tươi ngon.",
          image:
            "https://culaochamtour.com/wp-content/uploads/2022/08/tourlangrautraque1.jpg",
          tags: ["Tour", "Trải nghiệm", "Làng quê"],
          rating: 4.4,
          reviews: 210,
          distance: "Hội An - Trà Quế",
          price: 350000,
          priceRange: "350.000 - 600.000 VND",
          category: "hidden-gem-tour",
        },
        {
          id: 302,
          name: "Tour trekking Thác Grăng",
          description:
            "Khám phá thác nước hoang sơ và thiên nhiên hùng vĩ của vùng núi Quảng Nam.",
          image:
            "https://th.bing.com/th/id/OIP.7j8Jkr1Dv3n4HXybIWyZ_AHaFF?w=640&h=440&rs=1&pid=ImgDetMain",
          tags: ["Tour", "Trekking", "Thiên nhiên"],
          rating: 4.7,
          reviews: 145,
          distance: "Hội An - Thác Grăng",
          price: 800000,
          priceRange: "800.000 - 1.200.000 VND",
          category: "hidden-gem-tour",
        },
        // New trendy places for young people
        {
          id: 401,
          name: "Cà phê View Đỉnh Đèo Hải Vân",
          description:
            "Quán cà phê với view đẹp nhất Đà Nẵng, điểm check-in mới nổi cho giới trẻ.",
          image:
            "https://th.bing.com/th/id/OIP.iQLb0Eo29DA8wWcshEIvhAHaFj?rs=1&pid=ImgDetMain",
          tags: ["Cà phê", "View đẹp", "Check-in"],
          rating: 4.8,
          reviews: 432,
          distance: "40km từ Hội An",
          price: 50000,
          priceRange: "50.000 - 150.000 VND",
          category: "trendy",
        },
        {
          id: 402,
          name: "Làng bích họa Tam Thanh",
          description:
            "Làng chài được khoác áo mới với những bức bích họa rực rỡ, điểm sống ảo lý tưởng.",
          image:
            "https://th.bing.com/th/id/OIP.rDg554ZzdrcW7ZVyZk5C2wHaEo?rs=1&pid=ImgDetMain",
          tags: ["Bích họa", "Check-in", "Nghệ thuật"],
          rating: 4.6,
          reviews: 387,
          distance: "25km từ Hội An",
          price: 0,
          priceRange: "Miễn phí",
          category: "trendy",
        },
        {
          id: 999,
          name: "Hồ Lưng Trời",
          description:
            "Một hồ nước tự nhiên nằm giữa rừng sâu chưa được nhiều người biết đến, với làn nước trong vắt, khung cảnh hoang sơ và yên tĩnh tuyệt đối.",
          image:
            "https://th.bing.com/th/id/R.0e1a6071b1954368c8aeb919e4040a7e?rik=uJxEuOugRAHMzA&riu=http%3a%2f%2fnghiepvukhachsan.com%2fupload%2fnews%2fcontent%2f22.2022%2fve-dep-an-tuong-o-ho-seo-my-ty-sapa.jpg&ehk=cQZ1Iwl%2fdjvB3VdeW9%2btAzxJB0XbYpETwvU%2bNI40YTA%3d&risl=&pid=ImgRaw&r=0",
          tags: ["Thiên nhiên", "Hoang sơ", "Chưa khai thác"],
          rating: 4.9,
          reviews: 12,
          distance: "80km từ Hội An",
          price: 0,
          priceRange: "Miễn phí",
          category: "hidden-gem",
        },
        {
          id: 204,
          name: "Suối Tiên Phú Ninh",
          description:
            "Suối tự nhiên hoang sơ ẩn mình trong rừng Phú Ninh, với làn nước mát và không khí trong lành.",
          image:
            "https://th.bing.com/th/id/OIP.bXPalx4jrylzwZSgl6OGVAHaDg?rs=1&pid=ImgDetMain",
          tags: ["Suối", "Thiên nhiên", "Yên tĩnh"],
          rating: 4.4,
          reviews: 78,
          distance: "25km từ Tam Kỳ",
          price: 20000,
          priceRange: "20.000 - 50.000 VND",
          category: "hidden-gem",
        },
        {
          id: 205,
          name: "Hồ Khe Tân",
          description:
            "Hồ nước trong xanh giữa rừng, lý tưởng để cắm trại, chèo sup và nghỉ dưỡng cuối tuần.",
          image:
            "https://th.bing.com/th/id/OIP.zSU5kL2dhzs4BfDbRODUNgHaFj?rs=1&pid=ImgDetMain",
          tags: ["Hồ", "Cắm trại", "Chèo sup"],
          rating: 4.5,
          reviews: 95,
          distance: "30km từ Núi Thành",
          price: 0,
          priceRange: "Miễn phí",
          category: "hidden-gem",
        },
        {
          id: 303,
          name: "Tour cắm trại Hồ Khe Tân 2 ngày 1 đêm",
          description:
            "Trải nghiệm cắm trại bên hồ, chèo sup, đốt lửa trại và ngắm sao trời tại Hồ Khe Tân.",
          image:
            "https://th.bing.com/th/id/OIP.9qvh0m2tKfva_jYUvDxyFwHaE8?rs=1&pid=ImgDetMain",
          tags: ["Tour", "Cắm trại", "Trải nghiệm"],
          rating: 4.7,
          reviews: 60,
          distance: "Tam Kỳ - Hồ Khe Tân",
          price: 950000,
          priceRange: "950.000 - 1.300.000 VND",
          category: "hidden-gem-tour",
        },
        {
          id: 304,
          name: "Tour trekking rừng Phước Lộc - suối Ẩn",
          description:
            "Khám phá cung đường trekking qua rừng già và suối ẩn, chinh phục thiên nhiên hoang sơ.",
          image:
            "https://th.bing.com/th/id/OIP.1PN1IOhRC0G4TDlkaO_A4AHaFj?rs=1&pid=ImgDetMain",
          tags: ["Tour", "Trekking", "Rừng núi"],
          rating: 4.6,
          reviews: 52,
          distance: "Tiên Phước - Suối Ẩn",
          price: 700000,
          priceRange: "700.000 - 1.000.000 VND",
          category: "hidden-gem-tour",
        },
      ],
    },
    {
      name: "Đà Nẵng",
      places: [
        {
          id: 1001,
          name: "Bà Nà Hills",
          description:
            "Khu du lịch nổi tiếng với khí hậu mát mẻ quanh năm, Cầu Vàng độc đáo và các công trình kiến trúc châu Âu.",
          image:
            "https://th.bing.com/th/id/R.f5a5a1a5c4a4cd893a839b3034ab3794?rik=WL6mIk%2flcFi8gA&pid=ImgRaw&r=0",
          tags: ["Cầu Vàng", "Cáp treo", "Kiến trúc châu Âu"],
          rating: 4.9,
          reviews: 2345,
          distance: "25km từ trung tâm Đà Nẵng",
          price: 850000,
          priceRange: "850.000 - 1.200.000 VND",
          category: "popular",
        },
        {
          id: 1002,
          name: "Ngũ Hành Sơn",
          description:
            "Quần thể núi đá vôi nổi bật với các hang động và chùa chiền linh thiêng.",
          image:
            "https://th.bing.com/th/id/OIP.WCOQCzOnzDJADysgpD_aeQHaE9?rs=1&pid=ImgDetMain",
          tags: ["Danh thắng", "Chùa chiền", "Hang động"],
          rating: 4.7,
          reviews: 987,
          distance: "8km từ trung tâm Đà Nẵng",
          price: 400000,
          priceRange: "400.000 - 900.000 VND",
          category: "popular",
        },
        {
          id: 1003,
          name: "Bãi biển Mỹ Khê",
          description:
            "Một trong những bãi biển đẹp nhất hành tinh với cát trắng, nước trong và nhiều hoạt động thể thao biển.",
          image:
            "https://th.bing.com/th/id/R.288f0055dbf0c586e5017acf566f3b2c?rik=L0d4z1fZXdzewA&pid=ImgRaw&r=0",
          tags: ["Biển", "Thể thao", "Tắm biển"],
          rating: 4.8,
          reviews: 1530,
          distance: "3km từ trung tâm",
          price: 0,
          priceRange: "Miễn phí",
          category: "popular",
        },
        // Hidden gems
        {
          id: 2001,
          name: "Hồ Hòa Trung",
          description:
            "Hồ nước tự nhiên ít người biết đến, phong cảnh hữu tình và lý tưởng để cắm trại.",
          image:
            "https://th.bing.com/th/id/OIP.QAUOJNbdL2XxqS7jJ4njGAHaF4?rs=1&pid=ImgDetMain",
          tags: ["Hoang sơ", "Cắm trại", "Thiên nhiên"],
          rating: 4.5,
          reviews: 245,
          distance: "20km từ trung tâm Đà Nẵng",
          price: 0,
          priceRange: "Miễn phí",
          category: "hidden-gem",
        },
        {
          id: 2002,
          name: "Giếng trời Đà Nẵng",
          description:
            "Điểm trekking hấp dẫn giữa rừng già, có thác nước, hồ tự nhiên và khung cảnh hoang sơ.",
          image:
            "https://th.bing.com/th/id/OIP.xVeqDr5ao3VZJfci2PWhqgHaEv?rs=1&pid=ImgDetMain",
          tags: ["Trekking", "Thác nước", "Phiêu lưu"],
          rating: 4.6,
          reviews: 198,
          distance: "15km từ Bà Nà Hills",
          price: 100000,
          priceRange: "100.000 - 300.000 VND",
          category: "hidden-gem",
        },
        // Tours
        {
          id: 3001,
          name: "Tour Cầu Vàng - Bà Nà Hills 1 ngày",
          description:
            "Tham quan toàn bộ khu du lịch Bà Nà Hills bao gồm Cầu Vàng, làng Pháp và vui chơi Fantasy Park.",
          image:
            "https://th.bing.com/th/id/R.8b3f83393db0f8c92d57334489677e76?rik=4Oed5UBdOmNNgg&pid=ImgRaw&r=0",
          tags: ["Tour", "Cầu Vàng", "Giải trí"],
          rating: 4.9,
          reviews: 1230,
          distance: "Đà Nẵng - Bà Nà Hills",
          price: 1300000,
          priceRange: "1.300.000 - 1.800.000 VND",
          category: "popular-tour",
        },
        {
          id: 3002,
          name: "Tour khám phá Ngũ Hành Sơn & Hội An",
          description:
            "Kết hợp khám phá động đá và chùa cổ tại Ngũ Hành Sơn, sau đó thăm phố cổ Hội An về đêm.",
          image:
            "https://th.bing.com/th/id/OIP.qKkaqBsp391iKCPRkI3IrwHaEK?rs=1&pid=ImgDetMain",
          tags: ["Tour", "Văn hóa", "Di sản"],
          rating: 4.7,
          reviews: 456,
          distance: "Đà Nẵng - Hội An",
          price: 1100000,
          priceRange: "1.100.000 - 1.600.000 VND",
          category: "popular-tour",
        },
        // Trendy
        {
          id: 4001,
          name: "Tiệm cà phê A La Carte - Sky Bar",
          description:
            "Quán cà phê rooftop cao nhất Đà Nẵng, view biển Mỹ Khê siêu đẹp, điểm sống ảo cực hot.",
          image:
            "https://th.bing.com/th/id/OIP.ObLfqyyxaw2gGBsmrDs6LQHaFj?rs=1&pid=ImgDetMain",
          tags: ["Cà phê", "Sky bar", "View biển"],
          rating: 4.6,
          reviews: 542,
          distance: "Gần bãi biển Mỹ Khê",
          price: 120000,
          priceRange: "120.000 - 250.000 VND",
          category: "trendy",
        },
        {
          id: 4002,
          name: "Cầu Tình Yêu & Cá chép hóa rồng",
          description:
            "Điểm check-in nổi bật ven sông Hàn với ánh đèn lãng mạn về đêm.",
          image:
            "https://th.bing.com/th/id/OIP.b8jt_mqMOv4Ci_iKSVmcSwHaE8?rs=1&pid=ImgDetMaing",
          tags: ["Check-in", "Lãng mạn", "Biểu tượng"],
          rating: 4.5,
          reviews: 729,
          distance: "Trung tâm thành phố",
          price: 0,
          priceRange: "Miễn phí",
          category: "trendy",
        },
        {
          id: 1004,
          name: "Cầu Rồng",
          description:
            "Cây cầu nổi bật với thiết kế hình rồng, có thể phun lửa và nước vào cuối tuần.",
          image:
            "https://th.bing.com/th/id/OIP.zSwK9GczNme7gm3kHmgsXQHaEK?rs=1&pid=ImgDetMain",
          tags: ["Cầu", "Rồng", "Ban đêm"],
          rating: 4.8,
          reviews: 1021,
          distance: "Trung tâm thành phố",
          price: 0,
          priceRange: "Miễn phí",
          category: "popular",
        },
        {
          id: 1005,
          name: "Bảo tàng Chăm",
          description:
            "Nơi lưu giữ và trưng bày những hiện vật văn hóa Chăm cổ xưa.",
          image:
            "https://th.bing.com/th/id/R.91e18ba55131dd9172b422b47cd2c813?rik=gBt%2bH2D1ASr79g&riu=http%3a%2f%2fmedia.dulich24.com.vn%2fdiemden%2fbao-tang-dieu-khac-cham-pa-6400%2f77a95f5b-433a-4319-abbf-03ead2c97aaf.jpg&ehk=j3%2bCZMeO2csPTIYGTt5sqYKC27ol0aVmI9WXQ9AILMA%3d&risl=&pid=ImgRaw&r=0",
          tags: ["Lịch sử", "Nghệ thuật", "Văn hóa"],
          rating: 4.4,
          reviews: 378,
          distance: "Trung tâm",
          price: 60000,
          priceRange: "60.000 - 100.000 VND",
          category: "popular",
        },

        // Hidden gems
        {
          id: 2003,
          name: "Bãi Rạng",
          description:
            "Bãi biển hoang sơ nằm dưới chân đèo Hải Vân, nước trong xanh, ít người biết đến.",
          image:
            "https://th.bing.com/th/id/R.112ee2ca5537051fac7d396a760c568a?rik=4Cvdp0hTIRzQLQ&pid=ImgRaw&r=0",
          tags: ["Hoang sơ", "Biển", "Tắm biển"],
          rating: 4.7,
          reviews: 164,
          distance: "12km từ trung tâm",
          price: 0,
          priceRange: "Miễn phí",
          category: "hidden-gem",
        },
        {
          id: 2004,
          name: "Đỉnh Bàn Cờ",
          description:
            "Điểm ngắm toàn cảnh Đà Nẵng từ trên cao với bức tượng Tiên Ông đánh cờ độc đáo.",
          image:
            "https://th.bing.com/th/id/OIP.n1U2g00kHLzORPSvXLpOTAHaE7?rs=1&pid=ImgDetMain",
          tags: ["Leo núi", "Ngắm cảnh", "Tượng đá"],
          rating: 4.6,
          reviews: 301,
          distance: "14km từ trung tâm",
          price: 0,
          priceRange: "Miễn phí",
          category: "hidden-gem",
        },

        // Popular Tours
        {
          id: 3003,
          name: "Tour khám phá Cù Lao Chàm",
          description:
            "Hành trình khám phá đảo, lặn ngắm san hô và tham quan làng chài.",
          image:
            "https://th.bing.com/th/id/OIP.IbDGlhC-F1KjasJZLTiGvQHaE8?rs=1&pid=ImgDetMain",
          tags: ["Lặn biển", "Đảo", "Sinh thái"],
          rating: 4.8,
          reviews: 789,
          distance: "Đà Nẵng - Hội An",
          price: 1200000,
          priceRange: "1.200.000 - 1.500.000 VND",
          category: "popular-tour",
        },
        {
          id: 3004,
          name: "Tour đêm sông Hàn",
          description:
            "Du thuyền trên sông Hàn ngắm cầu Rồng và Cầu Trần Thị Lý về đêm.",
          image:
            "https://th.bing.com/th/id/OIP.XS0knxaQ2v4YrtS1ULQBuAHaEL?rs=1&pid=ImgDetMain",
          tags: ["Du thuyền", "Sông Hàn", "Ban đêm"],
          rating: 4.6,
          reviews: 520,
          distance: "Sông Hàn",
          price: 350000,
          priceRange: "350.000 - 500.000 VND",
          category: "popular-tour",
        },

        // Trendy
        {
          id: 4003,
          name: "Tiệm bánh Wonderlust",
          description:
            "Café – bakery nổi bật với không gian Hàn Quốc và món bánh handmade.",
          image:
            "https://th.bing.com/th/id/OIP.bAl9cbEVFYSLfNF8X4FnlgHaE8?rs=1&pid=ImgDetMain",
          tags: ["Cà phê", "Bánh ngọt", "Minimal"],
          rating: 4.6,
          reviews: 432,
          distance: "Trung tâm",
          price: 90000,
          priceRange: "90.000 - 180.000 VND",
          category: "trendy",
        },
        {
          id: 4004,
          name: "Tiệm Cà Phê Nam House",
          description:
            "Quán cà phê sân vườn với phong cách retro cổ điển và không gian cực chill.",
          image:
            "https://th.bing.com/th/id/OIP.Dg0ciJqSBXPC2YO8zL1yqQHaFj?rs=1&pid=ImgDetMain",
          tags: ["Retro", "Cà phê vườn", "Yên tĩnh"],
          rating: 4.7,
          reviews: 398,
          distance: "5km từ trung tâm",
          price: 70000,
          priceRange: "70.000 - 130.000 VND",
          category: "trendy",
        },
        {
          id: 5001,
          name: "Tour trekking rừng nguyên sinh Bà Nà",
          description:
            "Khám phá hệ sinh thái đa dạng tại khu rừng nguyên sinh dưới chân núi Bà Nà, thích hợp cho người yêu thiên nhiên và thích vận động.",
          image:
            "https://th.bing.com/th/id/OIP.AIe-KBWfHUmwFnCX6RNc8QHaFj?rs=1&pid=ImgDetMain",
          tags: ["Trekking", "Rừng", "Phiêu lưu"],
          rating: 4.5,
          reviews: 112,
          distance: "20km từ trung tâm",
          price: 750000,
          priceRange: "750.000 - 1.000.000 VND",
          category: "trendy",
        },
        {
          id: 5002,
          name: "Tour trải nghiệm làng nghề đá Non Nước",
          description:
            "Ghé thăm làng đá mỹ nghệ nổi tiếng, tham gia chế tác và khắc thử sản phẩm cùng nghệ nhân địa phương.",
          image:
            "https://static.vinwonders.com/2022/04/lang-da-my-nghe-non-nuoc-3.jpg",
          tags: ["Làng nghề", "Trải nghiệm", "Thủ công"],
          rating: 4.3,
          reviews: 68,
          distance: "8km từ trung tâm",
          price: 250000,
          priceRange: "200.000 - 400.000 VND",
          category: "other",
        },
        {
          id: 5003,
          name: "Tour ngắm chim tại hồ Đồng Xanh – Đồng Nghệ",
          description:
            "Trải nghiệm yên bình, ngắm nhiều loài chim quý hiếm tại hồ nước nhân tạo nằm giữa thiên nhiên hoang sơ.",
          image:
            "https://static.vinwonders.com/2022/12/ho-dong-xanh-dong-nghe-2.jpg",
          tags: ["Chim", "Nhiếp ảnh", "Sinh thái"],
          rating: 4.2,
          reviews: 57,
          distance: "25km từ trung tâm",
          price: 180000,
          priceRange: "150.000 - 300.000 VND",
          category: "trendy",
        },
        {
          id: 5004,
          name: "Tour học làm bánh tráng cuốn thịt heo",
          description:
            "Tham gia cùng người dân địa phương để học cách làm món đặc sản Đà Nẵng từ A-Z và thưởng thức tại chỗ.",
          image:
            "https://th.bing.com/th/id/R.c7ef597aff6d155458cedd12e654a9fc?rik=srL3xRdsfRNncw&pid=ImgRaw&r=0",
          tags: ["Ẩm thực", "Trải nghiệm", "Đặc sản"],
          rating: 4.4,
          reviews: 74,
          distance: "Trung tâm",
          price: 300000,
          priceRange: "300.000 - 500.000 VND",
          category: "trendy",
        },
      ],
    },
    // ... other provinces data (similar structure)
  ])
  useEffect(() => {
    if (searchTerm) {
      const filtered = provinces
        .map((province) => ({
          ...province,
          places: province.places.filter(
            (place) =>
              place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              place.tags.some((tag) =>
                tag.toLowerCase().includes(searchTerm.toLowerCase())
              )
          ),
        }))
        .filter((province) => province.places.length > 0);
      setFilteredProvinces(filtered);
    } else {
      setFilteredProvinces(provinces);
    }
  }, [searchTerm, provinces]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = provinces
        .map((province) => ({
          ...province,
          places: province.places.filter(
            (place) =>
              place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              place.tags.some((tag) =>
                tag.toLowerCase().includes(searchTerm.toLowerCase())
              )
          ),
        }))
        .filter((province) => province.places.length > 0);
      setFilteredProvinces(filtered);
    } else {
      setFilteredProvinces(provinces);
    }
  }, [searchTerm, provinces]);

  const handleChange = (event) => {
    setSelectedProvince(event.target.value);
    // Open survey when a province is selected
    if (event.target.value && !surveyCompleted) {
      setSurveyOpen(true);
    }
  };

  const toggleFavorite = (placeId) => {
    if (favorites.includes(placeId)) {
      setFavorites(favorites.filter((id) => id !== placeId));
    } else {
      setFavorites([...favorites, placeId]);
    }
  };

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleSurveySubmit = () => {
    // In a real app, you would send this data to your backend
    console.log({
      province: selectedProvince,
      purpose: travelPurpose,
      companion: travelCompanion,
      budget: travelBudget,
    });
    setSurveyCompleted(true);
    setSurveyOpen(false);
  };

  const selectedProvinceData = filteredProvinces.find(
    (p) => p.name === selectedProvince
  );

  // Filter places by category based on survey results
  const getPlacesByCategory = (category) => {
    if (!selectedProvinceData) return [];
    return selectedProvinceData.places.filter(
      (place) => place.category === category
    );
  };

  // Popular places that match survey results
  const popularPlaces = getPlacesByCategory("popular");

  // Tours from popular places
  const popularTours = getPlacesByCategory("popular-tour");

  // Hidden gems - less known places
  const hiddenGems = getPlacesByCategory("hidden-gem");

  // Tours from hidden gems
  const hiddenGemTours = getPlacesByCategory("hidden-gem-tour");

  // Trendy places for young people
  const trendyPlaces = getPlacesByCategory("trendy");

  return (
    <div>
      <Header />
      <Container maxWidth="xl" sx={{ py: 4, mt: 10 }}>
        <SearchContainer elevation={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Tìm kiếm địa điểm hoặc tag"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => {
                  if (selectedProvince !== "") {
                    setSearchTerm(e.target.value);
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search color="action" />
                    </InputAdornment>
                  ),
                  sx: {
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#008b76",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ width: "200px" }}>
              <FormControl fullWidth>
                <InputLabel
                  id="province-select-label"
                  sx={{ color: "#008b76" }}
                >
                  Chọn tỉnh thành
                </InputLabel>
                <Select
                  labelId="province-select-label"
                  value={selectedProvince}
                  label="Chọn tỉnh thành"
                  onChange={handleChange}
                  sx={{
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#008b76",
                      borderWidth: "2px",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#008b76",
                    },
                  }}
                >
                  {filteredProvinces.map((province) => (
                    <MenuItem key={province.name} value={province.name}>
                      {province.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </SearchContainer>

        {/* Survey Dialog */}
        <Dialog
          open={surveyOpen}
          onClose={() => setSurveyOpen(false)}
          fullWidth
          maxWidth="md"
        >
          <DialogTitle>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6" fontWeight="bold">
                Khảo sát nhanh du lịch {selectedProvince}
              </Typography>
              <IconButton onClick={() => setSurveyOpen(false)}>
                <Close />
              </IconButton>
            </Box>
          </DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ mb: 3 }}>
              Vui lòng trả lời một vài câu hỏi để chúng tôi có thể gợi ý những
              địa điểm phù hợp nhất với bạn.
            </DialogContentText>

            <FormControl component="fieldset" sx={{ mb: 3, width: "100%" }}>
              <Typography fontWeight="bold" gutterBottom>
                1. Mục đích chuyến đi của bạn là gì?
              </Typography>
              <RadioGroup
                value={travelPurpose}
                onChange={(e) => setTravelPurpose(e.target.value)}
              >
                {travelPurposes.map((purpose) => (
                  <FormControlLabel
                    key={purpose}
                    value={purpose}
                    control={<Radio />}
                    label={purpose}
                  />
                ))}
              </RadioGroup>
            </FormControl>

            <FormControl component="fieldset" sx={{ mb: 3, width: "100%" }}>
              <Typography fontWeight="bold" gutterBottom>
                2. Bạn đi cùng với ai?
              </Typography>
              <RadioGroup
                value={travelCompanion}
                onChange={(e) => setTravelCompanion(e.target.value)}
              >
                {travelCompanions.map((companion) => (
                  <FormControlLabel
                    key={companion}
                    value={companion}
                    control={<Radio />}
                    label={companion}
                  />
                ))}
              </RadioGroup>
            </FormControl>

            <FormControl component="fieldset" sx={{ width: "100%" }}>
              <Typography fontWeight="bold" gutterBottom>
                3. Ngân sách dự kiến cho chuyến đi?
              </Typography>
              <RadioGroup
                value={travelBudget}
                onChange={(e) => setTravelBudget(e.target.value)}
              >
                {travelBudgets.map((budget) => (
                  <FormControlLabel
                    key={budget}
                    value={budget}
                    control={<Radio />}
                    label={budget}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setSurveyOpen(false)}
              sx={{ color: "#008b76" }}
            >
              Bỏ qua
            </Button>
            <Button
              onClick={handleSurveySubmit}
              variant="contained"
              sx={{ backgroundColor: "#008b76" }}
              disabled={!travelPurpose || !travelCompanion || !travelBudget}
            >
              Hoàn thành
            </Button>
          </DialogActions>
        </Dialog>

        {/* Results after survey */}
        {selectedProvinceData && surveyCompleted && (
          <Box sx={{ mt: 4 }}>
            <Tabs
              value={currentTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                mb: 4,
                "& .MuiTabs-indicator": {
                  backgroundColor: "#008b76",
                },
              }}
            >
              <Tab
                label="Địa điểm phù hợp"
                sx={{
                  "&.Mui-selected": {
                    color: "#008b76",
                    fontWeight: "bold",
                  },
                }}
              />
              <Tab
                label="Tour từ địa điểm"
                sx={{
                  "&.Mui-selected": {
                    color: "#008b76",
                    fontWeight: "bold",
                  },
                }}
              />
              <Tab
                label="Địa điểm ít người biết"
                sx={{
                  "&.Mui-selected": {
                    color: "#008b76",
                    fontWeight: "bold",
                  },
                }}
              />
              <Tab
                label="Tour từ địa điểm ẩn"
                sx={{
                  "&.Mui-selected": {
                    color: "#008b76",
                    fontWeight: "bold",
                  },
                }}
              />
              <Tab
                label="Điểm mới cho giới trẻ"
                sx={{
                  "&.Mui-selected": {
                    color: "#008b76",
                    fontWeight: "bold",
                  },
                }}
              />
            </Tabs>

            {/* Tab 1: Popular places that match survey */}
            {currentTab === 0 && (
              <Box>
                <SectionTitle variant="h5">
                  Địa điểm phù hợp với nhu cầu của bạn tại {selectedProvince}
                </SectionTitle>
                {popularPlaces.length > 0 ? (
                  <Grid container spacing={4}>
                    {popularPlaces.map((place) => (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={place.id}>
                        <PlaceCard
                          place={place}
                          favorites={favorites}
                          toggleFavorite={toggleFavorite}
                          onDetailClick={handleOpenDetail}
                        />
                      </Grid>
                    ))}
                  </Grid>
                ) : (
                  <Typography>Không có địa điểm phù hợp</Typography>
                )}
              </Box>
            )}

            {/* Tab 2: Tours from popular places */}
            {currentTab === 1 && (
              <Box>
                <SectionTitle variant="h5">
                  Tour du lịch từ các địa điểm phổ biến
                </SectionTitle>
                {popularTours.length > 0 ? (
                  <Grid container spacing={4}>
                    {popularTours.map((place) => (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={place.id}>
                        <PlaceCard
                          place={place}
                          favorites={favorites}
                          toggleFavorite={toggleFavorite}
                          onDetailClick={handleOpenDetail} // Thêm dòng này
                        />
                      </Grid>
                    ))}
                  </Grid>
                ) : (
                  <Typography>Không có tour phù hợp</Typography>
                )}
              </Box>
            )}

            {/* Tab 3: Hidden gems */}
            {currentTab === 2 && (
              <Box>
                <SectionTitle variant="h5">
                  Địa điểm ít người biết tại {selectedProvince}
                </SectionTitle>
                {hiddenGems.length > 0 ? (
                  <Grid container spacing={4}>
                    {hiddenGems.map((place) => (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={place.id}>
                        <PlaceCard
                          place={place}
                          favorites={favorites}
                          toggleFavorite={toggleFavorite}
                          onDetailClick={handleOpenDetail} // Thêm dòng này
                          
                        />
                      </Grid>
                    ))}
                  </Grid>
                ) : (
                  <Typography>Không có địa điểm ẩn</Typography>
                )}
              </Box>
            )}

            {/* Tab 4: Tours from hidden gems */}
            {currentTab === 3 && (
              <Box>
                <SectionTitle variant="h5">
                  Tour từ các địa điểm ít người biết
                </SectionTitle>
                {hiddenGemTours.length > 0 ? (
                  <Grid container spacing={4}>
                    {hiddenGemTours.map((place) => (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={place.id}>
                        <PlaceCard
                          place={place}
                          favorites={favorites}
                          toggleFavorite={toggleFavorite}
                          onDetailClick={handleOpenDetail} // Thêm dòng này
                        />
                      </Grid>
                    ))}
                  </Grid>
                ) : (
                  <Typography>Không có tour từ địa điểm ẩn</Typography>
                )}
              </Box>
            )}

            {/* Tab 5: Trendy places for young people */}
            {currentTab === 4 && (
              <Box>
                <SectionTitle variant="h5">
                  Địa điểm mới nổi cho giới trẻ
                </SectionTitle>
                {trendyPlaces.length > 0 ? (
                  <Grid container spacing={4}>
                    {trendyPlaces.map((place) => (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={place.id}>
                        <PlaceCard
                          place={place}
                          favorites={favorites}
                          toggleFavorite={toggleFavorite}
                          onDetailClick={handleOpenDetail} // Thêm dòng này
                        />
                      </Grid>
                    ))}
                  </Grid>
                ) : (
                  <Typography>Không có địa điểm mới nổi</Typography>
                )}
              </Box>
            )}
          </Box>
        )}
      </Container>
      <PlaceDetail
        place={selectedPlace}
        open={detailOpen}
        onClose={handleCloseDetail}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        onDirectionClick={() => handleDirection(selectedPlace)}
      />
      <Footer />
    </div>
  );
};

// Place card component
const PlaceCard = ({ place, favorites, toggleFavorite, onDetailClick }) => {
  const handleCardClick = (e) => {
    // Chỉ mở chi tiết khi click vào phần nội dung chính
    if (!e.target.closest(".no-detail")) {
      onDetailClick(place);
    }
  };

  return (
    <StyledCard
      sx={{ width: "700px", cursor: "pointer" }}
      onClick={handleCardClick}
    >
      <CardActions className="card-actions">
        <IconButton
          aria-label="add to favorites"
          onClick={() => toggleFavorite(place.id)}
          sx={{
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.9)",
            },
          }}
        >
          {favorites.includes(place.id) ? (
            <Favorite color="error" />
          ) : (
            <FavoriteBorder color="action" />
          )}
        </IconButton>
        <IconButton
          aria-label="share"
          sx={{
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.9)",
            },
          }}
        >
          <Share color="action" />
        </IconButton>
      </CardActions>
      <CardMedia
        component="img"
        height="220"
        image={place.image}
        alt={place.name}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Rating
            value={place.rating}
            precision={0.1}
            readOnly
            sx={{ mr: 1 }}
          />
          <Typography variant="body2" color="text.secondary">
            {place.rating} ({place.reviews} đánh giá)
          </Typography>
        </Box>
        <Typography
          gutterBottom
          variant="h5"
          component="h3"
          sx={{ fontWeight: "bold" }}
        >
          {place.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          <LocationOn
            fontSize="small"
            sx={{ verticalAlign: "middle", mr: 0.5 }}
          />
          {place.distance}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          {place.description}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#008b76", fontWeight: "bold", mb: 1 }}
        >
          {place.priceRange}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {place.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                backgroundColor: "rgba(0,139,118,0.1)",
                color: "#008b76",
              }}
            />
          ))}
        </Box>
      </CardContent>
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          size="medium"
          startIcon={<Directions />}
          sx={{
            color: "#008b76",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "rgba(0,139,118,0.1)",
            },
          }}
        >
          Chỉ đường
        </Button>
        <Button
          variant="contained"
          size="medium"
          sx={{
            backgroundColor: "#008b76",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#00695f",
            },
          }}
          onClick={(e) => {
            e.stopPropagation();
            onDetailClick(place);
          }}
        >
          Xem chi tiết
        </Button>
      </Box>
    </StyledCard>
  );
};

export default TravelDestination;
