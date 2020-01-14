import React, { Component } from "react";
import './drag_sort.css'
class DragSort extends Component {
    constructor() {
        super()
        this.dragItemRef = React.createRef()
        this.dragConatinerRef = React.createRef()
        this.state = {
            dragItemHeight: 1,
            dragItemIndex: -1,
            dragItemPlaceHolder: -1,
            dropItemIndex: -1,
            dragItemGhostIndex: -1,
            dragItemGhostValue: null,
            dragItemGhostTopPosition: 0,
            dragContainorTopPosition: 1,
            isItemDragging: false,
            list: [
            ]
        }
    }

    componentDidMount() {
        this.setState({
            list: this.props.list
        })
    }

    getDragContainorTop() {
        this.setState({
            dragContainorTopPosition: this.dragConatinerRef.current.getBoundingClientRect().top
        })
    }

    getDragItemHeight() {
        if (this.dragItemRef.current != null) {
            this.setState({
                dragItemHeight: this.dragItemRef.current.clientHeight
            })
        }
    }

    sortItem(index) {
        if (this.state.dragItemIndex != -1 && index != -1 && this.state.isItemDragging) {
            let tempList = this.state.list;
            const tempValue = tempList[this.state.dragItemIndex]
            tempList[this.state.dragItemIndex] = tempList[index]
            tempList[index] = tempValue
            this.setState({
                dragItemIndex: index,
                dragItemPlaceHolder: index
            })
        }
    }

    render() {
        return (
            <div style={{justifyContent:"center", display:"flex"}}>
                <ul className={'drag-list-group'} ref={this.dragConatinerRef}
                    onMouseLeave={() => {
                        console.log('leave')
                        this.setState({
                            isItemDragging: false,
                            dragItemPlaceHolder: -1,

                        })
                    }}

                >
                    {

                        ((this.state.isItemDragging) && (this.state.dragItemIndex != -1)) ? (
                            <li className="dragGhost" style={{ top: (Math.abs(this.state.dragContainorTopPosition - this.state.dragItemGhostTopPosition) - 17) }} ref={this.dragItemRef}>
                                {this.state.dragItemGhostValue}
                            </li>
                        ) : null
                    }

                    {
                        this.state.list.map((data, index) => (
                            <li draggable={false}
                                className={'list-item ' +  ((this.state.isItemDragging && (this.state.dragItemIndex == index)) ? 'drag_item' : '')}
                                onMouseDown={(event) => {
                                    this.getDragContainorTop()
                                    //  this.getDragItemHeight()
                                    this.setState({
                                        isItemDragging: true,
                                        dragItemIndex: index,
                                        dragItemPlaceHolder: index,
                                        dragItemGhostValue: data.title,
                                    })
                                }}
                                onMouseMove={(event) => {
                                    this.setState({
                                        dragItemGhostTopPosition: event.pageY
                                    })
                                }}
                                onMouseOver={(event) => {
                                    this.sortItem(index)
                                }}
                                onMouseUp={(event) => {
                                    this.setState({
                                        isItemDragging: false,
                                        dragItemPlaceHolder: -1
                                    })
                                }}
                            >
                                {(this.state.isItemDragging) && (this.state.dragItemPlaceHolder == index) ? null : (data.title)}
                            </li>
                        ))
                    }

                </ul>
            </div>
        )
    }
}

export default DragSort

