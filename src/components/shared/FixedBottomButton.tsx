import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import { createPortal } from 'react-dom'
import { colors } from '@/styles/colorPalette'

import Button from '@shared/Button'
import { easeInOut, motion } from 'framer-motion'

interface FixedBottomButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
}

function FixedBottomButton({
  label,
  onClick,
  disabled,
}: FixedBottomButtonProps) {
  const $portalRoot = document.getElementById('root-portal')

  if ($portalRoot == null) {
    return null
  }

  return createPortal(
    <Container>
      <motion.div
        initial={{
          opacity: 1.5,
          translateY: 100,
          backgroundColor: undefined,
        }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
      >
        <Button
          size="medium"
          disabled={disabled}
          full={true}
          onClick={onClick}
          css={buttonStyles}
        >
          {label}
        </Button>
      </motion.div>
    </Container>,
    $portalRoot,
  )
}

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.white};
  padding: 10px 10px 8px;
`

const buttonStyles = css`
  border-radius: 8px;
`

export default FixedBottomButton
