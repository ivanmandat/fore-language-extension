# PP.TS.isDerivedSerie

PP.TS.isDerivedSerie
-


# PP.TS.isDerivedSerie


## Синтаксис


isDerivedSerie (serie);


## Параметры


serie. Задает индекс ряда.


## Описание


Метод isDerivedSerie определяет, является ли указанный ряд дочерним.


## Комментарии


Метод возвращает значение true, если ряд, переданный методу в качестве параметра, является дочерним рядом, иначе метод возвращает false.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также в обработчике события открытия документа необходимо добавить следующий код:


var getIsDerivedSerieButt = new PP.Ui.Button({
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
				//Получаем признак, является ли ряд дочерним рядом
				PP.TS.isDerivedSerie(series[i]) ? addDerivedSerieString(i) : addNonDerivedSerieString(i);
			}
		function addDerivedSerieString(rowIndex)
			{
				messageString = messageString + "Ряд номер " + i + " - является дочерним рядом" + '\n';
			}
		function addNonDerivedSerieString(rowIndex)
			{
				messageString = messageString + "Ряд номер " + i + " -  не является дочерним рядом" + '\n';
			}
		alert(messageString);
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Получить тип рядов», при нажатии на которую будет выведено сообщение о том, являются ли имеющиеся в таблице ряды дочерними.


См. также:


[PP.TS](../PP.TS.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
