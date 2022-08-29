import { ChakraProvider } from '@chakra-ui/provider';
import {ToastProvider} from '@chakra-ui/toast';
import { AnimatePresence } from 'framer-motion';
import Fonts from '../components/fonts';
import theme from '../libs/theme';
import Layout from '../components/layouts/main'
const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence mode='wait' initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
                <ToastProvider/>
            </Layout>
        </ChakraProvider>
    )
};

export default Website;
