//without react router all pages come in one page
//with react touter we can get in different pages
function add(paras){
    return(paras.a+paras.b);
}
function sub(paras){
    return(paras.a-paras.b);
}
function mul(paras){
    return(paras.a*paras.b);
}
function div(paras){
    return(paras.a/paras.b);
}
function mod(paras){
    return(paras.a%paras.b);
}
function Calculator(){

    const a=10;
    const b=2;
    
    return(
        <div>
            <h1>"a="{a} + "b="{b} "=" {a+b}</h1>
            <button onClick={(a,b)=>add()}>Add</button>
        </div>
    );
}
export default Calculator