/**对象添加当作参数拼接到URL上
 * 将面
 * @param baseUrl 需要拼接的url
 * @param obj 参数对象
 * @returns {string} 拼接后的对象
 * 例子:
 *  let obj = {a: '3', b: '4'}
 *  setObjToUrlParams('www.baidu.com', obj)
 *  ==>www.baidu.com?a=3&b=4
 */
 export function setObjToUrlParams(baseUrl: string, obj: any): string {
    let parameters = '';
    let url = '';
    for (const key in obj) {
      parameters += key + '=' + encodeURIComponent(obj[key]) + '&';
    }
    parameters = parameters.replace(/&$/, '');
    if (/\?$/.test(baseUrl)) {
      url = baseUrl + parameters;
    } else {
      url = baseUrl.replace(/\/?$/, '?') + parameters;
    }
    return url;
  }
  

  // url参数的解析
  let baseUrlStr = 'https://coder.itclan.cn?name=itclanCoder&study=css';
// 参数转成对象
export function urlQueryString(str:string) {
  let obj:any = {}; // 用一个对象存储目标值
  let params = str?.split('?')[1]; //截取?号后的字符串即name=itclanCoder&study=css
  if(!params){
    return obj
  }
  let param = params?.split('&'); // 通过&符号进行分割即["name=itclanCoder", "study=css"]
  
  for (let i = 0; i < param?.length; i++) {
    // 循环遍历截取出来的param数组
    let paramsA = param[i].split('='); // 通过split,=继续对数组params每一项进行分割,生成数组["name", "itclanCoder"]
    let key = paramsA[0]; // 取数组项["name", "itclanCoder"]中第0位,即name
    let value = paramsA[1]; // 取数组项["name", "itclanCoder"]中第1位,即itclanCoder
    obj[key] = value;
  }
  return obj;
}
// console.log(queryString(baseUrlStr)); // {name: "itclanCoder", study: "css"]}