const HTMLParser = require('node-html-parser');
const https = require('https');

module.exports.getTreeCount = function(req, res){
    let trees = "nothing";
    https.get('https://teamtrees.org/', function(response){
        let data = '';
        response.on('data', (chunk) => {
            data+=chunk;
        });
        response.on('end', ()=>{
            data = data.replace(/(\r\n)|( {4})/g, '');
            let root = HTMLParser.parse(data);
            trees = parseInt(root.childNodes[0].childNodes[1].childNodes[2].childNodes[4].childNodes[0].childNodes[0].childNodes[0].childNodes[3].childNodes[0].attributes["data-count"]);
            let resJson = {trees: trees, date: new Date().toJSON()};
            res.set('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(resJson));
        })
    });
}