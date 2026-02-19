
import { MdBallot } from "react-icons/md";
import { MdFreeBreakfast } from "react-icons/md";
import { TbSoupFilled } from "react-icons/tb";
import { FaPastafarianism } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";


const Categories=[
    {
    id:1,
    name:"All",
    Icon:<MdBallot className="w-[60px] h-[60px] text-orange-500"/>
    },
    {
        id:2,
        name:"Breakfast",
        Icon:<MdFreeBreakfast className="w-[60px] h-[60px] text-orange-500" />
        },
        {
            id:3,
            name:"soups",
            Icon:<TbSoupFilled className="w-[60px] h-[60px] text-orange-500"/>
            },
            {
                id:4,
                name:"Pasta",
                Icon:<FaPastafarianism className="w-[60px] h-[60px] text-orange-500" />
                },
                {
                    id:5,
                    name:"Main_course",
                    Icon:<MdRestaurantMenu className="w-[60px] h-[60px] text-orange-500"/>
                    },
                    {
                        id:6,
                        name:"Pizza",
                    Icon:<GiFullPizza className="w-[60px] h-[60px] text-orange-500" />
                        },
                        {
                            id:7,
                            name:"Burgers",
                            Icon:<FaHamburger className="w-[60px] h-[60px] text-orange-500"/>
                            },

]
export default Categories