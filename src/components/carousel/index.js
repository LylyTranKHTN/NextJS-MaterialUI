import React from "react";
import PropTypes from 'prop-types';
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

function CarouselComponent(props) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                {props.data.map((slide, index) => (
                  <div key={`slider-${index}`}>
                    <img src={slide.img} className="slick-image" />
                    <div className="slick-caption" >
                      {slide.content}
                    </div>
                  </div>
                ))}
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

CarouselComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      content: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
      ]),
    }),
  ),
}

CarouselComponent.defaultProps = {
  data: [{
    img: "images/bg.jpg",
    content: <h4>
      <LocationOn className="slick-icons" />
      Yellowstone National Park, United States
    </h4>,
  }, {
    img: "images/bg2.jpg",
    content: <h4>
      <LocationOn className="slick-icons" />
      Somewhere Beyond, United States
    </h4>,
  }, {
    img: "images/bg3.jpg",
    content: <h4>
      <LocationOn className="slick-icons" />
      Yellowstone National Park, United States
    </h4>,
  }],
}

export default CarouselComponent;
