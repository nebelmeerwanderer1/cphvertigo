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
    title: "web3 feels slower than the normal 'internet'",
    description:
      "you are directly interacting with a globally distributed network. it takes a few seconds for the world to agree and send a confirmation back to you. it is common in web2 to send a confirmation right away but it is really just a message saying 'we have received the order, you can trust us, we will do it later'",
    avatar: Avatar1,
    name: "5 things you need to be aware of (#1)",
    designation: "August 2022",
    review: 4,
  },
  {
    id: 2,
    title: "watch the heartbeats of web3",
    description:
      "each blockchain runs on a heartbeat. at each heartbeat a new block of transactions is confirmed. have a look at an explorer where you can see the heartbeat live. a little bit of magic previously only available to technicians. here is a link to a bitcoin which happens to have one of the slowest heartbeats",
    avatar: Avatar2,
    name: "web3 hands-on experience",
    designation: "August 2022",
    link: "https://btcscan.org/",
    linkname: "btcscan"
  },
  {
    id: 3,
    title: "web3 is more than just blockchains",
    description:
      "blockhains are at the center of the internet of value. but there are other decentralized components needed to run a token economy. to name a few: oracles transmit external world information (e.g. exchange rates) to the blockchain, wallets hold your private keys, decentralized storage saves the files shown in you nfts, indexers handle events so you see the blockchains state on your screen.",
    avatar: Avatar3,
    name: "5 things you need to be aware of (#2)",
    designation: "august 2022",
    review: 5,
  },
  {
    id: 4,
    title: "visit the world's largest nft marketplace",
    description:
      "explore the collections of nfts that are on shown and sale at OpenSea. Notice the small icon in the top right corner. as of today there are more than 2 mio collections and 80 mio nfts. nfts are still uncharted waters",
    avatar: Avatar4,
    name: "web3 hands-on experience",
    designation: "August 2022",
    link: "https://opensea.io/",
    linkname: "opensea",
    review: 4,
  },
  {
    id: 5,
    title: "some web3 names can be misleading",
    description:
      "there is still a lot of chaos and experimenting in web3 (this also makes it so exciting). beware that terms can be misleading. blockchains are not 'trustless', you don't have tokens or money in your 'wallet', some stablecoins are not stable at all, some nfts are less unique than bank notes, never approve anything in your wallet that you don't know what is",
    avatar: Avatar4,
    name: "5 things you need to be aware of (#3)",
    designation: "august 2022",
    // link: "https://opensea.io/",
    // linkname: "opensea",
    review: 4,
  },
  {
    id: 6,
    title: "get your first account",
    description:
      "first thing to do when you want to be part of the token economy is to get a wallet so you can create an account to hold your tokens. metamask is the most used wallet and the one that other wallets compare themselves against.",
    avatar: Avatar4,
    name: "web3 hands-on experience",
    designation: "August 2022",
    link: "https://metamask.io/",
    linkname: "metamask",
    review: 4,
  },
  {
    id: 7,
    title: "it is not difficult to create tokens",
    description:
      "there are thousands of cryptocurrencies and millions of nfts. it is really easy to mint tokens but it is difficult to create a product and social acceptance. bitcoin is so amazing because it is an exceptional product and has evolved to become socially accepted. conversely, tokens are not just tokens. a closer look is required.", 
    avatar: Avatar4,
    name: "5 things you need to be aware of (#3)",
    designation: "august 2022",
    // link: "https://opensea.io/",
    // linkname: "opensea",
    review: 4,
  },
  {
    id: 8,
    title: "visit a local nft marketplace",
    description:
      "nfts are often created - 'minted' as it is called in web3 - locally so they are customized to specific needs. cphvertigo is also in on this game and you can have a peak at our solution and soon mint your first nft here.",
    avatar: Avatar4,
    name: "web3 hands-on experience",
    designation: "August 2022",
    link: "https://nftmintermarketplace.vercel.app/",
    linkname: "nft marketplace",
    review: 4,
  },
  // {
  //   id: 9,
  //   title: "there is a lot work on how to build a regulated framework that includes web3",
  //   description:
  //     "[forthcoming]",
  //   avatar: Avatar4,
  //   name: "5 things you need to be aware of (#4)",
  //   designation: "September 2022",
  //   // link: "tbd",
  //   // linkname: "tbd",
  //   review: 4,
  // },
  // {
  //   id: 10,
  //   title: "web3 refers to yet another evolution after web1 and web2",
  //   description:
  //     "web1 refers to the read-only internet in the 90s and early 2000s. web2 is the read-write web that began with social platforms and e-commerce portals. web3 refers to the read-write-own internet where we don't have to trust a few massive private companies (did someone say FAANG?).",
  //   avatar: Avatar4,
  //   name: "5 things  you need to be aware of (#5)",
  //   designation: "September 2022",
  //   // link: "tbd",
  //   // linkname: "tbd",
  //   review: 4,
  // },
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
        <SectionHeader slogan="web3 is a common name for technologies that run the token economy" title="steps to getting your feet wet in the token economy" />
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
