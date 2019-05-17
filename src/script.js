const data = {
    "Рыбы": {
        "Форель": {},
        "Щука": {}
    },

    "Деревья": {
        "Хвойные": {
            "Лиственница": {},
            "Ель": {}
        },
        "Цветковые": {
            "Берёза": {},
            "Тополь": {}
        }
    }
};

const container = document.getElementById('container');
function createTree(container, data) {
    container.appendChild(getTree(data));
}

function getTree(obj) {
    if (typeof (obj) === 'object'){
        const ul = document.createElement('ul');
        Object.keys(obj).forEach((item) => {
            const li = document.createElement('li');
            li.innerHTML = item;
            const childrenUl = getTree(obj[item]);
            if (childrenUl) {
                li.appendChild(childrenUl);
            }
            ul.appendChild(li);
        });
        return ul;
    } else {
        return;
    }
}


createTree(container, data);