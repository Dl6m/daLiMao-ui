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
import { Button } from 'dalimao-ui';

export default () => <Button text='高亮按钮' type='primary'/>;
```
### 普通按钮

```tsx
import React from 'react';
import { Button} from 'dalimao-ui';

export default () => <Button  type='default' >默认按钮</Button>
```
### 禁用按钮

```tsx
import React from 'react';
import { Button } from 'dalimao-ui';

export default () => <Button disabled>禁用按钮</Button>
```
### 成功按钮

```tsx
import React from 'react';
import { Button } from 'dalimao-ui';

export default () => <Button type='success'>成功按钮</Button>
```
### 警告按钮

```tsx
import React from 'react';
import { Button } from 'dalimao-ui';

export default () => <Button type='warning'>警告按钮</Button>
```
### 原型按钮

```tsx
import React from 'react';
import { Button } from 'dalimao-ui';

export default () => <Button type='warning' round>原型按钮</Button>
```

### 内部组件按钮

```tsx
import React from 'react';
import { Button } from 'dalimao-ui';

export default () => <Button type ='primary' >
<h1>我是内部组件</h1> 
</Button>
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
