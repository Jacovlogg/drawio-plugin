Draw.loadPlugin(function(ui) {
  // Add your logic here

  // Example: Add new toolbar menu
  ui.menubar.addMenu('Focus Groups', function(menu, parent) {
    menu.addItem('Scan Groups', null, function() {
      alert('This will scan shapes for groups!');
    });
  });
});