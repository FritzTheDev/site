import { BrowserRouter, Route } from 'react-router-dom';
import { INDEX_ROUTE } from '.';
import { BLOG_INDEX_ROUTE, BLOG_POST_ROUTE } from './routes';

export const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path={INDEX_ROUTE} component={() => <div>Site Index</div>} />
      <Route exact path={BLOG_INDEX_ROUTE} component={() => <div>Blog Index</div>} />
      <Route exact path={BLOG_POST_ROUTE} component={() => <div>Blog Post</div>} />
    </BrowserRouter>
  );
};
