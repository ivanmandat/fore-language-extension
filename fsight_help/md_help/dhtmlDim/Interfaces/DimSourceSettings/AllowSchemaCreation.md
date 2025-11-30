# AllowSchemaCreation

AllowSchemaCreation
-


# AllowSchemaCreation


## Синтаксис


AllowSchemaCreation: Boolean;


## Описание


Свойство AllowSchemaCreation
 определяет возможность создания [схемы
 отметки](UiNavObj.chm::/reference_book/look-and-feel_Reference_book/UiMd_reference_book_look-and-feel_Scheme.htm) по текущей отметке измерения.


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 Создание схемы отметки по текущей отметке измерения доступно;


	- False. Создание схемы
	 отметки по текущей отметке измерения недоступно.


Значение свойства задается в конструкторе [DimSource](../../Classes/Metabase/DimSource/Constructor_DimSource.htm)
 или с помощью метода setAllowSchemaCreation,
 а возвращается с помощью метода getAllowSchemaCreation.


См. также:


[DimSourceSettings](DimSourceSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
