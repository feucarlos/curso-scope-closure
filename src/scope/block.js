function fruits(){
    if (true){
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
    }

    console.log(fruit1);
    console.log(fruit2); // ReferenceError: fruit2 is not defined
    console.log(fruit3);
}

fruits();