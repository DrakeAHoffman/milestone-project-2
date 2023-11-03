const express = require('express');
const app = express();
const port = 3000; 


app.use(express.json());


app.post('/buy-now', (req, res) => {
    const { product, price } = req.body;
  
   

 

 
  res.json({ message: 'Purchase successful', purchaseDetails });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


