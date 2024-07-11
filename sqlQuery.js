
const dbgetAllItems = (req,res) => {
  const sql = 'SELECT * FROM customer';
  db.query(sql, (err,results) => 
  {
      if(err)
          throw err;
      res.json(results);
  });
}

const dbgetItem = (req,res) => 
{
    const {id} = req.params;
    const sql = 'SELECT * FROM usuarios WHERE id = ?'

   db.query(sql, [id] ,(err, result) => 
   {
        if(err) throw err;
        res.json(result);
   });
}

const dbpostItem = (req,res) => 
{
    const {cerveza,pinta} = req.body;

    const sql = 'INSERT INTO usuarios (nombre,apellido,mail) VALUES (?,?,?)';

    db.query(sql,[cerveza, pinta], (err,result) => 
    {
      if(err) throw err;
      res.json(
        {
            mensaje : "Item Creado"
        });
    });
}

const dbupdateItem = (req,res) => 
{
  const {id} = req.params;
  const {cerveza, pinta} = req.body;

  const sql = 'UPDATE Items SET cerveza = ?, pinta = ?'

  db.query(sql, [cerveza, pinta,id], (err,result) => 
  {
    if(err) throw err;
    res.json({
        mensaje : "Item EDITADO"
    })
  });
}

const dbdeleteItem = (req,res) => 
{
  const {id} = req.params;

  const sql = 'DELETE FROM Items WHERE id = ?';

  db.query(sql,[id],(err,result) => 
  {
    if(err) throw err;
    res.json(
      {
          mensaje : "item ELIMINADO"
      })
  });
}

module.exports = {
  dbgetAllItems,
  dbpostItem,
  dbupdateItem,
  dbgetItem,
  dbdeleteItem 
}