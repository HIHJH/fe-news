import { newsData } from "../../../data/newsData"

export function renderRollingNews(columnId, currentIndex) {
    const column = document.getElementById(columnId)
    if (!column) return

    const list = column.querySelector('.rolling-news-list')
    const item = newsData[currentIndex % 5]
    const nextItem = newsData[(currentIndex + 1) % 5]

    // [TODO] semantic tag 변경 + 애니메이션 수정
    // article, li를 넣는다.
    // 제 3의 모듈이 타이머 컨트롤 -> store일 수도 있고...
    list.innerHTML = `
     <article class="rolling-news-item">
      <div>
        <div style="background-color:red">
          <span class="typo-display-bold-14">${item.press || 'Unknown'}</span>
          <p class="typo-available-medium-14">${item.description}</p>
        </div>
        <div>
          <span class="typo-display-bold-14">${nextItem.press || 'Unknown'}</span>
          <p class="typo-available-medium-14">${nextItem.description}</p>
        </div>
      </div>
    </article>
    `
  }