const getComments = (req, res) => {
    const db = req.app.get('db')
    db.query('SELECT * FROM comments LEFT JOIN profile ON comments.user_id = profile.user_id')
        .then(data => {
            res.send(data)
        })
        .catch(console.error)
};

const getCommentsByURL = (req, res) => {
    const db = req.app.get('db')
    const { page_url } = req.query
    db.query(`
    SELECT * FROM comments 
    LEFT JOIN profile ON comments.user_id = profile.user_id 
    WHERE page_url = \${page_url}
    ORDER BY likes_count DESC`,
        { page_url }
    )
        .then((data) => {
            res.send(data)
        })
        .catch(console.error)
};

const postComment = (req, res) => {
    console.log(req.body)
    const db = req.app.get('db')
    const user_id = req.session.profile.user_id;
    const page_url = req.body.page_url;
    const body = req.body.body;
    const created_at = req.body.created_at;
    const likes_count = req.body.likes_count;
    const dislikes_count = req.body.dislikes_count;
    const replies_count = req.body.replies_count;

    db.query(`
    INSERT INTO comments (
        user_id,
        page_url,
        body,
        created_at,
        likes_count,
        dislikes_count,
        replies_count
    )
    VALUES (
        \${user_id},
        \${page_url},
        \${body},
        \${created_at},
        \${likes_count},
        \${dislikes_count},
        \${replies_count}
    )
    `,
        {
            user_id,
            page_url,
            body,
            created_at,
            likes_count,
            dislikes_count,
            replies_count
        }
    )
        .then(data => {
            res.send(console.log('Entered'))
        })
        .catch(error => {
            console.log(error)
        })
}

const deleteComment = (req, res) => {
    const db = req.app.get('db')
    const comment_id = req.params.comment_id;

    db.query(`DELETE FROM comments WHERE comment_id = \${comment_id}`, { comment_id })
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({ errorMessage: "Error, it did not delete" });
            console.log(err)
        });
}

module.exports = {
    getComments,
    getCommentsByURL,
    postComment,
    deleteComment
}

