import styled from 'styled-components'
import { ArrowRightIcon } from './icons/PropIcons'
import { colors } from '@/styles/palette'

const SIZE_STYLES = {
  lg: {
    width: '18rem',  // 180px
    height: '18rem',  // 180px
    babyWidth: '11.7rem',  // 117px
    babyHeight: '11.7rem',  // 117px
    vectorWidth: '11.7rem',  // 117px
    vectorHeight: '11.7rem',  // 117px
  },
  md: {
    width: '10rem',  // 100px
    height: '10rem',  // 100px
    babyWidth: '8rem',  // 80px
    babyHeight: '8rem',  // 80px
    vectorWidth: '6.5rem',  // 65px
    vectorHeight: '6.5rem',  // 65px
  },
  sm: {
    width: '5.6rem',  // 56px
    height: '5.6rem',  // 56px
    babyWidth: '4.48rem',  // 44.8px
    babyHeight: '4.48rem',  // 44.8px
    vectorWidth: '3.64rem',  // 36.4px
    vectorHeight: '3.64rem',  // 36.4px
  }
}

export const ProfileImage = ({ size = 'lg', withArrow = false }) => {
  const { 
    width, 
    height, 
    babyWidth, 
    babyHeight, 
    vectorWidth, 
    vectorHeight 
  } = SIZE_STYLES[size]

  return (
    <OuterContainer width={width} height={height}>
      <InnerContainer width={width} height={height}>
        <BabyContainer width={babyWidth} height={babyHeight}>
          <ProfileText>infant</ProfileText>
        </BabyContainer>
        <VectorContainer width={vectorWidth} height={vectorHeight} />
        {withArrow && <ArrowRightIcon size={size} />}
      </InnerContainer>
    </OuterContainer>
  )
}

const OuterContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: absolute;
  border-radius: 50%;
  background-color: ${colors.grey[100]};  /* #FBFBFB */
  display: flex;
  justify-content: center;
  align-items: center;
`

const InnerContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: absolute;
  top: 0;
  left: 0;
  background: ${colors.grey[100]};  /* #FBFBFB */
  border-radius: 50%;
  border: 0.1rem solid ${colors.grey[300]};  /* #E2E2E2 */
  display: flex;
  justify-content: center;
  align-items: center;
`

const BabyContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: absolute;
  top: 0;
  left: 0;
  background: ${colors.grey[100]};  /* #FBFBFB */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const VectorContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${colors.blue[500]};  /* #6DB0F4 */
  border-radius: 50%;
`

const ProfileText = styled.div`
  font-family: 'Arial', sans-serif;
  font-weight: regular;
  font-size: 1.4rem;
  text-align: center;
  color: ${colors.blue[700]};  /* #386AB6 */
  border: 0.1rem solid ${colors.blue[700]};  /* #386AB6 */
  padding: 0.5rem;
  border-radius: 50%;
`
