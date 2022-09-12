    const [fileIcon, setFileIcon] = useState(<FilesIcon size={"30px"}/>)
    const [fileName, setFileName] = useState("File Name")
    const [fileSize, setFileSize] = useState(0)
    const [fileDate, setFileDate] = useState({date:"YYYY-MM-DD", time:"HH:MM GMT"})


        
   useEffect(()=>{
    parseSize()
    parseName()
    parseDate()
    parseIcon()
   },[Size,Name,dataDate,Icon])

   async function parseSize(){ // takes in bytes, returns a string with bytes/kb/mb/gb/tb/pb/eb depending on size
    const newsize = formatBytes(Size);
    setFileSize(newsize)
   }
   async function parseName(){ // takes in a string and trims it if greater than 30 chars
    if (Name?.length > 30){ 
        const newname = Name?.slice(0,30) + " . . .";
        return setFileName(newname)
    }else return setFileName(Name)
   }
   async function parseDate(){ // takes in unix time and returns utc date and time
    
    const newdate = new Date(dataDate * 1000)
    const date = newdate.getFullYear() + '-' + newdate.getUTCMonth() + "-" + newdate.getUTCDay();
    const time = newdate.getUTCHours() + ":" + newdate.getUTCMinutes() + " UTC"
    setFileDate({date:date,time:time})
   }
   async function parseIcon(){ // takes in mime type and returns a corresponding icon
    const types = [ "text", "image", "video", "application", "font"]
    const type = Icon.split("/")[0]
    switch (type){
        case "image": setFileIcon(<VideoIcon size={"30px"}/>);
        break;
        case "video": setFileIcon(<VideoIcon size={"30px"}/>);
        break;
        case "text": setFileIcon(<TextIcon size={"30px"}/>);
        break;
        case "application": setFileIcon(<ApplicationIcon size={"30px"}/>);
        break;
        case "font": setFileIcon(<ApplicationIcon size={"30px"}/>);
        break;
        default: setFileIcon(<FilesIcon size={"30px"}/>)
    }

   }
  
  
   function formatBytes(bytes) {
	const marker = 1024; // Change to 1000 if required
	const decimal = 3; // Change as required
	const kiloBytes = marker; // One Kilobyte is 1024 bytes
	const megaBytes = marker * marker; // One MB is 1024 KB
	const gigaBytes = marker * marker * marker; // One GB is 1024 MB
	const teraBytes = marker * marker * marker * marker; // One TB is 1024 GB
    const petaBytes = marker * marker * marker * marker * marker; // one PB is 1024 TB
    const exaBytes = marker * marker * marker * marker * marker; // one EB is 1024 PB

	// return bytes if less than a KB
    // return bytes if less than a KB
	if (bytes < kiloBytes) return `${bytes} Bytes`;
	// return KB if less than a MB
	if (bytes < megaBytes) return `${(bytes / kiloBytes).toFixed(decimal)} KB`;
	// return MB if less than a GB
	if (bytes < gigaBytes) return `${(bytes / megaBytes).toFixed(decimal)} MB`;
	// return GB if less than a TB
	if (bytes < teraBytes) return `${(bytes / gigaBytes).toFixed(decimal)} GB`;
    //return TB if less than a PB
    if (bytes < petaBytes) return `${(bytes / teraBytes).toFixed(decimal)} TB`;
    //return PB if less than a EB
    if (bytes < exaBytes) return `${(bytes / petaBytes).toFixed(decimal)} PB`;
    //return EB if greater than a EB
    if (bytes > exaBytes) return `${(bytes / exaBytes).toFixed(decimal)} EB`;
}
	

