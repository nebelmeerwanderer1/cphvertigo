import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import KeyFeature from "sections/key-feature";
import CoreFeature from "sections/core-feature";
import Feature from "sections/feature";
import PartnerSection from "sections/partner";
import WorkFlow from "sections/workflow";
import TestimonialCard from "sections/testimonial";
import SecurePayment from "sections/secure-payment";
import Package from "sections/package";
import Faq from "sections/faq";
import CoreFeature2 from "sections/core-feature2";
import Web3WorkFlow from "sections/web3workflow";
import Web3TestimonialCard from "sections/web3testimonial";
import Web3images from "sections/web3images";



export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="copenhagen vertigo - blockchain - token economy" />
          <Banner />
          
          <CoreFeature />
          <CoreFeature2 />
          <WorkFlow />
          <SecurePayment />
          <TestimonialCard />
          
          <Web3WorkFlow />
          
          <Web3TestimonialCard />
          <Web3images />
          <KeyFeature />
          
          
          
          
          
          {/* 
          <Faq />
          <Feature />
          <PartnerSection />

          <Package /> */}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
