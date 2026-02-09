const test1 = (req, res) => {
    try {
        for (let i = 0; i <= 1e6; i++) {
            console.log(i)
        }
        res.status(200).json({ success: true, message: "Test 1" })
    } catch (err) {
        console.error(err)
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

const testController = { test1 }

module.exports = testController