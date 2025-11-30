# TabRequiredParametersException

TabRequiredParametersException
-


# TabRequiredParametersException


Сборка: Tab;


## Описание


Класс TabRequiredParametersException
 реализует экземпляр исключительной ситуации, возникающей при записи в
 ячейку таблицы функции без параметров и скобок.


## Комментарии


Если любую функцию с аргументами записать в ячейку таблицы без скобок
 и аргументов (), то выводятся соответствующие сообщения об ошибке:


	- Для вызова функции <наименование функции> требуется хотя
	 бы один параметр;


	- Определены не все обязательные параметры функции <наименование
	 функции>.


Данный класс позволяет реализовать экземпляр исключительной ситуации,
 возникающей при записи в ячейку таблицы функции без параметров и скобок.


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateEx](TabRequiredParametersException.CreateEx.htm)
		 Конструктор CreateEx
		 создает экземпляр ошибки, возникающей при записи в ячейку таблицы
		 функции без параметров и скобок.


## Конструкторы, унаследованные от [Exception](ForeSys.chm::/Class/Exception/Exception.htm)


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Create](ForeSys.chm::/Class/Exception/Exception.Create.htm)
		 Конструктор Create
		 создает экземпляр ошибки.


## Свойства объекта класса, унаследованные от [IException](ForeSys.chm::/Interface/IException/IException.htm)


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


## Методы объекта класса, унаследованные от [ITabRequiredParametersException](../../Interface/ITabRequiredParametersException/ITabRequiredParametersException.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [SetFuncName](../../Interface/ITabRequiredParametersException/ITabRequiredParametersException.SetFuncName.htm)
		 Метод SetFuncName устанавливает
		 наименование функции в экземпляре ошибки, возникающей при записи
		 в ячейку таблицы функции без параметров и скобок.


## Методы объекта класса, унаследованные от [IException](ForeSys.chm::/Interface/IException/IException.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ReportError](ForeSys.chm::/Interface/IException/IException.ReportError.htm)
		 Метод ReportError выводит
		 информационное сообщение об ошибке на экран.


Методы объекта класса, унаследованные от [ITabRequiredParametersException](../../Interface/ITabRequiredParametersException/ITabRequiredParametersException.htm)


См. также:


[Классы
 сборки Tab](../TabSheet_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
