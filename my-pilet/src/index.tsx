import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'piral-core';

const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  app.registerPage('/page', Page);

}
