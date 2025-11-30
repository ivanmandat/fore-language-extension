# IArgumentException

IArgumentException
-


# IArgumentException


## Описание


Интерфейс IArgumentException
 содержит свойства исключительной ситуации, возникающей когда один из передаваемых
 свойству (методу) аргументов является недопустимым.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ParamName](IArgumentException.ParamName.htm)


		 Свойство ParamName
		 возвращает наименование параметра, являющегося недопустимым при
		 вызове какого-либо свойства (метода).


## Свойства, унаследованные от [IException](../IException/IException.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Line](../IException/IException.Line.htm)
		 Свойство Line возвращает
		 номер строки, при выполнении которой была вызвана исключительная
		 ситуация.


		 ![](../../Property_Image.gif)
		 [Message](../IException/IException.Message.htm)
		 Свойство Message возвращает
		 сообщение об ошибке.


		 ![](../../Property_Image.gif)
		 [MessageID](../IException/IException.MessageID.htm)
		 Свойство MessageID
		 возвращает цифровой идентификатор ошибки.


		 ![](../../Property_Image.gif)
		 [NestedException](../IException/IException.NestedException.htm)
		 Свойство NestedException
		 возвращает ошибку, вызвавшую текущее исключение.


		 ![](../../Property_Image.gif)
		 [Source](../IException/IException.Source.htm)
		 Свойство Source возвращает
		 информацию об источнике ошибки.


## Методы, унаследованные от [IException](../IException/IException.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ReportError](../IException/IException.ReportError.htm)
		 Метод ReportError выводит
		 информационное сообщение об ошибке на экран.


См. также:


[Интерфейсы сборки System](../System_interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
