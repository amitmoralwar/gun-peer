// var schema = {
//     required: true,
//     type: 'object',
//     properties: {
//         hello: {
//             required: true,
//             type: 'string'
//         }
//     }
// };

// var gun = Gun();

// gun.schema("example", schema);

// // This is valid so it'll get put into the graph
// gun.save("example", {
//     hello: "World!"
// });

// // This will throw an error because `hello` was set as `required`
// gun.save("example", {
//     goodbye: "World!"
// });
var http = require('http')


var Gun = require("gun");
require("gun-schema");


var schema = {
    required: true,
    type: 'object',
    properties: {
        hello: {
            required: true,
            type: 'string'
        }
    }
};

//var gun = Gun('http://localhost:3031' + '/gun');
const gun = Gun('http://localhost:8081' + '/gun');
var jack  = gun.get('jack');
jack.put({name:'jack',occupation:'manager'})

gun.schema("example", schema);

gun.save("example", {
    hello: "World!"
});
