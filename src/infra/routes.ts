import { Router } from 'express';
import {
    AuthenticateUserController,
    CreateMessageController,
    GetLastMessageController,
    ProfileUserController
} from '../controllers';
import { ensureAuthenticated } from '../infra';

const routes = Router();

routes.post('/authenticate', new AuthenticateUserController().handle);

routes.post('/messages', ensureAuthenticated, new CreateMessageController().handle);

routes.get('/messages/last/:quantity?', new GetLastMessageController().handle);

routes.get('/github/', (request, response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});

routes.get('/profile', ensureAuthenticated, new ProfileUserController().handle);

routes.get('/signin/callback', (request, response) => {
    const { code } = request.query;

    return response.json({ github_code: code });
});

export { routes };
