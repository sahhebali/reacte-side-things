// use local storage as your Db for now

const addToDb = id => {
    const exists = localStorage.getItem('shoping_Cart');
    let shoping_Cart = {};
    if (!exists) {
        shoping_Cart[id] = 1
    }
    else {
        shoping_Cart = JSON.parse(exists);
        if (shoping_Cart[id]) {
            const newCount = shoping_Cart[id] + 1;
            shoping_Cart[id] = newCount
        }
        else {
            shoping_Cart[id] = 1
        }
    }
    updateDb(shoping_Cart)
}

const updateDb = cart => {
    localStorage.setItem('shoping_Cart', JSON.stringify(cart))
}
const getDb = () => localStorage.getItem('shoping_Cart')

const removeDb = id => {
    const exists = getDb();

    if (!exists) {

    }
    else {
        const shoping_Cart = JSON.parse(exists);
        delete shoping_Cart[id];
        updateDb(shoping_Cart)
    }
}

export { addToDb, removeDb }


/* const addToDb = id => {
    const exists = getDb()
    let shoping_Cart = {};
    if (!exists) {
        shoping_Cart[id] = 1;
    }
    else {
        shoping_Cart = JSON.parse(exists);
        if (shoping_Cart[id]) {
            const newCount = shoping_Cart[id] + 1;
            shoping_Cart[id] = newCount
        }
        else {
            shoping_Cart[id] = 1;
        }
    }


    updateDb(shoping_Cart)
}

const getDb = () => localStorage.getItem('shoping_Cart');
const updateDb = cart => {
    localStorage.setItem('shoping_Cart', JSON.stringify(cart))
} */








/* const addToDb = id => {
    const exists = localStorage.getItem(id);
    console.log(exists)
    if (!exists) {
        localStorage.setItem(id, 1)
    }
    else {
        const newExists = parseInt(exists) + 1;
        localStorage.setItem(id, newExists)
    }
} */


/* const addToDb = id => {
    const exists = getDb()
    let shoping_Cart = {};
    if (!exists) {
        shoping_Cart[id] = 1;
    }
    else {
        shoping_Cart = JSON.parse(exists);
        if (shoping_Cart[id]) {
            const newCount = shoping_Cart[id] + 1;
            shoping_Cart[id] = newCount
        }
        else {
            shoping_Cart[id] = 1
        }
    }
    updateDb(shoping_Cart)
}

const getDb = () => localStorage.getItem('shoping_Cart');
const updateDb = cart => {
    localStorage.setItem('shoping_Cart', JSON.stringify(cart))
}

const removeFromDb = id => {
    const exists = getDb();
    if (!exists) {

    }
    else {
        const shoping_Cart = JSON.parse(exists);
        delete shoping_Cart[id];
        updateDb(shoping_Cart)
    }
} */

/*
remove item
const removeFromDb = id => {
    const exists = getDb();
    if (!exists) {

    }
    else {
        const shoping_Cart = JSON.parse(exists);
        delete shoping_Cart[id];
        updateDb(shoping_Cart)
    }
} */

