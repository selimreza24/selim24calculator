function numberBtn(number) {
    let extNum = $('#calc-screen').val();
    $('#calc-screen').val(extNum + number);
}
function clearBtn() {
    $('#calc-screen').val('');
}
function ecualBtn() {
    let ecual = eval($('#calc-screen').val());
    $('#calc-screen').val(ecual);
}

function delBtn() {
    let deleteValue = $('#calc-screen').val();
    if (deleteValue != '') {
        $('#calc-screen').val(deleteValue.slice(0, -1));
    }
}

function opaterotsBtn() {
    let rootResut = Math.sqrt($('#calc-screen').val());
    $('#calc-screen').val(rootResut);
}