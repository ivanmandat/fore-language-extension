# PP.TS.isTruncateSerie

PP.TS.isTruncateSerie
-


# PP.TS.isTruncateSerie


## Синтаксис


PP.TS.isTruncateSerie (serie);


## Параметры


serie. Задает индекс ряда.


## Описание


Метод isTruncateSerie определяет, вычислен ли указанный ряд по формуле «Усечение».


## Комментарии


Метод возвращает значение true, если ряд, переданный методу в качестве параметр, имеет тип формулы «Усечение», иначе метод возвращает false.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также в обработчике события открытия документа необходимо добавить следующий код:


var getIsTruncateSerieButt = new PP.Ui.Button({
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
				//Определяем, вычислен ли указанный ряд по формуле «Усечение»
				PP.TS.isTruncateSerie(series[i]) ? addTruncateSerieString(i) : addTruncateModSerieString(i);
			}
		function addTruncateSerieString(rowIndex)
			{
				messageString = messageString + "Ряд номер " + i + " - имеет тип формулы «Усечение»" + '\n';
			}
		function addTruncateModSerieString(rowIndex)
			{
				messageString = messageString + "Ряд номер " + i + " -  имеет тип формулы, отличный от «Усечение»" + '\n';
			}
		alert(messageString);
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Получить тип рядов», при нажатии на которую будет выведено сообщение о том, вычислены ли имеющиеся в таблице ряды по формуле «Усечение».


См. также:


[PP.TS](../PP.TS.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
