import PropTypes from 'prop-types';
import { Recipe } from '../Recipe/Recipe';
import { List } from './RecipeList.styled';
import { ListItem } from './RecipeList.styled';

export const RecipeList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <Recipe recipe={item} />
        </ListItem>
      ))}
    </List>
  );
};

RecipeList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
