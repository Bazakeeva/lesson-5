
function two (...list) {
    console.log(arguments);
    let i = 0;
    for (let i = 0; i < arguments.length; i++)
        {
            i+= arguments[i];
        }
        let two = Array.from(arguments).reduce((a, b) => a+= b);
        console.log(two);
    }
    two('фронтенд', 'апрель', 'урок', 'днетнорф', 'ьлерпа', 'кору');


    function sum(...theArgs) {
        let total = 0;
        for (const arg of theArgs) {
            total += arg;
        }
        return total
    }

    console.log(sum(1, 2, 3, 4, 5, 6, 7,));
    console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));


