# Workbook.SeriesCount

Workbook.SeriesCount
-


# Workbook.SeriesCount


## Синтаксис


SeriesCount: Number;


## Описание


Свойство SeriesCount устанавливает количество рядов в рабочей книге.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var getSeriesCountButt = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Количество рядов", //Подпись
		Click: PP.Delegate(onClickGetSeriesCount)
	});
	function onClickGetSeriesCount() {
		var nSeries = wbk.getSeriesCount();
		alert('Количество рядов: ' + nSeries);
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Количество рядов». По нажатию на кнопку будет выведено сообщение, содержащее количество рядов в книге.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
