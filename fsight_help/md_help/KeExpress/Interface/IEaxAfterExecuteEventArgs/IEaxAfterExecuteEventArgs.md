# IEaxAfterExecuteEventArgs

IEaxAfterExecuteEventArgs
-


# IEaxAfterExecuteEventArgs


Сборка: Express;


## Описание


Интерфейс IEaxAfterExecuteEventArgs
 используется для работы с аргументами события, возникающего после вычисления
 таблицы.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [IEaxAnalyzerEventArgs](../IEaxAnalyzerEventArgs/IEaxAnalyzerEventArgs.htm)


           [IEaxBeforeExecuteEventArgs](../IEaxBeforeExecuteEventArgs/IEaxBeforeExecuteEventArgs.htm)


           EaxAfterExecuteEventArgs


## Комментарии


Событие возникает не только после вычисления таблицы экспресс-отчета,
 но и после вычисления рабочей книги.


Для получения объекта данного интерфейса используйте метод [IEaxAnalyzerUserEvents.OnAfterExecuteAnalyzer](../IEaxAnalyzerUserEvents/IEaxAnalyzerUserEvents.OnAfterExecuteAnalyzer.htm).


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
