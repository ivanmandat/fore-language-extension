# PP.TS.isFillGapsSerie

PP.TS.isFillGapsSerie
-


# PP.TS.isFillGapsSerie


## Синтаксис


isFillGapsSerie (serie);


## Параметры


serie. Задает индекс ряда.


## Описание


Метод isFillGapsSerie определяет, вычислен ли указанный ряд по формуле «FillGaps».


## Комментарии


Метод возвращает значение true, если ряд, переданный методу в качестве параметра, имеет тип формулы «FillGaps», иначе метод возвращает false.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также в обработчике события открытия документа необходимо добавить следующий код:


var getIsFillGapsSerieButt = new PP.Ui.Button({
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
				//Определяем, вычислен ли указанный ряд по формуле  «FillGaps»
				PP.TS.isFillGapsSerie(series[i]) ? addFillGapsSerieString(i) : addNonFillGapsSerieString(i);
			}
		function addFillGapsSerieString(rowIndex)
			{
				messageString = messageString + "Ряд номер " + i + " - имеет тип формулы «FillGaps»" + '\n';
			}
		function addNonFillGapsSerieString(rowIndex)
			{
				messageString = messageString + "Ряд номер " + i + " -  имеет тип формулы, отличный от «FillGaps»" + '\n';
			}
		alert(messageString);
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Получить тип рядов», при нажатии на которую будет выведено сообщение о том, вычислены ли имеющиеся в таблице ряды по формуле «FillGaps».


См. также:


[PP.TS](../PP.TS.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
