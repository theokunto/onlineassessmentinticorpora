import {Container, Heading} from "@chakra-ui/react";
import Section from "./section";
import {useEffect, useState} from "react";

const Rules = () => {
    const [pathName, usePathName] = useState("/")
    useEffect(
        () => {
            if (window.location.pathname) {
                usePathName(window.location.pathname)
            }
        }, []
    )
    return pathName.includes("angular") ? (
        <Section>
            <Container>
                <Heading as="h3" variant="section-title">
                    Peraturan
                </Heading>
                <ol style={{marginLeft: '2rem'}}>
                    <li style={{marginBottom: '1rem'}}>Selama " Live Coding Test " dimohon untuk menyalakan kamera dalam
                        Microsoft Teams atau Google Meet dll
                    </li>
                    <li style={{marginBottom: '1rem'}}>Selama " Live Coding Test " dimohon untuk "share full screen"
                        dalam Microsoft Teams atau Google Meet dll
                    </li>
                    <li style={{marginBottom: '1rem'}}>Gunakan Angular 16 / 17 </li>
                    <li style={{marginBottom: '1rem'}}>Dibebaskan untuk menggunakan Framework CSS apapun, ex: Tailwind, Bootstrap
                    </li>
                    <li style={{marginBottom: '1rem'}}>Diperbolehkan membaca dokumen.</li>
                    <li style={{marginBottom: '1rem'}}>Waktu pengerjaan anda 1 jam.</li>
                </ol>
            </Container>
        </Section>
    ) : (
        <Section>
            <Container>
                <Heading as="h3" variant="section-title">
                    Peraturan
                </Heading>
                <ol style={{marginLeft: '2rem'}}>
                    <li style={{marginBottom: '1rem'}}>Selama " Live Coding Test " dimohon untuk menyalakan kamera dalam
                        Microsoft Teams atau Google Meet dll
                    </li>
                    <li style={{marginBottom: '1rem'}}>Selama " Live Coding Test " dimohon untuk "share full screen"
                        dalam Microsoft Teams atau Google Meet dll
                    </li>
                    <li style={{marginBottom: '1rem'}}>Gunakan ReactJs</li>
                    <li style={{marginBottom: '1rem'}}>Dibebaskan untuk menggunakan Framework CSS apapun, ex: Bootstrap,
                        Material UI , ANT Design
                    </li>
                    <li style={{marginBottom: '1rem'}}>Diperbolehkan membaca dokumen dokumen pada internet.</li>
                    <li style={{marginBottom: '1rem'}}>Waktu pengerjaan anda 45 menit.</li>
                </ol>
            </Container>
        </Section>
    )
}

export default Rules;