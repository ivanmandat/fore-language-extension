# TSService.addColumns

TSService.addColumns
-


# TSService.addColumns


## Синтаксис


addColumns (wbk, columns, callback);


## Параметры


wbk. Задает значение [рабочей книги](../Workbook/Workbook.htm);


columns. Задает столбцы таблицы;


callback. Задает обработчик
 окончания выполнения операции.


## Описание


Метод addColumns добавляет столбцы
 в рабочую книгу.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


	var source = workbookBox.getSource();////возвращаем экземпляр класса PP.TS.Workbook
	var columns = [{
		k: 10,
		type: "Scenario",
		vis: true,
		readOnly: false
		}];
	//Добавляем столбцы в рабочую книгу
	tsService.addColumns(source, columns);

После выполнения примера в таблицу рабочей книги будет добавлен новый
 столбец с наименованием «Сценарий».


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
