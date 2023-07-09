import multiparty from 'multiparty';
export default async function handle(req,res){
    const form = new multiparty.Form();
    return new Promise((resolve,reject)=>{
        form.parse(req,async(err,fields,files)=>{
            if(err)  reject(err);
            resolve({fields,files});
            console.log(files.file.length);
            console.log(files);
            res.json('ok');
        });
    });
    
}

export const config = {
    api:{bodyParser:false}
};