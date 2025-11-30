# IPythonException

IPythonException
-


# IPythonException


Сборка: Python;


## Описание


Интерфейс IPythonException описывает
 исключительные ситуации, которые могут возникнуть во время выполнения
 функций на языке Python.


## Иерархия наследования


           [IException](ForeSys.chm::/Interface/IException/IException.htm)


           IPythonException


## Комментарии


Обработка исключительных ситуаций осуществляется стандартным оператором
 [Try…Except…Finally…End
 Try](Fore.chm::/10_Processing_Exceptions/processing_the_exceptions.htm).


## Свойства, унаследованные от [IException](ForeSys.chm::/Interface/IException/IException.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Line](ForeSys.chm::/Interface/IException/IException.Line.htm)
		 Свойство Line возвращает
		 номер строки, при выполнении которой была вызвана исключительная
		 ситуация.


		 ![](../../Property_Image.gif)
		 [Message](ForeSys.chm::/Interface/IException/IException.Message.htm)
		 Свойство Message возвращает
		 сообщение об ошибке.


		 ![](../../Property_Image.gif)
		 [MessageID](ForeSys.chm::/Interface/IException/IException.MessageID.htm)
		 Свойство MessageID
		 возвращает цифровой идентификатор ошибки.


		 ![](../../Property_Image.gif)
		 [NestedException](ForeSys.chm::/Interface/IException/IException.NestedException.htm)
		 Свойство NestedException
		 возвращает ошибку, вызвавшую текущее исключение.


		 ![](../../Property_Image.gif)
		 [Source](ForeSys.chm::/Interface/IException/IException.Source.htm)
		 Свойство Source возвращает
		 информацию об источнике ошибки.


## Методы, унаследованные от [IException](ForeSys.chm::/Interface/IException/IException.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ReportError](ForeSys.chm::/Interface/IException/IException.ReportError.htm)
		 Метод ReportError выводит
		 информационное сообщение об ошибке на экран.


См. также:


[Интерфейсы
 сборки Python](../KePython_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
