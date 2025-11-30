# ITabUnknownParameterException

ITabUnknownParameterException
-


# ITabUnknownParameterException


Сборка: Tab;


## Описание


Интерфейс ITabUnknownParameterException
 используется для работы с исключительной ситуацией, возникающей при записи
 в ячейку таблицы функции c неверным типом параметра.


## Иерархия наследования


           [IException](ForeSys.chm::/Interface/IException/IException.htm)


           ITabUnknownParameterException


## Комментарии


Если любую функцию с параметрами записать в ячейку таблицы с неверным
 типом параметра, то выводится соответствующие сообщения об ошибке:


	- Неизвестный идентификатор <наименование параметра>.


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


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [SetParamName](ITabUnknownParameterException.SetParamName.htm)
		 Метод SetParamName
		 устанавливает наименование параметра функции в экземпляре ошибки,
		 возникающей при записи в ячейку функции с неверным типом параметра.


## Методы, унаследованные от [IException](ForeSys.chm::/Interface/IException/IException.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ReportError](ForeSys.chm::/Interface/IException/IException.ReportError.htm)
		 Метод ReportError выводит
		 информационное сообщение об ошибке на экран.


См. также:


[Интерфейсы
 сборки Tab](../TabSheet_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
