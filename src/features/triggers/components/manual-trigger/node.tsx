import { NodeProps } from "@xyflow/react";
import { memo } from "react";
import { BaseTriggerNode } from "@/features/triggers/base-trigger-node";
import { MousePointerIcon } from "lucide-react";
import { useState } from "react";
import { ManualTriggerDialog } from "./dialog";
import { NodeStatus } from "@/components/react-flow/node-status-indicator";

export const ManualTriggerNode = memo((props: NodeProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const nodeStatus = "loading";

  const handleOpenSettings = () => {
    setDialogOpen(true);
  }



  return (
    <>

      <ManualTriggerDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}// on clicking outside dialog box react ui will automatically pass false 
      />
      <BaseTriggerNode
        {...props}
        icon={MousePointerIcon}
        name="When clicking 'Execute workflow'"
        status={nodeStatus} 
        onSettings={handleOpenSettings}
        onDoubleClick={handleOpenSettings}
      />
    </>
  );
});