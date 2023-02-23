export const imageUpload = async (images) => {
    let imaArr = []
    for(const item of images){
        const fromData = new FromData()
        fromData.append("file", item)
        fromData.append("file", item)

    }
}