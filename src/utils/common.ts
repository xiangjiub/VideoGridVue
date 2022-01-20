import dayjs from "dayjs";
import isoWeek  from 'dayjs/plugin/isoWeek'


dayjs.extend(isoWeek)

// 对象转JSON
export const toJSON = (obj: any) => {
    return JSON.stringify(obj, (key, value) => {
        switch (true) {
            case typeof value === "undefined":
                return "undefined";
            case typeof value === "symbol":
                return value.toString();
            case typeof value === "function":
                return value.toString();
            default:
                break;
        }
        return value;
    })
}

/***
 * @description 是否是生产环境
 */
 export const isDev = import.meta.env.MODE == 'development'

 /***
  * @description 格式化日期
  * @param time
  */
 export const formatDate = (time:any) => dayjs(time).format('YYYY-MM-DD HH:mm:ss')

    /***
 * @description 格式化当前年月日
 * @param time
 */
export const formatYearMonthDay = (time:any) => dayjs(time).format('YYYY-MM-DD')

export const formatYearMonthDayNo = (time:any) => dayjs(time).format('YYYY/MM/DD')

 
 /***
  * @description 格式化日期
  * @param time
  */
  export const formatHourMinSec = (time:any) => dayjs(time).format('HH:mm:ss')

  export function guid(){
    function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    // return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    return (S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4());

}

// json序列化 str
export const jsonToStr = (val:any) => {
    const objectdata = JSON.parse(val)
    let strVal = ''
    for(let key in objectdata){
        strVal += `${key}${objectdata[key]}、`

    }
    return strVal
}

//单位信息的截取
export const depclip = (val:any)=>{
    const strName = '公司'
    const str2Name = '分公司'
    if(val.indexOf(strName) != -1){
        const newstr = val.slice(val.indexOf(strName)+2)
        if(newstr.indexOf(str2Name) != -1){
            const endstr = newstr.slice(0, -newstr.indexOf(str2Name))
            return endstr
        }else{
            return val
        }
    }else{
        return val
    }
}

export function getBarStr(bar:any){
    let newBar = bar?.slice(-11)
    if(bar?.length >11){
        newBar = "***" + newBar;
    }
    return newBar
}