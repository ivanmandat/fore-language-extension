# IEaxBeforeExecuteEventArgs

IEaxBeforeExecuteEventArgs
-


# IEaxBeforeExecuteEventArgs


Сборка: Express;


## Описание


Интерфейс IEaxBeforeExecuteEventArgs
 используется для работы с аргументами события, возникающего перед вычислением
 таблицы.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [IEaxAnalyzerEventArgs](../IEaxAnalyzerEventArgs/IEaxAnalyzerEventArgs.htm)


           IEaxBeforeExecuteEventArgs


## Комментарии


Событие возникает не только перед вычислением таблицы экспресс-отчета,
 но и перед вычислением рабочей книги.


Для получения объекта данного интерфейса используйте метод [IEaxAnalyzerUserEvents.OnBeforeExecuteAnalyzer](../IEaxAnalyzerUserEvents/IEaxAnalyzerUserEvents.OnBeforeExecuteAnalyzer.htm).


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
