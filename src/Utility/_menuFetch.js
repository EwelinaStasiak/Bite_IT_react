async function fetchMenu (meals) {
    try {
        const response = await fetch('https://localhost:5001/Menu');
        const error = throwErrorMessage(response);
        const data = await response.json();
        return {menu: manageMenu(data, meals), error: error};
    } catch (error) {
        return {menu: null, error: error.message};
    }
}

function throwErrorMessage(response) {
    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
    }
    return null;
}

function manageMenu (fetchResponse, meals) {
    if (fetchResponse.meals.length > 0 && !objListsAreEqual(meals, fetchResponse.meals)) {
        return fetchResponse;
    } else {
        console.log('no update');
        return null;
    }
}

function objListsAreEqual(list1, list2) {
    if (list1.length !== list2.length) return false;

    for (let i = 0; i < list1.length; i++) {
        if (!objAreEqual(list1[i], list2[i])) return false
    }

    return true;
}

function objAreEqual(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (`${obj1[key]}` !== `${obj2[key]}`) return false;
    }
    return true;
}

export {fetchMenu, manageMenu}

