import {Heading} from "@chakra-ui/react";
import Section from "../components/section";

export default function B01() {
    return (
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Soal Test
            </Heading>
            <ol style={{ marginLeft: "2rem" }}>
                <li style={{ marginBottom: '1rem' }}> Buatlah Form dengan inputan sebagai berikut :
                    <ul>
                        <li>
                            username ( text maksimal 16 character )
                        </li>
                        <li>
                            password ( number maksmial 8 character )
                        </li>
                        <li>
                            e-mail (text format email )
                        </li>
                        <li>
                            phone ( number maksimal 16 character )
                        </li>
                        <li>
                            address ( text )
                        </li>
                    </ul>
                </li>
                <li style={{ marginBottom: '1rem' }}>
                    Buat Tabel dalam halaman lain yang berisi list data form yang sudah pernah di input user dengan header ( USERNAME, EMAIL, PHONE )
                </li>
                <li style={{ marginBottom: '1rem' }}>
                    Buat tampilan detail untuk setiap data tabel tersebut
                </li>
                <li style={{ marginBottom: '1rem' }}>
                    Silahkan uploaddi github maksimal hari ini jam 17.00 dan share link nya kepada saya mbetter28@gmail.com.
                </li>
            </ol>
            {/* </Paragraph> */}

        </Section>
    )
}
