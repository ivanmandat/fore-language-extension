# PP.TS.isGroupSerie

PP.TS.isGroupSerie
-


# PP.TS.isGroupSerie


## Синтаксис


isGroupSerie (serie);


## Параметры


serie. Задает индекс ряда.


## Описание


Метод isGroupSerie определяет, является ли указанный ряд группой.


## Комментарии


Метод возвращает значение true, если ряд, переданный методу в качестве параметра, является группой, иначе метод возвращает false.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также в обработчике события открытия документа необходимо добавить следующий код:


var getIsGroupSerieButt = new PP.Ui.Button({
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
				//определяем, является ли указанный ряд группой
				PP.TS.isGroupSerie(series[i]) ? addGroupSerieString(i) : addNonGroupSerieString(i);
			}
		function addGroupSerieString(rowIndex)
			{
				messageString = messageString + "Ряд номер " + i + " - является группой" + '\n';
			}
		function addNonGroupSerieString(rowIndex)
			{
				messageString = messageString + "Ряд номер " + i + " -  не является групповой" + '\n';
			}
		alert(messageString);
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Получить тип рядов», при нажатии на которую будет выведено сообщение о том, являются ли имеющиеся в таблице ряды группами.


См. также:


[PP.TS](../PP.TS.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
