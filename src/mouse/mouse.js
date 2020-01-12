import React, { Component } from 'react'
import './mouse.css';

class Mouse extends Component {
    constructor() {
        super()
        this.dragImg = null
        this.pointerPosition=0
        this.placeHolderRef =React.createRef;
        this.pointerMovement  = 0
        this.placeHolderClientHeight =1
        this.state = {
            dragIndex: -1,
            dropIndex: -1,
            placeHolder:-1,
            topPostion: 0,
           
            isDraggig: false,
            readyForDrag: false,
            dragItemValue:null,
            list: [
                {
                    id: 1,
                    value: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                    isDraggig: false
                },
                {
                    id: 2,
                    value: 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB',
                    isDraggig: false
                },
                {
                    id: 3,
                    value: 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC',
                    isDraggig: false
                },
                {
                    id: 4,
                    value: 'DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD',
                    isDraggig: false
                },
                {
                    id: 5,
                    value: 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
                    isDraggig: false
                },
                {
                    id: 6,
                    value: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
                    isDraggig: false
                },
                {
                    id: 7,
                    value: 'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
                    isDraggig: false
                },
                {
                    id: 8,
                    value: 'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
                    isDraggig: false
                },
            ]
        }
    }

    componentDidMount() {
        //  React.in
        this.dragImg = new Image(0, 0);
        this.dragImg.src =
            'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    }

    swapList(index) {
        if (this.state.isDraggig && this.state.readyForDrag) {
            let tempList = this.state.list;
            console.log('-----dragIndex----'+this.state.dragIndex)
            console.log('---dropIndex--'+index)
            const tempValue = tempList[this.state.dragIndex]
            tempList[this.state.dragIndex] = tempList[index]
            tempList[index] = tempValue
            this.setState({
                dragIndex:index
            })
        }
    }

    render() {
        return (
            <div>
                <ul className={'list-group'}
>
                    {(this.state.dragIndex != -1  && this.state.isDraggig)? (

                        <li
                        ref={ this.placeHolderRef }

                            className={((this.state.isDraggig) ? 'dragGhost' : null)}
                            style={{ top:( this.pointerPosition - 28 ),pointerEvents:"none"}}
                        >

                            {this.state.dragItemValue }
                        </li>

                    ) : null}


                    {
                        this.state.list.map((data, index) => (
                            <li draggable={false}
                            
                                className={'list-item ' + (this.state.dragIndex == index ? 'tobeDrag' : 'notDrag')}
                    
                                onMouseDown={(event) => {
                                    this.setState({
                                        dragItemValue:this.state.list[index]['value'],
                                        dragIndex: index,
                                        readyForDrag: true

                                    })
                                }}

                                onMouseMove={(event) => {
                                    if (this.state.readyForDrag) {
                                        this.pointerPosition = event.pageY
                                        this.setState({
                                            isDraggig: true,
                                        })
                                    }
                                }}

                                onMouseUp={(event) => {
                                   //   this.swapList()
                                    this.setState({
                                        isDraggig: false,
                                        readyForDrag: false
                                    })

                                }}

                                onMouseOver={() => {
                                  //  console.log(index)
                                    this.setState({
                                        placeHolder:index
                                    })
                                    this.swapList(index)
                                }}


                              
                                
                            >
                               
                                {(this.state.placeHolder == index && this.state.isDraggig) ? ('') : data.value}
                               
                            </li>
                        ))
                    }

                </ul>
            </div>
        )
    }
}

export default Mouse;

