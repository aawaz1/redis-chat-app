import { Avatar, AvatarImage } from "../ui/avatar";
import { Info, X } from "lucide-react";
import { useSelectedUser } from "@/store/useSelectedUser";

const ChatTopbar = () => {
  const { selectedUser ,setSelectedUser } = useSelectedUser()
  return (
    <div className="w-full h-20 p-4 flex justify-between items-center border-b">
      <div className="flex items-center gap-2">
        <Avatar className="flex justify-center items-center">
          <AvatarImage
            src={selectedUser?.image || "user-placeholder.png"}
            alt="User Image"
            className="w-10 h-10 object-cover rounded-full"
          />
        </Avatar>
      
            <span className="font-medium capitalize">{selectedUser?.name}</span>
       
      </div>
      <div className="flex gap-2 ">
        <Info className="text-muted-foreground cursor-pointer hover:text-primary"/>
        <X onClick={() => setSelectedUser(null)} className="text-muted-foreground cursor-pointer hover:text-primary"/>

      </div>
    </div>
  );
};

export default ChatTopbar;
