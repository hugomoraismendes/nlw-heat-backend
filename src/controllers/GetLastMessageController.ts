import { Request, Response } from 'express';
import { GetLastMessageService } from '../services';

class GetLastMessageController {
    async handle(request: Request, response: Response) {
        const service = new GetLastMessageService();

        const { quantity } = request.params;

        const result = await service.execute(+quantity || 3);

        return response.json(result);
    }
}

export { GetLastMessageController };
