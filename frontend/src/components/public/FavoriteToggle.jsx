import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton, Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../../store/Slices/Wishlist/WishSlice';

const FavoriteToggle = ({ product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.Wishlist);

  // Check if the product is already in the wishlist
  const isFavorite = wishlist.some((item) => item.id === product);

  const handleToggle = () => {
    if (isFavorite) {
      dispatch(removeFromWishlist({product}));
    } else {
      dispatch(addToWishlist({product}));
    }
  };

  return (
    <Tooltip title={isFavorite ? "Remove from favorites" : "Add to favorites"} placement="top" arrow>
      <IconButton onClick={handleToggle}>
        {isFavorite ? <FavoriteIcon color="success" /> : <FavoriteBorderIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default FavoriteToggle;
