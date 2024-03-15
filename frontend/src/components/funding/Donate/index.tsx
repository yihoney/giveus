import * as d from '@/components/funding/Donate/Donate.styled'
import AmountSection from './AmountSection'
import PaymentSection from './PaymentSection'
import AnonymousSection from './AnonymousSection'
import FinalAmountSection from './FinalAmountSection'
import { useState } from 'react'

const Index = () => {
  const [amount, setAmount] = useState(0)
  const [point, setPoint] = useState(0)
  const [payment, setPayment] = useState<'toss' | 'kakao'>('toss')
  const [isPublic, setIsPublic] = useState(false)

  return (
    <d.Container>
      <AmountSection
        amount={amount}
        setAmount={setAmount}
        point={point}
        setPoint={setPoint}
      />
      <PaymentSection payment={payment} setPayment={setPayment} />
      <AnonymousSection isPublic={isPublic} setIsPublic={setIsPublic} />
      <FinalAmountSection />
    </d.Container>
  )
}

export default Index
