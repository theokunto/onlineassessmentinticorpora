import { Container } from "@chakra-ui/react";
import { useState } from "react";
import Layout from "../components/layouts/assessment";
import A01 from "./assesments/A-01";
const Page = () => {
    return (
        <Layout>
            <Container>
                <A01/>
            </Container>
        </Layout>
    )
};

export default Page;
