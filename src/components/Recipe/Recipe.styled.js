import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
  padding: 8px;
  border-radius: 4px;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export const RecipeInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    color: red;
  }
`;

export const RecipeDifficulty = styled.div``;

export const BadgeList = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 8px;
`;

// easy - green
// medium - blue
// hard - red

export const Badge = styled.span`
  padding: 8px 16px;
  border: 1px solid black;
  border-radius: 4px;

  background-color: ${props => {
    if (!props.isActive) {
      return 'white';
    }
    switch (props.value) {
      case 'easy':
        return 'green';
      case 'medium':
        return 'blue';
      case 'hard':
        return 'red';
      default:
        return 'white';
    }
  }};
  color: ${props => {
    return props.isActive ? 'white' : 'black';
  }};
`;
