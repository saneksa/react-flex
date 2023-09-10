

### Installation

```sh
yarn add @saneksa/react-flex
```

## Usage

```jsx
import { Flex } from "@saneksa/react-flex";

function App() {
  return (
    <div>
      <Flex
        size={12}
        direction="horizontal"
        align="center"
        justify="center"
        wrap="wrap"
      >
        <div>1</div>
        <div>2</div>
      </Flex>
    </div>
  );
}
```
