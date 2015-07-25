module.exports = function(server) {
  var Widget = server.models.Widget;
  Widget.create({}, function(err, widget) {
    console.error(err);
    console.log(widget);
    // because the name attribute is required and generated with the `guid` function
    // this upsert will fail because it won't pass validation without a name
    Widget.upsert({id: widget.id, model: 'Tesla'}, function(err, tesla) {
      console.error(err);
      console.log(tesla);
      console.log('widget.name === tesla.name', widget.name === tesla.name);
    });
  });
};
