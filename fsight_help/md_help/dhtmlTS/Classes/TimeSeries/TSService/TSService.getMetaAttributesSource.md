# TSService.getMetaAttributesSource

TSService.getMetaAttributesSource
-


# TSService.getMetaAttributesSource


## Синтаксис


getMetaAttributesSource (wbk, metadata, callback);


## Параметры


wbk. Задает рабочую книгу,
 экземпляр класса PP.TS.[Workbook](../Workbook/Workbook.htm);


metadata. Задает метаданные
 с настройками;


callback. Вызов обратной функции.


## Описание


Метод getMetaAttributesSource
 возвращает источник таблицы входящей в метаданные.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), с переменной wbk содержащей рабочую
 книгу и с переменной tsService содержащей сервис рабочей книги. В командной
 консоли введите следующий код:


       MData = wbk.getMetadata();
       Book = wbk.getActiveSheet();
       tsService.getMetaAttributesSource(Book, MData);
После выполнения примера в командную консоль будет возвращен источник
 таблицы данных.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
