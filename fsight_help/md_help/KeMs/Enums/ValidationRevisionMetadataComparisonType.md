# ValidationRevisionMetadataComparisonType

ValidationRevisionMetadataComparisonType
-


# ValidationRevisionMetadataComparisonType


## Описание


Перечисление ValidationRevisionMetadataComparisonType
 содержит типы сравнения метаданных.


Используется следующими свойствами и методами:


	- [IValidationCrossDatabase.ComparisonType](../Interface/IValidationCrossDatabase/IValidationCrossDatabase.ComparisonType.htm);


	- [IValidationRevisionMetadataComparison.ComparisonType](../Interface/IValidationRevisionMetadataComparison/IValidationRevisionMetadataComparison.ComparisonType.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Change. Изменение.


		 1
		 NonChanged. Без изменений.


		 2
		 AddedValue. Добавление
		 значений.


		 3
		 RemovedValue. Удаление
		 значений.


		 4
		 Increase. Значение
		 увеличилось.


		 5
		 Decrease. Значение
		 уменьшилось.


## Комментарии


Сравниваться могут значения в метаданных как на уровне рядов, так и
 на уровне наблюдений в базе данных временных рядов.


Значения Increase и Decrease
 предназначены для использования в валидациях типа «Сравнение
 с базой данных временных рядов» и «Сравнение
 версий метаданных».


	- Change, NonChanged,
	 Increase, Decrease.
	 Если хотя бы одно из сравниваемых значений пустое, то результат сравнения
	 False. Таким образом, данные
	 типы валидаций проверяют только изменение уже существующих значений.


	- AddedValue. Если значение
	 было пустое, а стало непустым, то результат сравнения True.
	 В остальных случаях результат сравнения False.


	- RemovedValue. Если значение
	 было непустое, а стало пустым, то результат сравнения True.
	 В остальных случаях результат сравнения False.


См. также:


[Перечисления сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
