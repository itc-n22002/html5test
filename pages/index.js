import Meta from 'components/meta'
import Container from 'components/container'
import Link from "next/link"

export default function Home() {
  return (
  <Container>
    <Meta 
    pageTitle="HTML+CSS"
    />
    <ul>
      <li><Link href="page1">page1</Link></li>
      <li><Link href="page2">page2</Link></li>
      <li><Link href="page3">page3</Link></li>
      <li><Link href="page4">page4</Link></li>
      <li><Link href="page5">page5</Link></li>
    </ul>
  </Container>
  )
}
