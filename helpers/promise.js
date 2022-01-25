
export const promise = async (asyncfunc) => {
    try{
        const promise = await asyncfunc();
        return [promise, null]
    }catch(err){
        return [null, err]
    }
}