---
nav:
  title: Components
  path: /components
group:
   title: 基础组件
   order: 1
---


## Button
### 高亮按钮
```tsx
import React from 'react';
import { Button } from 'da-li-mao-ui';

export default () => <Button text='高亮按钮' type='highlight'/>;
```
### 普通按钮

```tsx
import React from 'react';
import { Button} from 'da-li-mao-ui';

export default () => <Button text='普通按钮' type='default'/>;
```
### 禁用按钮

```tsx
import React from 'react';
import { Button } from 'da-li-mao-ui';

export default () => <Button text='禁用按钮' disabled/>;
```

### 内部组件按钮

```tsx
import React from 'react';
import { Button } from 'da-li-mao-ui';

export default () => <Button type ='highlight' >
<h1>我是内部组件</h1> 
</Button>
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
