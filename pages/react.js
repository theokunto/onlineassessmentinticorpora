import {Heading, List, ListItem, Button, useToast, Container} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import {Meta} from "../components/meta.js";
import {MdPlayArrow} from "react-icons/md"
import {useEffect, useState} from "react";
import axios from "axios";
import Layout from "../components/layouts/assessment";

const URLTEST = 'https://my-json-server.typicode.com/theokunto/testjson/db'
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
                        <li style={{marginBottom: '1rem'}}> Buat tabel dari data object accountList dengan header <strong>Branch
                            Number</strong>,<strong> Account No</strong>,<strong> Account Name </strong>, <strong>Account Type</strong>,<strong> Action </strong>.
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            Data tabel diambil dari <code>cifAccountInquiryResponse.payload.customerAccount.accountList</code> dengan ketentuan mapping kolom sebagai berikut:
                            <ul>
                                <li>
                                    <strong>Number</strong> Nomor urut baris data (dimulai dari 1).
                                </li>
                                <li>
                                    <strong>Account No</strong> Diambil dari field <code>accountNumber</code>.
                                </li>
                                <li>
                                    <strong>Account Name</strong> Diambil dari field <code>shortName</code>.
                                </li>
                                <li>
                                    <strong>Account Type</strong> Diambil dari field <code>accountType</code>.
                                </li>
                                <li>
                                    <strong>Action</strong> Berisi tombol aksi yang akan dijelaskan pada poin berikutnya.
                                </li>
                            </ul>
                        </li>
                        <li style={{marginBottom: '1rem'}}> Ubah Account Type dalam Tabel sesuai kondisi berikut :
                            <ul>
                                <li>
                                    Label tipe account D adalah <strong>Deposito</strong>.
                                </li>
                                <li>
                                    Label tipe account C adalah <strong>Giro</strong>.
                                </li>
                                <li>
                                    Label tipe account selain D dan C adalah <strong>Debit</strong>.
                                </li>
                            </ul>
                        </li>
                        <li style={{marginBottom: '1rem'}}> Buat aksi dalam Tabel sesuai kondisi berikut :
                            <ul>
                                <li>
                                    Aksi pada tipe account D berisi tombol Hapus.
                                </li>
                                <li>
                                    Aksi pada tipe account C berisi tombol Ubah dan Hapus.
                                </li>
                                <li>
                                    Aksi pada tipe account selain D dan C tidak berisi tombol apapun.
                                </li>
                            </ul>
                        </li>
                        <li style={{marginBottom: '1rem'}}> Ketentuan fungsi pada setiap tombol pada kolom Aksi adalah sebagai berikut: :
                            <ul>
                                <li>
                                    Fungsi Tombol Hapus adalah menghapus 1 record data yang dipilih pada tabel tersebut.
                                </li>
                                <li>
                                    Fungsi Tombol Ubah adalah sebagai akses user untuk menghubah data pada 1 record yang terpilih pada tabel tersebut.
                                </li>
                            </ul>
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            Buatlah halaman detail account yang dapat diakses dengan cara klik salah satu data pada baris pada tabel.
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            Buatlah halaman edit account yang dapat diakses dengan cara klik tombol Ubah aksi pada tabel.
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            Buatlah fitur search bar untuk menampilkan data pada tabel berdasarkan kata kunci yang dimasukkan.
                        </li>
                        <li>
                            Implementasikan fungsi ubah dan hapus tanpa menggunakan API, gunakan state sebagai penyimpanan data.
                        </li>
                    </ol>
                    {/* </Paragraph> */}

                </Section>
            </Container>
        </Layout>
    )
}
export default Page;