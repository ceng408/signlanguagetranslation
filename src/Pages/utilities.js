// Define our labelmap
const labelMap = {
    1: {'name':'Güzel', color:'red'},
    2: {'name':'Evet', color:'yellow'},
    3: {'name':'Sıkılmak', color:'gray'},
    4: {'name':'Cevap', color:'blue'},
    5: {'name':'Seni Seviyorum', color:'purple'},
    6: {'name':'Bayan', color:'orange'},
    7: {'name':'Beş', color:'green'}
}

// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            
            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'         
            
            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/1.5);
            ctx.stroke()
        }
    }
}