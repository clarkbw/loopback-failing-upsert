# Example of upsert failing

[![Greenkeeper badge](https://badges.greenkeeper.io/clarkbw/loopback-failing-upsert.svg)](https://greenkeeper.io/)

This is a test project to show how an upsert fails when an attribute has default values.  Because the attribute with default values is required it will have a presence validation on the attribute.  During an upsert the validation is run before the default values can be properly initialized.

`slc run`
