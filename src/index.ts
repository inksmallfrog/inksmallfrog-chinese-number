const chDigit : Array<string> = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
const chPosition : Array<string> = ['', '十', '百', '千'];
const chBasePosition : Array<string> = ['', '万', '亿'];

const digitMap : Object = {
    '一': 1,
    '二': 2,
    '三': 3,
    '四': 4,
    '五': 5,
    '六': 6,
    '七': 7,
    '八': 8,
    '九': 9
}
const positionMap : Object = {
    '十': 10,
    '百': 100,
    '千': 1000,
}
const basePositionMap : Object = {
    '万': 10000,
    '亿': 100000000
}

export function ChineseToNumber(chinese: string){
    let strArr : Array<string> = Array.from(chinese);
    let number : number = 0;
    let digit : number = 0;

    let stack : Array<number> = [];

    strArr.forEach((ch)=>{
        if(digitMap.hasOwnProperty(ch)){
            digit = digitMap[ch];
        }else if(positionMap.hasOwnProperty(ch)){
            //case like 十
            if(digit == 0 && number == 0){
                digit = 1;
            }

            number += digit * positionMap[ch];
            digit = 0;
        }else if(basePositionMap.hasOwnProperty(ch)){
            //case like 一万
            if(digit != 0){
                number += digit;
                digit = 0;
            }

            number *= basePositionMap[ch];
            stack.push(number);
            number = 0;
        }
    });
    //case like 一
    if(digit != 0){
        number += digit;
        digit = 0;
    }
    stack.push(number);

    number = stack.reduce((res, n)=>{
        return res + n;
    })
    
    return number || 0;
}

export function NumberToChinese(num: number, base: number){
    base = base || 0;
    if(num == 0) return base == 0 ? '零' : '';
    
    let _n = num;
    let position = 0;
    let res = '';
    while(_n > 0 && position < 4){
        let digit = _n % 10;
        if(digit == 0){
            if(res.length && res.charAt[0] != '零'){
                res = '零' + res;
            }
        }else{
            res = (chDigit[digit - 1] + chPosition[position]) + res;
        }
        ++position;
        _n = Math.floor(_n / 10);
    }
    if(res.substr(0, 2) == '一十'){
        res = res.substr(1, res.length - 1);
    }
    return NumberToChinese(_n, base + 1) + res + chBasePosition[base];
}