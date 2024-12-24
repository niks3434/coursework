const inputName = document.getElementById('name');
const inputDate = document.getElementById('date');

const selectMst = document.getElementById('mst');
const selectSrv = document.getElementById('srv');

const button = document.getElementById('entry-btn');

button.addEventListener('click', function () {

    if (!inputName.value || !inputDate.value || !selectMst.value || !selectSrv.value) {
        alert("Заполните все поля перед записью!");
        return;
    }

    const date = new Date(inputDate.value);
    const dateDone = date.toLocaleString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    const mstName = selectMst.options[selectMst.selectedIndex].innerText;
    const srvName = selectSrv.options[selectSrv.selectedIndex].innerText;

    alert(`${inputName.value}! Вы записаны на ${srvName} к ${mstName} окошко на ${dateDone}`);
});
