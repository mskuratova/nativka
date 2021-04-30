const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")

// sm.onclick = () => alert("yo!")
// sm.onclick = null

// const fn = () => alert("yo!")
// sm.onclick = fn
//
// console.dir(sm)

function onclicHandler(e) {
    e.stopPropagation()
    console.dir(e.target.name)
}

// sm.onclick = onclicHandler
// sm.onmouseover = onclicHandler
// sm.onmouseleave = onclicHandler

md.onclick = onclicHandler