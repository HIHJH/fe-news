import { newsData } from "../../data/newsData"
import { renderRollingNews } from './views/RollingNewsView.js'

const ROLLING_INTERVAL = 5000
const RIGHT_COLUMN_DELAY = 1000

export const rolling = {
  indexLeft: 0,
  indexRight: 5,
  intervalIds: { left: null, right: null },
  pauseFlags: { left: false, right: false },

  animateRoll(columnId, isRight = false) {
    if (isRight) {
      this.indexRight = (this.indexRight + 1) % newsData.length
      renderRollingNews(columnId, this.indexRight)
    } else {
      this.indexLeft = (this.indexLeft + 1) % newsData.length
      renderRollingNews(columnId, this.indexLeft)
    }
  },

  startRolling() {
    renderRollingNews('rolling-left', this.indexLeft)
    renderRollingNews('rolling-right', this.indexRight)

    this.intervalIds.left = setInterval(() => {
      if (!this.pauseFlags.left) {
        this.animateRoll('rolling-left', false)
      }
    }, ROLLING_INTERVAL)

    setTimeout(() => {
      this.intervalIds.right = setInterval(() => {
        if (!this.pauseFlags.right) {
          this.animateRoll('rolling-right', true)
        }
      }, ROLLING_INTERVAL)
    }, RIGHT_COLUMN_DELAY)
  },

  setupRollingHover() {
    const rollingSection = document.getElementById('rolling-news')
    if (!rollingSection) return

    const leftColumn = document.getElementById('rolling-left')
    const rightColumn = document.getElementById('rolling-right')

    leftColumn.addEventListener('mouseenter', () => {
      this.pauseFlags.left = true
      leftColumn.classList.add('paused')
    })

    leftColumn.addEventListener('mouseleave', () => {
      this.pauseFlags.left = false
      leftColumn.classList.remove('paused')
    })

    rightColumn.addEventListener('mouseenter', () => {
      this.pauseFlags.right = true
      rightColumn.classList.add('paused')
    })

    rightColumn.addEventListener('mouseleave', () => {
      this.pauseFlags.right = false
      rightColumn.classList.remove('paused')
    })
  },

  init() {
    this.startRolling()
    this.setupRollingHover()
  }
}
