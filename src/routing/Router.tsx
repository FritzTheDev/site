import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { FourZeroFour } from '../pages';
import { BlogIndex } from '../pages/BlogIndex';
import { DemoIndex } from '../pages/DemoIndex';
import { Home } from '../pages/Home';
import {
  INDEX_ROUTE,
  CONTACT_ROUTE,
  MAILING_LIST_ROUTE,
  DEMO_INDEX_ROUTE,
  BLOG_INDEX_ROUTE,
  BLOG_POST_ROUTE,
  NOT_FOUND_ROUTE
} from './routes';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={INDEX_ROUTE} component={Home} />
        <Route exact path={DEMO_INDEX_ROUTE} component={DemoIndex} />
        <Route exact path={BLOG_INDEX_ROUTE} component={BlogIndex} />
        <Route exact path={BLOG_POST_ROUTE} component={() => <div>Blog Post</div>} />
        <Route exact path={CONTACT_ROUTE} component={() => <div>Contact Me</div>} />
        <Route exact path={MAILING_LIST_ROUTE} component={() => <div>Mailing List</div>} />
        <Route exact path={NOT_FOUND_ROUTE} component={() => <FourZeroFour />} />
        <Route path={INDEX_ROUTE} render={() => <Redirect to={NOT_FOUND_ROUTE} />} />
      </Switch>
    </BrowserRouter>
  );
};
