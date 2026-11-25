// Remove sentence stops from presentation copy while retaining structural dots.
export function formatDisplayText(value){
 if(typeof value!=='string')return value;
 return value.replace(/毕鲁斯智能体/g,'BILLUS AI WORKSPACE').replace(/\bBillus\s+(?:AI\s+)?(?:Workspace|Agent)\b/gi,'BILLUS AI WORKSPACE').replace(/([\u3400-\u9fff])(?=BILLUS AI WORKSPACE)/g,'$1 ').replace(/(BILLUS AI WORKSPACE)(?=[\u3400-\u9fff])/g,'$1 ').replace(/。/g,'').replace(/(^|[^.])\.(?!\.)(?=\s|$|["'”’）)\]])/g,'$1');
}
