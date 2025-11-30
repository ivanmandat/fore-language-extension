# IRdsDictionaryFilterCondition

IRdsDictionaryFilterCondition
-


# IRdsDictionaryFilterCondition


Сборка: Rds;


## Описание


Интерфейс IRdsDictionaryFilterCondition
 предназначен для работы фильтром, по которому отбираются элементы справочника.


## Иерархия наследования


           IRdsDictionaryFilterCondition


## Комментарии


Фильтр образует выражение, состоящее из следующих частей: атрибут,
 оператор, значение.
 Например, Key <> -1, где:


	- Key. Атрибут;


	- <>. Оператор;


	- -1. Значение.


Фильтры объединяются в коллекцию, реализованную интерфейсом [IRdsDictionaryFilterConditions](../IRdsDictionaryFilterConditions/IRdsDictionaryFilterConditions.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attribute](IRdsDictionaryFilterCondition.Attribute.htm)


		 Свойство Attribute
		 возвращает атрибут, по которому фильтруются элементы.


		 ![](../../Property_Image.gif)
		 [Operation](IRdsDictionaryFilterCondition.Operation.htm)
		 Свойство Operation
		 определяет оператор, используемый для выражения фильтрации.


		 ![](../../Property_Image.gif)
		 [Value](IRdsDictionaryFilterCondition.Value.htm)


		 Свойство Value определяет
		 значение атрибута, по которому фильтруются элементы.


См. также:


[Интерфейсы
 сборки Rds](../KeRds_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
