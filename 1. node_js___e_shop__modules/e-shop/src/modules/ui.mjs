import readline from 'readline'

const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const renderCatalog = (products, confirmCb) => {
    console.clear()
    // HW2:
    const renderLine = () => {
        const line = '='.repeat(30)
        console.log(`${line}\nCATALOG\n${line}`)
    } 

    renderLine()

    // console.log("==============================")
    // console.log("CATALOG")
    // console.log("==============================")

    products.forEach( (product,idx) => {
        // HW1: align columns (JS)
        const index = (idx+1).toString().padStart(2)
        const name  = product.name.padEnd(20)       
        const price = product.price.toString().padEnd(4)

        console.log(index, name, price)
    })
    
    io.question("choose > ", answer => {
        let n = parseInt(answer)

        // HW3: check if you've got a number !
        if ( n < 1 || n > products.length || isNaN(n) ) {

          console.log("Incorrect input. Enter a number from 1 to " + products.length)
          io.close()          
        }

        let product = products[n - 1]
        io.question(`how many "${product.name}": ? `, (answer) => {
        let q = parseInt(answer)

        // HW3: check if you've got a number !
        // ...
        if ( isNaN(q) ) {

            console.log("Incorrect input. Please enter a number.")
            io.close()            
        }

        let cost = q * product.price;
        io.question(`product cost "${cost}": confirm (y/n)? `, (answer) => {
            
            switch (answer) {
            case "y":
                confirmCb(n, product, q);
                break;
            case "n":
                console.log(`product "${product.name}" was not confirmed!`);
                break;
            default:
                console.log("Invalid option");
                break;
            }
            io.close()
            })
        })
    })      
       
}


export default { renderCatalog }