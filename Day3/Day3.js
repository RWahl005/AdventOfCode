/*
    Day 3 is coded in javascript since it is the language most equpited to handle this task.
*/
document.getElementById("run").onclick = (e) => {

    let data1 = proccessTextIntoArray(document.getElementById("input1").value);
    let data2 = proccessTextIntoArray(document.getElementById("input2").value);

    console.time("timer");


    var map = [
        new Promise((resolve, reject) => {
            calculateAllValueForLineOne(data1);
            resolve("done");
            console.log("Done with one");
        }),
        new Promise((resolve, reject) => {
            calculateAllValueForLineTwo(data2);
            resolve("done");
            console.log("done with two");
        })
    ];
    Promise.all(map.map((k, v) => 1)).then(function (results) {
        var promiseArray = [];
        const amountOfPromises = Math.floor(finalListOfPointsLineOne.length / 30);
        for (let i = 0, p = Promise.resolve(); i <= amountOfPromises; i++) {
            console.log("yee");
            p = p.then(_ => promiseArray.push(new Promise(resolve => {
                for (let x = i * 30; x < (i + 1) * 30; x++) {
                    if (isArrayInArray(finalListOfPointsLineTwo, finalListOfPointsLineOne[x])) {
                        console.log("INTERSECTING!");
                        finalListOfPoints.push(finalListOfPointsLineOne[x]);
                    }
                }
                resolve("done");
            })));
            // promiseArray.push(new Promise((resolve, reject) => {
            //     for (let x = i * 30; x < (i + 1) * 30; x++) {
            //         if (isArrayInArray(finalListOfPointsLineTwo, finalListOfPointsLineOne[x])) {
            //             console.log("INTERSECTING!");
            //             finalListOfPoints.push(finalListOfPointsLineOne[x]);
            //         }
            //     }
            //     resolve("done");
            // }));
        }

        Promise.all(promiseArray.map((k, v) => 1)).then(res => {
            console.log(finalListOfPoints);
            let output = null;
            findLeastDistance().forEach(value => {
                console.log(value);
                if (value[0] > 0 || value[1] > 0) {
                    if (output == null)
                        output = Math.abs(value[0]) + Math.abs(value[1]);
                }
            });
            console.log(output);
            console.timeEnd("timer");
        });

    });

    // Promise.all(map.map((k, v) => 1)).then(function (results) {
    //     console.log(finalListOfPointsLineOne);
    //     console.log(finalListOfPointsLineTwo);
    //     console.log("calculating");
    //     findIntersection();
    //     console.log(finalListOfPoints);
    //     let output;
    //     findLeastDistance().forEach(value => {
    //         if (value[0] > 0 || value[1] > 0) {
    //             if (output == null)
    //                 output = Math.abs(value[0]) + Math.abs(value[1]);
    //         }

    //     });
    //     console.log(output);
    //     console.log("done");
    // });


    // document.getElementById("output").innerText = arr[0];
}

function proccessTextIntoArray(data) {
    return data.split(",").map(v => v);
}

var finalListOfPointsLineOne = [];
var finalListOfPointsLineTwo = [];

var finalListOfPoints = [];

function findLeastDistance() {
    return finalListOfPoints.sort((a, b) => (Math.abs(a[0]) + Math.abs(a[1])) - (Math.abs(b[0]) + Math.abs(b[1])));
}

function findIntersection() {
    for (let d of finalListOfPointsLineOne) {
        // console.log(d);
        if (isArrayInArray(finalListOfPointsLineTwo, d)) {
            console.log("INTERSECTING!");
            finalListOfPoints.push(d);
        }
        if (finalListOfPoints.includes([158, -21])) {
            console.log("YES");
            return;
        }
    }
}

function isArrayInArray(arr, item) {
    var item_as_string = JSON.stringify(item);

    var contains = arr.some(function (ele) {
        return JSON.stringify(ele) === item_as_string;
    });
    return contains;
}

function calculateAllValueForLineOne(data) {
    let x = 0;
    let y = 0;
    for (var d of data) {
        let temp = 0;
        switch (d[0]) {
            case 'R':
                temp = x + parseInt(d.slice(1, d.length));
                for (let i = x; i <= temp; i++) {
                    finalListOfPointsLineOne.push([i, y]);
                }
                x += parseInt(d.slice(1, d.length));
                break;
            case 'L':
                temp = x - parseInt(d.slice(1, d.length));
                for (let i = x; i >= temp; i--) {
                    finalListOfPointsLineOne.push([i, y]);
                }
                x -= parseInt(d.slice(1, d.length));
                break;
            case 'U':
                temp = y + parseInt(d.slice(1, d.length));
                for (let i = y; i <= temp; i++) {
                    finalListOfPointsLineOne.push([x, i]);
                }
                y += parseInt(d.slice(1, d.length));
                break;
            case 'D':
                temp = y - parseInt(d.slice(1, d.length));
                for (let i = y; i >= temp; i--) {
                    finalListOfPointsLineOne.push([x, i]);
                }
                y -= parseInt(d.slice(1, d.length));
                break;
        }
    }
    console.log("size: " + finalListOfPointsLineOne.length);
}

function calculateAllValueForLineTwo(data) {
    let x = 0;
    let y = 0;
    for (var d of data) {
        let temp = 0;
        switch (d[0]) {
            case 'R':
                temp = x + parseInt(d.slice(1, d.length));
                for (let i = x; i <= temp; i++) {
                    finalListOfPointsLineTwo.push([i, y]);
                }
                x += parseInt(d.slice(1, d.length));
                break;
            case 'L':
                temp = x - parseInt(d.slice(1, d.length));
                for (let i = x; i >= temp; i--) {
                    finalListOfPointsLineTwo.push([i, y]);
                }
                x -= parseInt(d.slice(1, d.length));
                break;
            case 'U':
                temp = y + parseInt(d.slice(1, d.length));
                for (let i = y; i <= temp; i++) {
                    finalListOfPointsLineTwo.push([x, i]);
                }
                y += parseInt(d.slice(1, d.length));
                break;
            case 'D':
                temp = y - parseInt(d.slice(1, d.length));
                for (let i = y; i >= temp; i--) {
                    finalListOfPointsLineTwo.push([x, i]);
                }
                y -= parseInt(d.slice(1, d.length));
                break;
        }
    }
}