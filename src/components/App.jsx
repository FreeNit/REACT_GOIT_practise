import { RecipeList } from './RecipeList/RecipeList';
import recipes from './recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { PaymentWidget } from './PaymentWidget/PaymentWidget';

export const App = () => {
  return (
    <Layout>
      <RecipeList items={recipes} />
      <PaymentWidget />
      <GlobalStyle />
    </Layout>
  );
};
