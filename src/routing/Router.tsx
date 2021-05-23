import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { MainLayout } from '../shared';
import {
  INDEX_ROUTE,
  CONTACT_ROUTE,
  HIRE_ME_ROUTE,
  DEMO_INDEX_ROUTE,
  BLOG_INDEX_ROUTE,
  BLOG_POST_ROUTE,
  NOT_FOUND_ROUTE
} from './routes';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={INDEX_ROUTE} component={() => <div>Site Index</div>} />
        <Route exact path={BLOG_INDEX_ROUTE} component={() => <div>Blog Index</div>} />
        <Route exact path={DEMO_INDEX_ROUTE} component={() => <div>DEMO INDEX</div>} />
        <Route exact path={BLOG_POST_ROUTE} component={() => <div>Blog Post</div>} />
        <Route exact path={CONTACT_ROUTE} component={() => <div>Contact</div>} />
        <Route exact path={HIRE_ME_ROUTE} component={() => <div>Contact</div>} />
        <Route exact path={NOT_FOUND_ROUTE} component={() => <MainLayout />} />
        <Route path={INDEX_ROUTE} render={() => <Redirect to={NOT_FOUND_ROUTE} />} />
      </Switch>
    </BrowserRouter>
  );
};
