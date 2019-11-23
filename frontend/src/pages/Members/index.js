import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';

import MemberBox from '../../components/MemberBox';

import history from '../../services/history';
import api from '../../services/api';

import { Container } from './styles';

function Members() {
  const [members, setMembers] = useState([]);

  const signed = useSelector(state => state.auth.signed);
  const admin = useSelector(state => state.auth.admin);

  useEffect(() => {
    async function loadMembers() {
      const response = await api.get('members');

      setMembers(response.data);
    }

    loadMembers();
  }, []);

  return (
    <Container>
      {signed && admin ? (
        <MemberBox
          Icon={MdAddCircleOutline}
          text="Adicionar membro"
          handleClick={() => history.push('/membro/novo')}
        />
      ) : null}
      {members.map(member => (
        <MemberBox image={member.picture} text={member.name} />
      ))}
    </Container>
  );
}

export default Members;
