import React from "react";
import { ThemeProvider } from "styled-components";
import { Text, Image, Button, Input, Card, Group, Page } from "./lib";
import * as theme from "./theme";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Page bodyClass="bg-light-gray" ph4 pv2 sans-serif>
          <Text as="h1" f1>Schwifty Components!</Text>

          <Text as="h2">Skins</Text>

          <Text as="p">All skins and sizes are completely themeable</Text>

          <Text as="h3">Normal</Text>
          <Group dib mr2 pa4 skin="gray">Gray</Group>
          <Group dib mr2 pa4 skin="red">Red</Group>
          <Group dib mr2 pa4 skin="orange">Orange</Group>
          <Group dib mr2 pa4 skin="yellow">Yellow</Group>
          <Group dib mr2 pa4 skin="green">Green</Group>
          <Group dib mr2 pa4 skin="blue">Blue</Group>
          <Group dib pa4 skin="black">Black</Group>

          <Text as="h3">Inverted Skins</Text>
          <Group inverted dib mr2 pa4 skin="gray">Gray</Group>
          <Group inverted dib mr2 pa4 skin="red">Red</Group>
          <Group inverted dib mr2 pa4 skin="orange">Orange</Group>
          <Group inverted dib mr2 pa4 skin="yellow">Yellow</Group>
          <Group inverted dib mr2 pa4 skin="green">Green</Group>
          <Group inverted dib mr2 pa4 skin="blue">Blue</Group>
          <Group inverted dib pa4 skin="black">Black</Group>

          <Text as="h2">Buttons</Text>
          <Group mv2 flex items-end>
            <Button size="sm" mr2-ns>Small</Button>
            <Button size="md" mr2-ns>Medium</Button>
            <Button size="lg">Large</Button>
          </Group>

          <Group>
            <Button
              skin="blue"
              as="a"
              href="http://www.google.com"
              no-underline
              dib
              mb2
            >
              Link
            </Button>

            <Button db w-100 skin="red">
              Block
            </Button>
          </Group>

          <Group mv2 flex items-end>
            <Button skin="gray" mr2-ns>Default</Button>
            <Button skin="red" mr2-ns>Red</Button>
            <Button skin="orange" mr2-ns>Orange</Button>
            <Button skin="yellow" mr2-ns>Yellow</Button>
            <Button skin="green" mr2-ns>Green</Button>
            <Button skin="blue" mr2-ns>Blue</Button>
            <Button skin="black" mr2-ns>Black</Button>
          </Group>

          <Text as="h3">Inverted</Text>
          <Group mv2 flex items-end>
            <Button inverted skin="gray" mr2-ns>Default</Button>
            <Button inverted skin="red" mr2-ns>Red</Button>
            <Button inverted skin="orange" mr2-ns>Orange</Button>
            <Button inverted skin="yellow" mr2-ns>Yellow</Button>
            <Button inverted skin="green" mr2-ns>Green</Button>
            <Button inverted skin="blue" mr2-ns>Blue</Button>
            <Button inverted skin="black" mr2-ns>Black</Button>
          </Group>

          <Text as="h3">Ghost</Text>
          <Group mv2 flex items-end>
            <Button ghost skin="gray" mr2-ns>Default</Button>
            <Button ghost skin="red" mr2-ns>Red</Button>
            <Button ghost skin="orange" mr2-ns>Orange</Button>
            <Button ghost skin="yellow" mr2-ns>Yellow</Button>
            <Button ghost skin="green" mr2-ns>Green</Button>
            <Button ghost skin="blue" mr2-ns>Blue</Button>
            <Button ghost skin="black" mr2-ns>Black</Button>
          </Group>

          <Text as="h3">Inverted Ghost</Text>
          <Group flex flex-wrap items-end pa4 skin="black" br4>
            <Button inverted ghost skin="gray" mr2 mb2>Default</Button>
            <Button inverted ghost skin="red" mr2 mb2>Red</Button>
            <Button inverted ghost skin="orange" mr2 mb2>Orange</Button>
            <Button inverted ghost skin="yellow" mr2 mb2>Yellow</Button>
            <Button inverted ghost skin="green" mr2 mb2>Green</Button>
            <Button inverted ghost skin="blue" mr2 mb2>Blue</Button>
            <Button inverted ghost skin="black" mb2>Black</Button>
          </Group>

          <Text as="h3">Circular</Text>
          <Group mv2 flex items-end>
            <Button skin="red" mb2 mr2-ns circular size="sm">★</Button>
            <Button skin="green" mb2 mr2-ns circular size="md">★</Button>
            <Button skin="blue" mb2 circular size="lg">★</Button>
          </Group>

          <Text as="h2">Inputs</Text>
          <Group flex flex-wrap items-end>
            <Input size="sm" mr2-ns mb2 placeholder="Small" />
            <Input size="md" mr2-ns mb2 placeholder="Medium" />
            <Input size="lg" mb2 placeholder="Large" />
          </Group>

          <Group flex flex-wrap items-end>
            <Input skin="gray" mr2-ns mb2 placeholder="Gray" />
            <Input skin="red" mr2-ns mb2 placeholder="Red" />
            <Input skin="orange" mr2-ns mb2 placeholder="Orange" />
            <Input skin="yellow" mr2-ns mb2 placeholder="Yellow" />
            <Input skin="green" mr2-ns mb2 placeholder="Green" />
            <Input skin="blue" mr2-ns mb2 placeholder="Blue" />
            <Input skin="black" mr2-ns mb2 placeholder="Black" />
          </Group>

          <Text as="h2">Cards</Text>

          <Group flex>
            <Card pa3 mr4>
              <Image db br-100 w-100 mb3 src="http://via.placeholder.com/150x150" />
              <Text db b f3>Cards!</Text>
            </Card>

            <Card>
              <Image db w-100 mb3 src="http://via.placeholder.com/200x200" />
              <Text db b f3 mb2>Cards!</Text>
            </Card>
          </Group>

        </Page>
      </ThemeProvider>
    );
  }
}

export default App;
