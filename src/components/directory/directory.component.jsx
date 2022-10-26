import { Link } from 'react-router-dom';
import { DirectoryContainer } from './directory.styles';
import DirectoryItem from '../directory-item/directory-item.component';

const categories = [
  {
    id: 16578,
    title: 'Hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
  },
  {
    id: 17235,
    title: 'Jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
  },
  {
    id: 11985,
    title: 'Sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
  },
  {
    id: 18563,
    title: 'Womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
  },
  {
    id: 14580,
    title: 'Mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <Link to={`shop/${category.title.toLowerCase()}`} key={category.id}>
          <DirectoryItem category={category} />
        </Link>
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
