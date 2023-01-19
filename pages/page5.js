import Meta from 'components/meta'
import Container from 'components/container'
import Styles from 'styles/page5.module.css'

export default function page5() {
    return (
        <Container>
        <h1 className={Styles.h1}>Menu</h1>
        <ul className={Styles.nav}>
            <li>
                <h2>Food</h2>
                <ul className={Styles.menu}>
                    <li>Pasta</li>
                    <li>Pizza</li>
                </ul>
            </li>
            <li>
                <h2>Drink</h2>
                <ul className={Styles.menu}>
                    <li>Coffee</li>
                    <li>Espresso</li>
                    <li>Cafe Latte</li>
                </ul>
            </li>
            <li>
                <h2>Sweets</h2>
                <ul className={Styles.menu}>
                    <li>Cake</li>
                    <li>Muffin</li>
                    <li>Chocolate</li>
                </ul>
            </li>
        </ul> 
        </Container>
    )
}