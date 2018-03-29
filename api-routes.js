var db = require("../models");

module.exports = function(app) {
  // Create all our routes and set up logic within those routes where required.

  app.get("/test/:customerId", function(req, res) {
    //res.send("Hi there!");
    db.Customer.findAll({
      where: {
        customerId: req.params.customerId
      }
    }).then(function(customer) {
      res.json(customer);
    })
  });


    app.post("/api/customer", function(req, res) {
       customer.create(["name", "email", "phone", "type"], [req.body.name, req.body.email, req.body.phone, req.body.type], function(result) {
      //   // Send back the ID of the new quote
         res.json({ id: result.insertId });
       });
      console.log(req.body);
      db.Customer.create(req.body).then(function(newCustomer) {
        console.log("New Customer: ");
        console.log(newCustomer);
       res.redirect("/api/customer");
       res.end();
      });
    });


     db.Customer.findAll({}).then(function(customer) {
       res.json(customer);
     });

     customer.all(function(data) {
       var hbsObject = {
         users: data
       };
       console.log(hbsObject);
       res.render("index", hbsObject);
     });
  };

  app.post("/api/customer", function(req, res) {
     customer.create(["name", "email", "phone", "type"], [req.body.name, req.body.email, req.body.phone, req.body.type], function(result) {
    //   // Send back the ID of the new customer
       res.json({ id: result.insertId });
     });
    db.Customer.create(req.body).then(function(newCustomer) {
      console.log("New Customer: ");
      console.log(newCustomer);
      res.redirect("/api/customer");
     res.end();

    });
  });

  app.put("/api/customer/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    customer.update(
       {
         type: req.body.type
       },
       condition,
       function(result) {
         if (result.changedRows === 0) {
           // If no rows were changed, then the ID must not exist, so 404
           return res.status(404).end();
         }
         res.status(200).end();

       }
     );
  });

  app.get("/api/customer", function(req, res) {
    Customer.findAll({
      where: {
        phone: {
          $ne: null
        }
      }
    }).then(function(phone) {
      res.json(phone);
    
    });

  });
