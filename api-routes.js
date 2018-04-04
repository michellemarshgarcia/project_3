var db = require("./models");

module.exports = function(app) {
  // Create all our routes and set up logic within those routes where required.

  app.get("/test/:customerId", function(req, res) {
    //res.send("Hi there!");
    db.Contact.findAll({
      where: {
        customerId: req.params.customerId
      }
    }).then(function(contact) {
      res.json(contact);
    })
  });


    app.post("/models/contact", function(req, res) {
       Contact.create(["name", "email", "phone", "type"], [req.body.name, req.body.email, req.body.phone, req.body.type], function(result) {
      // Send back the ID of the new customer
         res.json({ id: result.insertId });
       });
      console.log(req.body);
      db.Contact.create(req.body).then(function(newContact) {
        console.log("New Contact: ");
        console.log(newContact);
       res.redirect("/models/contact");
       res.end();
      });
    });


     db.Contact.findAll({}).then(function(contact) {
       res.json(contact);
     });

     contact.all(function(data) {
       var hbsObject = {
         users: data
       };
       console.log(hbsObject);
       res.render("index", hbsObject);
     });
  };

  app.post("/models/contact", function(req, res) {
     contact.create(["name", "email", "phone", "type"], [req.body.name, req.body.email, req.body.phone, req.body.type], function(result) {
    //   // Send back the ID of the new customer
       res.json({ id: result.insertId });
     });
    db.Contact.create(req.body).then(function(newContact) {
      console.log("New Contact: ");
      console.log(newContact);
      res.redirect("/models/contact");
     res.end();

    });
  });

  app.put("/models/contact/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    contact.update(
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

  // app.get("/models/cookie", function(req, res) {
  //   Cookie.findAll({
  //     where: {
  //       theme: {
  //         $ne: holiday
  //       }
  //     }
  //   }).then(function(holiday) {
  //     res.json(holiday);
  //   });

  // app.get("/models/cookie", function(req, res) {
  //     Cookie.findAll({
  //       where: {
  //         theme: {
  //           $ne: birthday
  //         }
  //       }
  //     }).then(function(birthday) {
  //       res.json(birthday);
  //     });

  // app.get("/models/cookie", function(req, res) {
  //       Cookie.findAll({
  //         where: {
  //           theme: {
  //             $ne: specialEvent
  //           }
  //         }
  //       }).then(function(specialEvent) {
  //         res.json(specialEvent);
  //       });  

 // });
