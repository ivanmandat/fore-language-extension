# Workbook.addSelectedSeries

Workbook.addSelectedSeries
-


# Workbook.addSelectedSeries


## Синтаксис


addSelectedSeries (value);


## Параметры


value. Задает ряд или массив рядов.


## Описание


Метод addSelectedSeries добавляет ряды в массив выделенных.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var gv = workbookBox.getDataView().getGridView();//._TabSheet
	var addSelectedSeries = new PP.Ui.Button({
		ParentNode: document.body, //родительский узел DOM
		Content: "AddSelectedSeries", //подпись
		Click: PP.Delegate(AddSelectedSeriesOnClick)
	});
		function AddSelectedSeriesOnClick()
		{
			//Получаем экземпляр класса PP.TS.Workbook
			var source = wbk.getActiveSheet();
			//Получаем массив рядов у модели данных рабочей книги
			var series = source.getSeries();
			//Удаляем все выбранные ряды из массива выделенных рядов рабочей книги
			source.removeAllSelectedSeries();
			//Выделяем все выбранные ряды
			for (var i = 0; i<series.length; i++)
			{
				wbk.addSelectedSeries(series[i]);
			}

			var selSers = wbk.getSelectedSeries();
			selectedIndexSeries = new Array();
			for (var i = 0; i < selSers.length; i++)
			{
				selectedIndexSeries.push(selSers[i].index);
			}

			var selectedIndexCols = new Array();
			for (var i = 0; i < gv._TabSheet._Model._Measures._MaxColumn; i++)
			{
				selectedIndexCols.push(i);
			}
			//Устанавливаем отмеченные ряды рабочей книги
			tsService.setSelectedSeries(wbk, selectedIndexSeries, selectedIndexCols, function (){});
			//получаем массивы отмеченных рядов и колонок рабочей книги
			var selRows = source.getSelectedIndexSeries();
			var selCols = source.getSelectedIndexCols();
			//Производим выделение на компоненте для отображения таблицы рабочей книги (LanerBox)
			gv._GridSelection._SelectedAreas[0].Range._Corners.blCoord.colIndex = selCols[0]+2;
			gv._GridSelection._SelectedAreas[0].Range._Corners.blCoord.rowIndex = selRows[selRows.length-1]+1;
			gv._GridSelection._SelectedAreas[0].Range._Corners.brCoord.colIndex = selCols[selCols.length-1];
			gv._GridSelection._SelectedAreas[0].Range._Corners.brCoord.rowIndex = selRows[selRows.length-1]+1;
			gv._GridSelection._SelectedAreas[0].Range._Corners.tlCoord.colIndex = selCols[0]+2;
			gv._GridSelection._SelectedAreas[0].Range._Corners.tlCoord.rowIndex = selRows[0]+1;
			gv._GridSelection._SelectedAreas[0].Range._Corners.trCoord.colIndex = selCols[selCols.length-1];
			gv._GridSelection._SelectedAreas[0].Range._Corners.trCoord.rowIndex = selRows[0]+1;
			workbookBox.getDataView()._TabStatPanel.expand();
			workbookBox.getDataView()._TabStatPanel.collapse();
		}

После выполнения примера на html-странице будет размещена кнопка с наименованием «AddSelectedSeries», по нажатию на которую будут выделены все ряды в таблице рабочей книги.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
