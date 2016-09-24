var connect = require('connect');
var url = require('url');
var app = connect();

// function with method, x and y parameters
var calculate = function(method, x, y)
{
  // user error handling
  if(isNaN(x) || isNaN(y))
  {
    return 'Invalid Value';
  }
  else
  {
    switch(method)
    {
      case 'add':
      var result = Number(x)+Number(y);
      return x + ' + ' + y + ' = ' + result;
      break;

      case 'subtract':
      var result = Number(x)-Number(y);
      return x + ' - ' + y + ' = ' + result;
      break;

      case 'multiply':
      var result = Number(x)*Number(y);
      return x + ' * ' + y + ' = ' + result;
      break;

      case 'divide':
      var result = Number(x)/Number(y);
      return x + ' / ' + y + ' = ' + result;
      break;

      default: // whether the user inputs wrong parameters
      return 'Invalid input. Please insert only numbers';
      break;
    }
  }
};

var lab3 = function(req, res, next)
{
  var qs = url.parse(req.url, true).query;

  var method = qs.method;
  var x = qs.x;
  var y = qs.y;

  res.end(calculate(method, x, y));
}

app.use(lab3); // to get rid of Cannot GET/
app.listen(3000);
console.log("Running on port 3000");
