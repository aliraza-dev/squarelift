import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Who are we?
          </h2>
          <h3 className='mt-4 text-lg tracking-tight text-white'>
            We are <strong>Squarelift PVT ltd.</strong>
          </h3>
          <p className="mt-4 text-lg tracking-tight text-white">
          Squarelift is cloud solution providing agency with its physical location in Islamabad, Pakistan. 
          The company provides cloud and software related solutions using various service providers such as <strong>AWS</strong>, <strong>Azure</strong>, <strong>GCP</strong> and numerous shared hosting platforms.
          We have vast experience spaning over six years with <strong>Dockers,</strong> <strong>Kubernetes</strong>, and <strong>Teraform</strong> etc
          </p>
          {/* <Button href="/register" color="white" className="mt-10">
            Get 6 months free
          </Button> */}
        </div>
      </Container>
    </section>
  )
}
