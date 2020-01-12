import React, { Component } from 'react'
import './mouse.css';

class Mouse extends Component {
    constructor() {
        super()
        this.dragImg = null
        this.pointerPosition=0
        this.pointerMovement  = 0
        this.state = {
            dragIndex: -1,
            dropIndex: -1,
            topPostion: 0,
            isDraggig: false,
            readyForDrag: false,
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

    swapList2(dropPageY) {
      
      //  console.log('ciel'+Math.round(dropPageY/32))
        if (this.state.isDraggig && this.state.readyForDrag) {

          let index = -1
           if(this.pointerMovement<0) {
            console.log('---UP')
           
              index = Math.floor(dropPageY / 34)    
               console.log('----------dropPageY / 34------'+ dropPageY / 34)
               console.log('-------Math.floor(dropPageY / 34)-----' + Math.floor(dropPageY / 34))
           }else{
               console.log('---DOWN')

               index = Math.ceil(dropPageY / 34) - 1
            console.log('----------dropPageY / 34------'+ dropPageY / 34)
            console.log('-------Math.ceil(dropPageY / 34)-----' + Math.ceil(dropPageY / 34))



            
           }

            if (index > 7) {
                index = 7
            }
            if (index < 0) {
                index = 0
            }
            this.setState({
                dragIndex: index
            })
         console.log('----index-----' +index)
           
            let tempList = this.state.list;
            const tempValue = tempList[this.state.dragIndex]
            tempList[this.state.dragIndex] = tempList[index]
            tempList[index] = tempValue
        }



    }
    swapList() {
     
        this.setState({
            isDraggig: false,
            readyForDrag: false,
            dragIndex: -1,
            //  list: tempList
        })
      
        // this.setState({
        //     isDraggig: false,
        //     readyForDrag: false,
        //     dragIndex: -1
        //     //  list: tempList
        // })
        // let index = Math.round(dropPageY / 36) - 1
        // console.log(index)
        // if (index > 7) {
        //     index = 7
        // }
        // if (index < 0) {
        //     index = 0
        // }
        // let tempList = this.state.list;
        // const tempValue = tempList[this.state.dragIndex]
        // tempList[this.state.dragIndex] = tempList[index]
        // tempList[index] = tempValue

    }

    render() {
        return (
            <div onMouseLeave={(event) => {
             
                this.setState({
                    isDraggig: false,
                    readyForDrag: false
                })
            }}>
                <ul className={'list-group'}

                    onMouseLeave={(event) => {
                     
                        this.setState({
                            isDraggig: false,
                            readyForDrag: false
                        })
                    }}>
                    {(this.state.dragIndex != -1  && this.state.isDraggig)? (

                        <li

                            className={((this.state.isDraggig) ? 'dragGhost' : null)}
                            style={{ top: this.pointerPosition}}
                            onMouseMove={(event) => {
                             
                               console.log(event.screenY)
                               console.log(event.pageY)
                            
                            
                               this.pointerPosition = event.pageY
                               this.pointerMovement = event.movementY
                               this.swapList2(event.pageY)
                              
                            }}
                        >

                            {this.state.list[this.state.dragIndex]['value']}
                        </li>

                    ) : null}


                    {
                        this.state.list.map((data, index) => (
                            <li draggable={false}
                            
                                className={'list-item ' + (this.state.dragIndex == index ? 'tobeDrag' : 'notDrag')}
                             //   style={ { backgroundColor: ((this.state.dragIndex == index) ? 'transparent' : '') , minHeight: '36px' }}
                                onMouseDown={(event) => {
                                    this.pointerPosition = event.pageY
                                    this.setState({
                                        topPostion: event.pageY,
                                        dragIndex: index,
                                        readyForDrag: true

                                    })
                                }}
                                onMouseUp={(event) => {
                                      this.swapList()
                                    this.setState({
                                        isDraggig: false,
                                        readyForDrag: false
                                    })

                                }}


                                onMouseMove={(event) => {


                                  
                                  

                                    if (this.state.readyForDrag) {
                                      
                                        this.pointerPosition = event.pageY
                                        this.setState({
                                            isDraggig: true,
                                            topPostion:( event.pageY ),
                                        })
                                  //      this.swapList2(index)
                                    }
                                }}
                            >
                               
                                {(this.state.dragIndex == index && this.state.isDraggig) ? ('') : data.value}
                               
                            </li>
                        ))
                    }

                </ul>
            </div>
        )
    }
}

export default Mouse;




// import React, { Component } from 'react'
// import './mouse.css';

// class Mouse extends Component {
//     constructor() {
//         super()
//         this.dragImg = null
//         this.liRef = React.createRef()
//         this.liRefs = []
//         this.state = {
//             dragIndex: -1,
//             dropIndex: -1,
//             topPostion: 0,
//             isDraggig: false,
//             readyForDrag: false,
//             bound:[],
//             list: [
//                 {
//                     id: 1,
//                     value: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
//                     isDraggig: false
//                 },
//                 {
//                     id: 2,
//                     value: 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB',
//                     isDraggig: false
//                 },
//                 {
//                     id: 3,
//                     value: 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC',
//                     isDraggig: false
//                 },
//                 {
//                     id: 4,
//                     value: 'DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD',
//                     isDraggig: false
//                 },
//                 {
//                     id: 5,
//                     value: 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
//                     isDraggig: false
//                 },
//                 {
//                     id: 6,
//                     value: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
//                     isDraggig: false
//                 },
//                 {
//                     id: 7,
//                     value: 'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
//                     isDraggig: false
//                 },
//                 {
//                     id: 8,
//                     value: 'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
//                     isDraggig: false
//                 },
//             ]
//         }
//     }

//     componentDidMount() {
//         //  React.in
//         this.dragImg = new Image(0, 0);
//         this.dragImg.src =
//             'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
//     }

//     swapList2(index){
//         if(this.state.isDraggig && this.state.readyForDrag){
//           console.log(index)
//             // let index = Math.round(dropPageY / 32) - 1
          
//             // if(index > 7) {
//             //     index = 7
//             // } 
//             // if(index < 0) {
//             //     index =0
//             // }
//             // this.setState({
//             //     dragIndex:index
//             // })
//             // console.log(index)
//             // console.log(this.state.dragIndex)
//             let tempList = this.state.list;
//             const tempValue = tempList[this.state.dragIndex]
//             tempList[this.state.dragIndex] = tempList[index]
//             tempList[index] = tempValue
//         }
        
        

//     }
//     swapList(dropPageY) {
//         console.log('---swap---')
//         this.setState({
//             isDraggig:false,
//             readyForDrag:false,
//             dragIndex:-1
//           //  list: tempList
//         })
//          let index = Math.round(dropPageY / 34) - 1
//          console.log(index)
//          if(index > 7) {
//              index = 7
//          } 
//          if(index < 0) {
//              index =0
//          }
//         let tempList = this.state.list;
//         const tempValue = tempList[this.state.dragIndex]
//         tempList[this.state.dragIndex] = tempList[index]
//         tempList[index] = tempValue
      
//     }

//     render() {
//         let temp = []
//         return (
//             <div onMouseLeave={(event)=> {
//                 console.log('leave')
//                this.setState({
//                    isDraggig:false,
//                    readyForDrag:false
//                })
//             }}>
//                 <ul className={'list-group'}  
                
//                 onMouseLeave={(event)=> {
//                     console.log('leave')
//                    this.setState({
//                        isDraggig:false,
//                        readyForDrag:false
//                    })
//                 }}>
//                     {
//                         this.state.list.map((data, index) => (
//                             <li draggable={false}
//                               className="list-item " 
//                               ref = {el => {

//                                console.log(el)
//                             // console.log(el.getBoundingClientRect())
                               
//                               }}
//                            onMouseDown={(event) => {
//                                console.log( index + '------ onMouseDown -----')
//                                this.setState({
//                                 topPostion: event.pageY,
//                                    dragIndex:index,
//                                    readyForDrag:true
                                 
//                                })

                               
//                            }}
                         
//                            onMouseUp={(event) => {
//                              //  this.swapList(event.pageY)
//                             this.setState({
//                                 isDraggig:false,
//                                 readyForDrag:false
//                             })
                          
//                         }}
                        

//                         onMouseMove={(event) => {
                          
//                           if(this.state.readyForDrag) {
//                             //  console.log(temp[index])
//                             //  console.log(event.getBo)
//                               this.setState({
//                                   isDraggig:true,
                               
//                                topPostion: event.pageY,
                              
//                               })
//                               this.swapList2(index)
//                           }
//                         }}
//                            >

                               
//                                <span
                               
                               
                               
//                                className={ ((this.state.dragIndex == index && this.state.isDraggig) ? 'dragGhost' : null)}
//                                style={{top:this.state.topPostion}}
//                                >


// {data.value}


//                                </span>
                             
//                             </li>
//                         ))
//                     }

//                 </ul>
//             </div>
//         )
//     }
// }

// export default Mouse;