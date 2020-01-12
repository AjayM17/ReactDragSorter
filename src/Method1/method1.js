import React, { Component, Fragment } from 'react'
import './method1.css';;

class Mouse extends Component {
    constructor() {
        super()

       
      

        this.state = {
           dragElementIndex : -1,
           placeHolderElement:-1,
           isDragging:false,
          topPosition:0,
            list: [
                {
                    id: 1,
                    value: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                   
                },
                {
                    id: 2,
                    value: 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB',
                 
                },
                {
                    id: 3,
                    value: 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC',
                  
                },
                {
                    id: 4,
                    value: 'DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD',
                  
                },
                {
                    id: 5,
                    value: 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
                  
                },
                {
                    id: 6,
                    value: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
                 
                },
                {
                    id: 7,
                    value: 'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
                 
                },
                {
                    id: 8,
                    value: 'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
                  
                },
            ]
        }
    }

    dragListItem(dropIndex) {
        if(dropIndex != -1 && this.state.dragElementIndex != -1) {
            this.setState({
                placeHolderElement:dropIndex
            })
          //  console.log(this.state.placeHolderElement)
            
        }
       
       
    }

    swapList(){
        if(this.state.placeHolderElement != -1 && this.state.dragElementIndex != -1){
            let tempList = this.state.list
            let tempElement = tempList[this.state.placeHolderElement]
            tempList[this.state.placeHolderElement] = tempList[this.state.dragElementIndex]
            tempList[this.state.dragElementIndex] = tempElement
            this.setState({
                isDragging:false
            })
        }
    }



    render() {
        return (
            <div>
                <ul className={'list-group'}

                >
                    {
                        this.state.list.map((data, index) => (
                            <Fragment>
                                 {
                              (( index == this.state.placeHolderElement  ) && this.state.isDragging) ?(
                                <li 
                                className="list-item "
                                // style={{visibility:"hidden"}}
                              >

                              </li>
                               ):null
                           }
                            <li draggable={false}
                                className="list-item "
                                style={((index == this.state.dragElementIndex)  && (this.state.isDragging)) ? {position:'absolute', pointerEvents:"none", top:this.state.topPosition -17 ,zIndex:999 , width:'100%',backgroundColor:'blue'} : {position:'relative'}}
                                onMouseDown={(event) => {
                                    this.setState({
                                        dragElementIndex:index,
                                        placeHolderElement:index,
                                        isDragging:true
                                    })
                                 //   console.log(index + '------ onMouseDown -----')
                                }}
                                onMouseOver ={(event) => {
                                    if(this.state.dragElementIndex != index){

                                        this.dragListItem(index)
                                    }
                                    console.log('---over--')
                                }}
                               
                                onMouseMove={(event) => {
                                    if(this.state.isDragging){
                                        this.setState({
                                            topPosition: event.pageY
                                        })
                                   //     console.log(index)
                                    }
                                   
                               //    
                                  }}

                                
                                onMouseUp={(event) => {
                                 this.swapList()
                               //     console.log(index + '------ onMouseUp -----')
                                }}

                            >
                                {data.value} 

                            </li>
                          
                          

                            </Fragment>
                         
                        ))
                    }

                </ul>
            </div>
        )
    }
}

export default Mouse;