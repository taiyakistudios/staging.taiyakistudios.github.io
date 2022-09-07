import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import { SectionContainer, SectionContentWrapper } from '../../shared'
import { MemberItem } from './MemberItem'

const StyledContainer = styled(SectionContainer)`
  background-color: rgba(237, 237, 237, 1);
  min-height: auto;
`

const StyledContentWrapper = styled(SectionContentWrapper)`
  margin: ${({ theme }) => theme.spacing(4, 'auto')};

  ${({ theme }) => theme.breakpoints.up('xs')} {
    margin: ${({ theme }) => theme.spacing(5, 'auto')};
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin: ${({ theme }) => theme.spacing(7, 'auto')};
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.breakpoints.up('sm')} {
    grid-template-columns: 1fr 1fr;
    row-gap: ${({ theme }) => theme.spacing(3)};
    column-gap: ${({ theme }) => theme.spacing(3)};
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

interface Props {
  members: {
    name: string
    role: string
    prompt: string
    imageFileName: string
  }[]
}

export function MembersSection({ members }: Props) {
  const imagesData = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { relativePath: { glob: "member-profiles/*" } }) {
        edges {
          node {
            name
            relativeDirectory
            relativePath
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const imageDataByFileName = imagesData.allFile.edges.reduce(
    (result: any, current: any) => {
      const key = current.node.relativePath.replace('member-profiles/', '')
      return { ...result, [key]: current.node.childImageSharp.gatsbyImageData }
    },
    {},
  )

  function renderMembers() {
    return members.map((member, index) => {
      const imageData = imageDataByFileName[member.imageFileName]
      return (
        <MemberItem
          key={index}
          name={member.name}
          role={member.role}
          prompt={member.prompt}
          imageData={imageData}
        />
      )
    })
  }

  return (
    <StyledContainer>
      <StyledContentWrapper>
        <Grid>{renderMembers()}</Grid>
      </StyledContentWrapper>
    </StyledContainer>
  )
}
