import icon from '../assets/icons/icon';
/* 
const rating = value => {
  const star = 5;

  return (
    <>
      {Array.from({ length: star }, (_, index) => {
        let stars = index + 1;
        return stars <= value ? icon.starF : icon.starB;
      })}
    </>
  );
};


 */

const rating = value => {
  let star = [1, 2, 3, 4, 5];
  return (
    <>
      {star.map(star => (
        <span  key={star}>{star <= value ? icon.starF : icon.starB}</span>
      ))}
    </>
  );
};

export default rating;
