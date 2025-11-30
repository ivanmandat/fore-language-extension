# IEaxAfterExportEventArgs

IEaxAfterExportEventArgs
-


# IEaxAfterExportEventArgs


Сборка: Express;


## Описание


Интерфейс IEaxAfterExportEventArg
 используется для работы с аргументами события, возникающего после экспорта
 отчета.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [IEaxAnalyzerEventArgs](../IEaxAnalyzerEventArgs/IEaxAnalyzerEventArgs.htm)


           [IEaxBeforeExportEventArgs](../IEaxBeforeExportEventArgs/IEaxBeforeExportEventArgs.htm)


           IEaxAfterExportEventArg


## Комментарии


Для получения объекта данного интерфейса используйте метод [IEaxAnalyzerUserEvents.OnAfterExportAnalyzer](../IEaxAnalyzerUserEvents/IEaxAnalyzerUserEvents.OnAfterExportAnalyzer.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [PageCount](IEaxAfterExportEventArgs.PageCount.htm)
		 Свойство PageCount
		 возвращает количество экспортированных страниц.


## Свойства, унаследованные от [IEaxBeforeExportEventArgs](../IEaxBeforeExportEventArgs/IEaxBeforeExportEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Format](../IEaxBeforeExportEventArgs/IEaxBeforeExportEventArgs.Format.htm)
		 Свойство Format возвращает
		 описание формата, в который производится экспорт.


## Свойства, унаследованные от [IEaxAnalyzerEventArgs](../IEaxAnalyzerEventArgs/IEaxAnalyzerEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AnalyzerData](../IEaxAnalyzerEventArgs/IEaxAnalyzerEventArgs.AnalyzerData.htm)
		 Свойство AnalyzerData
		 возвращает данные отчета, использующего обработчик событий.


См. также:


[Интерфейсы
 сборки Express](../KeExpress_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
