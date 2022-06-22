const fs = require("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;

console.log(dir);
const rarity = [
    { key: "", val: "original"},
    { key: "_r", val: "rare"},
    { key: "_sr", val: "super rare"},
];
const addRarity = (_str) => {
    let itemRarity;
    rarity.forEach((r) => {
        if(_str.includes(r.key)){
            itemRarity = r.val;
        }
    });
    return itemRarity;
};
const clearName = (_str) => {
    let name = _str.slice(0,-4);
    rarity.forEach((r) => {
        name = name.replace(r.key, "");
    });
    return name;
}
const getElements = (path) => {
    console.log(path);
    return fs
      .readdirSync(path)
      .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
      .map((i, index) => {
          return {
            id: index +1,
            name: clearName(i),
            filename: i,
            rarity: addRarity(i),
          };
      })

};

const layers = [
     {
        id: 1,
        name: "background",
        location: `${dir}/background/`,
        elements: getElements(`${dir}/background/`),
        position: {x: 0, y: 0},
        size: {width: width, height: height}
    }, 
    {
        id: 2,
        name: "base",
        location: `${dir}/base/`,
        elements: getElements(`${dir}/base/`),
        position: {x: 0, y: 0},
        size: {width: width, height: height}
    },
    {
        id: 3,
        name: "king",
        location: `${dir}/king/`,
        elements: getElements(`${dir}/king/`),
        position: {x: 0, y: 0},
        size: {width: width, height: height}
    },
    
    {
        id: 4,
        name: "mouth",
        location: `${dir}/mouth/`,
        elements: getElements(`${dir}/mouth/`),
        position: {x: 0, y: 0},
        size: {width: width, height: height}
    },
    {
        id: 5,
        name: "clansLogo",
        location: `${dir}/clansLogo/`,
        elements: getElements(`${dir}/clansLogo/`),
        position: {x: 0, y: 0},
        size: {width: width, height: height}
    },
  
    {
        id: 6,
        name: "scars",
        location: `${dir}/scars/`,
        elements: getElements(`${dir}/scars/`),
        position: {x: 0, y: 0},
        size: {width: width, height: height}
    },
   

];

console.log(layers[0].elements[0]);

module.exports ={layers,width,height};