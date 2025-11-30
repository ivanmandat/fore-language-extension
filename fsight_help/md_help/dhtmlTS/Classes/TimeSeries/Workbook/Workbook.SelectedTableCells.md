# Workbook.SelectedTableCells

Workbook.SelectedTableCells
-


# Workbook.SelectedTableCells


## Синтаксис


SelectedTableCells: JSON;


## Описание


Свойство SelectedTableCells устанавливает объект, содержащий информацию о выделенных значениях в таблице.


## Комментарии


Устанавливаемый свойством объект возвращается в свойстве метаданных - cellsTable.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var count = new PP.Ui.Button({
	ParentNode: document.body, //родительский узел DOM
	Content: "Посчитать сумму", //подпись
	Click: PP.Delegate(onCount)
	});
	function onCount()
	{
		var source = workbookBox.getSource().getActiveSheet();//возвращаем экземпляр класса PP.TS.Workbook
		//Устанавливаем объект, содержащий информацию о значениях выделенных в таблице ячеек
		var selCells = source.getSelectedTableCells();
		//Получаем массив ячеек и суммируем их значения
		var cells = selCells.cells.c;
		var summ = null;
		for (var i = 0; i<cells.length; i++)
		{
			summ += parseInt(cells[i]["@v"]);
		}
		alert("Сумма значений выделенных ячеек = " + summ);
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Посчитать сумму». Необходимо выделить диапазон ячеек и нажать на кнопку. После этого будет выведена сумма значений выделенных ячеек.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
