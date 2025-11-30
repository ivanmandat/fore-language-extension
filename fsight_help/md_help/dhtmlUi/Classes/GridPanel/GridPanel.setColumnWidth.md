# GridPanel.setColumnWidth

GridPanel.setColumnWidth
-


# GridPanel.setColumnWidth


## Синтаксис


setColumnWidth (columnNumber, width);


## Параметры


columnNumber. Порядковый номер строки;


width. Ширина строки.


## Описание


Метод setColumnWidth устанавливает ширину столбца таблицы.


## Пример


Для выполнения примера на html-страницепредполагается наличие на html-странице компонента [GridPanel](../../Components/GridPanel/GridPanel.htm) с наименованием «container» (см. «[Пример создания компонента GridPanel](../../Components/GridPanel/GridPanel_example.htm)»). Необходимо наличие тегов DIV с идентификаторами «ne1» и «ne1». Добавим на страницу [числовые редакторы](../NumberEdit/NumberEdit.htm), в которых устанавливается высота и ширина первой ячейки таблицы:


    var numberH = new PP.Ui.[NumberEdit](../NumberEdit/NumberEdit.htm)({ ParentNode: document.getElementById("ne1"), Width: 50});


    var numberW = new PP.Ui.[NumberEdit](../NumberEdit/NumberEdit.htm)({ ParentNode: document.getElementById("ne2"), Width: 50});


    numberH.[AfterValueChange](../NumberEdit/NumberEdit.AfterValueChange.htm).add(function (sender, args) { container.[setRowHeight](GridPanel.setRowHeight.htm)(0, numberH.getValue()) });


    numberW.[AfterValueChange](../NumberEdit/NumberEdit.AfterValueChange.htm).add(function (sender, args) { container.setColumnWidth(0, numberW.getValue()) });


После выполнения примера на html-странице будут размещены числовые редакторы. При установке значений редакторов будут изменяться ширина и высота первой ячейки таблицы.


См. также:


[GridPanel](GridPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
