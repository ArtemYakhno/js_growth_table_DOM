'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const appendRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');
  const appendColumn = document.querySelector('.append-column');
  const removeColumn = document.querySelector('.remove-column');
  const table = document.querySelector('.field');

  appendRow.addEventListener('click', () => {
    if (removeRow.disabled) {
      removeRow.disabled = false;
    }

    const newRow = document.createElement('tr');

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      const newTD = document.createElement('td');

      newRow.append(newTD);
    }
    table.append(newRow);

    if (table.rows.length === 10) {
      appendRow.disabled = true;
    }
  });

  removeRow.addEventListener('click', () => {
    if (appendRow.disabled) {
      appendRow.disabled = false;
    }

    table.lastElementChild.remove();

    if (table.rows.length === 2) {
      removeRow.disabled = true;
    }
  });

  appendColumn.addEventListener('click', () => {
    if (removeColumn.disabled) {
      removeColumn.disabled = false;
    }

    for (const row of table.rows) {
      const newTD = document.createElement('td');

      row.append(newTD);
    }

    if (table.rows[0].cells.length === 10) {
      appendColumn.disabled = true;
    }
  });

  removeColumn.addEventListener('click', () => {
    if (appendColumn.disabled) {
      appendColumn.disabled = false;
    }

    for (const row of table.rows) {
      row.lastElementChild.remove();
    }

    if (table.rows[0].cells.length === 2) {
      removeColumn.disabled = true;
    }
  });
});
