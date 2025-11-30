# IMetaDictionaryLookup

IMetaDictionaryLookup
-


# IMetaDictionaryLookup


Сборка: Rds;


## Описание


Интерфейс IMetaDictionaryLookup
 содержит свойства и методы для организации поиска в базе данных временных
 рядов.


## Иерархия наследования


           IMetaDictionaryLookup


## Комментарии


Ограничения IMetaDictionaryLookup:
 интерфейс не предназначен для работы с атрибутами, которые могут иметь
 множественное значение.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Current](IMetaDictionaryLookup.Current.htm)


		 Свойство Current возвращает
		 текущий объект в курсоре.


		 ![](../../Property_Image.gif)
		 [CustomWhere](IMetaDictionaryLookup.CustomWhere.htm)


		 Свойство CustomWhere
		 возвращает дополнительное условие поиска.


		 ![](../../Property_Image.gif)
		 [DeleteMarkAttribute](IMetaDictionaryLookup.DeleteMarkAttribute.htm)


		 Свойство DeleteMarkAttribute
		 определяет атрибут, содержащий признак того, что запись удалена.


		 ![](../../Property_Image.gif)
		 [Dictionary](IMetaDictionaryLookup.Dictionary.htm)


		 Свойство Dictionary
		 возвращает данные о базе данных временных рядов.


		 ![](../../Property_Image.gif)
		 [EmptyMarkAttribute](IMetaDictionaryLookup.EmptyMarkAttribute.htm)


		 Свойство EmptyMarkAttribute
		 определяет идентификатор атрибута, содержащего признак пустоты
		 показателя.


		 ![](../../Property_Image.gif)
		 [FactorAttribute](IMetaDictionaryLookup.FactorAttribute.htm)


		 Свойство FactorAttribute
		 определяет наименование атрибута, содержащего ключ показателя.


		 ![](../../Property_Image.gif)
		 [LookupCompoundKeys](IMetaDictionaryLookup.LookupCompoundKeys.htm)


		 Свойство LookupCompoundKeys
		 возвращает массив составных ключей для временных рядов.


		 ![](../../Property_Image.gif)
		 [MnemoAttribute](IMetaDictionaryLookup.MnemoAttribute.htm)


		 Свойство MnemoAttribute
		 определяет наименование атрибута, содержащего мнемонику.


		 ![](../../Property_Image.gif)
		 [RevisionAttribute](IMetaDictionaryLookup.RevisionAttribute.htm)


		 Свойство RevisionAttribute
		 определяет наименование атрибута ревизии.


		 ![](../../Property_Image.gif)
		 [RevisionAttributes](IMetaDictionaryLookup.RevisionAttributes.htm)


		 Свойство RevisionAttributes
		 определяет коллекцию наименований атрибутов.


		 ![](../../Property_Image.gif)
		 [RevisionConstantKey](IMetaDictionaryLookup.RevisionConstantKey.htm)


		 Свойство RevisionConstantKey
		 определяет ключ для поиска только на одну ревизию.


		 ![](../../Property_Image.gif)
		 [Where](IMetaDictionaryLookup.Where.htm)


		 Свойство Where возвращает
		 условие поиска.


		 ![](../../Property_Image.gif)
		 [WhereFactorKey](IMetaDictionaryLookup.WhereFactorKey.htm)


		 Свойство WhereFactorKey
		 определяет искомое значение атрибута, указанного в свойстве [FactorAttribute](IMetaDictionaryLookup.FactorAttribute.htm).


		 ![](../../Property_Image.gif)
		 [WhereFactorMnemo](IMetaDictionaryLookup.WhereFactorMnemo.htm)


		 Свойство WhereFactorMnemo
		 определяет искомое значение атрибута, указанного в свойстве [MnemoAttribute](IMetaDictionaryLookup.MnemoAttribute.htm).


		 ![](../../Property_Image.gif)
		 [WhereIsDeleted](IMetaDictionaryLookup.WhereIsDeleted.htm)


		 Свойство WhereIsDeleted
		 определяет, участвуют ли в поиске удаленные записи.


		 ![](../../Property_Image.gif)
		 [WhereIsEmpty](IMetaDictionaryLookup.WhereIsEmpty.htm)


		 Свойство WhereIsEmpty
		 определяет, участвуют ли в поиске записи, для которых установлен
		 признак пустоты.


		 ![](../../Property_Image.gif)
		 [WhereRevisionKey](IMetaDictionaryLookup.WhereRevisionKey.htm)


		 Свойство WhereRevisionKey
		 определяет искомое значение атрибута, указанного в свойстве [RevisionAttribute](IMetaDictionaryLookup.RevisionAttribute.htm)
		 или [RevisionAttributes](IMetaDictionaryLookup.RevisionAttributes.htm).


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AppendKeysFilter](IMetaDictionaryLookup.AppendKeysFilter.htm)


		 Метод AppendKeysFilter
		 осуществляет добавление фильтрации по отметке элементов.


		 ![](../../Sub_Image.gif)
		 [AppendKeysFilterRaw](IMetaDictionaryLookup.AppendKeysFilterRaw.htm)


		 Метод AppendKeysFilterRaw
		 осуществляет добавление фильтрации по отметке в определенных атрибутах.


		 ![](../../Sub_Image.gif)
		 [Close](IMetaDictionaryLookup.Close.htm)


		 Метод Close осуществляет
		 закрытие курсора.


		 ![](../../Sub_Image.gif)
		 [Eof](IMetaDictionaryLookup.Eof.htm)


		 Метод Eof возвращает
		 признак того, является ли текущая запись последней.


		 ![](../../Sub_Image.gif)
		 [GetKeys](IMetaDictionaryLookup.GetKeys.htm)


		 Метод GetKeys возвращает
		 элементы базы данных временных рядов.


		 ![](../../Sub_Image.gif)
		 [GetKeysRaw](IMetaDictionaryLookup.GetKeysRaw.htm)


		 Метод GetKeysRaw возвращает
		 элементы базы данных временных рядов по заданным измерениям.


		 ![](../../Sub_Image.gif)
		 [LookupKeys](IMetaDictionaryLookup.LookupKeys.htm)


		 Метод LookupKeys осуществляет
		 поиск и возвращает массив значений указанного атрибута.


		 ![](../../Sub_Image.gif)
		 [Next](IMetaDictionaryLookup.Next.htm)


		 Метод Next осуществляет
		 переход на следующую запись.


		 ![](../../Sub_Image.gif)
		 [Open](IMetaDictionaryLookup.Open.htm)


		 Метод Open осуществляет
		 открытие курсора, позволяющего перемещаться по данным.


		 ![](../../Sub_Image.gif)
		 [SetKeysFilter](IMetaDictionaryLookup.SetKeysFilter.htm)


		 Метод SetKeysFilter
		 устанавливает фильтрацию по отметке элементов.


		 ![](../../Sub_Image.gif)
		 [SetKeysFilterRaw](IMetaDictionaryLookup.SetKeysFilterRaw.htm)


		 Метод SetKeysFilterRaw
		 устанавливает фильтрацию по отметке в определенных атрибутах.


		 ![](../../Sub_Image.gif)
		 [WhereRevisionBetween](IMetaDictionaryLookup.WhereRevisionBetween.htm)


		 Метод WhereRevisionBetween
		 осуществляет поиск между двумя значениями атрибута, указанного
		 в свойстве [RevisionAttribute](IMetaDictionaryLookup.RevisionAttribute.htm)
		 или [RevisionAttributes](IMetaDictionaryLookup.RevisionAttributes.htm).


См. также:


[Интерфейсы сборки Rds](../KeRds_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
