# TabUnknownParameterException

TabUnknownParameterException
-


# TabUnknownParameterException


Сборка: Tab;


## Описание


Класс TabUnknownParameterException
 реализует экземпляр исключительной ситуации, возникающей при записи в
 ячейку таблицы функции c неверным типом параметра.


## Комментарии


Если любую функцию с параметрами записать в ячейку таблицы с неверным
 типом параметра, то выводится соответствующие сообщения об ошибке:


	- Неизвестный идентификатор <наименование параметра>.


Данный класс позволяет реализовать экземпляр исключительной ситуации,
 возникающей при записи в ячейку таблицы функции c неверным типом параметра.


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateEx](TabUnknownParameterException.CreateEx.htm)
		 Конструктор CreateEx
		 создает экземпляр ошибки, возникающей при записи в ячейку таблицы
		 функции c неверным типом параметра.


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
		 [CSSClassName](ModDrawing.chm::/Interface/IExporter/IExporter.CSSClassName.htm)


		 Свойство CSSClassName
		 определяет префикс для элементов таблицы стилей HTML.


		 ![](../../Property_Image.gif)
		 [Encoding](ModDrawing.chm::/Interface/IExporter/IExporter.Encoding.htm)


		 Свойство Encoding устанавливает
		 кодовую страницу таблицы преобразования, в соответствии с которой
		 будет осуществляться экспорт данных.


		 ![](../../Property_Image.gif)
		 [ExportFromWeb](ModDrawing.chm::/Interface/IExporter/IExporter.ExportFromWeb.htm)


		 Свойство ExportFromWeb
		 определяет, какое действие производится с отчетом в веб-приложении
		 - экспорт или открытие в режиме предварительного просмотра.


## Методы объекта класса, унаследованные от [ITabUnknownParameterException](../../Interface/ITabUnknownParameterException/ITabUnknownParameterException.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [SetParamName](../../Interface/ITabUnknownParameterException/ITabUnknownParameterException.SetParamName.htm)
		 Метод SetParamName
		 устанавливает наименование параметра функции в экземпляре ошибки,
		 возникающей при записи в ячейку функции с неверным типом параметра.


## Методы объекта класса, унаследованные от [IException](ForeSys.chm::/Interface/IException/IException.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ExportToFile](ModDrawing.chm::/Interface/IExporter/IExporter.ExportToFile.htm)


		 Метод ExportToFile
		 осуществляет экспорт данных в файл указанного формата.


См. также:


[Классы
 сборки Tab](../TabSheet_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
