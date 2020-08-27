const carouselStyle = {
  section: {
    padding: "70px 0"
  },
  container: {
    "@media (max-width: 575px)": {
      display: "none"
    },
    "@media (min-width: 576px)": {
      maxWidth: "565px"
    },
    "@media (min-width: 768px)": {
      maxWidth: "750px"
    },
    "@media (min-width: 992px)": {
      maxWidth: "980px"
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1180px"
    }
  },
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  }
};

export default carouselStyle;
