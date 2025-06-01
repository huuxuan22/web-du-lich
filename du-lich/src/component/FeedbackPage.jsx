import  { useState, useRef } from "react";
import {
  Avatar,
  Button,
  Collapse,
  Divider,
  IconButton,
  TextField,
  Typography,
  Box,
  Pagination,
  Chip,
} from "@mui/material";
import { Send, Reply, AttachFile } from "@mui/icons-material";
import Header from "../page/Header";
import Footer from "../page/Footer";

const primaryColor = "#008b76";
const secondaryColor = "#e0f2f1";

const mockComments = [
  {
    id: 1,
    user: { name: "Nguyễn Văn A", avatar: "" },
    content: "Sản phẩm tốt, đáng giá 5 sao",
    rating: 5,
    date: "2024-03-15",
    attachments: [
      { id: 1, type: "image", url: "https://picsum.photos/200/300" },
    ],
    replies: [
      {
        id: 1,
        user: { name: "Quản trị viên", avatar: "" },
        content: "Cảm ơn bạn đã đánh giá!",
        date: "2024-03-16",
      },
    ],
  },
  {
    id: 2,
    user: { name: "Trần Thị B", avatar: "" },
    content: "TRang web này vô cùng tốt và rất cảm ơn",
    rating: 4,
    date: "2024-03-14",
    attachments: [],
    replies: [],
  },
];

const ProductFeedback = () => {
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [attachments, setAttachments] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [page, setPage] = useState(1);
  const fileInputRef = useRef(null);

  const handleSubmit = () => {
    if (!newComment.trim() && attachments.length === 0) return;

    const newCommentObj = {
      id: comments.length + 1,
      user: { name: "Người dùng", avatar: "" },
      content: newComment,
      rating: 5,
      date: new Date().toISOString().split("T")[0],
      attachments: attachments.map((file, index) => ({
        id: index + 1,
        type: file.type.startsWith("image") ? "image" : "video",
        url: URL.createObjectURL(file),
      })),
      replies: [],
    };

    setComments([newCommentObj, ...comments]);
    setNewComment("");
    setAttachments([]);
  };

  const handleReply = (commentId, content) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: comment.replies.length + 1,
                user: { name: "Người dùng", avatar: "" },
                content,
                date: new Date().toISOString().split("T")[0],
              },
            ],
          };
        }
        return comment;
      })
    );
    setReplyingTo(null);
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files).filter(
      (file) => file.type.startsWith("image/") || file.type.startsWith("video/")
    );
    setAttachments(files);
  };

  const averageRating = (
    comments.reduce((sum, comment) => sum + comment.rating, 0) / comments.length
  ).toFixed(1);

  return (
    <div>
      <Header></Header>
      <Box
      sx={{
        maxWidth: 1200,
        margin: "0 auto",
        p: 3,
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: 3,
        mt: 10
      }}
    >
      {/* Rating Overview */}
      <Box sx={{ textAlign: "center", mb: 2 }}>
        {" "}
        {/* Giảm margin */}
        <Typography
          variant="h4"
          sx={{ color: primaryColor, fontWeight: "bold" }}
        >
          {averageRating}
        </Typography>
        <Typography variant="h6" sx={{ color: primaryColor, mb: 0.5 }}>
          ★★★★★
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ({comments.length} đánh giá)
        </Typography>
      </Box>
      {/* Rating Filters */}
      <Box
        sx={{
          display: "flex",
          gap: 0.5,
          justifyContent: "center",
          mb: 2,
          "& .MuiButton-root": {
            minWidth: 32,
            fontSize: "0.75rem",
            padding: "2px 4px",
          },
        }}
      >
        {[5, 4, 3, 2, 1].map((rating) => (
          <Button
            key={rating}
            variant={selectedRating === rating ? "contained" : "outlined"}
            sx={{
              minWidth: 0,
              color: selectedRating === rating ? "white" : primaryColor,
              borderColor: primaryColor,
              backgroundColor:
                selectedRating === rating ? primaryColor : "white",
              "&:hover": {
                backgroundColor:
                  selectedRating === rating ? "#00695f" : secondaryColor,
              },
            }}
            onClick={() => setSelectedRating(rating)}
          >
            {rating}★
          </Button>
        ))}
      </Box>

      {/* Comment Input */}
      <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
        <Avatar sx={{ bgcolor: primaryColor }}>U</Avatar>
        <Box sx={{ flexGrow: 1 }}>
          <TextField
            fullWidth
            multiline
            rows={3}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Viết đánh giá của bạn..."
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: primaryColor },
                "&:hover fieldset": { borderColor: primaryColor },
              },
            }}
          />

          {/* File Preview */}
          {attachments.length > 0 && (
            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
              {attachments.map((file, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    width: 100,
                    height: 100,
                    borderRadius: 1,
                    overflow: "hidden",
                  }}
                >
                  {file.type.startsWith("image/") ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt="preview"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <video
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      controls
                    >
                      <source src={URL.createObjectURL(file)} />
                    </video>
                  )}
                </Box>
              ))}
            </Box>
          )}

          {/* Action Bar */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              multiple
              hidden
            />
            <IconButton
              onClick={() => fileInputRef.current.click()}
              sx={{ color: primaryColor }}
            >
              <AttachFile />
            </IconButton>
            <Button
              variant="contained"
              endIcon={<Send />}
              onClick={handleSubmit}
              disabled={!newComment.trim() && attachments.length === 0}
              sx={{
                bgcolor: primaryColor,
                "&:hover": { bgcolor: "#00695f" },
              }}
            >
              Gửi đánh giá
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Comments List */}
      {comments.map((comment) => (
        <Box key={comment.id} sx={{ mb: 1 }}>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              mb: 1,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                fontSize: "0.8rem",
              },
            }}
          >
            <Avatar sx={{ bgcolor: primaryColor }}>
              {comment.user.name[0]}
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography fontWeight="bold">{comment.user.name}</Typography>
                <Chip
                  label={`${comment.rating}★`}
                  size="small"
                  sx={{ bgcolor: secondaryColor, color: primaryColor }}
                />
                <Typography variant="body2" color="text.secondary">
                  {comment.date}
                </Typography>
              </Box>
              <Typography sx={{ mt: 1 }}>{comment.content}</Typography>

              {/* Attachments */}
              {comment.attachments.length > 0 && (
                <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                  {comment.attachments.map((attachment) =>
                    attachment.type === "image" ? (
                      <img
                        key={attachment.id}
                        src={attachment.url}
                        alt="attachment"
                        style={{ width: 100, height: 100, borderRadius: 1 }}
                      />
                    ) : (
                      <video
                        key={attachment.id}
                        style={{ width: 100, height: 100, borderRadius: 1 }}
                        controls
                      >
                        <source src={attachment.url} />
                      </video>
                    )
                  )}
                </Box>
              )}

              {/* Reply Actions */}
              <Box
                sx={{
                  ml: { xs: 2, md: 4 },
                  mt: 1,
                  "& .MuiAvatar-root": {
                    width: 24,
                    height: 24,
                  },
                }}
              >
                <Button
                  startIcon={<Reply />}
                  size="small"
                  sx={{ color: primaryColor }}
                  onClick={() => setReplyingTo(comment.id)}
                >
                  Phản hồi
                </Button>
              </Box>

              {/* Reply Input */}
              {replyingTo === comment.id && (
                <ReplyInput
                  onCancel={() => setReplyingTo(null)}
                  onSubmit={(content) => handleReply(comment.id, content)}
                />
              )}

              {/* Replies List */}
              {comment.replies.length > 0 && (
                <Collapse in={true}>
                  <Box sx={{ ml: 4, mt: 2 }}>
                    {comment.replies.map((reply) => (
                      <Box
                        key={reply.id}
                        sx={{ display: "flex", gap: 2, mb: 2 }}
                      >
                        <Avatar
                          sx={{ bgcolor: primaryColor, width: 24, height: 24 }}
                        >
                          {reply.user.name[0]}
                        </Avatar>
                        <Box>
                          <Typography fontWeight="bold">
                            {reply.user.name}
                          </Typography>
                          <Typography variant="body2">
                            {reply.content}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Collapse>
              )}
            </Box>
          </Box>
          <Divider sx={{ mt: 2 }} />
        </Box>
      ))}

      {/* Pagination */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Pagination
          count={5}
          page={page}
          onChange={(e, value) => setPage(value)}
          sx={{
            "& .Mui-selected": {
              backgroundColor: `${primaryColor}!important`,
              color: "white",
            },
          }}
        />
      </Box>
    </Box>
      <Footer></Footer>
    </div>
  );
};

const ReplyInput = ({ onSubmit, onCancel }) => {
  const [content, setContent] = useState("");

  return (
    <Box sx={{ mt: 2, display: "flex", gap: 2, alignItems: "flex-start" }}>
      <Avatar sx={{ width: 32, height: 32, bgcolor: primaryColor }}>U</Avatar>
      <Box sx={{ flexGrow: 1 }}>
        <TextField
          fullWidth
          multiline
          rows={2}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Viết phản hồi..."
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: primaryColor },
              "&:hover fieldset": { borderColor: primaryColor },
            },
          }}
        />
        <Box
          sx={{ display: "flex", gap: 1, mt: 1, justifyContent: "flex-end" }}
        >
          <Button
            variant="outlined"
            onClick={onCancel}
            sx={{ borderColor: primaryColor, color: primaryColor }}
          >
            Hủy
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              onSubmit(content);
              setContent("");
            }}
            sx={{ bgcolor: primaryColor, "&:hover": { bgcolor: "#00695f" } }}
          >
            Gửi
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductFeedback;
