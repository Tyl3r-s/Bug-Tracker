import bugModel from '../Models/bugModel';

export function retrieveBugs() {
    let data = [];

    data.push(new bugModel({
        _id: 23456789,
        name: "crash on load",
        details: "app crashes after 3 seconds",
        steps: "open application and it will crash",
        version: "v2.0",
        assigned: "Tyler",
        creator: "Joe Blogs",
        priority: "1",
        time: "11:38",  
    }))

    data.push(new bugModel({
        _id: 23456781,
        name: "modal disappears",
        details: "info window closes after 3 seconds",
        steps: "open open and it will close itself",
        version: "v2.0",
        assigned: "Tyler",
        creator: "Joe Blogs",
        priority: "2",
        time: "12:38",  
    }))

    let sorted = data.sort((a,b) => {return a.priority - b.priority})
    return sorted;
}