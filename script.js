var controller = new AbortController();

var body = document.querySelector("body");
body.addEventListener('click', (e) => {
    console.log(e.target)
}, { signal : controller.signal });


var deleted = document.querySelector("#delete");
deleted.addEventListener("click", (e) => {
    // document.querySelector("#comment").removeEventListener("click", handler);
    document.querySelector("#comment").remove();
}, { signal : controller.signal });

// remove eventListener
controller.abort();


var handler = (e) => {
    console.log("clicked on commet!");
}

// document.querySelector("#comment").addEventListener("click", (e) => {
//     console.log("clicked on commet!");
// });

function over() {
    console.log("Over");
}

// $("#parent").on("click", () => {
//     console.log("Click on Parent!")
// })
// $("#child").on("click", () => {
//     console.log("Click on Child!")
// })
// $("#grandChild").on("click", () => {
//     console.log("Click on grandChild!")
// })

// document.querySelector("#parent").addEventListener("click", () => console.log("Parent clicked!"))

// $("#parent").off();
// $("#parent").find("*").off();


function removeInlineEvents(element) {
    var element = document.querySelector("#grandChild");
    // /^on/i.test($("#grandChild")[0].attributes[1].nodeName);

    var attrs = element.attributes;

    for (let attr of attrs) {
        if (/^on/i.test(attr.nodeName)) {
            element[attr.nodeName] = null;
        }
    }
}
