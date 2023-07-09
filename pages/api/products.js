import mngose from "@/lib/mngose";
import { ProductModel } from "@/models/Products";

export default async function handle(req, res) {
  const { method } = req;
  await mngose();
  if (method === "POST") {
    const { title, desc, price } = req.body;
    const product = await ProductModel.create({ title, desc, price });
    res.json(product);
  }
  if (method === "GET") {
    if (req.query?.id) {
      res.json(await ProductModel.findOne({ _id: req.query.id }));
    }
    res.json(await ProductModel.find());
  }
  if(method==='PUT'){
    const { title, desc, price,_id } = req.body;
    await ProductModel.updateOne({_id},{title,desc,price});
    res.json(true);
  }
  if(method==='DELETE'){
    const id = req.query.id;
    await ProductModel.deleteOne({_id:id});
    res.json(true);
  }
}
