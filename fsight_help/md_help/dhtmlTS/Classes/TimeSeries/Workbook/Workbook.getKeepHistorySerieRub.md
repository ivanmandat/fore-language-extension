# Workbook.getKeepHistorySerieRub

Workbook.getKeepHistorySerieRub
-


# Workbook.getKeepHistorySerieRub


## Синтаксис


getKeepHistorySerieRub(serie);


## Параметры


serie. Задает ряд.


## Описание


Метод getKeepHistorySerieRub возвращает признак того, что в источнике (базе данных временных рядов) указанного ряда установлен признак сохранения истории изменений (списка ревизий).


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	//Проверяем признак того, что в источнике (базе данных временных рядов) указанного ряда установлен признак сохранения истории изменений (списка ревизий).
	if (wbk.getKeepHistorySerieRub(wbk.getSeries()[0]))
	//Установлен признак сохранения истории изменений
	wbk.setNeedShowSaveDataDialog(true);
	//Создаем экземпляр класса, реализующего диалог сохранения
	var wbkSaveDataDialog =  new PP.TS.Ui.WbkSaveDataDialog({
	ResourceKey: "WbkSaveDialog",
	});
	//Проверяем, нужно ли показывать диалог при сохранении данных
	if (wbk.getNeedShowSaveDataDialog())
	// Показываем диалог
	wbkSaveDataDialog.show();

В результате выполнения примера будет открыт [диалог сохранения данных](../WbkSaveDataDialog/WbkSaveDataDialog.htm).


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
