const cells = document.querySelectorAll('.tooltip');
const table = document.querySelector('.codeBox');

// Define the classes that a cell should contain in order to be highlighted
const targetClass = ['oem', 'jump'];

let currentTarget = undefined;

table.addEventListener('mouseover', e => {

  // Destructure the classlist, ignoring the first class which always is "tooltip"
  // If there is no second class assigned, this cell will never be highlighted.
  // You can choose whatever variable name you'd like
  const [ _, byteType ] = e.target.classList;

  // In fact no other cells should be highlighted, so return immediately.
  if (!byteType) return;

  currentTarget = byteType;

  // I created a "highlight" class that we only add to the parent element, which
  // is the actual <td> element, despite the variable name I'm using right now
  cells.forEach(cell => {
    if (cell.classList.contains(currentTarget)) {
      cell.parentElement.classList.add('highlight');
    }
  });
});

table.addEventListener('mouseout', e => {

  cells.forEach(cell => {
    if (cell.parentElement.classList.contains('highlight')) {
      cell.parentElement.classList.remove('highlight');
    }
  });

  currentTarget = undefined;
});

// /***************************
//  * For OEM bytes           *
//  ***************************/
// var highlight = document.getElementsByClassName("oem");
//
// for (var i = 0; i < highlight.length; i++) {
//     highlight[i].addEventListener("mouseover", highlightOEM);
//     highlight[i].addEventListener("mouseout", DonthighlightOEM);
// }
//
// function highlightOEM() {
//     for (var i = 0; i < highlight.length; i++) {
//         highlight[i].classList.add("bytehighlight");
//     }
// }
// function DonthighlightOEM() {
//     for (var i = 0; i < highlight.length; i++) {
//         highlight[i].classList.remove("bytehighlight");
//     }
// }
//
