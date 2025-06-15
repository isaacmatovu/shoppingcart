import { HomePage, Shop, Cart } from "./lazyComponents";
import { routePaths } from "./routes.config";
import LazyWrapper from "./lazyWrapper";
import Layout from "./layout";

const routes = [
  {
    path: routePaths.home,
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <LazyWrapper>
            <HomePage />
          </LazyWrapper>
        ),
      },

      {
        path: "shop",
        element: (
          <LazyWrapper>
            <Shop />
          </LazyWrapper>
        ),
      },
      {
        path: "cart",
        element: (
          <LazyWrapper>
            <Cart />
          </LazyWrapper>
        ),
      },
    ],
  },
];

export default routes;
