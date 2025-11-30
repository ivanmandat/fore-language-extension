# TSService.addWbkSeries

TSService.addWbkSeries
-


# TSService.addWbkSeries


## Синтаксис


addWbkSeries (wbk, hie, dataObjs, period, callback);


## Параметры


wbk. Задает значение [рабочей книги](../Workbook/Workbook.htm);


hie. Задает иерархию рядов;


dataObjs. Задает объект, содержащий информацию о добавляемых рядах;


period. Задает период;


callback. Задает обработчик окончания выполнения операции.


## Описание


Метод addWbkSeries добавляет ряды в рабочую книгу.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox», сервиса для работы с временными рядами «tsService» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


var addSerieButton = new PP.Ui.Button({
	ParentNode: document.body, //Родительский узел DOM
	Content: "Добавить ряд", //Подпись
	Click: PP.Delegate(onClickAddSerie)
});
function onClickAddSerie()
	{
		//возвращаем экземпляр класса PP.TS.Workbook
		var source = workbookBox.getSource().getActiveSheet();
		//Получаем элемент для отображения таблицы рабочей книги
		var gridView = workbookBox.getDataView().getGridView();
		var index = wbk.getSeries().length;
		//Добавляем ряды в рабочую книгу.
		tsService.addWbkSeries(source, source.getHier(), undefined, {"Index": index, "PeriodLvl": "Month"});
		//Обновляем элемент для отображения таблицы рабочей книги
		gridView.getInstance().reset();
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Добавить ряд», при нажатии на которую будет добавлен новый ряд с наименованием «Новый ряд 1» в таблицу рабочей книги.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
