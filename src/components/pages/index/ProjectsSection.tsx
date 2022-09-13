import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React, { useState } from 'react'

import {
  H1,
  H3,
  SectionContainer,
  SectionContentWrapper,
  SectionTextWrapper,
} from '../../shared'

const Container = styled(SectionContainer)`
  min-height: auto;
  background-color: ${({ theme }) => theme.colors.common.white};
`

const BackgroundShape = styled.svg`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 40%;
  height: 100%;
  fill: #202020;

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: block;
  }
`

const MobileImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: none;
  }
`

const MobileImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.8);
  display: block;

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: none;
  }
`

const ContentWrapper = styled(SectionContentWrapper)`
  flex-direction: row;
`

const DesktopImageContainer = styled.div`
  display: none;
  height: 600px;
  width: max-content;
  position: relative;
  flex: 1;

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: block;
  }
`

const StyledH3 = styled(H3)`
  max-width: 500px;
`

const TextWrapper = styled(SectionTextWrapper)`
  margin-top: 0;
  z-index: 2;
  flex: 1;
  color: ${({ theme }) => theme.colors.common.white};

  ${({ theme }) => theme.breakpoints.up('md')} {
    color: ${({ theme }) => theme.colors.common.black};
  }
`

const ProjectItemsWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing(5)};

  ${({ theme }) => theme.breakpoints.up('xs')} {
    margin-top: ${({ theme }) => theme.spacing(10)};
  }
`

const ProjectItemsWrapperText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  color: #b9b9b9;
  line-height: 1.5;
  font-size: 0.8rem;

  ${({ theme }) => theme.breakpoints.up('xs')} {
    font-size: 1rem;
  }
`

const ProjectItem = styled(H1.withComponent('a'))`
  display: block;
  text-decoration: none;
  font-size: 2rem;
  -webkit-text-stroke: 2px ${({ theme }) => theme.colors.common.white};
  color: transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.common.white};
    -webkit-text-stroke: none;

    ${({ theme }) => theme.breakpoints.up('md')} {
      color: ${({ theme }) => theme.colors.common.black};
    }
  }

  &:not(:first-of-type) {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }

  ${({ theme }) => theme.breakpoints.up('xs')} {
    font-size: 3.6rem;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    -webkit-text-stroke: 2px ${({ theme }) => theme.colors.common.black};
  }
`

interface Props {
  overline: string
  projects: {
    name: string
    link?: string
    imageName: string
  }[]
}

export function ProjectsSection({ overline, projects }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState(0)

  const result = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { glob: "project-*" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 1080)
            }
          }
        }
      }
    }
  `)
  const imagesByName: Record<string, IGatsbyImageData> = result.allFile.edges.reduce(
    (result: any, current: any) => ({
      ...result,
      [current.node.name]: current.node.childImageSharp.gatsbyImageData,
    }),
    {},
  )

  const hoveredProject = hoveredIndex != null ? projects[hoveredIndex] : null
  const currentImage = hoveredProject ? imagesByName[hoveredProject.imageName] : null

  function renderProjectItems() {
    return projects.map((project, index) => (
      <ProjectItem
        key={index}
        href={project.link ?? '/'}
        target="_blank"
        rel="noopener noreferrer"
        onMouseOver={() => setHoveredIndex(index)}
      >
        {project.name}
      </ProjectItem>
    ))
  }

  return (
    <Container>
      <BackgroundShape viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0, 100 30, 0 100, 0 100, 100" />
      </BackgroundShape>
      {currentImage && (
        <MobileImageContainer>
          <GatsbyImage
            image={currentImage}
            alt={hoveredProject!.name}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              zIndex: 1,
            }}
          />
        </MobileImageContainer>
      )}
      <MobileImageOverlay />
      <ContentWrapper>
        <TextWrapper>
          <StyledH3>{overline}</StyledH3>
          <ProjectItemsWrapper>
            <ProjectItemsWrapperText>
              Click on a project to view more details
            </ProjectItemsWrapperText>
            {renderProjectItems()}
          </ProjectItemsWrapper>
        </TextWrapper>
        {currentImage && (
          <DesktopImageContainer>
            <GatsbyImage
              image={currentImage}
              alt={hoveredProject!.name}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
            />
          </DesktopImageContainer>
        )}
      </ContentWrapper>
    </Container>
  )
}
