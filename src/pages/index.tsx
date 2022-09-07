import type { HeadFC } from 'gatsby'
import React from 'react'

import {
  AboutSection,
  BusinessSection,
  HeroSection,
  HiringSection,
  ProjectsSection,
} from '../components/pages/index'
import { DefaultHead, Footer, Layout } from '../components/shared'
import content from '../content/index.yaml'

function IndexPage() {
  return (
    <Layout>
      <main>
        <HeroSection
          title={content.hero.title}
          tagline={content.hero.tagline}
          mainCtaTitle={content.hero.main_cta_title}
          mainCtaLink={content.hero.main_cta_link}
          secondaryCtaTitle={content.hero.secondary_cta_title}
          secondaryCtaLink={content.hero.secondary_cta_link}
        />
        <BusinessSection
          overline={content.business.overline}
          title={content.business.title}
          tagline={content.business.tagline}
          ctaTitle={content.business.cta_title}
          ctaLink={content.business.cta_link}
          blocks={content.business.blocks}
        />
        <ProjectsSection
          overline={content.projects.overline}
          projects={content.projects.items}
        />
        <HiringSection
          title={content.hiring.title}
          tagline={content.hiring.tagline}
          ctaTitle={content.hiring.cta_title}
          ctaLink={content.hiring.cta_link}
        />
        <AboutSection
          title={content.about.title}
          tagline={content.about.tagline}
          ctaTitle={content.about.cta_title}
        />
        <Footer />
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = function () {
  return <DefaultHead title={content.title} />
}
