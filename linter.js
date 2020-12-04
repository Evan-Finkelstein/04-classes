const Stack = require('./stack.js')


module.exports = (passedFunction) => {
    const openItems = ['(', '{', '['];
    const closeItems = [')', '}', ']'];
    const matchingItems = {
        '}': '{',
        ')': '(',
        ']': '[',
        '{': '}',
        '(': ')',
        '[': ']'
    }
    console.log(passedFunction)
    const testData = passedFunction.code.replace(/[^\{\(\[\]\)\}]/g, '');

    const data = testData.split('');
    let stack = new Stack;


    for (let item of data) {

        if (openItems.includes(item)) {
            stack.push(item);

        } else if (closeItems.includes(item)) {
            const returnedItem = stack.pop();

            if (matchingItems[item] != returnedItem) {

                if (openItems.includes(returnedItem)) {
                    return { "error": `missing '${matchingItems[returnedItem]}'` }
                }

                return { "error": `missing '${matchingItems[item]}'` };
            }
        }
    }
    if (stack.peek()) {
        return { "error": `missing '${matchingItems[stack.peek()]}'` };
    }
    return {
        "success": true
    };
}