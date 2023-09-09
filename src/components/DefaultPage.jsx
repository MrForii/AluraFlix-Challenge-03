import Footer from './Footer';
import Header from './Header'

const DefaultPage = (content) => {
    return (
        <>
            <Header />
            {content}
            <Footer />
        </>
    );
}

export default DefaultPage 