import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";

function Cards({ title, word, description, type, image }) {
    return (
        <Box sx={{ minWidth: 275, margin: 2 }}>
            <Card variant="outlined" sx={{ borderRadius: "8px", overflow: "hidden" }}>
                {/* Add Image */}
                {image && (
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt={title}
                        sx={{ objectFit: "cover", borderRadius: "4px 4px 0 0" }}
                    />
                )}
                <CardContent>
                    <Typography
                        gutterBottom
                        sx={{ color: "text.secondary", fontSize: 14 }}
                    >
                        Title: {title}
                    </Typography>
                    <Typography variant="h5" component="div">
                        Price: {word}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                        Stocks: {type}
                    </Typography>
                    <Typography variant="body2"> Description: {description}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Cards;
