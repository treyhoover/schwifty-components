import React from "react";
import { ThemeProvider } from "styled-components";
import { View, Text, Image, Button, Input, Card, Group, Page } from "./lib";
import * as theme from "./theme";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Page bodyClass="bg-light-gray">
          <View ph4 pv2 sans-serif>
            <Text as="h1" f1>Schwifty Components!</Text>

            <Text as="h2">Buttons</Text>
            <Group mv2 flex items-end>
              <Button size="sm" mr2-ns>Small</Button>
              <Button size="md" mr2-ns>Medium</Button>
              <Button size="lg">Large</Button>
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

          </View>
        </Page>
      </ThemeProvider>
    );
  }
}

export default App;
