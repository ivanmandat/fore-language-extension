# TSService.setPeriod

TSService.setPeriod
-


# TSService.setPeriod


## Синтаксис


setPeriod (wbk, startDate, endDate, callback);


## Параметры


wbk. Задает значение [рабочей книги](../Workbook/Workbook.htm);


startDate. Задает начальную дату в формате 'YYYY-MM-DD';


endDate. Задает конечную дату в формате 'YYYY-MM-DD';


callback. Задает обработчик завершения операции.


## Описание


Метод setPeriod устанавливает период.


## Пример


Для выполнения примера предполагается наличие на странице компонента WorkbookBox с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Установим период отображения данных, запустив в консоли браузера следующий код:


	var wbk = workbookBox.getSource().getActiveSheet();
	var startDate = new Date();
	var endDate = new Date();
	tsService.setPeriod(wbk, startDate, endDate, PP.Delegate(onSetPeriod, this));
	// Обработчик события окончания выполнения метода setPeriod
	function onSetPeriod(sender, args){
		workbookBox.refreshAll();
	}

После выполнения примера в таблице и на диаграмме будут отображаться данные для установленного периода, то есть на текущую дату. Также изменятся даты в группе «Период отображения» на вкладке ленты «Главная».


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
