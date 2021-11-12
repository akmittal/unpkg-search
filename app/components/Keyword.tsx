import { Badge } from '@chakra-ui/react';
import { Link } from 'remix';
import { ReactElement } from 'react';

interface Props {
  item: string;
}

export default function Keyword({ item }: Props): ReactElement {
  return (
    <Link to={`/search/keywords:${item}`}>
      <a>
        <Badge
          colorScheme="purple"
          p="1"
          m="1"
          borderRadius="10"
          cursor="pointer"
        >
          {item}
        </Badge>
      </a>
    </Link>
  );
}
