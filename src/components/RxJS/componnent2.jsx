import { useEffect, useState } from 'react'
import { sharingInformationService } from '../../services/sharing-information.service';




const ComponnentSecond = () => {

    const [count, setCount] = useState(0);

    const subscription$ = sharingInformationService.getSubject();
      
    // El operador '!!' se utiliza para convertir un valor en su equivalente booleano.
    useEffect(()=>{
        subscription$.subscribe( data => {
            if(!!data) setCount(count+1)
            
            console.log('click');
        });
    })


  return (
    <div>{count}</div>
  )
}

export default ComponnentSecond