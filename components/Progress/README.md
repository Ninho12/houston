# Progress

Houston has two types of progress component and they can be configured according to the need for use within Eduzz applications.

### Import

```
import Progress from '@eduzz/houston/components/Progress'; (recommended)
```

or

```
import { Progress } from '@eduzz/houston';
```

### Use

```
<Progress type='rounded' total={4} current={2} />
```

or

```
<Progress type='percentage' total={10} current={7} />
```

### Props available

| prop | type | required | default |
| ---- | ---- | -------- | ------- |
| className | `string` | false | - |
| style | `React.CSSProperties` | false | - |
| type | `rounded`, `percentage` | false | `rounded` |
| current | `number` | true | - |
| total | `number` | true | - |
| id | `string` | false | - |
| loading | `boolean` | false | `false` |
| color | `string` | false | `primary` |
