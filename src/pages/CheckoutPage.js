import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
const CheckoutPage = () => {
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper>
        <div className='page section-center'>
          <h1>checkout here</h1>
        </div>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div``
export default CheckoutPage
