```
<Input />
```

```
<Input defaultValue='Input desabilitado' disabled />
<br />
<Input defaultValue='Input read only' readOnly />
```

Também é possível appendar elementos no Input:

```
const Button = require('components/Button').default 

;<Input
  append={(
    <div>
      <Button size='small'>
        click me
      </Button>
    </div>
  )}
/>
```
