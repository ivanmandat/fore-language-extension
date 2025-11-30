# PP.TS.isCalculatedSerie

PP.TS.isCalculatedSerie
-


# PP.TS.isCalculatedSerie


## Синтаксис


isCalculatedSerie (serie);


## Параметры


serie. Задает индекс ряда.


## Описание


Метод isCalculatedSerie определяет, является ли указанный ряд вычисляемым.


## Комментарии


Метод возвращает значение true, если ряд, переданный методу в качестве параметра, является вычисляемым рядом, иначе метод возвращает false.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также в обработчике события открытия документа необходимо добавить следующий код:


var getIsCalculatedSerieButt = new PP.Ui.Button({
	ParentNode: document.body, //Родительский узел DOM
	Content: "Получить тип рядов", //Подпись
	Click: PP.Delegate(onClickType)
});
function onClickType()
	{
		var series = wbk.getSeries();
		var messageString = "";
		for (var i = 0; i<series.length; i++)
			{
				//определяем, является ли указанный ряд вычисляемым
				PP.TS.isCalculatedSerie(series[i]) ? addCalculatedSerieString(i) : addNonCalculatedSerieString(i);
			}
		function addCalculatedSerieString(rowIndex)
			{
				messageString = messageString + "Ряд номер " + i + " - является вычисляемым рядом" + '\n';
			}
		function addNonCalculatedSerieString(rowIndex)
			{
				messageString = messageString + "Ряд номер " + i + " -  не является вычисляемым рядом" + '\n';
			}
		alert(messageString);
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Получить тип рядов», при нажатии на которую будет выведено сообщение о том, являются ли имеющиеся в таблице ряды вычисляемыми.


См. также:


[PP.TS](../PP.TS.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
