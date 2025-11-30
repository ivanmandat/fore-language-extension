# LanerBoxView.getHistoryWindow

LanerBoxView.getHistoryWindow
-


# LanerBoxView.getHistoryWindow


## Синтаксис


getHistoryWindow ();


## Описание


Метод getHistoryWindow возвращает
 [окно просмотра истории точки](../HistoryWindow/HistoryWindow.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


var getCellHistoryButt = new PP.Ui.Button({
	ParentNode: document.body, //Родительский узел DOM
	Content: "Get add column settings", //Подпись
	Click: PP.Delegate(onClickGetCellHistory)
});
function onClickGetCellHistory()
	{
		var gridView = workbookBox.getDataView().getGridView();
		if (!gridView.getHistoryWindow())
			gridView._HistoryWindow = new PP.TS.Ui.HistoryWindow();
			gridView.getHistoryWindow().showDialog();
		var source = workbookBox.getSource().getActiveSheet();//возвращаем экземпляр класса PP.TS.Workbook
		//Устанавливаем объект, содержащий информацию о значениях выделенных в таблице ячеек
		var selCell = source.getSelectedTableCells().cells.c[0];
		var row, column;
		row = selCell['@row'];
		column = selCell['@column'];
		tsService.getCellHistory(source, row, column, PP.Delegate(function(sender, args)
			{
				gridView.getHistoryWindow().getRevisionsListBox().setRevisions(args.Revs);
				//Устанавливаем таймаут
				setTimeout(changeSize, 2000);
			}));
		function changeSize()
			{
				//Изменяем размер
				gridView.getHistoryWindow().setWidth(300);
				gridView.getHistoryWindow().setHeight(400);
				//Обновляем
				gridView.getHistoryWindow().refresh();
			}
	}

После выполнения примера на html-странице будет размещен компонент WorkbookBox
 и кнопка с наименованием «Get add column settings». Для выведения на экран
 окна истории изменений необходимо выделить ячейку на элементе отображения
 таблицы и нажать на кнопку.


См. также:


[LanerBoxView](LanerBoxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
