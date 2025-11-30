# TSService.UnGroupSeries

TSService.UnGroupSeries
-


# TSService.UnGroupSeries


## Синтаксис


UnGroupSeries (wbk, series, callback);


## Параметры


wbk. Задает значение [рабочей книги](../Workbook/Workbook.htm);


series. Задает ряды;


callback. Задает обработчик окончания выполнения операции.


## Описание


Метод UnGroupSeries отменяет группировку рядов рабочей книги.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). В таблице рабочей книги должны быть сгруппированные ряды (см. «[TSService.GroupSeries](TSService.GroupSeries.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	//Переменная, в которой будут храниться выбранные ряды
	var selSeries;
	//Обработчик окончания взаимодействия с репозиторием. Служит для установки доступности кнопки
	//"Блокировать ряд" в зависимости от возможности блокировки выбранного ряда и установки признака
	//наличия блокированных рядов в рабочей книге
	metabase.EndRequest.add(PP.Delegate(function(){
		//Получим выбранные ряды рабочей книги
		selSeries = wbk.getActiveSheet().getSelectedSeries();
		//Установим доступность кнопки
		if (selSeries.length == 1 && PP.TS.isGroupSerie(selSeries[0]))
		{
			ungroupSeriesButt.setEnabled(true);
		}
		else
		{
			ungroupSeriesButt.setEnabled(false);
		}
		}));

	var ungroupSeriesButt = new PP.Ui.Button({
		ParentNode: document.body, //родительский узел DOM
		Content: "Разгруппировать ряды", //подпись
		Click: PP.Delegate(onClickUngroupSeries)
		});

	function onClickUngroupSeries()
	{
		//Отменяем группировку рядов рабочей книги
		tsService.UnGroupSeries(wbk, selSeries, PP.Delegate(onUngroupSeries, this));
		// Обработчик события окончания выполнения метода UnGroupSeries
		function onUngroupSeries(sender, args){
			//Обновляем, чтобы увидеть разгруппированные записи
			workbookBox.refreshAll();
		}
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Разгруппировать ряды». Необходимо выбрать ряд, который является группой и нажать на данную кнопку. После этого сгруппированный ряд рабочей книги будет разгруппирован.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
