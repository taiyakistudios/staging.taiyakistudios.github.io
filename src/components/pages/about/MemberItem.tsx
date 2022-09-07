import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(217, 217, 217, 1);
  height: calc(100vw - ${({ theme }) => theme.spacing(3)});
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    height: calc((100vw / 2) - ${({ theme }) => theme.spacing(3)});
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    /* (content_max_width / 3) - (column_padding * 2) - (horizontal_section_padding * 2)  */
    height: calc((1400px / 3) - ${({ theme }) => theme.spacing(3 * 2 + 5 * 2)});
  }
`

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`

const PromptTextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  color: ${({ theme }) => theme.colors.common.white};
  opacity: 0;
  padding: ${({ theme }) => theme.spacing(3, 2)};
  box-sizing: border-box;
  line-height: 1.5;

  &:hover {
    opacity: 1;
  }
`

const PromptTextTitle = styled.span`
  font-size: 0.7rem;
  font-weight: 500;
  opacity: 0.8;

  ${({ theme }) => theme.breakpoints.up('xs')} {
    font-size: 0.8rem;
  }
`

const PromptTextBody = styled.p`
  font-size: 0.8rem;

  ${({ theme }) => theme.breakpoints.up('xs')} {
    font-size: 1rem;
  }
`

const TextContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: #535353;
  padding: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.common.white};
`

const Title = styled.h3`
  margin: 0;
  font-weight: 500;
`

const RoleText = styled.span`
  margin: ${({ theme }) => theme.spacing(1, 0, 0, 0)};
  font-size: 0.8rem;
`

interface Props {
  name: string
  role: string
  prompt: string
  imageData: IGatsbyImageData
}

export function MemberItem({ name, role, prompt, imageData }: Props) {
  return (
    <Container>
      <ImageContainer>
        <GatsbyImage
          image={imageData}
          alt={`${name} profile image`}
          style={{ position: 'absolute', height: '100%' }}
        />
        <PromptTextContainer>
          <PromptTextTitle>DALL-E Prompt</PromptTextTitle>
          <PromptTextBody>{prompt}</PromptTextBody>
        </PromptTextContainer>
      </ImageContainer>
      <TextContainer>
        <Title>{name}</Title>
        <RoleText>{role}</RoleText>
      </TextContainer>
    </Container>
  )
}
