import { useVeltClient, VeltSidebarButton, VeltCommentTool, VeltHuddleTool, VeltPresence } from '@veltdev/react';
import { useEffect, useState } from 'react';



export default function YourDocument() {

  // Get the Velt client
  const { client } = useVeltClient();

  useEffect(() => {
    if (client) {
      // Set a document ID
      client.setDocumentId('checking-whether-pada-is-workingOrNot');
      const selectionElement = client.getSelectionElement();
      selectionElement.enableLiveSelection();

    }
  }, [client]);

  return (
   <div style={{ display:"flex", gap:"8px", marginRight:"16px"}}>
     <VeltPresence flockMode={true}/>
     <VeltHuddleTool/>
     <VeltCommentTool/>
     <VeltSidebarButton/>
   </div>
  );
}
