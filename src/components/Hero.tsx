import { Button, Container, Text, Title } from "@mantine/core";
import classes from "@/styles/hero.module.css";

const Hero = () => {
  return (
    <Container fluid className={classes.wrapper}>
      <Container size="sm" className={classes.inner}>
        <Title className={classes.title}>
          <Text component="p" inherit className={classes.highlight}>
            trust
          </Text>
          <Text component="p" inherit className={classes.highlight}>
            service
          </Text>
          <Text component="p" inherit className={classes.highlight}>
            craftsmanship
          </Text>
        </Title>

        <Container fluid pl={0}>
          <Text size="lg" className={classes.description}>
            We are committed to helping our clients solve their business’
            biggest problems both quickly and efficiently, without sacrificing
            quality
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            component="a"
            href="#contact-us"
            size="lg"
            variant="outline"
          >
            Contact Us
          </Button>
        </div>
      </Container>
    </Container>
  );
};

export default Hero;
