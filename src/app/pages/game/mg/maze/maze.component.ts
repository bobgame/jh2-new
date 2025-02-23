import { Component, OnInit, AfterViewInit, HostListener, Output, EventEmitter } from '@angular/core'
import { Cell, Maze, keyboardMap } from './models'
import { environment } from '../../../../../environments/environment'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { clone } from '../../../../units/Base'
import { LongPressDirective } from '../../../../directives/long-press.directive'

@Component({
  selector: 'jh-maze',
  templateUrl: './maze.component.html',
  styleUrls: ['./maze.component.scss'],
  imports: [CommonModule, FormsModule, LongPressDirective],
  standalone: true,
})
export class MazeComponent implements OnInit, AfterViewInit {
  row = 8
  col = 12
  private maze!: Maze
  private canvas!: HTMLCanvasElement
  private ctx!: CanvasRenderingContext2D
  private readonly cellSize = 30 // length of cell edge
  private readonly cellEdgeThickness = 2 // thickness of cell edge
  private readonly cellBackground = '#ffe7a9'
  private readonly solutionPathColor = 'rgb(100,70,15)'
  private readonly myPathColor = 'rgb(40,137,168)'
  // private readonly cellBackground = '#FFFFFF'
  // private readonly solutionPathColor = '#FF7575'
  // private readonly myPathColor = '#4080FF'
  private readonly myPathThickness = 16
  private readonly solutionPathThickness = 4
  private gameOver = false
  private myPath: Cell[] = []
  private currentCell!: Cell
  showTestButton = false
  busy = false

  @Output() winMaze = new EventEmitter<void>()

  constructor() {
    if (!environment.production) {
      this.row = 4
      this.col = 4
    }
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.canvas = <HTMLCanvasElement>document.getElementById('maze')
    this.ctx = this.canvas.getContext('2d')!
    this.drawMaze()
  }

  drawMaze() {
    this.busy = true
    this.validateInputs()

    this.maze = new Maze(this.row, this.col)
    this.canvas.width = this.col * this.cellSize + 2
    this.canvas.height = this.row * this.cellSize + 2

    // open the first and last cells to show the entrance and exit
    this.maze.firstCell.westEdge = false
    this.maze.lastCell.eastEdge = false

    // draw the cells
    this.ctx.lineWidth = this.cellEdgeThickness
    this.ctx.fillStyle = this.cellBackground
    this.maze.cells.forEach(x => x.forEach(c => this.draw(c)))

    this.initPlay()
    this.busy = false
  }

  initPlay() {
    this.gameOver = false
    this.myPath.length = 0
    this.currentCell = this.maze.firstCell // reset myPath position
    this.myPath.push(this.currentCell)
    this.drawPath(this.myPath)

    const endPath = this.maze.lastCell
    this.drawPath([endPath], 'rgb(173 255 159 / 59%)', true)
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (this.gameOver) return
    const direction = keyboardMap[event.key]
    if (direction) {
      this.move(direction)
      event.preventDefault()
    }
  }

  move(direction: 'Left' | 'Right' | 'Up' | 'Down') {
    let nextCell!: Cell
    if (direction === 'Left') {
      if (this.currentCell.col < 1) return
      nextCell = this.maze.cells[this.currentCell.row][this.currentCell.col - 1]
    }
    if (direction === 'Right') {
      if (this.currentCell.col + 1 >= this.col) return
      nextCell = this.maze.cells[this.currentCell.row][this.currentCell.col + 1]
    }
    if (direction === 'Up') {
      if (this.currentCell.row < 1) return
      nextCell = this.maze.cells[this.currentCell.row - 1][this.currentCell.col]
    }
    if (direction === 'Down') {
      if (this.currentCell.row + 1 >= this.row) return
      nextCell = this.maze.cells[this.currentCell.row + 1][this.currentCell.col]
    }

    if (nextCell && this.currentCell.isConnectedTo(nextCell)) {
      if (this.myPath.length > 1 && this.myPath[this.myPath.length - 2].equals(nextCell)) {
        // this is a step back; reverse the step by erasing the original path
        this.drawPath(this.myPath, this.cellBackground)
        this.myPath.pop()
      } else {
        this.drawPath(this.myPath, this.cellBackground)

        this.myPath = [nextCell]

        if (nextCell.equals(this.maze.lastCell)) {
          this.win()
          return
        }
      }

      this.drawPath(this.myPath)
      this.currentCell = nextCell
    }
  }

  panMove(direction: 'Left' | 'Right' | 'Up' | 'Down') {
    this.clearPress()
    this.move(direction)
  }

  pressMoveTimer = 0

  pressMove(direction: 'Left' | 'Right' | 'Up' | 'Down') {
    this.clearPress()
    let moveNum = 0
    this.pressMoveTimer = window.setInterval(() => {
      if (this.gameOver) return
      this.move(direction)
      moveNum++
      if (moveNum > 11) {
        this.clearPress()
      }
    }, 200)
  }

  clearPress() {
    clearTimeout(this.pressMoveTimer)
  }

  undo(nSteps = 5) {
    if (!this.gameOver && this.myPath.length > nSteps) {
      this.drawPath(this.myPath, this.cellBackground)
      this.myPath.splice(-nSteps)
      this.drawPath(this.myPath)
      this.currentCell = this.myPath[this.myPath.length - 1]
    }
  }

  private drawPath(path: Cell[], color = this.myPathColor, isEndOne = false) {
    this.ctx.fillStyle = color
    const thisPath = path[0]
    if (isEndOne) {
      this.ctx.fillRect(thisPath.col * this.cellSize + 2, thisPath.row * this.cellSize + 2, this.cellSize - 2, this.cellSize - 4)
    } else {
      this.ctx.fillRect(thisPath.col * this.cellSize + 4, thisPath.row * this.cellSize + 4, this.cellSize - 8, this.cellSize - 8)
    }

    this.ctx.stroke()
  }

  private draw(cell: Cell) {
    this.ctx.fillRect(cell.col * this.cellSize, cell.row * this.cellSize, (cell.col + 1) * this.cellSize, (cell.row + 1) * this.cellSize)
    if (cell.northEdge) {
      this.ctx.beginPath()
      this.ctx.moveTo(cell.col * this.cellSize, cell.row * this.cellSize)
      this.ctx.lineTo((cell.col + 1) * this.cellSize, cell.row * this.cellSize)
      this.ctx.stroke()
    }
    if (cell.eastEdge) {
      this.ctx.beginPath()
      this.ctx.moveTo((cell.col + 1) * this.cellSize, cell.row * this.cellSize)
      this.ctx.lineTo((cell.col + 1) * this.cellSize, (cell.row + 1) * this.cellSize)
      this.ctx.stroke()
    }
    if (cell.southEdge) {
      this.ctx.beginPath()
      this.ctx.moveTo((cell.col + 1) * this.cellSize, (cell.row + 1) * this.cellSize)
      this.ctx.lineTo(cell.col * this.cellSize, (cell.row + 1) * this.cellSize)
      this.ctx.stroke()
    }
    if (cell.westEdge) {
      this.ctx.beginPath()
      this.ctx.moveTo(cell.col * this.cellSize, (cell.row + 1) * this.cellSize)
      this.ctx.lineTo(cell.col * this.cellSize, cell.row * this.cellSize)
      this.ctx.stroke()
    }
  }

  private win() {
    this.winMaze.emit()
  }

  private validateInputs() {
    if (isNaN(this.row) || this.row < 1) {
      alert('Please enter a positive number for #Rows.')
      this.row = 15
    }
    if (isNaN(this.col) || this.col < 1) {
      alert('Please enter a positive number for #Columns.')
      this.col = 15
    }
    if (this.row > 500 || this.col > 500) {
      alert('Size too large. You may crash the browser...')
      this.row = 15
      this.col = 15
    }
    this.row = ~~this.row
    this.col = ~~this.col
  }

  // test() {
  //   this.busy = true
  //   const cellsHaveFourEdges: Cell[] = []
  //   let hasLoop = false
  //   const size = 50
  //   for (let i = 0; i < 100; i++) {
  //     const maze = new Maze(size, size)
  //     maze.cells.forEach(row =>
  //       row.forEach(c => {
  //         if (c.nEdges === 4) {
  //           cellsHaveFourEdges.push(c)
  //         }
  //         if (c.col < size - 1 && c.row < size - 1) {
  //           if (!c.eastEdge && !c.southEdge) {
  //             const cellOnTheRight = maze.cells[c.row][c.col + 1]
  //             if (!cellOnTheRight.southEdge) {
  //               const cellBelow = maze.cells[c.row + 1][c.col]
  //               if (!cellBelow.eastEdge) {
  //                 hasLoop = true
  //               }
  //             }
  //           }
  //         }
  //       }),
  //     )
  //     if (cellsHaveFourEdges.length) {
  //       // alert('dead loop')
  //       break
  //     }
  //     if (hasLoop) {
  //       // alert('open loop')
  //       break
  //     }
  //   }

  //   // console.log(`testing has finished`)
  //   this.busy = false
  // }
}
