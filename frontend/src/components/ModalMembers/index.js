import React, { useEffect, useState, useCallback } from 'react';

import api from '../../services/api';

import { Container, Modal, Separator, Wrapper, List, Buttons } from './styles';

function ModalMembers({ show, oldMembers, showModal, setProjectMembers }) {
  const [members, setMembers] = useState([]);
  const [changedMembers, setChangeMembers] = useState(new Map());

  // Gambiarra para forçar a renderização do component
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  function mapMembers(m) {
    const membersMapped = new Map();

    m.forEach(member => {
      membersMapped.set(member.id, { name: member.name, checked: false });
    });

    return membersMapped;
  }

  useEffect(() => {
    async function loadMembers() {
      const response = await api.get('members');

      setMembers(response.data);

      setChangeMembers(mapMembers(response.data));
    }

    loadMembers();
  }, []);

  function handleChangeCheckbox(e) {
    const key = Number(e.target.name);
    const isChecked = e.target.checked;

    const element = changedMembers.get(key);
    element.checked = isChecked;

    setChangeMembers(changedMembers.set(key, element));
    forceUpdate();
  }

  function handleAddButton() {
    const checkedMembers = [];

    changedMembers.forEach((value, key) => {
      if (value.checked === true) {
        checkedMembers.push(members.find(member => member.id === key));
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
                {Array.from(changedMembers.entries()).map(member => (
                  <label htmlFor={member[0]} key={member[0]}>
                    <input
                      name={member[0]}
                      type="checkbox"
                      onChange={handleChangeCheckbox}
                      checked={member[1].checked}
                    />
                    {member[1].name}
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
