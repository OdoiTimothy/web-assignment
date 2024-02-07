function validateCredentials(email,password){
    const validEmail ="2200706767@mubs.ac.ug";
    const validPassword ="22/U/6767";
    if (email === validEmail && password === validPassword) {
        console.log(`User email is $ {email}, login successfully!`);
    }else{
        console.log ("correct user credentials");
        console.log("incorrect user credentials!");
    
    }
    
    }
    validateCredentials();