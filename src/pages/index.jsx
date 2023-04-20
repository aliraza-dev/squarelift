import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Services } from '@/components/Services'
import { Contactus } from '@/components/ContactUs'

export default function Home() {
  return (
    <>
      <Head>
        <title>Squarelift - Cutting-edge cloud infrastructure and solution providers</title>
        <meta
          name="description"
          content="To provide upto date and stable architectures and solutions, our aim is to meet your cloud related demands."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <CallToAction />
        <Services />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <Testimonials />
        <Pricing />
        <Contactus />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
