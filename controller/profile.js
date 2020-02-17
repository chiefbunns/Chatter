//profile.js

//update profile information
const profileEdit = (req, res) => {
    const db = req.app.get('db')
    const user_id = req.session.profile.user_id;
    const user_handle = req.body.user_handle;
    const email = req.body.email;

    db.query(`
        UPDATE profile SET (
            user_handle,
            email
        ) = (
            \${user_handle},
            \${email}
        )
        WHERE user_id = \${user_id}`,
        {
            user_handle,
            email,
            user_id
        }
    )
        .then(data => {
            res.send(console.log('Profile Data Entered', res.data))
        })
        .catch(error => {
            console.log(error)
        })
}

//get profile information
const getProfile = (req, res) => {
    const db = req.app.get('db')
    const user_id = req.session.profile.user_id

    db.query(`SELECT * FROM profile WHERE user_id = \${user_id}`, { user_id })
        .then(data => {
            res.send(data)
        })
        .catch(console.error)
};

const getUserID = (req, res) => {
    const db = req.app.get('db')
    const { email } = req.params
    db.query(`SELECT user_id FROM profile WHERE email = \${email}`, { email })
        .then(data => {
            res.send(data)
        })
        .catch(console.error)
}

const getUserHandle = (req, res) => {
    const db = req.app.get('db')
    const { email } = req.params
    db.query(`SELECT user_handle FROM profile WHERE email = \${email}`, { email })
        .then(data => {
            res.send(data)
        })
        .catch(console.error)
}

module.exports = {
    profileEdit,
    getProfile,
    getUserID,
    getUserHandle
}