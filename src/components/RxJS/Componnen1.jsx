import { sharingInformationService } from "../../services/sharing-information.service"


const ComponnenFirst = () => {

   const handleclick = ()=>{
    sharingInformationService.setSubject(true)
   }

   const noHandleclick = ()=>{
    sharingInformationService.setSubject(false)
   }

  return (
    <div>
        <button
            onClick={handleclick}
        >Send information</button>
        <button onClick={noHandleclick}>No enviar informacion</button>
    </div>
  )
}

export default ComponnenFirst