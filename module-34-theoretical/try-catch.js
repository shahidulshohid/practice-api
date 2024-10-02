function checkAge(){
    const ageField = document.getElementById('age')
    const ageText = ageField.value;
    const errorTag = document.getElementById('error')

    try{
        const age = parseInt(ageText)
        if(isNaN(age)){
            throw 'please enter a number'
        }
        else if(age < 18){
            throw 'baccha kaccha not allowed'
        }
        else if(age > 30){
            throw 'murobbi ra akhane aisen na'
        }
        errorTag.innerHTML = ' '
    }
    catch(error){
        console.log('ERROR:', error)
        errorTag.innerHTML = 'ERROR:' + error;
    }
    finally{
        console.log('All done inside try catch')
    }
    console.log(11111)
}