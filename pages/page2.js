import Meta from 'components/meta'
import Container from 'components/container'
import Styles from 'styles/page2.module.css'
import Pp from 'components/page2c.js'

export default function page2() {
    return (
        <Container>
        <Meta
        pageTitle="HTML+CSS"
        />
        <div className={Styles.header}>
            <h1>Sample Website</h1>
        </div> 
        <div className={Styles.main}>
            <h2>Heading</h2>
            <Pp />
            <h2>Heading 2</h2>
            <Pp />
        </div>
        <div className={Styles.footer}>
            <p>Copyright (c) 2013 xxxxxxxx. All rights reserved.</p>
        </div> 
    </Container>
    )
}