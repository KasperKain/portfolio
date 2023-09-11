const convertImage = (e: any): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
    const file = e.target.files[0];
    if (!file) reject("No file found");

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
};

export default convertImage;
