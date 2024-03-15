<table border="5"> <!-- Table Definitions--> 
<!-- border property adds double border and width -->
Each table cell is defined by a <td> and a </td> tag

Each table row starts with a <tr> and ends with a </tr> tag

th stands for table header. and <th> elements are bold and centered

use the CSS border property on table, th, and td elements

table, th, td {
border: 1px solid black;
}

Collapsed border
table, th, td {
border: 1px solid black;
border-collapse: collapse;
}
