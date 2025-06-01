import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Chip,
  Button,
} from '@mui/material';
import { ChevronRight, CalendarToday, Place, Star } from '@mui/icons-material';

const luxuryBlogPosts = [
  {
    id: 1,
    featured: true,
    title: "Private Island Retreats: Ultimate Luxury Guide",
    excerpt: "Discover the world's most exclusive private island resorts where luxury meets complete privacy in our comprehensive guide to secluded paradise.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Luxury Escapes",
    date: "May 15, 2023",
    location: "Maldives, Seychelles, Fiji",
    rating: 5,
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Michelin-Starred Dining at 30,000 Feet",
    excerpt: "How airlines are revolutionizing first-class dining experiences.",
    image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Gourmet",
    date: "June 2, 2023",
    location: "Global",
    rating: 4,
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "World's Most Stunning Luxury Hotels",
    excerpt: "Architectural wonders that redefine hospitality.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Design",
    date: "April 28, 2023",
    location: "Worldwide",
    rating: 5,
    readTime: "5 min read"
  }
];

const LuxuryTravelBlog = () => {
  const featuredPost = luxuryBlogPosts.find(post => post.featured);
  const secondaryPosts = luxuryBlogPosts.filter(post => !post.featured);

  return (
    <Box sx={{
      py: 6,
      backgroundColor: '#fafafa',
      position: 'relative'
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Typography variant="h4" component="h2" sx={{
          fontWeight: 600,
          color: '#1a1a1a',
          mb: 4,
          position: 'relative',
          display: 'inline-block',
          '&:after': {
            content: '""',
            position: 'absolute',
            bottom: -8,
            left: 0,
            width: '50%',
            height: '3px',
            backgroundColor: '#b8860b'
          }
        }}>
          Travel Journal
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {/* Featured Post */}
          <Grid item xs={12} md={6}>
            <Card sx={{
              height: '100%',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-4px)'
              }
            }}>
              <CardActionArea>
                <Box sx={{ position: 'relative', pt: '60%' }}>
                  <CardMedia
                    component="img"
                    image={featuredPost.image}
                    alt={featuredPost.title}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <Chip label={featuredPost.category} sx={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '0.65rem'
                  }} />
                </Box>
                
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                    <CalendarToday sx={{ fontSize: '0.9rem', color: '#b8860b', mr: 1 }} />
                    <Typography variant="caption" sx={{ color: '#666', fontSize: '0.7rem', mr: 2 }}>
                      {featuredPost.date}
                    </Typography>
                    <Place sx={{ fontSize: '0.9rem', color: '#b8860b', mr: 1 }} />
                    <Typography variant="caption" sx={{ color: '#666', fontSize: '0.7rem' }}>
                      {featuredPost.location}
                    </Typography>
                  </Box>
                  
                  <Typography variant="h5" component="h3" sx={{
                    fontWeight: 600,
                    mb: 1.5,
                    fontSize: '1.1rem',
                    lineHeight: 1.4
                  }}>
                    {featuredPost.title}
                  </Typography>
                  
                  <Typography variant="body2" sx={{
                    color: '#555',
                    mb: 2,
                    fontSize: '0.85rem',
                    lineHeight: 1.6
                  }}>
                    {featuredPost.excerpt}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} sx={{
                          fontSize: '0.9rem',
                          color: i < featuredPost.rating ? '#b8860b' : '#ddd'
                        }} />
                      ))}
                    </Box>
                    <Typography variant="caption" sx={{ color: '#888', fontSize: '0.7rem' }}>
                      {featuredPost.readTime}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          {/* Secondary Posts */}
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              height: '100%',
              gap: 3 
            }}>
              {secondaryPosts.map((post) => (
                <Card key={post.id} sx={{
                  flex: 1,
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }
                }}>
                  <CardActionArea sx={{ display: 'flex', height: '100%' }}>
                    <Box sx={{ width: '40%', position: 'relative' }}>
                      <CardMedia
                        component="img"
                        image={post.image}
                        alt={post.title}
                        sx={{
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                      <Chip label={post.category} sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: '0.6rem',
                        height: '20px'
                      }} />
                    </Box>
                    
                    <Box sx={{ width: '60%', p: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CalendarToday sx={{ fontSize: '0.7rem', color: '#b8860b', mr: 0.5 }} />
                        <Typography variant="caption" sx={{ color: '#666', fontSize: '0.6rem' }}>
                          {post.date}
                        </Typography>
                      </Box>
                      
                      <Typography variant="subtitle1" component="h4" sx={{
                        fontWeight: 600,
                        mb: 1,
                        fontSize: '0.9rem',
                        lineHeight: 1.3
                      }}>
                        {post.title}
                      </Typography>
                      
                      <Typography variant="body2" sx={{
                        color: '#555',
                        mb: 1,
                        fontSize: '0.75rem',
                        lineHeight: 1.5
                      }}>
                        {post.excerpt}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} sx={{
                              fontSize: '0.7rem',
                              color: i < post.rating ? '#b8860b' : '#ddd'
                            }} />
                          ))}
                        </Box>
                        <Typography variant="caption" sx={{ color: '#888', fontSize: '0.6rem' }}>
                          {post.readTime}
                        </Typography>
                      </Box>
                    </Box>
                  </CardActionArea>
                </Card>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Button endIcon={<ChevronRight />} sx={{
            color: '#b8860b',
            fontSize: '0.8rem',
            fontWeight: 600,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'rgba(184, 134, 11, 0.08)'
            }
          }}>
            View all travel articles
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LuxuryTravelBlog;