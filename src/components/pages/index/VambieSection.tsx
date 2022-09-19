import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import { ContainedButton, SectionContainer, SectionContentWrapper } from '../../shared'

const Container = styled(SectionContainer)`
  min-height: auto;
  background-color: #171717;
  color: ${({ theme }) => theme.colors.common.white};
  overflow: hidden;
`

const ContentWrapper = styled(SectionContentWrapper)`
  margin: ${({ theme }) => theme.spacing(5, 'auto', 0, 'auto')};
  align-items: center;

  ${({ theme }) => theme.breakpoints.up('xs')} {
    margin: ${({ theme }) => theme.spacing(8, 'auto', 0, 'auto')};
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: ${({ theme }) => theme.spacing(0, 5)};
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin: ${({ theme }) => theme.spacing(5, 'auto')};
    flex-direction: row;
  }
`

const Title = styled.span`
  margin-top: ${({ theme }) => theme.spacing(1)};
  font-weight: 900;
  font-size: 2rem;
  text-align: center;
  z-index: 2;

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-top: 0;
    margin-left: ${({ theme }) => theme.spacing(2)};
  }
`

const CtaButton = styled(ContainedButton)`
  margin-top: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-top: 0;
    margin-left: auto;
    z-index: 2;
    box-shadow: 8px 8px 35px rgba(0, 0, 0, 0.9);
  }
`

const FrontImageContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(5)};

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin: 0;
    position: absolute;
    width: 40%;
    left: 60%;
    transform: translate(-50%);
    z-index: 1;
  }
`

interface Props {
  title: string
  ctaTitle: string
  ctaLink: string
}

export function VambieSection({ title, ctaTitle, ctaLink }: Props) {
  return (
    <Container>
      <ContentWrapper>
        <StaticImage
          src="../../../images/vambie-indicator.png"
          alt="Green indicator"
          width={40}
          height={40}
          style={{ maxWidth: 40, maxHeight: 40 }}
        />
        <Title>{title}</Title>
        <CtaButton href={ctaLink} target="_blank" rel="noopener noreferrer" isLight>
          {ctaTitle}
        </CtaButton>
        <FrontImageContainer>
          <StaticImage
            src="../../../images/vambie-section-front.png"
            alt="Vambie front image"
          />
        </FrontImageContainer>
      </ContentWrapper>
    </Container>
  )
}
