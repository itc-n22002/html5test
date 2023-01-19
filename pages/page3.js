import Meta from 'components/meta'
import Container from 'components/container'
import Styles from 'styles/page3.module.css'
import Link from 'next/link'
export default function page3() {
    return (
        <Container>
        <Meta
        pageTitle="HTML+CSS"
        />
        <ul className={Styles.pop_btn}>
    <li>
        <Link href="#">Home</Link>
    </li>
    <li>
        <Link href="#">About</Link>
    </li>
    <li>
        <Link href="#">Topics</Link>
    </li>
    <li>
        <Link href="#">Link</Link>
    </li>
</ul>
    </Container>
    )
}
