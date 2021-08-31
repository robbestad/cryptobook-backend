import { Router } from 'express';
import AssetRouter from './asset/AssetRouter';

class MainRouter {
  private _router = Router();
  private _assetRouter = AssetRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.use('/asset', this._assetRouter);
  }
}

export = new MainRouter().router;
