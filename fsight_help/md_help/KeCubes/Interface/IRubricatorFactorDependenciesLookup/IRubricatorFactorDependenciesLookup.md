# IRubricatorFactorDependenciesLookup

IRubricatorFactorDependenciesLookup
-


# IRubricatorFactorDependenciesLookup


## Описание


Интерфейс IRubricatorFactorDependenciesLookup
 содержит свойства и методы, предназначенные для поиска зависимостей в
 базе данных временных рядов.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Current](IRubricatorFactorDependenciesLookup.Current.htm)
		 Свойство Current возвращает
		 текущую запись в курсоре, содержащем найденные данные.


		 ![](../../Property_Image.gif)
		 [WhereCalendarPoint](IRubricatorFactorDependenciesLookup.WhereCalendarPoint.htm)
		 Свойство WhereCalendarPoint
		 определяет календарную точку искомой зависимости.


		 ![](../../Property_Image.gif)
		 [WhereDependentFactorKey](IRubricatorFactorDependenciesLookup.WhereDependentFactorKey.htm)
		 Свойство WhereDependentFactorKey
		 определяет ключ зависимого показателя.


## Свойства, унаследованные от [IRubricatorDictionaryLookup](../IRubricatorDictionaryLookup/IRubricatorDictionaryLookup.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CurrentRevision](../IRubricatorDictionaryLookup/IRubricatorDictionaryLookup.CurrentRevision.htm)


		 Свойство CurrentRevision
		 определяет ревизию для редактирования.


		 ![](../../Property_Image.gif)
		 [Lookup](../IRubricatorDictionaryLookup/IRubricatorDictionaryLookup.Lookup.htm)


		 Свойство Lookup возвращает
		 условие поиска.


		 ![](../../Property_Image.gif)
		 [Rubricator](../IRubricatorDictionaryLookup/IRubricatorDictionaryLookup.Rubricator.htm)


		 Свойство Rubricator
		 возвращает данные базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [WhereCompoundFactorKey](../IRubricatorDictionaryLookup/IRubricatorDictionaryLookup.WhereCompoundFactorKey.htm)


		 Свойство WhereCompoundFactorKey
		 определяет составной ключ искомого временного ряда.


		 ![](../../Property_Image.gif)
		 [WhereFactorKey](../IRubricatorDictionaryLookup/IRubricatorDictionaryLookup.WhereFactorKey.htm)


		 Свойство WhereFactorKey
		 определяет ключ искомого временного ряда.


		 ![](../../Property_Image.gif)
		 [WhereIsDeleted](../IRubricatorDictionaryLookup/IRubricatorDictionaryLookup.WhereIsDeleted.htm)


		 Свойство WhereIsDeleted
		 определяет, участвуют ли в поиске удаленные записи.


		 ![](../../Property_Image.gif)
		 [WhereIsEmpty](../IRubricatorDictionaryLookup/IRubricatorDictionaryLookup.WhereIsEmpty.htm)


		 Свойство WhereIsEmpty
		 определяет, участвуют ли в поиске записи, для которых установлен
		 признак пустоты.


		 ![](../../Property_Image.gif)
		 [WhereRevisionKey](../IRubricatorDictionaryLookup/IRubricatorDictionaryLookup.WhereRevisionKey.htm)


		 Свойство WhereRevisionKey
		 определяет ключ ревизии, по которой должен быть осуществлен поиск.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Close](IRubricatorFactorDependenciesLookup.Close.htm)
		 Метод Close закрывает
		 курсор.


		 ![](../../Sub_Image.gif)
		 [Eof](IRubricatorFactorDependenciesLookup.Eof.htm)
		 Метод Eof возвращает
		 признак того, является ли текущая запись последней.


		 ![](../../Sub_Image.gif)
		 [Next](IRubricatorFactorDependenciesLookup.Next.htm)
		 Метод Next осуществляет
		 переход к следующей найденной записи.


		 ![](../../Sub_Image.gif)
		 [Open](IRubricatorFactorDependenciesLookup.Open.htm)
		 Метод Open открывает
		 курсор, позволяющий перемещаться по найденным данным.


## Методы, унаследованные от [IRubricatorDictionaryLookup](../IRubricatorDictionaryLookup/IRubricatorDictionaryLookup.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetFactors](../IRubricatorDictionaryLookup/IRubricatorDictionaryLookup.GetFactors.htm)


		 Метод GetFactors возвращает
		 найденные временные ряды.


		 ![](../../Sub_Image.gif)
		 [LookupFactors](../IRubricatorDictionaryLookup/IRubricatorDictionaryLookup.LookupFactors.htm)


		 Метод LookupFactors
		 возвращает массив ключей найденных временных рядов.


		 ![](../../Sub_Image.gif)
		 [LookupFactorsC](../IRubricatorDictionaryLookup/IRubricatorDictionaryLookup.LookupFactorsC.htm)


		 Метод LookupFactors
		 возвращает массив составных ключей найденных временных рядов.


		 ![](../../Sub_Image.gif)
		 [WhereRevisionBetween](../IRubricatorDictionaryLookup/IRubricatorDictionaryLookup.WhereRevisionBetween.htm)


		 Метод WhereRevisionBetween
		 осуществляет поиск временных рядов, измененных между двумя ревизиями.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
