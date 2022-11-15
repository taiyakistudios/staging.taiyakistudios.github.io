import type { HeadFC } from 'gatsby'
import React from 'react'

import { HeroSection, JoinTeamSection, MembersSection } from '../components/pages/about'
import { DefaultHead, Footer, Layout } from '../components/shared'
import content from '../content/yaml/about.yaml'

function AboutPage() {
  const members = content.members.map((member: any) => ({
    ...member,
    imageFileName: member.image_file_name,
  }))

  return (
    <Layout>
      <main>
        <HeroSection title={content.hero.title} tagline={content.hero.tagline} />
        <MembersSection members={members} />
        <JoinTeamSection
          title={content.join_team.title}
          ctaTitle={content.join_team.cta_title}
          ctaLink={content.join_team.cta_link}
        />
        <Footer />
      </main>
    </Layout>
  )
}

export default AboutPage

export const Head: HeadFC = function () {
  return <DefaultHead title={content.title} />
}
