# IRubricatorDictionaryLookup

IRubricatorDictionaryLookup
-


# IRubricatorDictionaryLookup


Сборка: Cubes;


## Описание


Интерфейс IRubricatorDictionaryLookup
 содержит свойства и методы, предназначенные для поиска в базе данных временных
 рядов.


## Иерархия наследования


           IRubricatorDictionaryLookup


## Комментарии


Данный интерфейс является базовым для реализации поиска в базе данных
 временных рядов. Свойства и методы IRubricatorDictionaryLookup
 наследуются следующими интерфейсами:


	- [IRubricatorFactorDependenciesLookup](../IRubricatorFactorDependenciesLookup/IRubricatorFactorDependenciesLookup.htm).
	 Поиск зависимостей в БД временных рядов;


	- [IRubricatorFactsLookup](../IRubricatorFactsLookup/IRubricatorFactsLookup.htm).
	 Поиск среди временных рядов;


	- [IRubricatorObservationsLookup](../IRubricatorObservationsLookup/IRubricatorObservationsLookup.htm).
	 Поиск среди данных временных рядов.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CurrentRevision](IRubricatorDictionaryLookup.CurrentRevision.htm)


		 Свойство CurrentRevision
		 определяет ревизию для редактирования.


		 ![](../../Property_Image.gif)
		 [Lookup](IRubricatorDictionaryLookup.Lookup.htm)


		 Свойство Lookup возвращает
		 условие поиска.


		 ![](../../Property_Image.gif)
		 [Rubricator](IRubricatorDictionaryLookup.Rubricator.htm)


		 Свойство Rubricator
		 возвращает данные базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [WhereCompoundFactorKey](IRubricatorDictionaryLookup.WhereCompoundFactorKey.htm)


		 Свойство WhereCompoundFactorKey
		 определяет составной ключ искомого временного ряда.


		 ![](../../Property_Image.gif)
		 [WhereFactorKey](IRubricatorDictionaryLookup.WhereFactorKey.htm)


		 Свойство WhereFactorKey
		 определяет ключ искомого временного ряда.


		 ![](../../Property_Image.gif)
		 [WhereIsDeleted](IRubricatorDictionaryLookup.WhereIsDeleted.htm)


		 Свойство WhereIsDeleted
		 определяет, участвуют ли в поиске удаленные записи.


		 ![](../../Property_Image.gif)
		 [WhereIsEmpty](IRubricatorDictionaryLookup.WhereIsEmpty.htm)


		 Свойство WhereIsEmpty
		 определяет, участвуют ли в поиске записи, для которых установлен
		 признак пустоты.


		 ![](../../Property_Image.gif)
		 [WhereRevisionKey](IRubricatorDictionaryLookup.WhereRevisionKey.htm)


		 Свойство WhereRevisionKey
		 определяет ключ ревизии, по которой должен быть осуществлен поиск.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetFactors](IRubricatorDictionaryLookup.GetFactors.htm)


		 Метод GetFactors возвращает
		 найденные временные ряды.


		 ![](../../Sub_Image.gif)
		 [LookupFactors](IRubricatorDictionaryLookup.LookupFactors.htm)


		 Метод LookupFactors
		 возвращает массив ключей найденных временных рядов.


		 ![](../../Sub_Image.gif)
		 [LookupFactorsC](IRubricatorDictionaryLookup.LookupFactorsC.htm)


		 Метод LookupFactors
		 возвращает массив составных ключей найденных временных рядов.


		 ![](../../Sub_Image.gif)
		 [WhereRevisionBetween](IRubricatorDictionaryLookup.WhereRevisionBetween.htm)


		 Метод WhereRevisionBetween
		 осуществляет поиск временных рядов, измененных между двумя ревизиями.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
