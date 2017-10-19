angular.module('pouchdb.controllers', []).service('pouchservice', function() {
    //var db = new PouchDB('my_database');
    var PouchDB = require('pouchdb');
    PouchDB.plugin(require('pouchdb-adapter-cordova-sqlite'));
    var db = new PouchDB('mydb.db', {adapter: 'cordova-sqlite'});
});