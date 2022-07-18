---
title: React js
---

If you want to use this framework in react/nextjs, you can use @kagarisoft/csc-react which is automatically installed when you install @kagarisoft/csc

:::info
  If you need to update the package you can use yarn add @kagarisoft/csc-react or npm install @kagarisoft/csc-react. 
:::

```jsx
import {Button} from '@kagarisoft/csc-react'
```

```jsx live

function Home() {
  return (
    <>
        <Button label="Default" />
        <Button label="Default" styleArg="kg-warning" />
    </>
  );
}

```

:::info
  To see the styles of 'styleArg' see [this page](https://classstyle.netlify.app/docs/Components/buttons#ampersand-modification-list).
:::
