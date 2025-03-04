
import { Icon } from "@iconify/react/dist/iconify.js";

type IconButtonParam = {
  iconKey: string;
  action?: React.FC|any;
};
const IconButton = ({ iconKey, action }: IconButtonParam) => {
  
  return (
    <>
        <div className="">
          <Icon
            onClick={action}
            icon={`${iconKey}`}
            className={``}
          />
        </div>
    </>
  );
};

export default IconButton;
