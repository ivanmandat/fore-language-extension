# Workbook.getSelectionTimeRanges

Workbook.getSelectionTimeRanges
-


# Workbook.getSelectionTimeRanges


## Синтаксис


getSelectionTimeRanges();


## Описание


Метод getSelectionTimeRanges возвращает список периодов для выделенных рядов.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также на странице должна быть определена переменная metabase, содержащая объект для соединения с репозиторием, а в обработчике события открытия документа необходимо добавить следующий код:


	//добавим обработчик события окончания соединения с метабазой
	metabase.EndRequest.add(getSelectionTimeRanges);
	function getSelectionTimeRanges()
	{
		//Получаем список периодов для выделенных рядов
		var timeRanges = wbk.getSelectionTimeRanges();
		var startDate;
		var endDate;
		for (var range in timeRanges)
		{
			startDate = timeRanges[range].startDate;
			endDate = timeRanges[range].endDate;
			break;
		}
		//Выводим сообщение о выделенном периоде
		alert("Выделен период: с "+ startDate+" по "+ endDate);
	}

После выполнения примера при выделении области ячеек таблицы рабочей книги, будет выведено сообщение о периоде выделения.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
