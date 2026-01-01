export function renderGridView(data) {
  const content = document.getElementById('content')
  if (!content) return

  content.className = 'grid'
  content.innerHTML = ''

  data.forEach(item => {
    const gridItem = document.createElement('li')
    gridItem.className = 'grid-item'
    gridItem.innerHTML = `
      <a href="#"><img src="${item.image}" alt="${item.title}" class="grid-item-image"></a>
    `
    content.appendChild(gridItem)
  })
}
