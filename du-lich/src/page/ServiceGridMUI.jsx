import {
  Box,
  Button,
  Typography,
  Rating,
  Chip,
  useTheme,
  styled,
  Pagination,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Slider,
  Divider,
} from "@mui/material";
import {
  Hotel,
  Star,
  Restaurant,
  LocalDining,
  Info,
  StarBorder,
  FilterAlt,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const primaryColor = "#008b76";

const StyledImageList = styled(ImageList)(({ theme }) => ({
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr)) !important",
}));

const FilterSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  boxShadow: theme.shadows[1],
  marginBottom: theme.spacing(3),
}));

const ServiceGridMUI = () => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const [location, setLocation] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [ratingFilter, setRatingFilter] = useState([0, 5]);
  

  // ... (giữ nguyên mảng allServices như bạn đã cung cấp)

  const allServices = [
    // KHÁCH SẠN
    {
      id: 1,
      name: "Vinpearl Luxury Đà Nẵng",
      type: "Khách sạn",
      rating: 5,
      price: "15.000.000",
      location: "Đà Nẵng",
      image: "https://cdn.guland.vn/files/1633323013615a880541421.jpg",
    },
    {
      id: 2,
      name: "Pullman Danang Beach Resort",
      type: "Khách sạn",
      rating: 4.5,
      price: "8.500.000",
      location: "Đà Nẵng",
      image:
        "https://th.bing.com/th/id/R.d62aa350432c26b0bff17edcc21bcfe7?rik=7zgA%2fEF%2bIzPLKw&pid=ImgRaw&r=0",
    },
    {
      id: 3,
      name: "Novotel Danang Premier Han River",
      type: "Khách sạn",
      rating: 4,
      price: "6.200.000",
      location: "Đà Nẵng",
      image:
        "https://danangfantasticity.com/wp-content/uploads/2016/01/novotel-danang-premier-han-river-danang-fantasticity-com-03.jpg?x48902",
    },
    {
      id: 4,
      name: "InterContinental Hanoi Landmark72",
      type: "Khách sạn",
      rating: 5,
      price: "12.000.000",
      location: "Hà Nội",
      image:
        "https://th.bing.com/th/id/OIP.XkJ9_vwMu2HFQ4fFxpUJ5QHaFH?rs=1&pid=ImgDetMain",
    },
    {
      id: 5,
      name: "JW Marriott Phu Quoc Emerald Bay Resort & Spa",
      type: "Khách sạn",
      rating: 5,
      price: "18.000.000",
      location: "Phú Quốc",
      image:
        "https://thietkenoithat.com/Portals/0/xNews/uploads/2017/1/4/khach-san-deawoo.jpg",
    },
    {
      id: 6,
      name: "The Anam Cam Ranh",
      type: "Khách sạn",
      rating: 4.8,
      price: "9.800.000",
      location: "Nha Trang",
      image:
        "https://th.bing.com/th/id/OIP.E88nZLTCw6jb8CmCmgjVOgEsDI?w=1399&h=933&rs=1&pid=ImgDetMain",
    },
    {
      id: 7,
      name: "Sofitel Legend Metropole Hanoi",
      type: "Khách sạn",
      rating: 5,
      price: "14.500.000",
      location: "Hà Nội",
      image:
        "https://th.bing.com/th/id/OIP.9VHSYVxgBiNT1B9MypTYBAAAAA?w=400&h=276&rs=1&pid=ImgDetMain",
    },
    {
      id: 8,
      name: "Mia Resort Nha Trang",
      type: "Khách sạn",
      rating: 4.9,
      price: "11.200.000",
      location: "Nha Trang",
      image:
        "https://th.bing.com/th/id/OIP.9VHSYVxgBiNT1B9MypTYBAAAAA?w=400&h=276&rs=1&pid=ImgDetMain",
    },
    {
      id: 9,
      name: "Park Hyatt Saigon",
      type: "Khách sạn",
      rating: 5,
      price: "16.000.000",
      location: "TP.HCM",
      image:
        "https://th.bing.com/th/id/OIP.wB7W1ILBGEH6H-TB0iQkZgHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain",
    },
    {
      id: 10,
      name: "The Myst Dong Khoi",
      type: "Khách sạn",
      rating: 4.6,
      price: "7.900.000",
      location: "TP.HCM",
      image:
        "https://th.bing.com/th/id/OIP.S4tBA0L4-jnijw6a-Gxv0AHaFj?w=1201&h=901&rs=1&pid=ImgDetMain",
    },

    // NHÀ HÀNG
    {
      id: 11,
      name: "Nhà hàng Hải Sản Bé Mặn",
      type: "Nhà hàng",
      rating: 4.7,
      price: "350.000",
      location: "Đà Nẵng",
      image:
        "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2020/09/nhung-trai-nghiem-chi-co-o-khach-san-5-sao-1.jpg",
    },
    {
      id: 12,
      name: "Pizza 4P's Tràng Tiền",
      type: "Nhà hàng",
      rating: 4.9,
      price: "250.000",
      location: "Hà Nội",
      image:
        "https://th.bing.com/th/id/OIP.3NaQBn6mKmkAm8U1ZlitfwHaEo?w=840&h=525&rs=1&pid=ImgDetMain",
    },
    {
      id: 13,
      name: "Nhà hàng chay An Lạc",
      type: "Nhà hàng",
      rating: 4.5,
      price: "180.000",
      location: "Huế",
      image:
        "https://cdn.guiademoteis.com.br/imagens/suites/big/3619_big_11647_3.jpg",
    },
    {
      id: 14,
      name: "The Deck Saigon",
      type: "Nhà hàng",
      rating: 4.8,
      price: "500.000",
      location: "TP.HCM",
      image:
        "https://th.bing.com/th/id/OIP.zxk3F7vyyOoqo68ylOIXzAEsDH?w=634&h=422&rs=1&pid=ImgDetMain",
    },
    {
      id: 15,
      name: "Nhà hàng Làng Cá",
      type: "Nhà hàng",
      rating: 4.3,
      price: "220.000",
      location: "Nha Trang",
      image:
        "https://www.vietnambooking.com/wp-content/uploads/2017/08/khach-san-tinh-yeu-o-sai-gon-29-3-2019-5-e1553842509765.jpg",
    },
    {
      id: 16,
      name: "Au Lac House Restaurant",
      type: "Nhà hàng",
      rating: 4.6,
      price: "380.000",
      location: "Hà Nội",
      image: "https://minhchautour.com/wp-content/uploads/2022/12/a-mo.jpg",
    },
    {
      id: 17,
      name: "Lam Vien Restaurant",
      type: "Nhà hàng",
      rating: 4.4,
      price: "300.000",
      location: "Đà Lạt",
      image: "https://www.experiencetravelgroup.com/reposit/20170304102757.jpg",
    },
    {
      id: 18,
      name: "Secret Garden Restaurant",
      type: "Nhà hàng",
      rating: 4.7,
      price: "280.000",
      location: "Hội An",
      image:
        "https://th.bing.com/th/id/R.dd5546777fa7e6befacf7aa92d796d40?rik=dU6dIJLsidtGRA&pid=ImgRaw&r=0",
    },

    // KHÁCH SẠN
    {
      id: 1,
      name: "Vinpearl Luxury Đà Nẵng",
      type: "Khách sạn",
      rating: 5,
      price: "15.000.000",
      location: "Đà Nẵng",
      image:
        "https://tavivutravel.com/wp-content/uploads/2021/05/Koi-Resort-general-13-870x555.jpg",
    },
    {
      id: 2,
      name: "Pullman Danang Beach Resort",
      type: "Khách sạn",
      rating: 4.5,
      price: "8.500.000",
      location: "Đà Nẵng",
      image:
        "https://th.bing.com/th/id/OIP.-hH0ZPUEnz4pgWfN-M0MbQHaDz?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      name: "Novotel Danang Premier Han River",
      type: "Khách sạn",
      rating: 4,
      price: "6.200.000",
      location: "Đà Nẵng",
      image:
        "https://th.bing.com/th/id/R.897b8ec363c72ea1265c3b6005045433?rik=B7zakJT3uLuO8Q&riu=http%3a%2f%2fthe-sun.on.cc%2fchannels%2ffea%2f20081106%2fimg%2fsspf110601_big.jpg&ehk=pfYqkYbzEd8dundeI5MR1f4aUHyWFSN4%2f6ib1oQPbTA%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 4,
      name: "InterContinental Hanoi Landmark72",
      type: "Khách sạn",
      rating: 5,
      price: "12.000.000",
      location: "Hà Nội",
      image:
        "https://cdn1.tuoitre.vn/zoom/600_315/tto/i/s626/2008/12/04/kyiFh91o.jpg",
    },
    {
      id: 5,
      name: "JW Marriott Phu Quoc Emerald Bay Resort & Spa",
      type: "Khách sạn",
      rating: 5,
      price: "18.000.000",
      location: "Phú Quốc",
      image:
        "https://th.bing.com/th/id/OIP.44l-x2_959b_y-4w10-sYAHaE8?rs=1&pid=ImgDetMain",
    },
    {
      id: 6,
      name: "The Anam Cam Ranh",
      type: "Khách sạn",
      rating: 4.8,
      price: "9.800.000",
      location: "Nha Trang",
      image:
        "https://cdn2.vietnambooking.com/wp-content/uploads/hotel_pro/hotel_334909/4bd84a7b5f1f1f34c5015341f6ea5a85.jpg",
    },
    {
      id: 7,
      name: "Sofitel Legend Metropole Hanoi",
      type: "Khách sạn",
      rating: 5,
      price: "14.500.000",
      location: "Hà Nội",
      image:
        "https://th.bing.com/th/id/OIP.1jrvr3cDsYlMUJkmMGxjvgHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain",
    },
    {
      id: 8,
      name: "Mia Resort Nha Trang",
      type: "Khách sạn",
      rating: 4.9,
      price: "11.200.000",
      location: "Nha Trang",
      image:
        "https://th.bing.com/th/id/OIP.EV8DebMkDkcCj-A1EAzYQQHaFj?w=1024&h=768&rs=1&pid=ImgDetMain",
    },
    {
      id: 9,
      name: "Park Hyatt Saigon",
      type: "Khách sạn",
      rating: 5,
      price: "16.000.000",
      location: "TP.HCM",
      image:
        "https://th.bing.com/th/id/OIP.XAu2an9f2LuFbkY6zo_J5wHaFj?w=1100&h=825&rs=1&pid=ImgDetMain",
    },
    {
      id: 10,
      name: "The Myst Dong Khoi",
      type: "Khách sạn",
      rating: 4.6,
      price: "7.900.000",
      location: "TP.HCM",
      image:
        "https://th.bing.com/th/id/OIP._3X_tigEt4Aabda1A9T1IQHaEJ?w=1900&h=1063&rs=1&pid=ImgDetMain",
    },
    {
      id: 27,
      name: "Khách sạn Majestic Sài Gòn",
      type: "Khách sạn",
      rating: 4.7,
      price: "9.500.000",
      location: "TP.HCM",
      image:
        "https://th.bing.com/th/id/OIP.6km0NlUOyQDSzPrz6pWdwgHaGN?w=700&h=587&rs=1&pid=ImgDetMain",
    },
    {
      id: 28,
      name: "Hotel de l'Opera Hanoi",
      type: "Khách sạn",
      rating: 4.8,
      price: "10.500.000",
      location: "Hà Nội",
      image:
        "https://dulichtute.com/wp-content/uploads/2021/08/khach-san-oriental-jade.jpg",
    },

    // NHÀ HÀNG
    {
      id: 11,
      name: "Nhà hàng Hải Sản Bé Mặn",
      type: "Nhà hàng",
      rating: 4.7,
      price: "350.000",
      location: "Đà Nẵng",
      image:
        "https://th.bing.com/th/id/OIP.GgTs_JG_3rWCzG4UgPXXjwHaFj?w=2048&h=1536&rs=1&pid=ImgDetMain",
    },
    {
      id: 12,
      name: "Pizza 4P's Tràng Tiền",
      type: "Nhà hàng",
      rating: 4.9,
      price: "250.000",
      location: "Hà Nội",
      image:
        "https://th.bing.com/th/id/OIP.GgTs_JG_3rWCzG4UgPXXjwHaFj?w=2048&h=1536&rs=1&pid=ImgDetMain",
    },
    {
      id: 13,
      name: "Nhà hàng chay An Lạc",
      type: "Nhà hàng",
      rating: 4.5,
      price: "180.000",
      location: "Huế",
      image:
        "https://bazantravel.com/cdn/medias/uploads/84/84300-la-rive-gouche-da-nang.jpg",
    },
    {
      id: 14,
      name: "The Deck Saigon",
      type: "Nhà hàng",
      rating: 4.8,
      price: "500.000",
      location: "TP.HCM",
      image:
        "https://th.bing.com/th/id/OIP.-1U6OyWP85jRe85VjuNbQwAAAA?w=400&h=300&rs=1&pid=ImgDetMain",
    },
    {
      id: 15,
      name: "Nhà hàng Làng Cá",
      type: "Nhà hàng",
      rating: 4.3,
      price: "220.000",
      location: "Nha Trang",
      image:
        "https://i2.wp.com/www.ourawesomeplanet.com/wp-content/uploads/2019/10/El-Gaucho-iPhone-2.jpg?resize=1140%2C855&ssl=1",
    },
    {
      id: 16,
      name: "Au Lac House Restaurant",
      type: "Nhà hàng",
      rating: 4.6,
      price: "380.000",
      location: "Hà Nội",
      image:
        "https://www.vietnamconsulate-pakse.org/wp-content/uploads/2020/07/anh3-nha-hang-hien-dai-sang-trong.jpg",
    },
    {
      id: 17,
      name: "Lam Vien Restaurant",
      type: "Nhà hàng",
      rating: 4.4,
      price: "300.000",
      location: "Đà Lạt",
      image:
        "https://i.pinimg.com/originals/9c/8c/5f/9c8c5f4787a58293657c93d9e059445e.jpg",
    },
    {
      id: 18,
      name: "Secret Garden Restaurant",
      type: "Nhà hàng",
      rating: 4.7,
      price: "280.000",
      location: "Hội An",
      image:
        "https://th.bing.com/th/id/OIP.Oml8nrNuHxxYYzO28GyIeQHaE8?rs=1&pid=ImgDetMain",
    },
    {
      id: 29,
      name: "Nhà hàng Ngon Villa Hà Nội",
      type: "Nhà hàng",
      rating: 4.8,
      price: "450.000",
      location: "Hà Nội",
      image:
        "https://th.bing.com/th/id/OIP.nGW7kCEdh2_Tx8UsaNoBCAHaEK?rs=1&pid=ImgDetMain",
    },
    {
      id: 30,
      name: "Hum Vegetarian, Cafe & Restaurant",
      type: "Nhà hàng",
      rating: 4.6,
      price: "200.000",
      location: "TP.HCM",
      image:
        "https://th.bing.com/th/id/OIP.nGW7kCEdh2_Tx8UsaNoBCAHaEK?rs=1&pid=ImgDetMain",
    },

    // ẨM THỰC
    {
      id: 19,
      name: "Bánh mì Phượng",
      type: "Ẩm thực",
      rating: 4.8,
      price: "30.000",
      location: "Hội An",
      image:
        "https://th.bing.com/th/id/OIP.NWMsFoKe9ulGAtCL3May9wHaEh?rs=1&pid=ImgDetMain",
    },
    {
      id: 20,
      name: "Phở Bát Đàn",
      type: "Ẩm thực",
      rating: 4.6,
      price: "50.000",
      location: "Hà Nội",
      image:
        "https://th.bing.com/th/id/OIP.CnUKAT3rvje8aDktheqaygHaFj?rs=1&pid=ImgDetMain",
    },
    {
      id: 21,
      name: "Cao lầu Hội An",
      type: "Ẩm thực",
      rating: 4.5,
      price: "40.000",
      location: "Hội An",
      image:
        "https://danangleisure.com/wp-content/uploads/2023/04/Cao-Lau-Da-Nang.jpg",
    },
    {
      id: 22,
      name: "Bún chả Hương Liên",
      type: "Ẩm thực",
      rating: 4.7,
      price: "60.000",
      location: "Hà Nội",
      image:
        "https://hotel84.com/userfiles/image/nhahang/hanoi/bunChaHuonglien/bun-cha-huong-lien(1).jpg",
    },
    {
      id: 23,
      name: "Mì Quảng Đà Nẵng",
      type: "Ẩm thực",
      rating: 4.4,
      price: "35.000",
      location: "Đà Nẵng",
      image:
        "https://th.bing.com/th/id/R.16b1bf8d7fe6ce51182d48aa831e1e02?rik=mIitEzNNz1y9HA&riu=http%3a%2f%2freviewvilla.vn%2fwp-content%2fuploads%2f2022%2f06%2ftop-12-quan-my-quang-9.jpg&ehk=LgmtmI%2bWlO0uQankoqmMPX7J%2bJVywoaC2pgMb5nFnI0%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 24,
      name: "Nem chua rán Hà Nội",
      type: "Ẩm thực",
      rating: 4.3,
      price: "25.000",
      location: "Hà Nội",
      image:
        "https://th.bing.com/th/id/OIP.G1DiftAXPYwbWYeX5vqnAAHaE3?rs=1&pid=ImgDetMain",
    },
    {
      id: 25,
      name: "Bún bò Huế",
      type: "Ẩm thực",
      rating: 4.6,
      price: "45.000",
      location: "Huế",
      image:
        "https://th.bing.com/th/id/OIP.VwluQ8g0Rw1XDd5YM65VcgHaEK?rs=1&pid=ImgDetMain",
    },
    {
      id: 26,
      name: "Cơm tấm Sài Gòn",
      type: "Ẩm thực",
      rating: 4.5,
      price: "40.000",
      location: "TP.HCM",
      image:
        "https://afamilycdn.com/150157425591193600/2022/12/7/com-tam-suon-bi-cha-trung-anh-hoa-quynh-nguyen-1670317945936565526419-1670385940206-16703859407121546487016.jpg",
    },
  ];

  const filteredServices = allServices.filter((service) => {
    const locationMatch =
      !location ||
      service.location.toLowerCase().includes(location.toLowerCase());
    const typeMatch = !serviceType || service.type === serviceType;
    const ratingMatch =
      service.rating >= ratingFilter[0] && service.rating <= ratingFilter[1];
    return locationMatch && typeMatch && ratingMatch;
  });

  const paginatedServices = filteredServices.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  useEffect(() => {
    const locations = [
      ...new Set(allServices.map((service) => service.location)),
    ].sort();
    setAvailableLocations(locations);
  }, [allServices]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    setPage(1);
  };

  const handleServiceTypeChange = (event) => {
    setServiceType(event.target.value);
    setPage(1);
  };

  const handleRatingChange = (event, newValue) => {
    setRatingFilter(newValue);
    setPage(1);
  };

  const getServiceIcon = (type) => {
    switch (type) {
      case "Nhà hàng":
        return <Restaurant sx={{ color: primaryColor, fontSize: 20, mr: 1 }} />;
      case "Khách sạn":
        return <Hotel sx={{ color: primaryColor, fontSize: 20, mr: 1 }} />;
      case "Ẩm thực":
        return (
          <LocalDining sx={{ color: primaryColor, fontSize: 20, mr: 1 }} />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Header></Header>
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: 3,
          py: 8,
          bgcolor: theme.palette.background.default,
          mt: 6,
        }}
      >
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Chip
            icon={<Star sx={{ color: "#a5d6a7" }} />}
            label="KHÁM PHÁ VIỆT NAM"
            sx={{
              bgcolor: "#e8f5e9",
              color: primaryColor,
              mb: 2,
              fontSize: "1rem",
              px: 1.5,
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: primaryColor,
              mb: 1,
              [theme.breakpoints.down("md")]: { fontSize: "2rem" },
            }}
          >
            Danh Sách Dịch Vụ Tuyệt Vời
          </Typography>
          <Typography
            variant="body2"
            color={secondaryColor}
            sx={{
              maxWidth: 600,
              mx: "auto",
              fontSize: "0.9rem",
            }}
          >
            Tìm kiếm và khám phá các lựa chọn lưu trú, ẩm thực và nhiều hơn nữa
            trên khắp Việt Nam.
          </Typography>
        </Box>

        {/* Filter Section */}
        <FilterSection>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              color: primaryColor,
            }}
          >
            <FilterAlt sx={{ mr: 1 }} />
            <Typography variant="h6">Bộ lọc</Typography>
          </Box>
          <Divider sx={{ mb: 2 }} />

          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <TextField
              label="Tìm theo địa điểm"
              value={location}
              onChange={handleLocationChange}
              fullWidth
              margin="normal"
              variant="outlined"
              size="small"
              sx={{ flexGrow: 1, maxWidth: 300 }}
            />

            <FormControl
              fullWidth
              margin="normal"
              size="small"
              sx={{ minWidth: 200 }}
            >
              <InputLabel id="service-type-label">Loại dịch vụ</InputLabel>
              <Select
                labelId="service-type-label"
                id="service-type"
                value={serviceType}
                label="Loại dịch vụ"
                onChange={handleServiceTypeChange}
              >
                <MenuItem value="">Tất cả loại dịch vụ</MenuItem>
                {["Nhà hàng", "Khách sạn", "Ẩm thực"].map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Typography gutterBottom sx={{ mb: 1 }}>
              Lọc theo đánh giá: {ratingFilter[0]} - {ratingFilter[1]} sao
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <StarBorder sx={{ color: primaryColor }} />
              <Slider
                value={ratingFilter}
                onChange={handleRatingChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={5}
                step={0.5}
                sx={{
                  color: primaryColor,
                  maxWidth: 400,
                }}
              />
              <Star sx={{ color: primaryColor }} />
            </Box>
          </Box>
        </FilterSection>

        {/* Results Count */}
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Tìm thấy {filteredServices.length} kết quả
        </Typography>

        {/* Service Grid */}
        {paginatedServices.length > 0 ? (
          <>
            <StyledImageList gap={16}>
              {paginatedServices.map((service) => (
                <ImageListItem key={service.id}>
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    className="service-image"
                    style={{
                      borderRadius: theme.shape.borderRadius,
                      height: 250,
                      objectFit: "cover",
                    }}
                  />
                  <ImageListItemBar
                    title={service.name}
                    subtitle={
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        {getServiceIcon(service.type)}
                        <Typography
                          variant="caption"
                          color="white"
                          sx={{ ml: 0.5 }}
                        >
                          {service.type} - {service.location}
                        </Typography>
                      </Box>
                    }
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${service.name}`}
                      >
                        <Info />
                      </IconButton>
                    }
                    sx={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 2,
                      bgcolor: "rgba(0, 0, 0, 0.6)",
                      color: "white",
                      borderBottomLeftRadius: theme.shape.borderRadius,
                      borderBottomRightRadius: theme.shape.borderRadius,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Rating
                        value={service.rating}
                        readOnly
                        precision={0.5}
                        sx={{ color: "#ffc107", fontSize: "1rem" }}
                      />
                      <Chip
                        label={`${service.price} VND`}
                        size="small"
                        sx={{
                          backgroundColor: "#e8f5e9",
                          color: primaryColor,
                          fontWeight: "bold",
                        }}
                      />
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      backgroundColor: primaryColor,
                      color: "white",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.dark,
                      },
                    }}
                  >
                    Xem chi tiết
                  </Button>
                </ImageListItem>
              ))}
            </StyledImageList>

            {/* Pagination */}
            {filteredServices.length > itemsPerPage && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 4,
                  "& .MuiPaginationItem-root": {
                    color: primaryColor,
                    fontSize: "0.9rem",
                  },
                  "& .Mui-selected": {
                    backgroundColor: `${primaryColor} !important`,
                    color: theme.palette.common.white,
                  },
                }}
              >
                <Pagination
                  count={Math.ceil(filteredServices.length / itemsPerPage)}
                  page={page}
                  onChange={(e, value) => setPage(value)}
                  shape="rounded"
                  color="primary"
                  size="small"
                  sx={{
                    "& .MuiPaginationItem-page:hover": {
                      backgroundColor: `${primaryColor}20`,
                    },
                  }}
                />
              </Box>
            )}
          </>
        ) : (
          <Box
            sx={{
              textAlign: "center",
              py: 10,
              backgroundColor: theme.palette.background.paper,
              borderRadius: theme.shape.borderRadius,
            }}
          >
            <Typography variant="h6" color="textSecondary">
              Không tìm thấy dịch vụ phù hợp
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Hãy thử điều chỉnh bộ lọc để có kết quả tốt hơn
            </Typography>
          </Box>
        )}
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default ServiceGridMUI;
