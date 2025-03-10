"use client";

import { Burger, Button, Group, NavLink, Popover } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "@/styles/header.module.css";
import Logo from "@/components/Logo";
import Link from "next/link";
import { useState } from "react";

const links = [
  { link: "/home", label: "Home" },
  { link: "#contact-us", label: "Contact Us" },
];

const Header = () => {
  const [opened, { toggle, open, close }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Logo />
        <Group
          grow
          preventGrowOverflow
          wrap="nowrap"
          visibleFrom="xs"
          className={classes.links}
        >
          {links.map(({ link, label }, index) => {
            return (
              <NavLink
                key={label}
                active={index === active}
                component={Link}
                color="gray"
                href={link}
                label={label}
                className={classes.link}
                onClick={() => setActive(index)}
              />
            );
          })}
          <Button
            size="sm"
            variant="outline"
            component="a"
            href="#contact-us"
            fullWidth
          >
            Get Started
          </Button>
        </Group>

        <Popover
          width={200}
          position="bottom"
          withArrow
          shadow="md"
          opened={opened}
          onChange={(o) => {
            if (o) {
              open();
            } else {
              close();
            }
          }}
        >
          <Popover.Target>
            <Burger
              opened={opened}
              aria-label="Toggle Menu"
              onClick={toggle}
              hiddenFrom="xs"
              size="sm"
              color="mint-green"
            />
          </Popover.Target>
          <Popover.Dropdown>
            {links.map(({ link, label }, index) => {
              return (
                <NavLink
                  key={label}
                  active={index === active}
                  component={Link}
                  href={link}
                  label={label}
                  onClick={() => setActive(index)}
                />
              );
            })}
          </Popover.Dropdown>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
