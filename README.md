# USAGE
``` sh
npm install --save inksmallfrog-chinese-number
```

``` js
import {numberToChinese, chineseToNumber} from 'inksmallfrog-chinese-number';

const test_number = 200000;
const test_chinese = '二十万'

numberToChinese(test_number); //二十万
chineseToNumber(test_chinese); //200000
```

# NOTES
This lib can only handle postive integer and can't give any error information!