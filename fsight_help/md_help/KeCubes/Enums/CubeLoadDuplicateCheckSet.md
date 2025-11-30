# CubeLoadDuplicateCheckSet

CubeLoadDuplicateCheckSet
-


# CubeLoadDuplicateCheckSet


## Описание


Перечисление CubeLoadDuplicateCheckSet используется
 для определения режима исключения дублирующих значений при загрузке временных
 рядов.


Используется следующими свойствами:


	- [ICubeMetaLoader.DuplicateCheck](../Interface/ICubeMetaLoader/ICubeMetaLoader.DuplicateCheck.htm);


	- [IImportRequestProviderParams.DuplicateCheck](../Interface/IImportRequestProviderParams/IImportRequestProviderParams.DuplicateCheck.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Дублирующие значения
		 не исключаются.


		 1
		 Attribute. Исключаются
		 дублирующие значения атрибутов ряда.


		 2
		 GroupAttribute. Исключаются
		 дублирующие значения групповых атрибутов ряда.


		 4
		 ValueAttribute. Исключаются
		 дублирующие значения атрибутов наблюдений.


		 8
		 Value. Исключаются
		 дублирующие значения ряда.


## Комментарии


Для применения нескольких значений одновременно указывайте их через
 «Or».


См. также:


[Перечисления
 сборки Cubes](KeCubes_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
