google.charts.load("current", {packages:["timeline"]});
google.charts.setOnLoadCallback(drawChart);
var today = new Date('May 28 2018');

function date(day, month, year)
{
  return new Date(year, month - 1, day);
}

function sdate(day, month, year)
{
  return date(day, month, year);
}

function edate(day, month, year)
{
  var d = date(day, month, year);
  d.setDate(d.getDate() + 1);
  return d;
}

function drawChart() {
  var container = document.getElementById('timeline-container1');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();
  dataTable.addColumn({ type: 'string', id: 'Module' })
  dataTable.addColumn({ type: 'string', id: 'Project' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
    [ '29 Novembre 2017', '30 Jan 2018', new Date(today.getFullYear(), today.getMonth(), today.getDate()), new Date(today.getFullYear(), today.getMonth(), today.getDate()) ],

    [ 'Unix System Programming', 'my_printf', sdate(06, 11, 2017), edate(19, 11, 2017) ],
    [ 'Unix System Programming', 'my_ls', sdate(20, 11, 2017), edate(03, 12, 2017) ],
    [ 'Unix System Programming', 'my_sokoban', sdate(04, 12, 2017), edate(17, 12, 2017) ],
    [ 'Unix System Programming', 'navy', sdate(05, 02, 2018), edate(25, 02, 2018) ],
    [ 'Unix System Programming', 'tetris', sdate(26, 02, 2018), edate(18, 03, 2018) ],

    [ 'Mathematics', '101pong', sdate(06, 11, 2017), edate(19, 11, 2017) ],
    [ 'Mathematics', '102architect', sdate(20, 11, 2017), edate(03, 12, 2017) ],
    [ 'Mathematics', '103cipher', sdate(04, 12, 2017), edate(17, 12, 2017) ],
    [ 'Mathematics', '104intersection', sdate(18, 12, 2017), edate(07, 01, 2018) ],
    [ 'Mathematics', '105torus', sdate(08, 01, 2018), edate(21, 01, 2018) ],
    [ 'Mathematics', '106bombyx', sdate(05, 02, 2018), edate(18, 02, 2018) ],
    [ 'Mathematics', '107transfer', sdate(19, 02, 2018), edate(04, 03, 2018) ],
    [ 'Mathematics', '108trigo', sdate(05, 03, 2018), edate(18, 03, 2018) ],
    [ 'Mathematics', '109titration', sdate(19, 03, 2018), edate(01, 04, 2018) ],
    [ 'Mathematics', '110borwein', sdate(02, 04, 2018), edate(15, 04, 2018) ],

    [ 'Elementary Programming in C', 'BSQ', sdate(27, 11, 2017), edate(17, 12, 2017) ],

    [ 'Elementary Programming in C (Part 1)', 'matchstick', sdate(29, 01, 2018), edate(11, 02, 2018) ],

    [ 'Elementary Programming in C (Part 2)', 'lem-in', sdate(12, 03, 2018), edate(08, 04, 2018) ],

    [ 'Shell Programming', 'minishell 1', sdate(01, 01, 2018), edate(21, 01, 2018) ],
    [ 'Shell Programming', 'minishell2', sdate(19, 03, 2018), edate(15, 04, 2018) ],
    [ 'Shell Programming', '42Sh', sdate(16, 04, 2018), edate(27, 05, 2018) ],
  ]);


  chart.draw(dataTable, {
    timeline: {
      colorByRowLabel: true
    }
  });
}