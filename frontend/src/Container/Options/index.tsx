import React from 'react';
import { MdOutlineExposurePlus1 } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { useInventoryContext } from 'hooks/useInventory';

import Button from 'components/Button';

import * as S from './styles';

const Options: React.FC = () => {
  const navigate = useNavigate();
  const { functions } = useInventoryContext();

  const getRelatoryCSV = async () => {
    await functions.handleDownloadReport();
  };

  return (
    <S.Container>
      <Button onClick={() => getRelatoryCSV()} size="small" color="green">
        Relatory
      </Button>
      <Button
        onClick={() => {
          functions.setInventoryItem(null);
          navigate('/inventory');
        }}
        size="small"
        color="green"
      >
        <MdOutlineExposurePlus1 size={16} />
      </Button>
    </S.Container>
  );
};

export default Options;
