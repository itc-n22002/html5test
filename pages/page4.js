import Meta from 'components/meta'
import Container from 'components/container'
import Styles from 'styles/page4.module.css'
import Link from 'next/link'
export default function page4() {
    return (
        <Container>
            <Meta 
            pageTitle="HTML+CSS"
            />
        <ul className={Styles.nav}>
           <li><Link href="/">TOP</Link></li>
           <li><Link href="/">ABOUT</Link></li>
           <li><Link href="/">NEWS</Link></li>
           <li><Link href="/">LINK</Link></li>
</ul>
</Container>
    )
}
