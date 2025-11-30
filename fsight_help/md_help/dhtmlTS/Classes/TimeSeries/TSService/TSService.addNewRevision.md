# TSService.addNewRevision

TSService.addNewRevision
-


# TSService.addNewRevision


## Синтаксис


addNewRevision (wbk, metaData, callback);


## Параметры


wbk. Задает значение [рабочей книги](../Workbook/Workbook.htm);


metaData. Задает метаданные с информацией о ревизии и каталоге показателей;


callback. Задает обработчик окончания выполнения операции.


## Описание


Метод addNewRevision добавляет новую ревизию.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также в репозитории должна содержаться база данных временных рядов с ключом 112, а в обработчике события открытия документа необходимо добавить следующий код:


	var source = workbookBox.getSource().getActiveSheet();//Возвращаем экземпляр класса PP.TS.WbkDocument
	//Получаем первый ряд рабочей книги
	var serie = source.getSeries()[0];
	var rubKey = 112;
	var name = "New revision";
	var metaData = { RubKey: rubKey, Operation: PP.TS.Ui.WbkRevisionOperation.Add, Name: name};
	tsService.addNewRevision(wbk, metaData);

После выполнения примера необходимо выделить первый ряд в рабочей книге, на вкладке панели свойств «Ряд» раскрыть панель «Ревизии», после чего в начале списка ревизий появится новая ревизия с наименованием New revision и дата, соответствующая текущему моменту.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
