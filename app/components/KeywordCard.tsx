import { Icon } from '@chakra-ui/icons';
import { Flex, Heading } from '@chakra-ui/react';
import { Link } from 'remix';
import React, { ReactElement } from 'react';
import { IconType } from 'react-icons';

interface Props {
  icon: IconType;
  label: string;
  keyword: string;
}

const KeywordCard: React.FC<Props> = function Keyword({
  icon,
  label,
  keyword,
}: Props): ReactElement {
  return (
    <Flex flex="1 0 40%" justifyContent="space-around">
      <Link to={`/search/keywords:${keyword}`}>
        <a href={`/search/keywords:${keyword}`}>
          <Flex
            p="4"
            border="1px solid #444"
            borderRadius="2"
            cursor="pointer"
            gridGap="2"
            _hover={{ background: 'rgba(144,122,239,0.4)' }}
          >
            <Icon as={icon} />
            <Heading size="sm">{label}</Heading>
          </Flex>
        </a>
      </Link>
    </Flex>
  );
};

export default KeywordCard;
