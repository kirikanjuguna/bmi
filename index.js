const express= require('express')
const app=express();
const port=3000;
const bodyParser =require('body-parser')
const urlEncodedParser=bodyParser.urlencoded({extended:false})


const fs = require('fs');
const jsonParser = bodyParser.json();
const fileBmi = 'bmi.json';

let rawBmi = fs.readFileSync(fileBmi);
let data = JSON.parse(rawBmi);


app.set('views','views');
app.set('view engine','hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))





app.get('/', function(request,response){
    response.render('home',{name:'John Doe'});
});


app.post('/process-bmi',urlEncodedParser,function(req,res){
    heigh = parseFloat(req.body.Height);
    weigh = parseFloat(req.body.Weight);
    bmi = weigh / (heigh * heigh);
    

    const options = {
        bmi: bmi,
    }
    data.push(options);
    
    //number to string format
    bmi = bmi.toFixed();
 
    req_name = req.body.Name;
 
    // CONDITION FOR BMI
    if (bmi < 19) {
        res.send("<h3>hey! " + req_name +
                 " your BMI is around: " + bmi +
                 "<centre><h1>You are Underweight!");
    } else if (19 <= bmi && bmi < 25) {
        res.send("<h3>hey! " + req_name +
                 " your BMI is around: " + bmi +
                 "<centre><h1>You are Normalweight!");
    } else if (25 <= bmi && bmi < 30) {
        res.send("<h3>hey! " + req_name +
                 " your BMI is around: " + bmi +
                 "<centre><h1>You are Overweight!");
    } else {
        res.send("<h3>hey! " + req_name +
                 " your BMI is around: " + bmi +
                 "<centre><h1>You are Obese!");
    }
});

const server = 'http://localhost:3000';






    





app.listen(port);
console.log('server is listening on port 3000');