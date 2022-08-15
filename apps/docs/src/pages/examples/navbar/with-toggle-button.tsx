import {Examples} from "@components";
import {Navbar, Text, Button, Link} from "@nextui-org/react";

export default function NavbarWithToggleButtonExample() {
  const collapseItems = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "TV & Home",
    "Music",
    "Support",
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "TV & Home",
    "Music",
    "Support",
  ];

  return (
    <Examples.NavbarLayout>
      <Navbar isBordered variant="sticky">
        <Navbar.Content>
          <Navbar.Toggle aria-label="toggle navigation" />
          <Navbar.Brand>
            <Examples.AcmeLogo />
            <Text b color="inherit" hideIn="xs">
              ACME
            </Text>
          </Navbar.Brand>
        </Navbar.Content>
        <Navbar.Content
          enableCursorHighlight
          isCursorHighlightRounded
          hideIn="sm"
          variant="underline"
        >
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">
            Customers
          </Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={`${item}-${index}`}>{item}</Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Examples.NavbarLayout>
  );
}
