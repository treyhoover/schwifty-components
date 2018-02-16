import React from "react";
import { ThemeProvider } from "styled-components";
import { Text, Image, Button, Input, Card, Group, Page, List } from "./lib";
import * as theme from "./theme";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Page bodyClass="ph4 pt2 pb5 sans-serif">
          <Text as="h1" f1>Schwifty Components</Text>

          <Text as="h2">Groups</Text>
          <Group>
            <Text as="p">
              Groups are just generic, styleable components - often used for, well, grouping things.
            </Text>

            <Text as="p">By default, they are simply unstyled divs.</Text>
          </Group>

          <Text as="h3">Group Skins</Text>
          <Group.Default mb2 pa3 tc>Default</Group.Default>
          <Group.Primary mb2 pa3 tc>Primary</Group.Primary>
          <Group.Secondary mb2 pa3 tc>Secondary</Group.Secondary>
          <Group.Default.Ghost mb2 pa3 tc>Default Ghost</Group.Default.Ghost>
          <Group.Primary.Ghost mb2 pa3 tc>Primary Ghost</Group.Primary.Ghost>
          <Group.Secondary.Ghost mb2 pa3 tc>Secondary Ghost</Group.Secondary.Ghost>

          <Text as="h3">Loading Groups</Text>
          <Group bg-black white loading f3 mb2 pa4 tc />
          <Group bg-black-90 white loading f3 mb2 pa4 tc />
          <Group bg-black-80 white loading f3 mb2 pa4 tc />
          <Group bg-black-70 white loading f3 mb2 pa4 tc />
          <Group bg-black-60 white loading f3 mb2 pa4 tc />
          <Group bg-black-50 white loading f3 mb2 pa4 tc />
          <Group bg-black-40 white loading f3 mb2 pa4 tc />
          <Group bg-black-30 white loading f3 mb2 pa4 tc />

          <Text as="h2">Buttons</Text>
          <Group mv2 flex items-end flex-wrap>
            <Button.Default f7 mb2 mr2>Extra Extra Small</Button.Default>
            <Button.Default f6 mb2 mr2>Extra Small</Button.Default>
            <Button.Default f5 mb2 mr2>Small</Button.Default>
            <Button.Default f4 mb2 mr2>Medium (default)</Button.Default>
            <Button.Default f3 mb2 mr2>Large</Button.Default>
            <Button.Default f2 mb2 mr2>Extra Large</Button.Default>
            <Button.Default f1 mb2 mr2>Extra Extra Large</Button.Default>
          </Group>

          <Group>
            <Button.Primary
              as="a"
              href="http://www.google.com"
              no-underline
              dib
              mb2
              mr2
            >
              Link
            </Button.Primary>

            <Button.Default db w-100 mb2>
              Block
            </Button.Default>

            <Button.Default w5>
              Fixed width
            </Button.Default>
          </Group>

          <Text as="h3">Everything's responsive</Text>
          <Group>
            <Button.Default mr2-ns mb2 w-100 db w-auto-ns dib-ns>
              Watch
            </Button.Default>

            <Button.Default mr2-ns mb2 w-100 db w-auto-ns dib-ns>
              Us
            </Button.Default>

            <Button.Default mr2-ns mb2 w-100 db w-auto-ns dib-ns>
              Stack
            </Button.Default>
          </Group>

          <Text as="h3">Disabled</Text>
          <Group>
            <Button.Default mr2 disabled>Disabled</Button.Default>
            <Button.Default f4 mr2 disabled>Disabled</Button.Default>
            <Button.Default f3 disabled>Disabled</Button.Default>
          </Group>

          <Text as="h3">Loading</Text>
          <Group>
            <Button.Default mr2 loading>Loading</Button.Default>
            <Button.Default f4 mr2 loading>Loading</Button.Default>
            <Button.Default f3 loading>Loading</Button.Default>
          </Group>

          <Text as="h3">With Skins</Text>
          <Group mv2>
            <Button.Default mr2 mb2>Default</Button.Default>
            <Button.Primary mr2 mb2>Primary</Button.Primary>
            <Button.Secondary mr2 mb2>Secondary</Button.Secondary>
            <Button.Default.Ghost mr2 mb2>Default Ghost</Button.Default.Ghost>
            <Button.Primary.Ghost mr2 mb2>Primary Ghost</Button.Primary.Ghost>
            <Button.Secondary.Ghost mr2 mb2>Secondary Ghost</Button.Secondary.Ghost>
          </Group>

          <Text as="h3">Circular</Text>
          <Group mv2 flex flex-wrap items-end>
            <Button.Default f7 mb2 mr2-ns circular>★</Button.Default>
            <Button.Secondary f5 mb2 mr2-ns circular>★</Button.Secondary>
            <Button.Primary f4 mb2 circular>★</Button.Primary>
          </Group>

          <Text as="h2">Inputs</Text>
          <Group flex flex-wrap items-end>
            <Input f7 mr2 mb2 placeholder="Extra extra Small" />
            <Input f6 mr2 mb2 placeholder="Extra Small" />
            <Input f5 mr2 mb2 placeholder="Small" />
            <Input f4 mr2 mb2 placeholder="Medium" />
            <Input f3 mr2 mb2 placeholder="Large" />
            <Input f2 mr2 mb2 placeholder="Extra Large" />
            <Input f1 mr2 mb2 placeholder="Extra Extra Large" />
          </Group>

          <Text as="h2">Input Colors</Text>
          <Input bg-washed-red dark-red defaultValue="Invalid Input" mr2 mb2 />
          <Input bg-washed-green dark-green defaultValue="Valid Input" />

          <Text as="h3">Input Groups</Text>
          <Group flex w5 mb2>
            <Input flex-auto br--left placeholder="Search" />
            <Button.Primary br--right>Go</Button.Primary>
          </Group>

          <Group flex w5 mb2>
            <Group.Secondary ph3 pv2 br2 br--left>$</Group.Secondary>
            <Input flex-auto br--right defaultValue="1.00" />
          </Group>

          <Text as="h2">Cards</Text>

          <Group flex flex-wrap>
            <Card pa3 mr4>
              <Image db br-100 w-100 mb3 src="http://via.placeholder.com/150x150" />
              <Text db b f3>Cards!</Text>
            </Card>

            <Card>
              <Image db w-100 mb3 src="http://via.placeholder.com/200x200" />
              <Text db b f3 mb2>Cards!</Text>
            </Card>
          </Group>

          <Text as="h2">Lists</Text>
          <List pa0>
            <List.Item>This</List.Item>
            <List.Item>is</List.Item>
            <List.Item>a</List.Item>
            <List.Item>list</List.Item>
          </List>

          <Text as="h3">Horizontal Lists</Text>
          <List pa0>
            <List.Item dib mr1>This</List.Item>
            <List.Item dib mr1>is</List.Item>
            <List.Item dib mr1>a</List.Item>
            <List.Item dib mr1>list</List.Item>
          </List>

        </Page>
      </ThemeProvider>
    );
  }
}

export default App;
