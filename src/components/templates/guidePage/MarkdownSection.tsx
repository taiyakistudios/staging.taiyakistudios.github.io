import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'
import Markdown, { Components } from 'react-markdown'

import { SectionContainer, SectionContentWrapper } from '../../shared'

const Container = styled(SectionContainer)`
  min-height: auto;
`

const ContentWrapper = styled(SectionContentWrapper)`
  margin: ${({ theme }) => theme.spacing(3, 'auto')};

  ${({ theme }) => theme.breakpoints.up('xs')} {
    margin: ${({ theme }) => theme.spacing(5, 'auto')};
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin: ${({ theme }) => theme.spacing(7, 'auto')};
  }
`

const MarkdownWrapper = styled.div`
  max-width: 600px;
`

const H2 = styled.h2`
  margin: ${({ theme }) => theme.spacing(3, 0)};

  &:not(:first-of-type) {
    margin-top: ${({ theme }) => theme.spacing(5)};
  }
`

const Paragraph = styled.span`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 300;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  & > strong {
    font-weight: 600;
  }
`

const Code = styled.code`
  background-color: #e1e1e1;
  padding: ${({ theme }) => theme.spacing(0, 0.5)};
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  line-break: anywhere;
`

const OrderedList = styled.ol`
  padding-inline-start: 32px;
`

const Link = styled.a`
  color: ${({ theme }) => theme.colors.common.black};
  font-weight: 500;
`

const Image = styled(GatsbyImage)`
  margin: ${({ theme }) => theme.spacing(1, 0)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  overflow: hidden;
`

const IFrame = styled.iframe`
  margin-top: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.up('xs')} {
    height: 240px;
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    height: 320px;
  }
`

interface Props {
  rawMarkdownBody: string
  imagesByName: Record<string, IGatsbyImageData>
}

export function MarkdownSection({ rawMarkdownBody, imagesByName }: Props) {
  const renderImg: Components['img'] = function (props) {
    const alt = props.alt ?? 'Unknown image'
    if (props.src?.includes('http')) {
      return <img src={props.src} alt={alt} />
    } else {
      return <Image image={imagesByName[props.src!]} alt={alt} />
    }
  }

  const renderA: Components['a'] = function (props) {
    const youtubeEmbedUrl = getYouTubeEmbedUrl(props.href ?? '')
    if (youtubeEmbedUrl != null) {
      return (
        <IFrame
          src={youtubeEmbedUrl}
          width="100%"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )
    }
    return <Link target="_blank" rel="noopener noreferrer" {...props} />
  }

  return (
    <Container>
      <ContentWrapper>
        <MarkdownWrapper>
          <Markdown
            components={{
              h2: (props) => <H2 {...props} />,
              p: (props) => <Paragraph {...props} />,
              ol: (props) => <OrderedList {...props} />,
              code: (props) => <Code {...props} />,
              img: renderImg,
              a: renderA,
            }}
          >
            {rawMarkdownBody}
          </Markdown>
        </MarkdownWrapper>
      </ContentWrapper>
    </Container>
  )
}

function getYouTubeEmbedUrl(urlString: string) {
  if (!urlString.match(/youtube.com/)) return null

  const url = new URL(urlString)

  let videoId = url.searchParams.get('v')
  if (videoId == null) {
    if (!urlString.match(/youtu.be/)) return null
    videoId = url.pathname
  }

  return `https://youtube.com/embed/${videoId}`
}
