function writeLetter(row, column, letter) {
    console.log(row);
    // 1. Obtener todas las celdas disonibles
    let cells = document.querySelectorAll(".game--cell")
    // querySelectorArray --> array de celdas

    // 2. Las celdas son nodos HTML. Debemos actualizar la propiedad textContent del nodo correspondiente a la fila y columna que nos pasan en la función
    let position = row * 5 + column;
    cells[position].textContent = letter;
}