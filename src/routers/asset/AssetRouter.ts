import { NextFunction, Request, Response, Router } from 'express';
import AssetController from '../../controllers/AssetController';

class AssetRouter {
  private _router = Router();
  private _controller = AssetController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.get('/:asset', async (req: Request, res: Response, next: NextFunction) => {
      let result = await this._controller.fetchAsset(req.params.asset);
      await res.status(200).json(result);
    });
  }
}

export = new AssetRouter().router;
