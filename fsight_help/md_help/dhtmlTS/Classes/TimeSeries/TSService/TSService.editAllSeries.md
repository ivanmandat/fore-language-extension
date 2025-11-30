# TSService.editAllSeries

TSService.editAllSeries
-


# TSService.editAllSeries


## Синтаксис


editAllSeries (wbk, series, callback);


## Параметры


wbk. Задает значение [рабочей книги](../Workbook/Workbook.htm);


series. Задает ряд;


callback. Задает обработчик окончания выполнения операции.


## Описание


Метод editAllSeries устанавливает всплывающую подсказку к ячейкам рабочей книги.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


var editAllSeriesButt = new PP.Ui.Button({
	ParentNode: document.body, //Родительский узел DOM
	Content: "Устанавливаем всплывающую подсказку", //Подпись
	Click: PP.Delegate(onClickEditAllSeries)
});
function onClickEditAllSeries()
	{
		//Создаем объект, в котором содержится информация о типе всплывающей подсказки:
		//7 - Значение;
		//5 - Дата;
		//8 - Примечание.
		var series ={ its: { it: [] }, commentAttribute : {k : 7} };//Тип подсказки - значение
		//Устанавливаем рядам всплывающую подсказку
		tsService.editAllSeries(wbk, series, onRowsEdited);
		function onRowsEdited(){
			//Обновляем компонент workbookBox
			workbookBox.refreshAll();
		}
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Устанавливаем всплывающую подсказку». После нажатия на кнопку при наведении курсора на ячейку таблицы с красной меткой будет появляться всплывающая подсказка со значением ячейки.


![](getEditAllSeriesSettings.png)


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
