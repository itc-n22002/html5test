import Meta from 'components/meta'
import Container from 'components/container'
import Styles from 'styles/page1.module.css'
import Pp from 'components/page1c.js'

export default function page1() {
    return (
        <Container>
            <Meta
                pageTitle="HTML+CSS"
            />
            <div className={Styles.box}>
                <h1>Prep Times</h1>
                <h2>Headline</h2>
                <h3>Article 1</h3>
                <Pp />
                <h3>Article 2</h3>
                <Pp />
            </div>
        </Container>
    )
}