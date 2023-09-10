[![NPM](https://img.shields.io/npm/v/@saneksa/react-flex?style=plastic&color=red)](https://npmjs.com/package/@saneksa/react-flex/) [![GitHub license](https://img.shields.io/npm/l/@saneksa/react-flex?style=plastic)](https://github.com/saneksa/react-flex/blob/main/LICENSE)

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
