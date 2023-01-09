## Testing:

cdk synth --app='./lib/integ.test.default.js'
cdk deploy --app='./lib/integ.test.default.js'
cdk destroy --app='./lib/integ.test.default.js'

## Login via cli

aws sso login --no-browser 
