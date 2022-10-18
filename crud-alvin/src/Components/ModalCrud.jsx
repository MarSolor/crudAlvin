import { useState } from "react"; //!hook ;

export const useModalState = (initialOpen = false) => {
    const [visible, setVisible] = useState(initialOpen)
    
    return {
      visible,
      onOpen: () => {
        
        setVisible(true)
      },
      onClose: () => {
       
        setVisible(false)
      },
      onToggle: () => setVisible(!visible)

    }
  }