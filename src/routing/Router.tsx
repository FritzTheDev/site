import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { FourZeroFour, Contact, BlogIndex, Home, About } from '../pages';
import {
  INDEX_ROUTE,
  CONTACT_ROUTE,
  ABOUT_ROUTE,
  BLOG_INDEX_ROUTE,
  BLOG_POST_ROUTE,
  NOT_FOUND_ROUTE
} from './routes';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={INDEX_ROUTE} component={Home} />
        <Route exact path={BLOG_INDEX_ROUTE} component={BlogIndex} />
        <Route exact path={BLOG_POST_ROUTE} component={() => <div>Blog Post</div>} />
        <Route exact path={CONTACT_ROUTE} component={Contact} />
        <Route exact path={ABOUT_ROUTE} component={About} />
        <Route exact path={NOT_FOUND_ROUTE} component={FourZeroFour} />
        <Route path={INDEX_ROUTE} render={() => <Redirect to={NOT_FOUND_ROUTE} />} />
      </Switch>
    </BrowserRouter>
  );
};
