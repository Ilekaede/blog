import Container from "components/container";
import Hero from "../../components/hero";
import Meta from "components/meta";
export default function Home() {
  return (
    <>
      <Container>
        <Meta />
        <Hero title={"SAJI"} subtitle={"アウトプットしていくサイト"} imageOn />
      </Container>
    </>
  );
}
