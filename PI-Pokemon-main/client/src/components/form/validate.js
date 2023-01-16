
export function validate(inputs) {
    const errors={};
    if (!inputs.name){
        errors.name = "Se requiere un nombre de texto";
    }
    if(!inputs.height || inputs.height < 0){
        errors.height = "debe ser un número > 0"
    }
    if(!inputs.height || inputs.weight < 0){
        errors.weight = "debe ser un número > 0"
    }
    // if(inputs.health < 0){
    //     errors.health = "debe ser un número > 0"
    // }
    // if(inputs.attack < 0){
    //     errors.attack = "debe ser un número > 0"
    // }
    // if(inputs.defense < 0){
    //     errors.defense = "debe ser un número > 0"
    // }
    // if(inputs.speed < 0){
    //     errors.speed = "debe ser un número > 0"
    // }
    if(!inputs.img){
        errors.img = "link a tu imágen"
    }
    return errors;
}
