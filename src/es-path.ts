import path from "node:path";

export default () => {
    const dir = "/usr/uploads";
    const adesso = new Date();
    const anno = adesso.getFullYear();
    const file = "file.txt";

    //  const filePath = dir + "/" + anno + "/" + file;
    const filePath = path.join(dir, anno.toString(), file);

     console.log(filePath);

     const filePath2 = "C:\\Users\\nico\\file.pdf";
    const fileName = path.basename(filePath2);
    console.log(fileName);;
    
     
}