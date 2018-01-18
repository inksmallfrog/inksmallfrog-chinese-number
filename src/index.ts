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

/**
 * 中文转数字
 * @param chinese 中文字符串
 * @return <number> 中文对应的数字，未进行错误处理
 */
export function chineseToNumber(chinese: string){
    let strArr : Array<string> = Array.from(chinese);
    let number : number = 0;
    let digit : number = 0;

    //基础进位栈
    let stack : Array<number> = [];

    strArr.forEach((ch)=>{
        if(digitMap.hasOwnProperty(ch)){                //遇到数字
            digit = digitMap[ch];
        }else if(positionMap.hasOwnProperty(ch)){       //遇到进位符
            //处理以进位符打头的字符串：十一，十万等
            if(digit == 0 && number == 0){
                digit = 1;
            }

            number += digit * positionMap[ch];
            digit = 0;
        }else if(basePositionMap.hasOwnProperty(ch)){   //遇到基础进位符
            //处理以数字结尾的基础进位：一万，十一万等
            if(digit != 0){
                number += digit;
                digit = 0;
            }

            number *= basePositionMap[ch];
            stack.push(number);
            number = 0;
        }
    });
    //处理以数字结尾的字符串：十一，一等
    if(digit != 0){
        number += digit;
        digit = 0;
    }
    stack.push(number);

    //将各基础进位项合并
    number = stack.reduce((res, n)=>{
        return res + n;
    })
    
    return number || 0;
}

/**
 * 数字转中文
 * @param num 数字
 * @param base 基础进位项
 * @return <string> 数字对应的中文，未进行错误处理
 */
export function numberToChinese(num: number, base: number){
    base = base || 0;
    if(num == 0) return base == 0 ? '零' : '';
    
    let _n = num;
    let position = 0;
    let res = '';
    //处理一个基础进位
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

    //处理一十打头的情况
    if(res.substr(0, 2) == '一十'){
        res = res.substr(1, res.length - 1);
    }

    //递归处理下一基础进位
    return numberToChinese(_n, base + 1) + res + chBasePosition[base];
}