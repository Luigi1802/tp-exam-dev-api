exports.createProduct = (req, res, next) => {
    const name = req.body.name;
    const quantity = req.body.quantity;

    res.status(201).json({
      message: 'Le produit a été ajouté.',
      post: { id: new Date().toISOString(), name: name, quantity: quantity }
    });
  };
  