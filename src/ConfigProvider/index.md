---
nav:
  title: Components
  path: /components
group:
  title: 主题配色
  order: 2
---

## ConfigProvider

### 全局配色

```tsx
import React from 'react';
import { ConfigProvider, Button } from 'da-li-mao-ui';

export default () => (
  <div>
    <ConfigProvider
      text="高亮按钮"
      icon={<div style={{ background: 'var(--light-bg)', border: ' 1px solid #000' }}>icon</div>}
    ></ConfigProvider>
    <Button type="highlight" style={{ width: 200 }}>
      一键变色
    </Button>
  </div>
);
```

### 组件变色

```tsx
import React from 'react';
import { Button } from 'da-li-mao-ui';

export default () => <Button type ='highlight' >
<h1>组件变色</h1> 
</Button>
```


### 组件变色

```tsx
import React from 'react';
import { Button } from 'da-li-mao-ui';

export default () => <Button type ='highlight' >
<h1>组件变色</h1> 
</Button>
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
