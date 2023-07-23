import React from "react";
import Header from "./components/ui/HeaderComponents/Header/Header";
import PageLayout from "./components/layout/PageLayout";
import Main from "./components/ui/MainComponents/Main/Main";
import Footer from "./components/ui/FooterComponent/Footer";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <PageLayout>
                <Main />
            </PageLayout>
            <Footer />
        </>
    );
};

export default App;
