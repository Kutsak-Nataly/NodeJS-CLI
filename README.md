# nodejs-Ceasar
CLI tool that will encode and decode a text by Caesar cipher. For encoding/decoding use only the English alphabet, all other characters should be kept untouched.
It uses <strong>streams</strong> to codeing data.
install <strong>commander js</strong>
npm install commander
To exit the mode console input press [Cntr+C]
***
## Installation
Place the folder at the root of your project. Recommended parameters of the project (environment) can be found in the file <strong>package.json</strong> of this repository.
## Start
```
node caesar/cli
```
## Parameters and arguments
> <p>-s, --shift: a shift</p>
> <p>-i, --input: an input file</p>
> <p>-o, --output: an output file</p>
> <p>-a, --action: an action encode/decode</p>

##### Allowed directions of streams given during encoding:
> <p>file -> console</p>
> <p>file -> file</p>
> <p>console -> console</p>
> <p>console -> file</p>
> 
Get help 
```
node caesar/cli --help
```
Check version app
```
node caesar/cli --version
```
### Command example
```
node caesar/cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

