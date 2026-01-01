export function renderListView(items) {
  const content = document.getElementById('content')
  if (!content) return

  content.className = 'list'
  content.innerHTML = ''

  const fragment = document.createDocumentFragment()

  items.forEach(item => {
    const listItem = document.createElement('div')
    listItem.className = 'list-item'
    listItem.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="list-item-image">
      <div class="list-item-content">
        <div>
          <h3 class="list-item-title">${item.title}</h3>
          <p class="list-item-description">${item.description}</p>
        </div>
        <div class="list-item-meta">
          <span class="list-item-date">${item.date}</span>
        </div>
      </div>
    `
    fragment.appendChild(listItem)
  })

  content.appendChild(fragment)
}
