const getLikesAndDislikes = (req, res) => {
    const db = req.app.get('db')
    const { comment_id } = req.params
    db.query(`SELECT likes_count, dislikes_count FROM comments WHERE comment_id = \${comment_id}`, { comment_id })
        .then((data) => {
            res.send(data)
        })
        .catch(console.error)
};

const increaseLikes = (req, res) => {
    const db = req.app.get('db')
    const comment_id = parseInt(req.params.comment_id)
    db.query(
        `UPDATE comments 
        SET likes_count = likes_count + 1
        WHERE comment_id = \${comment_id}`,
        {
            comment_id
        }
    )
        .then((data) => {
            res.send(data)
        })
        .catch(console.error)
}

const increaseDislikes = (req, res) => {
    const db = req.app.get('db')
    const comment_id = parseInt(req.params.comment_id)
    db.query(
        `UPDATE comments 
        SET dislikes_count = dislikes_count + 1
        WHERE comment_id = \${comment_id}`,
        {
            comment_id
        }
    )
        .then((data) => {
            res.send(data)
        })
        .catch(console.error)
}

const decreaseLikes = (req, res) => {
    const db = req.app.get('db')
    const comment_id = parseInt(req.params.comment_id)
    db.query(
        `UPDATE comments 
        SET likes_count = likes_count - 1
        WHERE comment_id = \${comment_id}`,
        {
            comment_id
        }
    )
        .then((data) => {
            res.send(data)
        })
        .catch(console.error)
}

const decreaseDislikes = (req, res) => {
    const db = req.app.get('db')
    const comment_id = parseInt(req.params.comment_id)
    db.query(
        `UPDATE comments 
        SET dislikes_count = dislikes_count - 1
        WHERE comment_id = \${comment_id}`,
        {
            comment_id
        }
    )
        .then((data) => {
            res.send(data)
        })
        .catch(console.error)
}

module.exports = {
    getLikesAndDislikes,
    increaseLikes,
    increaseDislikes,
    decreaseLikes,
    decreaseDislikes
}