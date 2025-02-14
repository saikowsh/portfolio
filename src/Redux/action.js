export const addnumbers = (value) =>({
    type:"ADDITION",
    payload : value,
})

export const subnumber = (value) =>({
    type:"SUBTRACT",
    payload : value,
})

export const multiplenumber = (value) =>({
    type:"MULTIPLE",
    payload : value,
})

export const divisionnumber = (value) =>({
    type:"DIVISION",
    payload : value,
})

export const modulusnumber = (value) =>({
    type:"MODULUS",
    payload : value,
})

export const powernumber = (value) =>({
    type:"POWER",
    payload : value,
})