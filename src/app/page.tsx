import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Container, Space } from "@mantine/core";

const Home = () => {
  return (
    <Container fluid>
      <Header />
      <Hero />
      <Space h="md" />
      <Services />
      <Space h="md" />
      <Contact />
      <Space h="xl" />
    </Container>
  );
};

export default Home;
