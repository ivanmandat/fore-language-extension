# TSService.setChartMetadata

TSService.setChartMetadata
-


# TSService.setChartMetadata


## Синтаксис


setChartMetadata (report, metadata, callback);


## Параметры


report. Задает рабочую книгу,
 экземпляр класса [Workbook](../Workbook/Workbook.htm);


metadata. Метаданные.


callback. Задает обработчик
 окончания выполнения операции.


## Описание


Метод setChartMetadata задает
 метаданные диаграммы.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), сервиса для работы с временными
 рядами с наименованием «tsService». После прогрузки компонента рабочей
 книги введите в командную строку следующий код:


// Получаем экземпляр рабочей книги
wrkBook = workbookBox.getSource().getActiveSheet();
// Получаем метаданные рабочей книги
metaCopy = wrkBook.getMetadata();
// Задаем метаданные диаграммы
tsService.setChartMetadata(wrkBook, metaCopy.chart);
В результате выполнения примера были заданы метаданные диаграммы.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
