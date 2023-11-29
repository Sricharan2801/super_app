
const FormattedTime = () => {
    const time = new Date().toLocaleString("en-US",
        {
            timeZone: "Asia/Kolkata",
            timeStyle: "short"
        })
    return time
}

export default FormattedTime