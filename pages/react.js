import {Heading, List, ListItem, Button, useToast, Container} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import {Meta} from "../components/meta.js";
import {MdPlayArrow} from "react-icons/md"
import {useEffect, useState} from "react";
import axios from "axios";
import Layout from "../components/layouts/assessment";

const URLTEST = 'https://my-json-server.typicode.com/arif2fast/testRest/cifAccount'
const Page = () => {
    const [isOnline, setIsOnline] = useState();
    const toast = useToast();
    useEffect(() => {
        testApi()
    }, []);

    function testApi() {
        axios.get(URLTEST)
            .then((res) => {
                console.log(res)
                if (res.status === 200) {
                    setIsOnline(true)
                    toast({
                        title: "URL Tested",
                        description: "The URL is Online, go ahead !",
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                    })
                } else {
                    toast({
                        title: "URL Tested",
                        description: "The URL is Offline, please stanby !",
                        status: "error",
                        duration: 2000,
                        isClosable: true,
                    })
                    setIsOnline(false)
                }
            }).catch(() => setIsOnline(false))
    }

    async function copyClipBoard() {
        await navigator.clipboard.writeText(URLTEST);
        toast({
            title: "URL Copied",
            description: "We've copied the URL for you.",
            status: "success",
            duration: 2000,
            isClosable: true,
        })
    }
    return (
        <Layout>
            <Container>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Soal Test
                    </Heading>
                    <List mb={4}>
                        <ListItem>
                            <Meta>API</Meta>
                            <Button colorScheme="green" variant="solid" size={"xs"} onClick={() => {
                                copyClipBoard()
                            }} mr="2">Copy</Button>
                            <Button leftIcon={<MdPlayArrow/>} colorScheme="orange" variant="outline" size={"xs"}
                                    onClick={() => {
                                        testApi()

                                    }}>Test</Button>
                            {isOnline !== undefined ? isOnline ?
                                <span style={{color: 'green', marginLeft: '0.5rem'}}>online</span> :
                                <span style={{color: 'red', marginLeft: '0.5rem'}}>offline</span> : <></>}
                            <Paragraph>{URLTEST}</Paragraph>
                        </ListItem>
                    </List>
                    {/* <Paragraph> */}
                    <List mb={1}>
                        <ListItem>
                            <Meta colorScheme={"blue"}>SOAL</Meta>
                        </ListItem>
                    </List>
                    <ol style={{marginLeft: "2rem"}}>
                        <li style={{marginBottom: '1rem'}}> Buat tabel dari data object accountList dengan header Branch
                            Number, Account No, Account Name, Action.
                        </li>
                        <li style={{marginBottom: '1rem'}}> Buat aksi dalam Tabel sesuai kondisi berikut :
                            <ul>
                                <li>
                                    Tipe account D ada tombol Hapus dan fungsi nya.
                                </li>
                                <li>
                                    Tipe account C ada tombol Ubah dan Hapus serta fungsi - fungsi nya.
                                </li>
                                <li>
                                    Tipe account selain D dan C tidak ada tombol apapun.
                                </li>
                            </ul>
                        </li>
                        <li style={{marginBottom: '1rem'}}>
                            Buatlah halaman detail account dan dapat di akses dengan cara klik baris tabel.
                        </li>
                        <li>
                            Buatlah Search Bar dan dapat menampilkan data yang di cari pada tabel.
                        </li>
                    </ol>
                    {/* </Paragraph> */}

                </Section>
            </Container>
        </Layout>
    )
}
export default Page;