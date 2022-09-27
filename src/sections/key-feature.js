/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container, Grid } from "theme-ui"
import SectionHeader from "../components/section-header"
import FeatureCardColumn from "components/feature-card-column.js"
import Vector from "assets/ext_hangingwatches.jpg"
import Editing from "assets/ext_mirror.jpg"
import Speed from "assets/ext_reaching3.jpg"
import Velocity from "assets/ext_cliff11.jpg"

const data = [
    {
        id: 1,
        imgSrc: Vector,
        altText: "Identity",
        title: "Identity tokens & trust services",
        text: "An identity token is a portable piece of hardware that a user carries and uses to access a network. The token aids in proving the user's identity and authenticating that user for the use of a service. Blockchain technology can help businesses build strong blockchains that handle the issues of authentication and reconciliation encountered in several industries at global scale.Trust service means a service that helps various parties make binding decisions. A simple example is a service provision contract (such as ordering waste removal, choosing a mobile package or buying a washing machine online), which is entered into between the provider and the user of a service. The contract will become effective, i.e. legally binding for both parties, only if it is signed.",
    },
    {
        id: 2,
        imgSrc: Editing,
        altText: "Soulbound",
        title: "Soulbound non-transferable tokens",
        text: "Soulbound tokens (SBTs) are non-transferable tokens representing a person’s identity using blockchain technology. This could include medical records, work history, and any type of information that makes up a person or entity. The wallets that hold or issue these records are called “Souls.” People could have multiple wallets (or Souls) representing different parts of their lives. For example, someone could have a “Credentials Soul” for their work history and a “Medical Soul” for their health records. Souls and SBTs would allow people to build a verifiable, digital Web3 reputation based on their past actions and experiences.",
    },
    {
        id: 3,
        imgSrc: Velocity,
        altText: "Nonfungible",
        title: "Scarce non-fungible tokens",
        text: "Non-Fungible Tokens (NFTs) are cryptographic tokens that cannot be interchanged in a like-for-like manner. These tokens are entirely distinguishable from one another and are unique and limited in quantity. NFTs can be used to represent real-world items on the blockchain, but can also be used for digital collectibles. Digital identity and the metaverse are other sectors that can utilize NFTs. NFTs have been popularized in mainstream culture as a new form of digital art. However, they also have potential applications in many different fields, such as video games, digital identity, licensing, certificates, or fine art – and even allow fractional ownership of items.",
    },
    {
        id: 4,
        imgSrc: Speed,
        altText: "Fungible",
        title: "Fungible tokens and defi",
        text: "Fungible Tokens are assets on a blockchain that are interchangeable. Cryptocurrencies are the prime example of fungible tokens because each coin has the same value as any other coin of the same type at any given moment. In contrast, an NFT (non-fungible token) represents a very specific item such as a work of art (see NFT). A voting token is fungible when a blockchain-based governance system allows members with more tokens to have more votes. Such governance rules are defined in a decentralized autonomous organization (see DAO).",
    },
]

export default function KeyFeature() {
    return (
        <section sx={{ variant: "section.keyFeature" }} id="feature">
            <Container>
                <SectionHeader
                    slogan="Token economy"
                    title="Which type of token will drive your business"
                />

                <Grid sx={styles.grid}>
                    {data.map((item) => (
                        <FeatureCardColumn
                            key={item.id}
                            src={item.imgSrc}
                            alt={item.title}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </Grid>
            </Container>
        </section>
    )
}

const styles = {
    grid: {
        px: [0, null, null, "40px", null, "80px"],
        pt: [0, null, null, null, null, null, null, 3],
        gridGap: ["35px 0", null, "40px 0"],
        gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
        width: ["100%", "80%", "100%"],
        mx: "auto",
        "& > div": {
            px: [0, "15px", null, "25px", null, "30px", "40px", "60px"],
        },
    },
}
