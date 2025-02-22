import Layout from "@theme/Layout";
import { GetImg } from "../lib/constants";
import { Button } from "../components/ui/button";

export default function ResumePage() {
    return (
        <Layout>
            <Button className="ml-16 mr-16 mt-12" asChild>
                <a href="/img/ShaneBuckley_Resume.pdf" download>Download Resume</a>
            </Button>
            <div className="container mx-auto p-16">
                <img className="mx-auto" src={GetImg('img/resume.jpg')}></img>
            </div>
        </Layout>
    )
}