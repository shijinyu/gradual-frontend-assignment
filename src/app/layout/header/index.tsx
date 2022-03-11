import { Avatar, chakra, HStack } from '@chakra-ui/react'
import { FC } from 'react'

import logo from './components/logo.png'
import { Breadcrumb } from './components/breadcrumb'
import { Operating } from './components/operating'

const StyledAppHeader = chakra('header', {
  baseStyle: {
    position: 'sticky',
    zIndex: 3,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'background',
    height: '60px',
    width: 'full',
  },
})

export const AppHeader: FC = () => {
  return (
    <StyledAppHeader>
      <HStack
        align="center"
        height="100%"
        width="100%"
        paddingInlineStart="6"
        paddingInlineEnd="6"
        justifyContent="space-between"
      >
        <HStack minWidth="50%">
          <Avatar src={logo} rounded="full" width="8" height="8" mr="3" />
          <Breadcrumb />
        </HStack>
        <Operating />
      </HStack>
    </StyledAppHeader>
  )
}
