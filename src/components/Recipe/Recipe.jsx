import { Component } from 'react';

import { BsAlarm } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { HiOutlineChartBar } from 'react-icons/hi';
import PropTypes from 'prop-types';
import {
  Container,
  Image,
  RecipeInfo,
  InfoItem,
  RecipeDifficulty,
  BadgeList,
  Badge,
} from './Recipe.styled';

export class Recipe extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;

    const {
      recipe: {
        name,
        image = 'https://via.placeholder.com/340x200',
        time,
        servings,
        calories,
        difficulty,
      },
    } = this.props;

    return (
      <Container>
        <Image src={image} alt={name} onClick={this.toggle} />
        <h2>{name}</h2>
        {isOpen && (
          <>
            <RecipeInfo>
              <InfoItem>
                <BsAlarm />
                {time} min
              </InfoItem>
              <InfoItem>
                <AiOutlinePieChart />
                {servings} servings
              </InfoItem>
              <InfoItem>
                <HiOutlineChartBar />
                {calories} calories
              </InfoItem>
            </RecipeInfo>

            <RecipeDifficulty>
              <h3>Difficulty</h3>
              <BadgeList>
                <Badge isActive={difficulty === 'easy'} value={difficulty}>
                  Easy
                </Badge>
                <Badge isActive={difficulty === 'medium'} value={difficulty}>
                  Medium
                </Badge>
                <Badge isActive={difficulty === 'hard'} value={difficulty}>
                  Hard
                </Badge>
              </BadgeList>
            </RecipeDifficulty>
          </>
        )}
      </Container>
    );
  }
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
};
