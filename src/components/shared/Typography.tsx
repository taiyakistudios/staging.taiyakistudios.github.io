import styled from '@emotion/styled'

export const H1 = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.03em;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 3rem;
  }
`

export const H2 = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.03em;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 2.5rem;
  }
`

export const H3 = styled.h3`
  margin: 0;
  font-size: 2rem;
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 2.25rem;
  }
`

export const H4 = styled.h4`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 1.75rem;
  }
`

export const H5 = styled.h5`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 1.25rem;
  }
`

export const H6 = styled.h6`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 1.75rem;
  }
`

export const Tagline = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin-top: ${({ theme }) => theme.spacing(3)};
  margin-bottom: 0;
  line-height: 1.6;

  ${({ theme }) => theme.breakpoints.up('xs')} {
    font-size: 1.25rem;
  }
`

export const Overline = styled.span`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => theme.breakpoints.up('xs')} {
    font-size: 1.25rem;
  }
`
