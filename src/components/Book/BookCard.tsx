import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { Book } from "../../types/LibraryTypes";

// function BookCard() {} also works
const BookCard = (props: { book: Book }) => {
  return (
    <Card sx={{ minWidth: '100%' }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
          {props.book.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.book.author}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;
