// str - string which we want to analise, sym - symbol to specify which type you want to return
function findWords (str, sym) {

    let ar = str.match(/\w+/gim);

    if(sym =="ar" || sym == undefined) {
        return ar;
    }
    // If you choose "object" as returning type, then key name will be "word" + serial number 
    else if(sym == "obj") {
        let storage = {};
        storage.lastword = ar.length;

        for( let i = 0; i < ar.length; i++) {
            let n ="word" + (i+1);
        
            storage[n] = ar[i];
        }

        return storage;
    }
}