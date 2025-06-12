Draw.loadPlugin(function(ui) {
  console.log('✅ drawio-plugin loaded');

  ui.menubar.addMenu('Focus Groups', function(menu, parent) {
    menu.addItem('Scan Groups', null, function() {
      alert('This will scan shapes for groups!');
    });
  });
});
