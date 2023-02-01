import { friendRouter } from './routes/FriendRouter';
import { app } from './app';
import { userRouter } from './routes/UserRouter';
import { postRouter } from './routes/PostRouter';

app.use("/post", postRouter)

app.use("/user", userRouter)

app.use("/friend", friendRouter)