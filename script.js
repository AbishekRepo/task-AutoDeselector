let grid = 2

clickedTiles = []
let section = document.querySelector('section')


for(row = 0; row<grid; row++)
{
    let wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

  for(col = 0; col < grid; col++){
    let tile = document.createElement('div')
    tile.classList.add('tile')
    wrapper.appendChild(tile)
  }
    section.appendChild(wrapper)
}

document.addEventListener('click', pattern)

function pattern(e){
    if(!e.target.classList.contains('tile')) return
    if(clickedTiles.includes(e.target)) return
    e.target.classList.add('selected')
    clickedTiles.push(e.target)

    let numberofTiles = document.querySelectorAll('.tile')
    

    if(clickedTiles.length >= numberofTiles.length){
        const interval = setInterval(() =>{
            const tile = clickedTiles.shift()
            tile.classList.remove('selected')
            if(clickedTiles.length === 0){
                clearInterval(interval)
            }
        },1000)
    }
}