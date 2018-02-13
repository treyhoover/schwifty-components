import React from "react";
import { ThemeProvider } from "styled-components";
import { Text, Image, Button, Input, Card, Group, Page, List, ArrowBox } from "./lib";
import * as theme from "./theme";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Page bodyClass="ph4 pt2 pb5 sans-serif">
          <Text as="h1" f1>Schwifty Components</Text>

          <Text as="h2">Groups</Text>
          <Group pa4 mb2 ghost skin="black">
            <Text as="p">
              Groups are just generic, styleable components - often used for, well, grouping things.
            </Text>

            <Text as="p">By default, they are simply unstyled divs.</Text>
          </Group>

          <Text as="h3">Group Skins</Text>
          <Group skin="gray" mb2 pa3 tc>Gray</Group>
          <Group skin="red" mb2 pa3 tc>Red</Group>
          <Group skin="orange" mb2 pa3 tc>Orange</Group>
          <Group skin="yellow" mb2 pa3 tc>Yellow</Group>
          <Group skin="green" mb2 pa3 tc>Green</Group>
          <Group skin="blue" mb2 pa3 tc>Blue</Group>
          <Group skin="black" mb2 pa3 tc>Black</Group>

          <Text as="h3">Inverted Group Skins</Text>
          <Group inverted skin="gray" mb2 pa3 tc>Inverted Gray</Group>
          <Group inverted skin="red" mb2 pa3 tc>Inverted Red</Group>
          <Group inverted skin="orange" mb2 pa3 tc>Inverted Orange</Group>
          <Group inverted skin="yellow" mb2 pa3 tc>Inverted Yellow</Group>
          <Group inverted skin="green" mb2 pa3 tc>Inverted Green</Group>
          <Group inverted skin="blue" mb2 pa3 tc>Inverted Blue</Group>
          <Group inverted skin="black" mb2 pa3 tc>Inverted Black</Group>

          <Text as="h3">Ghost Group Skins</Text>
          <Group ghost skin="gray" mb2 pa3 tc>Ghost Gray</Group>
          <Group ghost skin="red" mb2 pa3 tc>Ghost Red</Group>
          <Group ghost skin="orange" mb2 pa3 tc>Ghost Orange</Group>
          <Group ghost skin="yellow" mb2 pa3 tc>Ghost Yellow</Group>
          <Group ghost skin="green" mb2 pa3 tc>Ghost Green</Group>
          <Group ghost skin="blue" mb2 pa3 tc>Ghost Blue</Group>
          <Group ghost skin="black" mb2 pa3 tc>Ghost Black</Group>

          <Text as="h3">Inverted Ghost Group Skins</Text>
          <Group pa4 br2 skin="black">
            <Group inverted ghost skin="gray" mb2 pa3 tc>Inverted Ghost Gray</Group>
            <Group inverted ghost skin="red" mb2 pa3 tc>Inverted Ghost Red</Group>
            <Group inverted ghost skin="orange" mb2 pa3 tc>Inverted Ghost Orange</Group>
            <Group inverted ghost skin="yellow" mb2 pa3 tc>Inverted Ghost Yellow</Group>
            <Group inverted ghost skin="green" mb2 pa3 tc>Inverted Ghost Green</Group>
            <Group inverted ghost skin="blue" mb2 pa3 tc>Inverted Ghost Blue</Group>
            <Group inverted ghost skin="black" pa3 tc>Inverted Ghost Black</Group>
          </Group>

          <Text as="h3">Loading Groups</Text>
          <Group loading f3 skin="gray" mb2 pa3 tc>Gray</Group>
          <Group loading f3 inverted skin="gray" mb2 pa3 tc>Gray</Group>
          <Group loading f3 skin="red" mb2 pa3 tc>Red</Group>
          <Group loading f3 skin="orange" mb2 pa3 tc>Orange</Group>
          <Group loading f3 skin="yellow" mb2 pa3 tc>Yellow</Group>
          <Group loading f3 skin="green" mb2 pa3 tc>Green</Group>
          <Group loading f3 skin="blue" mb2 pa3 tc>Blue</Group>
          <Group loading f3 skin="black" mb2 pa3 tc>Black</Group>

          <Text as="h2">Buttons</Text>
          <Group mv2 flex items-end flex-wrap>
            <Button f7 mb2 mr2>Extra Extra Small</Button>
            <Button f6 mb2 mr2>Extra Small</Button>
            <Button f5 mb2 mr2>Small</Button>
            <Button f4 mb2 mr2>Medium (default)</Button>
            <Button f3 mb2 mr2>Large</Button>
            <Button f2 mb2 mr2>Extra Large</Button>
            <Button f1 mb2 mr2>Extra Extra Large</Button>
          </Group>

          <Group>
            <Button
              skin="blue"
              as="a"
              href="http://www.google.com"
              no-underline
              dib
              mb2
              mr2
            >
              Link
            </Button>

            <Button db w-100 mb2 skin="red">
              Block
            </Button>

            <Button w5 ghost>
              Fixed width
            </Button>
          </Group>

          <Text as="h3">Everything's responsive</Text>
          <Group>
            <Button mr2-ns mb2 w-100 db w-auto-ns dib-ns skin="red">
              Watch
            </Button>

            <Button mr2-ns mb2 w-100 db w-auto-ns dib-ns skin="green">
              Us
            </Button>

            <Button mr2-ns mb2 w-100 db w-auto-ns dib-ns skin="blue">
              Stack
            </Button>
          </Group>

          <Text as="h3">Disabled</Text>
          <Group>
            <Button mr2 disabled>Disabled</Button>
            <Button f4 mr2 skin="blue" disabled>Disabled</Button>
            <Button f3 skin="red" disabled>Disabled</Button>
          </Group>

          <Text as="h3">Loading</Text>
          <Group>
            <Button mr2 loading>Loading</Button>
            <Button f4 mr2 skin="blue" loading>Loading</Button>
            <Button f3 skin="red" loading>Loading</Button>
          </Group>

          <Text as="h3">With Skins</Text>
          <Group mv2>
            <Button skin="gray" mr2 mb2>Default</Button>
            <Button skin="red" mr2 mb2>Red</Button>
            <Button skin="orange" mr2 mb2>Orange</Button>
            <Button skin="yellow" mr2 mb2>Yellow</Button>
            <Button skin="green" mr2 mb2>Green</Button>
            <Button skin="blue" mr2 mb2>Blue</Button>
            <Button skin="black" mb2>Black</Button>
          </Group>

          <Text as="h3">Inverted</Text>
          <Group mv2>
            <Button inverted skin="gray" mr2-ns>Default</Button>
            <Button inverted skin="red" mr2-ns>Red</Button>
            <Button inverted skin="orange" mr2-ns>Orange</Button>
            <Button inverted skin="yellow" mr2-ns>Yellow</Button>
            <Button inverted skin="green" mr2-ns>Green</Button>
            <Button inverted skin="blue" mr2-ns>Blue</Button>
            <Button inverted skin="black" mr2-ns>Black</Button>
          </Group>

          <Text as="h3">Ghost</Text>
          <Group mv2 flex flex-wrap items-end>
            <Button ghost skin="gray" mr2-ns>Default</Button>
            <Button ghost skin="red" mr2-ns>Red</Button>
            <Button ghost skin="orange" mr2-ns>Orange</Button>
            <Button ghost skin="yellow" mr2-ns>Yellow</Button>
            <Button ghost skin="green" mr2-ns>Green</Button>
            <Button ghost skin="blue" mr2-ns>Blue</Button>
            <Button ghost skin="black" mr2-ns>Black</Button>
          </Group>

          <Text as="h3">Inverted Ghost</Text>
          <Group flex flex-wrap items-end pa4 skin="black" br2>
            <Button inverted ghost skin="gray" mr2 mb2>Default</Button>
            <Button inverted ghost skin="red" mr2 mb2>Red</Button>
            <Button inverted ghost skin="orange" mr2 mb2>Orange</Button>
            <Button inverted ghost skin="yellow" mr2 mb2>Yellow</Button>
            <Button inverted ghost skin="green" mr2 mb2>Green</Button>
            <Button inverted ghost skin="blue" mr2 mb2>Blue</Button>
            <Button inverted ghost skin="black" mb2>Black</Button>
          </Group>

          <Text as="h3">Circular</Text>
          <Group mv2 flex flex-wrap items-end>
            <Button f7 skin="red" mb2 mr2-ns circular>★</Button>
            <Button f5 skin="green" mb2 mr2-ns circular>★</Button>
            <Button f4 skin="blue" mb2 circular>★</Button>
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

          <Text as="h3">Input Skins</Text>
          <Group flex flex-wrap items-end>
            <Input skin="gray" mr2 mb2 placeholder="Gray" />
            <Input skin="red" mr2 mb2 placeholder="Red" />
            <Input skin="orange" mr2 mb2 placeholder="Orange" />
            <Input skin="yellow" mr2 mb2 placeholder="Yellow" />
            <Input skin="green" mr2 mb2 placeholder="Green" />
            <Input skin="blue" mr2 mb2 placeholder="Blue" />
            <Input skin="black" mr2 mb2 placeholder="Black" />
          </Group>

          <Text as="h3">Inverted Inputs</Text>
          <Group flex flex-wrap items-end>
            <Input inverted skin="gray" mr2 mb2 placeholder="Gray" />
            <Input inverted skin="red" mr2 mb2 placeholder="Red" />
            <Input inverted skin="orange" mr2 mb2 placeholder="Orange" />
            <Input inverted skin="yellow" mr2 mb2 placeholder="Yellow" />
            <Input inverted skin="green" mr2 mb2 placeholder="Green" />
            <Input inverted skin="blue" mr2 mb2 placeholder="Blue" />
            <Input inverted skin="black" mr2 mb2 placeholder="Black" />
          </Group>

          <Text as="h3">Ghost Inputs</Text>
          <Group flex flex-wrap items-end>
            <Input ghost skin="gray" mr2 mb2 placeholder="Gray" />
            <Input ghost skin="red" mr2 mb2 placeholder="Red" />
            <Input ghost skin="orange" mr2 mb2 placeholder="Orange" />
            <Input ghost skin="yellow" mr2 mb2 placeholder="Yellow" />
            <Input ghost skin="green" mr2 mb2 placeholder="Green" />
            <Input ghost skin="blue" mr2 mb2 placeholder="Blue" />
            <Input ghost skin="black" mr2 mb2 placeholder="Black" />
          </Group>

          <Text as="h3">Inverted Ghost Inputs</Text>
          <Group skin="black" pa4 br2 flex flex-wrap items-end>
            <Input inverted ghost skin="gray" mr2 mb2 placeholder="Gray" />
            <Input inverted ghost skin="red" mr2 mb2 placeholder="Red" />
            <Input inverted ghost skin="orange" mr2 mb2 placeholder="Orange" />
            <Input inverted ghost skin="yellow" mr2 mb2 placeholder="Yellow" />
            <Input inverted ghost skin="green" mr2 mb2 placeholder="Green" />
            <Input inverted ghost skin="blue" mr2 mb2 placeholder="Blue" />
            <Input inverted ghost skin="black" mr2 mb2 placeholder="Black" />
          </Group>

          <Text as="h3">Input Groups</Text>
          <Group flex w5 mb2>
            <Input flex-auto br--left ghost placeholder="Search" />
            <Button br--right skin="blue">Go</Button>
          </Group>

          <Group flex w5 mb2>
            <Group ph3 pv2 br2 br--left skin="gray">$</Group>
            <Input flex-auto br--right ghost defaultValue="1.00" />
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

          <Text as="h2">ArrowBoxes</Text>
          <Group>
            <ArrowBox f7 mr2 mb2>Hello!</ArrowBox>
            <ArrowBox f7 skin="red" position="left" mr2 mb2>Hello!</ArrowBox>
            <ArrowBox f5 skin="orange" position="top" mr2 mb2>Hello!</ArrowBox>
            <ArrowBox f4 skin="yellow" position="right" mr2 mb2>Hello!</ArrowBox>
            <ArrowBox f3 skin="green" position="bottom" mr2 mb2>Hello!</ArrowBox>
            <ArrowBox f2 skin="blue" position="left" mr2 mb2>Hello!</ArrowBox>
            <ArrowBox f1 skin="black" position="top" mr2 mb2>Hello!</ArrowBox>
          </Group>

          <Text as="h3">Inverted ArrowBoxes</Text>
          <Group>
            <ArrowBox inverted f7 mr2 mb2>Hello!</ArrowBox>
            <ArrowBox inverted f7 skin="red" position="left" mr2 mb2>Hello!</ArrowBox>
            <ArrowBox inverted f5 skin="orange" position="top" mr2 mb2>Hello!</ArrowBox>
            <ArrowBox inverted f4 skin="yellow" position="right" mr2 mb2>Hello!</ArrowBox>
            <ArrowBox inverted f3 skin="green" position="bottom" mr2 mb2>Hello!</ArrowBox>
            <ArrowBox inverted f2 skin="blue" position="left" mr2 mb2>Hello!</ArrowBox>
            <ArrowBox inverted f1 skin="black" position="top" mr2 mb2>Hello!</ArrowBox>
          </Group>

          <Text as="h3">With Arrow Size Prop</Text>
          <ArrowBox f7 arrowSize={24} skin="red" position="left" mr2 mb2>Hello!</ArrowBox>
          <ArrowBox f1 arrowSize={6} skin="blue" position="bottom" mr2 mb2>Hello!</ArrowBox>

          <Text as="h3">With Border Width Prop</Text>
          <ArrowBox f7 borderWidth={0} skin="green" position="top" mr2 mb2>Hello!</ArrowBox>
          <ArrowBox f2 borderWidth={6} skin="orange" position="right" mr2 mb2>Hello!</ArrowBox>

        </Page>
      </ThemeProvider>
    );
  }
}

export default App;
