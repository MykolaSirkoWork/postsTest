import '../App.css';
import 'react-multi-carousel/lib/styles.css';

import React, {
  useEffect,
  useState,
} from 'react';

import Carousel from 'react-multi-carousel';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { getComments } from '../store/reducers/commentsReducer';
import { commentsSelector } from '../store/selectors/commentsReducer';

const PostItem = ({item, comments}) => {

    const [postID, setPostID] = useState(1);
    const [comID, setComID] = useState(1);

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getComments(comID));

    }, [comID])

    const nextComment = (id) =>{
        setPostID(postID + 1);
        setComID(id);
    }
    
    const commentsFromState = useSelector((state) => commentsSelector(state));
   
    return (
        <Paper>
            <Carousel responsive={responsive}
            afterChange ={() => nextComment(item[postID].id)}>  
        {
        item.map((item) => (
          <>
        <Card>
        <CardContent>
          <Typography sx={{"font-family": "Utopia-italic",
    "font-size": 35,
    "font-weight": 700,
    "text-align": "center"
    }} variant="h5">{item.title}</Typography>
          <Typography sx={{ 
"font-size": "1.4em",
  width:"100%",
  margin:"50px auto",
  "font-family":"Open Sans",
  "font-style":"italic",
  color: "#555555",
  padding:"1.2em 30px 1.2em 75px",
  "border-left":"8px solid #78C0A8",
  "line-height":1.6,
  position: "relative",
  background:"#EDEDED"}} variant="h6">{item.body}</Typography>
        </CardContent>
      </Card>
          <Typography sx={{margin: 0, fontSize: '40px', color: "red"}}>Comments:</Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {commentsFromState.map((item) => (
                <Grid item xs={2} sm={4} md={4}>
                    <Card sx={{ minWidth: 275 }}>
            <CardContent>
        <Typography sx={{ fontSize: 14 }} color="blue" gutterBottom>
          {item.email}
        </Typography>
        <Typography variant="body1">
          {item.body}
          <br />
        </Typography>
      </CardContent>
     
    </Card>
                </Grid>
            ))}
          </Grid>
        </>

      ))
  }
  
</Carousel>

        </Paper>
        
    )
}
export default PostItem;