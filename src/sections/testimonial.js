/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from "theme-ui";
import SectionHeader from "components/section-header";
import Rating from "components/rating";
import ButtonGroup from "components/button-group";
import Carousel from "react-multi-carousel";

import Avatar1 from "assets/testimonial/avatar1.png";
import Avatar2 from "assets/testimonial/avatar2.png";
import Avatar3 from "assets/testimonial/avatar3.png";
import Avatar4 from "assets/testimonial/avatar4.png";
import Link from "next/link";

const data = [
    {
    id: 1,
    title: "file timestamping on the blockchain",
    description:
      "simple e-sealing solution showcasing how blockchain can support trust services. a reminder that the blockchain's at its root is a tamper proof transaction trail",
    avatar: Avatar4,
    name: "application",
    designation: "April 2022",
    link: "https://notary.northstake.dk/",
    linkname: "timestamping",
    review: 4,
    },
    {
    id: 2,
    title: "getting started guide",
    description:
      "a personal journey through the concordium developer documentation from scratch to deploying the piggy bank and cis1-wccd example smart contract on testnet.",
    avatar: Avatar2,
    name: "community contribution",
    designation: "May 2022",
    link: "https://medium.com/p/fc531eacef6e",
    linkname: "medium article"
    },
    {
    id: 3,
    title: "esealing on the blockchain",
    description:
      "simple e-sealing solution showcasing how blockchain can support trust services. components for creating a blockchain based signature service",
    avatar: Avatar4,
    name: "application",
    designation: "May 2022",
    link: "http://filesealing.newtrust.co/",
    linkname: "e-sealing",
    review: 4,
    },
    {
    id: 4,
    title: "blockchain and gatekeepers",
    description:
      "gatekeepers will be critical for the future regulatory compliant blockchain . short video on how they can work. views are through the floor :-)",
    avatar: Avatar4,
    name: "thought leadership",
    designation: "june 2022",
    link: "https://www.youtube.com/watch?v=YH3cohZG_Do&t=5s",
    linkname: "youtube",
    review: 4,
    },
    {
    id: 5,
    title: "Blockchains and compliance readiness",
    description:
      "in the coming wave of regulatory inflow, the ultimate promise of blockchain and decentralization must not be forgotten. short video illustrating the sweet spot to aim for", 
    avatar: Avatar4,
    name: "thought leadership",
    designation: "june 2022",
    link: "https://www.youtube.com/watch?v=G6GudxTA730&t=29s",
    linkname: "youtube",
    review: 4,
    },  
    {
    id: 6,
    title: "Why is regulation readiness becoming a recurrent topic in the blockchain sphere",
    description:
      "in a nutshell: businesses cannot have one business model and set of standards when they offer services in the current setup - and another in web3.",
    avatar: Avatar4,
    name: "interview",
    designation: "August 2022",
    link: "https://www.youtube.com/watch?v=pbe1Jt0wcXA",
    linkname: "youtube",
    review: 4,
  }, 
  {
    id: 7,
    title: "What do you own when you buy an NFT?",
    description:
      "important article from Galaxy that web3 ip rights - and hence the nft concept - is in poor condition: 'without solving these detrimental problems of IP ownership, then the NFT landscape will evidently formulate into Web2 products that are marketed and disguised as Web3 products' ", 
    avatar: Avatar4,
    name: "thought paper",
    designation: "August 2022",
    link: "https://www.galaxy.com/research/insights/a-survey-of-nft-licenses-facts-and-fictions/",
    linkname: "A Survey of NFT Licenses: Facts & Fictions",
    review: 4,
  },  
  {
    id: 8,
    title: "sample nft marketplace",
    description:
      "sample ethereum based nft marketplace built using solidity, theGraph and javascript. deployed on the goerli net",
    avatar: Avatar3,
    name: "application",
    designation: "september 2022",
    link: "https://nftmintermarketplace.vercel.app/",
    linkname: "nft marketplace"
  },
];


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function TestimonialCard() {
  return (
    <section id="web3testimonial" sx={{ variant: "section.testimonial" }}>
      <Container>
        <SectionHeader slogan="what has happened recently" title="did you notice" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
              {/* <Rating rating={item.review} /> */}
              <Heading as="h3" sx={styles.title}>
                {item.id}.  {item.title}
              </Heading>
              <Text sx={styles.description}>{item.description}</Text>
              <div className="card-footer">
                          
              <div className="reviewer-info">
                <Text as="h4" sx={styles.title}>                     
                  <a target="_blank" href={item.link} >{item.linkname}</a>                                          
              </Text>
                  <Heading as="h4" sx={styles.heading}>
                    {item.name}
                  </Heading>
                  <Text sx={styles.designation}>{item.designation}</Text>
                </div>
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  );
}

const styles = {
  background: {
    backgroundColor: "#343D48",
  },
  carouselWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
    mt: "-35px",
    px: "15px",
    ".carousel-container": {
      width: "100%",
      maxWidth: [
        "100%",
        null,
        null,
        "750px",
        "1000px",
        "1180px",
        null,
        "calc(50% + 865px)",
      ],
      mr: ["auto", null, null, null, null, null, null, "-220px"],
      ml: "auto",
      ".react-multi-carousel-item": {
        transition: "all 0.25s",
      },
      ".react-multi-carousel-item--active:nth-of-type(4n)": {
        opacity: "0.5",
        "@media screen and (max-width: 1620px)": {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    p: [
      "30px 20px 35px",
      "30px 25px 35px",
      "30px 20px 35px",
      "35px 30px 40px 40px",
      "30px 30px 35px",
      "35px 30px 40px 40px",
    ],
    bg: "white",
    textAlign: "left",
    m: [
      "28px 5px 30px 5px",
      "28px 20px 30px 20px",
      "28px 15px 30px 15px",
      "28px 15px 30px 15px",
      "30px 20px 40px",
    ],
    "&:hover": {
      boxShadow: "0px 6px 47px rgba(38, 78, 118, 0.1)",
    },
    ".rating": {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: "none",
        mb: 0,
        display: "flex",
      },
      svg: {
        marginRight: "2px",
        "&:last-of-type": {
          marginRight: 0,
        },
      },
      ".star": {
        color: "yellow",
        mr: "1px",
      },
      ".star-o": {
        color: "#ddd",
        mr: "1px",
      },
    },
    ".card-footer": {
      display: "flex",
      alignItems: "center",
      marginTop: [5, null, null, "33px"],
      ".image": {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: "flex",
        img: {
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          objectFit: "cover",
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3,
  },
  designation: {
    color: "#25A0FF",
    fontWeight: "500",
    fontSize: 1,
    lineHeight: 1.4,
  },
};
