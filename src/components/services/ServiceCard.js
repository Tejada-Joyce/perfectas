import * as React from "react";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
const ServiceDetails = styled.section`
  padding: 0;
  width: 70%;
  margin: 0 auto;
`;
const ServiceCard = ({ name, time, description }) => {
  // const classes = useStyles();
  // const [open, setOpen] = useState(false);

  return (
    <li>
      <ServiceDetails>
        <h5>{name}</h5>
        <p>{time}</p>
        <p style={{ textAlign: "left" }}>
          <span style={{ fontWeight: "bold" }}>Descripción: </span>
          {description}
        </p>
      </ServiceDetails>
    </li>

    //   <Card classes={{ root: classes.root }}>
    //     <IconButton
    //       style={{ position: "absolute", left: 260, top: 0 }}
    //       onClick={() => setOpen(true)}
    //     >
    //       <LaunchIcon />
    //     </IconButton>
    //     <CardContent>
    //       <Box overflow="auto" style={{ width: "90%", height: 70 }}>
    //         <Title variant="h6">{title}</Title>
    //       </Box>
    //     </CardContent>
    //     <CardMedia
    //       className={classes.media}
    //       image={src}
    //       component="video"
    //       height="140"
    //     />
    //     <FilmCardModal
    //       src={src}
    //       title={title}
    //       content={content}
    //       open={open}
    //       setOpen={setOpen}
    //     />
    //   </Card>
  );
};

export default ServiceCard;
