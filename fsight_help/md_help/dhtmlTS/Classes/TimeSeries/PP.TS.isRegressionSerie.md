# PP.TS.isRegressionSerie

PP.TS.isRegressionSerie
-


# PP.TS.isRegressionSerie


## Синтаксис


isRegressionSerie (serie);


## Параметры


serie. Задает индекс ряда.


## Описание


Метод isRegressionSerie определяет, вычислен ли указанный ряд по формуле «Регрессия».


## Комментарии


Метод возвращает значение true, если ряд, переданный методу в качестве параметра, имеет тип формулы «Регрессия», иначе метод возвращает false.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также в обработчике события открытия документа необходимо добавить следующий код:


var getIsRegressionSerieButt = new PP.Ui.Button({
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
				//Определяем, вычислен ли указанный ряд по формуле «Регрессия»
				PP.TS.isRegressionSerie(series[i]) ? addRegressionSerieString(i) : addNonRegressionSerieString(i);
			}
		function addRegressionSerieString(rowIndex)
			{
				messageString = messageString + "Ряд номер " + i + " - имеет тип формулы «Регрессия»" + '\n';
			}
		function addNonRegressionSerieString(rowIndex)
			{
				messageString = messageString + "Ряд номер " + i + " -  имеет тип формулы, отличный от «Регрессия»" + '\n';
			}
		alert(messageString);
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Получить тип рядов», при нажатии на которую будет выведено сообщение о том, вычислены ли имеющиеся в таблице ряды по формуле «Регрессия».


См. также:


[PP.TS](../PP.TS.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
