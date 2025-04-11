const bcrypt=require("bcrypt");

async function hashedPassword(password){
    const saltRounds=10
    return await bcrypt.hash(password, saltRounds);
}

async function comparedPassword(password){
    return bcrypt.compare(password, hashedPassword);
}

module.exports={
    hashedPassword,
    comparedPassword,
}