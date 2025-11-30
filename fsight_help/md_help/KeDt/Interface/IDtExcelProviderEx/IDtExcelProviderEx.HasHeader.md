# IDtExcelProviderEx.HasHeader

IDtExcelProviderEx.HasHeader
-


# IDtExcelProviderEx.HasHeader


## Синтаксис


HasHeader: Boolean;


## Описание


Свойство HasHeader определяет,
 содержит ли файл-источник строку с заголовками данных.


## Комментарии


Допустимые значения:


	- True. Файл-источник
	 содержит строку с заголовками данных. Индекс данной строки определяет
	 свойство [IDtExcelProviderEx.HeaderRow](IDtExcelProviderEx.HeaderRow.htm);


	- False. В файле-источнике
	 отсутствует строка с заголовками данных.


При смене значения свойства [IDtExcelProviderEx.HeaderRow](IDtExcelProviderEx.HeaderRow.htm)
 происходит автоматическая смена значения HasHeader:


	- если установить [IDtExcelProviderEx.HeaderRow](IDtExcelProviderEx.HeaderRow.htm), равное «-1»,
	 HasHeader примет значение
	 False;


	- если установить [IDtExcelProviderEx.HeaderRow](IDtExcelProviderEx.HeaderRow.htm) от
	 «0» и больше, HasHeader примет
	 значение True.


## Пример


Примеры использования приведен в описании свойства [IDtExcelProviderEx.File](IDtExcelProviderEx.File.htm).


См. также:


[IDtExcelProviderEx](IDtExcelProviderEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
