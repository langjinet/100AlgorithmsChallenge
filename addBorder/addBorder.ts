function addBorder(pictures: string[]): string[] {
    var wall = '*'.repeat(pictures[0].length + 2)
    pictures = pictures.map(function (s) {
        return '*'.concat(s, '*');
    })
    pictures.unshift(wall);
    pictures.push(wall);
    return pictures;
}

console.log(addBorder(["abc", "ded"]));