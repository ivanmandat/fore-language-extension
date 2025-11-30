# PP.TS.isDeterministicSerie

PP.TS.isDeterministicSerie
-


# PP.TS.isDeterministicSerie


## Синтаксис


isDeterministicSerie (serie);


## Параметры


serie. Задает индекс ряда.


## Описание


Метод isDeterministicSerie определяет, вычислен ли указанный ряд по формуле «Deterministic».


## Комментарии


Метод возвращает значение true, если ряд, переданный методу в качестве параметра, имеет тип формулы «Deterministic», иначе метод возвращает false.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также первый ряд должен быть вычисляемым и в обработчике события открытия документа необходимо добавить следующий код:


var getIsDeterministicSerieButt = new PP.Ui.Button({
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
				//Определяем, вычислен ли указанный ряд по формуле «Deterministic».
				PP.TS.isDeterministicSerie(series[i]) ? addDeterministicSerieString(i) : addNonDeterministicSerieString(i);
			}
		function addDeterministicSerieString(rowIndex)
			{
				messageString = messageString + "Ряд номер " + i + " - имеет тип формулы «Deterministic»." + '\n';
			}
		function addNonDeterministicSerieString(rowIndex)
			{
				messageString = messageString + "Ряд номер " + i + " -  имеет тип формулы, отличный от «Deterministic»." + '\n';
			}
		alert(messageString);
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Получить тип рядов», при нажатии на которую будет выведено сообщение о том, вычислены ли имеющиеся в таблице ряды по формуле «Deterministic».


См. также:


[PP.TS](../PP.TS.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
