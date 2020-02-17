require('dotenv').config();

const app = require('express')();
const cors = require('cors');
const massive = require('massive');
const bodyParser = require('body-parser');

const comments = require('./controller/comments');
const profile = require('./controller/profile');
const authentication = require('./controller/authentication');
const login = require('./controller/login');
const withAuth = require('./middleware');
const likes_dislikes = require('./controller/likes_dislikes');

app.use(cors());
app.use(bodyParser.json());
app.get('/data', (req, res) => res.send('Working'));

massive(process.env.DATABASE_URL)
    .then(db => {
        app.set('db', db);
        console.log('Postgres Connected');
        app.get('/comments', comments.getComments);
        app.get('/page_comments', comments.getCommentsByURL);
        app.post('/post/comment', withAuth, comments.postComment);
        app.delete('/comments/:comment_id', withAuth, comments.deleteComment);

        app.get('/profile', withAuth, profile.getProfile);
        app.get('/user_id/:email', profile.getUserID);
        app.get('/user_handle/:email', profile.getUserHandle);
        app.put('/profile/edit', withAuth, profile.profileEdit);


        app.get('/likes_dislikes/:comment_id', likes_dislikes.getLikesAndDislikes);
        app.put('/increase_likes/:comment_id', withAuth, likes_dislikes.increaseLikes);
        app.put('/increase_dislikes/:comment_id', withAuth, likes_dislikes.increaseDislikes)
        app.put('/decrease_likes/:comment_id', withAuth, likes_dislikes.decreaseLikes)
        app.put('/decrease_dislikes/:comment_id', withAuth, likes_dislikes.decreaseDislikes)

        // Create a User
        app.post('/createuser', authentication.createUser)
        //Logs the User in
        app.post('/users/authenticate', login.login)
        //Checks the JWT
        app.get('/checktoken', withAuth, login.checkToken)

        app.listen(process.env.PORT || 8080, () => console.log('listening on 8080'))

    })