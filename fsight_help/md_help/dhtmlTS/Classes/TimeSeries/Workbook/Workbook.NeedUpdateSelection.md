# Workbook.NeedUpdateSelection

Workbook.NeedUpdateSelection
-


# Workbook.NeedUpdateSelection


## Синтаксис


NeedUpdateSelection: Boolean;


## Описание


Свойство NeedUpdateSelection определяет признак необходимости обновления отметки.


## Комментарии


Если установлено значение true, отметку необходимо обновить, false - необходимости в обновлении нет.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var source = workbookBox.getSource().getActiveSheet();//возвращаем экземпляр класса PP.TS.Workbook
	//Получаем элемент для отображения таблицы рабочей книги
	var gridView = workbookBox.getDataView().getGridView();
	//Получаем признак необходимости обновления
	if (source.getNeedUpdateSelection())
	{
		gridView.setNeedUpdateSelection(true);
		source.setNeedUpdateSelection(false);
	}
	//Добавляем ряды в рабочую книгу.
	tsService.addWbkSeries(source, source.getHier(), undefined, {"Index": 4, "PeriodLvl": "Month"});
	//Обновляем элемент для отображения таблицы рабочей книги
	gridView.getInstance().reset();

После выполнения примера в рабочую книгу будет добавлен новый ряд.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
