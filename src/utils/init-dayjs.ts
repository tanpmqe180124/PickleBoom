
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import duration from "dayjs/plugin/duration";
import advancedFormat from "dayjs/plugin/advancedFormat";


dayjs.extend(utc); 
dayjs.extend(timezone); 
dayjs.extend(duration); 
dayjs.extend(advancedFormat); 
dayjs.tz.setDefault("Asia/Ho_Chi_Minh"); 

export default dayjs; 