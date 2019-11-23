import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { Container, Modal, Separator, Wrapper, List, Buttons } from './styles';

function ModalMembers({ show, oldMembers, showModal, setProjectMembers }) {
  const [members, setMembers] = useState([]);
  const [changedMembers, setChangeMembers] = useState(new Map());

  useEffect(() => {
    async function loadMembers() {
      const response = await api.get('members');

      setMembers(response.data);
      // setChangeMembers(
      //   oldMembers.map(member => changedMembers.set(member.id, true))
      // );
    }

    loadMembers();
  }, []);

  function handleChangeCheckbox(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    setChangeMembers(changedMembers.set(item, isChecked));
  }

  function handleAddButton() {
    const checkedMembers = [];

    changedMembers.forEach((value, key) => {
      if (value === true) {
        checkedMembers.push(
          members.find(member => member.id.toString() === key)
        );
      }
    });

    setProjectMembers(checkedMembers);
    showModal(false);
  }

  return (
    <>
      {show ? (
        <Container>
          <Modal>
            <h2>Adicionar membros</h2>

            <Separator />

            <Wrapper>
              <List>
                {members.map(member => (
                  <label htmlFor={member.id}>
                    <input
                      name={member.id}
                      type="checkbox"
                      onChange={handleChangeCheckbox}
                    />
                    {member.name}
                    <span />
                  </label>
                ))}
              </List>

              <Buttons>
                <button
                  className="cancel"
                  type="button"
                  onClick={() => showModal(false)}
                >
                  Cancelar
                </button>
                <button className="add" type="button" onClick={handleAddButton}>
                  Adicionar
                </button>
              </Buttons>
            </Wrapper>
          </Modal>
        </Container>
      ) : null}
    </>
  );
}

export default ModalMembers;
