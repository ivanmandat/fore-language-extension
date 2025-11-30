# PP.TS.isModSerie

PP.TS.isModSerie
-


# PP.TS.isModSerie


## Синтаксис


isModSerie (serie);


## Параметры


serie. Задает индекс ряда.


## Описание


Метод isModSerie определяет, вычислен ли указанный ряд по формуле «Остаток от деления».


## Комментарии


Метод возвращает значение true, если ряд, переданный методу в качестве параметра, имеет тип формулы «Остаток от деления», иначе метод возвращает false.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также в обработчике события открытия документа необходимо добавить следующий код:


var getIsModSerieButt = new PP.Ui.Button({
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
				//Определяем, вычислен ли указанный ряд по формуле «Остаток от деления»
				PP.TS.isModSerie(series[i]) ? addModSerieString(i) : addNonModSerieString(i);
			}
		function addModSerieString(rowIndex)
			{
				messageString = messageString + "Ряд номер " + i + " - имеет тип формулы «Остаток от деления»" + '\n';
			}
		function addNonModSerieString(rowIndex)
			{
				messageString = messageString + "Ряд номер " + i + " -  имеет тип формулы, отличный от «Остаток от деления»" + '\n';
			}
		alert(messageString);
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Получить тип рядов», при нажатии на которую будет выведено сообщение о том, вычислены ли имеющиеся в таблице ряды по формуле «Остаток от деления».


См. также:


[PP.TS](../PP.TS.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
