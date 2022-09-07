import styled from '@emotion/styled'
import { ContainedButton } from './Buttons'

export const SectionContainer = styled.section`
  display: flex;
  min-height: 70vh;
  position: relative;
`

export const SectionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 1080px;
  margin: ${({ theme }) => theme.spacing(6, 'auto')};
  padding: ${({ theme }) => theme.spacing(0, 3)};

  ${({ theme }) => theme.breakpoints.up('xs')} {
    margin: ${({ theme }) => theme.spacing(8, 'auto')};
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: ${({ theme }) => theme.spacing(0, 5)};
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin: ${({ theme }) => theme.spacing(10, 'auto')};
  }
`

export const SectionTextWrapper = styled.div`
  margin-top: auto;

  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 640px;
  }
`

export const SectionCtaButtonsWrapper = styled.div`
  display: grid;
  row-gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(4)};

  ${({ theme }) => theme.breakpoints.up('md')} {
    grid-auto-flow: column;
    column-gap: ${({ theme }) => theme.spacing(2)};
  }
`

export const SectionCtaButton = styled(ContainedButton)`
  margin-top: ${({ theme }) => theme.spacing(4)};
`
