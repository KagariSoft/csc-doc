---
title: React js
---

If you installed this framework in a react project you can easily import it this way.

```jsx
import React from 'react';
import "kagaristyle";

function App() {
  return (
    <>
        <button>Default</button>
        <button className="kg__btn kg__btn-primary">Primary</button>
        <button className="kg__btn kg__btn-success">Success</button>
        <button className="kg__btn kg__btn-warning">Warning</button>
        <button className="kg__btn kg__btn-danger">Danger</button>
    </>
  );
}

export default App;
```