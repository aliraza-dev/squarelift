import { Container } from "./Container";

import awsLogo from '@/images/logos/aws-amazon-web-services.jpg';
import microsoft from '@/images/logos/microsoft.jpg';
import kubernetees from '@/images/logos/kubernetees.png';

export function Services() {
    return (
      <section
        id="secondary-features"
        aria-label="Features for simplifying everyday business tasks"
        className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
      >
        <Container>
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              Technologies we work on
            </h2>
            
              <ul role="list" className="flex flex-row gap-x-6 sm:gap-y-8 justify-between">
                  <li >
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      {/* <QuoteIcon className="absolute left-6 top-6 fill-slate-100" /> */}
                      <blockquote className="relative">
                        <img src={awsLogo.src} alt="AWS" style={{ height: 500 }}/>
                      </blockquote>
                    </figure>
                  </li>
                  <li >
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      {/* <QuoteIcon className="absolute left-6 top-6 fill-slate-100" /> */}
                      <blockquote className="relative">
                        <img src={microsoft.src} alt="AWS" style={{ height: 500 }} />

                      </blockquote>
                    </figure>
                  </li>
                  <li >
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      {/* <QuoteIcon className="absolute left-6 top-6 fill-slate-100" /> */}
                      <blockquote className="relative">
                        <img src={kubernetees.src} alt="Kuberneetes"  style={{ height: 500 }}/>
                      </blockquote>
                    </figure>
                  </li>
              </ul>
          </div>

        </Container>
      </section>
    )
  }