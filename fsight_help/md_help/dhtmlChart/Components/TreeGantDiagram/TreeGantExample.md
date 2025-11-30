# Пример создания компонента TreeGantDiagram

Пример создания компонента TreeGantDiagram
-


# Пример создания компонента TreeGantDiagram


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


1. Добавить ссылку на css-файл PP.css.


Также нужно добавить ссылки на следующие js-файлы: PP.js, PP.Other.js
 и resources.ru.js.


2. В теге <body> добавим контейнер для диаграммы и код диаграммы:


<div id="TreeGantHolder" style="width: 800px; height: 300px; padding: 20px 0 0 20px"></div>
<script type="text/jscript">
	var treeGantHolder = document.getElementById("TreeGantHolder");
	// предполагаемые столбцы в дереве - операция/начало/окончание/длительность/память
	var columns = [{
		Caption: "#",
		Width: 92,
		MinWidth: 20,
		Hideable: false,
		Visible: true
	}, {
		Caption: "Operation",
		Width: 120,
		MinWidth: 20,
		Hideable: false,
		Visible: true
	}, {
		Caption: "Begin",
		Width: 62,
		MinWidth: 10,
		Visible: true
	}, { Caption: "End",
		Width: 62,
		MinWidth: 10,
		Visible: true
	}, { Caption: "Time ms",
		Width: 60,
		MinWidth: 10,
		Visible: true
	}, { Caption: "Memory",
		Width: 60,
		MinWidth: 10,
		Visible: true
	}];
	// value содержит информацию для построения строки диаграммы
	// обязательные поля в value - Operation/StartTime/Duration - Операция/Время начала/Длительность (ms)
	var testData = [{
		Text: "1",
		Columns: ["CreateObject 1", "10:4:11 670", "10:4:13 474", "1804", "1732M"],
		Selected: false,
		CanSelect: false,
		Value: {"Operation": "CreateObject 1","StartTime": "2012-10-24T10:04:11.670", "Duration": 1804 ,"Mem": 1773507},
		Expanded: true,
		Checked: false,
		Nodes: [{
			Text: "1.1",
			Columns: ["CreateObject 1.1", "10:4:11 670", "10:4:13 274", "1604", "1624M"],
			Selected: false,
			CanSelect: false,
			Value: { "Operation": "CreateObject 1.1", "StartTime": "2012-10-24T10:04:11.670", "Duration": 1604, "Mem": 162445 },
			Expanded: true,
			Checked: false,
			Nodes: [{
				Text: "1.1.1",
				Columns: ["CreateObject 1.1.1", "10:4:11 670", "10:4:11 720", "50", "64k"],
				Selected: false,
				CanSelect: false,
				Value: { "Operation": "CreateObject 1.1.1", "StartTime": "2012-10-24T10:04:11.670", "Duration": 50, "Mem": 63856 },
				Expanded: true,
				Checked: false
			}, {
				Text: "1.1.2",
				Columns: ["CreateObject 1.1.2", "10:4:11 720", "10:4:11 810", "90", "134k"],
				ImageUrl: null,
				Selected: false,
				CanSelect: false,
				Value: { "Operation": "CreateObject 1.1.2", "StartTime": "2012-10-24T10:04:11.720", "Duration": 90, "Mem": 134158 },
				Expanded: true,
				Checked: false
			}, {
				Text: "1.1.3",
				Columns: ["CreateObject 1.1.3", "10:4:11 810", "10:4:11 855", "45", "34k"],
				Selected: false,
				CanSelect: false,
				Value: { "Operation": "CreateObject 1.1.3", "StartTime": "2012-10-24T10:04:11.810", "Duration": 45, "Mem": 33847 },
				Expanded: true,
				Checked: false
			}, {
				Text: "1.1.4",
				Columns: ["CreateObject 1.1.4", "10:4:11 855", "10:4:12 333", "478", "11M"],
				Selected: false,
				CanSelect: false,
				Value: { "Operation": "CreateObject 1.1.4", "StartTime": "2012-10-24T10:04:11.855", "Duration": 478, "Mem": 11286 },
				Expanded: true,
				Checked: false,
			}, {
				Text: "1.1.5",
				Columns: ["CreateObject 1.1.5", "10:4:12 333", "10:4:14 334", "2001", "41M"],
				Selected: false,
				CanSelect: false,
				Value: { "Operation": "CreateObject 1.1.5", "StartTime": "2012-10-24T10:04:12.333", "Duration": 2001, "Mem": 41023456 },
				Expanded: true,
				Checked: true
			}]
		}, {
			Text: "1.2",
			Columns: ["CreateObject 1.2", "10:4:14 334", "10:4:15 830", "1496", "132M"],
			Selected: false,
			CanSelect: false,
			Value: { "Operation": "CreateObject 1.2", "StartTime": "2012-10-24T10:04:14.334", "Duration": 1496, "Mem": 132987789 },
			Expanded: true,
			Checked: false,
			Nodes: [{
				Text: "1.2.1",
				Columns: ["CreateObject 1.2.1", "10:4:14 334", "10:4:14 634", "300", "3M"],
				Selected: false,
				CanSelect: false,
				Value: { "Operation": "CreateObject 1.2.1", "StartTime": "2012-10-24T10:04:14.334", "Duration": 300, "Mem": 3022541 },
				Expanded: true,
				Checked: false
			}, {
				Text: "1.2.2",
				Columns: ["CreateObject 1.2.2", "10:4:14 634", "10:4:14 940", "306", "3M"],
				ImageIndex: 1,
				Selected: false,
				CanSelect: false,
				Value: { "Operation": "CreateObject 1.2.2", "StartTime": "2012-10-24T10:04:14.634", "Duration": 306, "Mem": 3027894 },
				Expanded: true,
				Checked: false
			}, {
				Text: "1.2.3",
				Columns: ["CreateObject 1.2.3", "10:4:14 940", "10:4:15 830", "890", "14M"],
				Selected: false,
				CanSelect: false,
				Value: { "Operation": "CreateObject 2.3", "StartTime": "2012-10-24T10:04:14.940", "Duration": 890, "Mem": 14235987 },
				Expanded: true,
				Checked: false
			}]
		}, {
			Text: "1.3",
			Columns: ["CreateObject 1.3", "10:4:15 930", "10:4:16 540", "610", "8M"],
			Selected: false,
			CanSelect: false,
			Value: { "Operation": "CreateObject 1.3", "StartTime": "2012-10-24T10:04:15.930", "Duration": 610, "Mem": 8345774 },
			Expanded: true,
			Checked: false,
			Nodes: [{
				Text: "1.3.1",
				Columns: ["CreateObject 1.3.1", "10:4:15 930", "10:4:16 380", "450", "6M"],
				Selected: false,
				CanSelect: false,
				Value: { "Operation": "CreateObject 1.3.1", "StartTime": "2012-10-24T10:04:15.930", "Duration": 450, "Mem": 6343375 },
				Expanded: true,
				Checked: false
			}, {
				Text: "1.3.2",
				Columns: ["CreateObject 1.3.2", "10:4:16 380", "10:4:16 540", "160", "2M"],
				Selected: false,
				CanSelect: false,
				Value: { "Operation": "CreateObject 1.3.2", "StartTime": "2012-10-24T10:04:16.380", "Duration": 160, "Mem": 2121375 },
				Expanded: true,
				Checked: false
			}]
		}]
		}, {
			Text: "2",
			Columns: ["CreateObject 2", "10:4:16 540", "10:4:16 540", "0", "68K"],
			Selected: false,
			CanSelect: false,
			Value: { "Operation": "CreateObject 2", "StartTime": "2012-10-24T10:04:16.540", "Duration": 0, "Mem": 68234 },
			Expanded: true,
			Checked: false,
			Nodes: [{
				Text: "2.1",
				Columns: ["CreateObject 2.1", "10:4:11 670", "10:4:11 720", "50", "64k"],
				Selected: false,
				CanSelect: false,
				Value: { "Operation": "CreateObject 2.1", "StartTime": "2012-10-24T10:04:11.670", "Duration": 50, "Mem": 63856 },
				Expanded: true,
				Checked: false
			}, {
				Text: "2.2",
				Columns: ["CreateObject 2.2", "10:4:11 720", "10:4:11 810", "90", "134k"],
				Selected: false,
				CanSelect: false,
				Value: { "Operation": "CreateObject 2.2", "StartTime": "2012-10-24T10:04:11.720", "Duration": 90, "Mem": 134158 },
				Expanded: true,
				Checked: false
			}, {
				Text: "2.3",
				Columns: ["CreateObject 2.3", "10:4:11 810", "10:4:11 855", "45", "34k"],
				Selected: false,
				CanSelect: false,
				Value: { "Operation": "CreateObject 2.3", "StartTime": "2012-10-24T10:04:11.810", "Duration": 45, "Mem": 33847 },
				Expanded: true,
				Checked: false
			}, {
				Text: "2.4",
				Columns: ["CreateObject 2.4", "10:4:11 855", "10:4:12 333", "478", "11M"],
				Selected: false,
				CanSelect: false,
				Value: { "Operation": "CreateObject 2.4", "StartTime": "2012-10-24T10:04:11.855", "Duration": 478, "Mem": 11286 },
				Expanded: true,
				Checked: false,
				Highlighted: true
			}, {
				Text: "2.5",
				Columns: ["CreateObject 2.5", "10:4:12 333", "10:4:14 334", "2001", "41M"],
				Selected: false,
				CanSelect: false,
				Value: { "Operation": "CreateObject 2.5", "StartTime": "2012-10-24T10:04:12.333", "Duration": 2001, "Mem": 41023456 },
				Expanded: true,
				Checked: true
			}]
		}];
	var GantD = new PP.Ui.TreeGantDiagram({
		Height: 270,
		Width: 800,
		DTimelineStartTime: PP.Date.parse("2012-10-24T10:04:11.000"),
		DTimelineEndTime: PP.Date.parse("2012-10-24T10:04:21.000"),
		ParentNode: treeGantHolder,
		TColumns: columns,
		Style: "border: 1px solid gray"
	});
	Diag = GantD.getDiagram();
	Diag.setTimeAxisShift(20);
	Diag.setDiagramShift(false);
	Diag.setShowStartTimeLabel(false);
	GantD.loadFrom(testData);
</script>

В результате выполнения примера на html-странице будет размещен компонент
 [TreeGantDiagram](TreeGantDiagram.htm).


![](GantDiagramm.png)


См. также:


[TreeGantDiagram](TreeGantDiagram.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
