import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Home from "../components/Homepage";

export default function Index() {

    const data = useDocusaurusContext();
    console.log(data);

    return (
        <Home />
    )
}