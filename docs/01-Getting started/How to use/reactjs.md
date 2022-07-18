---
title: React js
---

If you want to use this framework in react/nextjs, you can use @kagarisoft/csc-react which is automatically installed when you install @kagarisoft/csc

:::info
  If you need to update the package you can use yarn add @kagarisoft/csc-react or npm install @kagarisoft/csc-react. 
:::

```jsx
import React from 'react';
import { Button } "@kagarisoft/csc-react";

function App() {
  return (
    <>
        <Button label="Default" />
        <Button label="Default" styleArg="kg-warning" />
    </>
  );
}

export default App;
```

:::info
  To see the styles of 'styleArg' see [this page](buttons#ampersand-modification-list).
:::