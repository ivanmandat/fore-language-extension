# IValidationCrossDatabaseMapping

IValidationCrossDatabaseMapping
-


# IValidationCrossDatabaseMapping


Сборка: Ms;


## Описание


Интерфейс IValidationCrossDatabaseMapping
 предназначен для работы с привязкой измерения сравниваемых источников
 данных.


## Иерархия наследования


           IValidationCrossDatabaseMapping


## Комментарии


Привязка измерений сравниваемых источников данных используется в валидации
 «Сравнение с базой данных временных
 рядов». В качестве источников данных могут выступать базы данных
 временных рядов и стандартные кубы, имеющие календарное измерение.


Коллекцию привязок валидации возвращает свойство [IValidationCrossDatabase.Mappings](../IValidationCrossDatabase/IValidationCrossDatabase.Mappings.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ComparatorDim](IValidationCrossDatabaseMapping.ComparatorDim.htm)
		 Свойство ComparatorDim
		 определяет справочник, на котором строится измерение в источнике
		 данных, с которым производится сравнение.


		 ![](../../Property_Image.gif)
		 [ComparatorSelectionMapping](IValidationCrossDatabaseMapping.ComparatorSelectionMapping.htm)
		 Свойство ComparatorSelectionMapping
		 определяет отметку измерения в источнике данных, с которым производится
		 сравнение.


		 ![](../../Property_Image.gif)
		 [TargetDim](IValidationCrossDatabaseMapping.TargetDim.htm)
		 Свойство TargetDim
		 определяет справочник, на котором строится измерение в сравниваемом
		 источнике данных.


		 ![](../../Property_Image.gif)
		 [TargetSelectionMapping](IValidationCrossDatabaseMapping.TargetSelectionMapping.htm)
		 Свойство TargetSelectionMapping
		 определяет отметку измерения в сравниваемом источнике данных.


		 ![](../../Property_Image.gif)
		 [Type](IValidationCrossDatabaseMapping.Type.htm)
		 Свойство Type определяет
		 тип привязки измерения.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
