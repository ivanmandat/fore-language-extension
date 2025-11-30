# IMetaAttributes

IMetaAttributes
-


# IMetaAttributes


Сборка: Rds;


## Описание


Интерфейс IMetaAttributes предназначен
 для работы с коллекцией атрибутов уровня фактов и наблюдений базы данных
 временных рядов.


## Иерархия наследования


           IMetaAttributes


           IMetaAttributesSet


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CollectionAttribute](IMetaAttributes.CollectionAttribute.htm)


		 Свойство CollectionAttribute
		 возвращает атрибут, являющийся родительским для коллекции атрибутов
		 системной таблицы, хранящей значения множественного атрибута.


		 ![](../../Property_Image.gif)
		 [KeepTableNativeNameOnMetabaseUpdate](IMetaAttributes.KeepTableNativeNameOnMetabaseUpdate.htm)


		 Свойство KeepTableNativeNameOnMetabaseUpdate
		 определяет признак использования сохранённого физического имени
		 дочерней таблицы справочника НСИ при обновлении репозитория.


		 ![](../../Property_Image.gif)
		 [SelectQueryText](IMetaAttributes.SelectQueryText.htm)
		 Свойство SelectQueryText
		 определяет текст запроса, используемого для получения значений
		 атрибутов.


		 ![](../../Property_Image.gif)
		 [Table](IMetaAttributes.Table.htm)
		 Свойство Table возвращает
		 таблицу, хранящую значения атрибутов.


		 ![](../../Property_Image.gif)
		 [UseQuery](IMetaAttributes.UseQuery.htm)
		 Свойство UseQuery определяет,
		 использовать ли запрос для получения значений атрибутов.


## Свойства, унаследованные от [IMetaAttributesSet](../IMetaAttributesSet/IMetaAttributesSet.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [BaseOperation](../IMetaAttributesSet/IMetaAttributesSet.BaseOperation.htm)


		 Свойство BaseOperation
		 возвращает операцию построения базового набора атрибутов.


		 ![](../../Property_Image.gif)
		 [BaseSet](../IMetaAttributesSet/IMetaAttributesSet.BaseSet.htm)


		 Свойство BaseSet возвращает
		 базовый набор атрибутов.


		 ![](../../Property_Image.gif)
		 [Count](../IMetaAttributesSet/IMetaAttributesSet.Count.htm)


		 Свойство Count возвращает
		 количество элементов в наборе.


		 ![](../../Property_Image.gif)
		 [Dictionary](../IMetaAttributesSet/IMetaAttributesSet.Dictionary.htm)


		 Свойство Dictionary
		 возвращает объект-родитель.


		 ![](../../Property_Image.gif)
		 [Item](../IMetaAttributesSet/IMetaAttributesSet.Item.htm)


		 Свойство Item возвращает
		 атрибут из набора по индексу.


		 ![](../../Property_Image.gif)
		 [Predefined](../IMetaAttributesSet/IMetaAttributesSet.Predefined.htm)


		 Свойство Predefined
		 возвращает атрибут заданного типа из набора.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IMetaAttributes.Add.htm)


		 Метод Add осуществляет
		 добавление атрибута в коллекцию.


		 ![](../../Sub_Image.gif)
		 [AttachTable](IMetaAttributes.AttachTable.htm)


		 Метод AttachTable устанавливает
		 таблицу для хранения значений атрибутов.


		 ![](../../Sub_Image.gif)
		 [BuildAttributesByFields](IMetaAttributes.BuildAttributesByFields.htm)


		 Метод BuildAttributesByFields
		 создает определения атрибутов по полям таблицы.


		 ![](../../Sub_Image.gif)
		 [BuildCollectionAttributes](IMetaAttributes.BuildCollectionAttributes.htm)


		 Метод BuildCollectionAttributes
		 создает атрибуты в системной таблице, необходимые для хранения
		 множественных значений.


		 ![](../../Sub_Image.gif)
		 [BuildFieldsByAttributes](IMetaAttributes.BuildFieldsByAttributes.htm)


		 Метод BuildFieldsByAttributes
		 создает поля таблицы по определениям атрибутов базы данных временных
		 рядов.


		 ![](../../Sub_Image.gif)
		 [CreateTable](IMetaAttributes.CreateTable.htm)


		 Метод CreateTable создает
		 системную таблицу для хранения множественных значений атрибутов
		 базы данных временных рядов.


		 ![](../../Sub_Image.gif)
		 [Remove](IMetaAttributes.Remove.htm)


		 Метод Remove осуществляет
		 удаление атрибута из коллекции.


## Методы, унаследованные от [IMetaAttributesSet](../IMetaAttributesSet/IMetaAttributesSet.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateSubset](../IMetaAttributesSet/IMetaAttributesSet.CreateSubset.htm)


		 Метод CreateSubset
		 создает набор атрибутов.


		 ![](../../Sub_Image.gif)
		 [FindById](../IMetaAttributesSet/IMetaAttributesSet.FindById.htm)


		 Метод FindById осуществляет
		 поиск атрибута по идентификатору.


		 ![](../../Sub_Image.gif)
		 [FindByKey](../IMetaAttributesSet/IMetaAttributesSet.FindByKey.htm)


		 Метод FindByKey осуществляет
		 поиск атрибута по ключу.


		 ![](../../Sub_Image.gif)
		 [FindByKind](../IMetaAttributesSet/IMetaAttributesSet.FindByKind.htm)


		 Метод FindByKind осуществляет
		 поиск атрибута по типу.


		 ![](../../Sub_Image.gif)
		 [FindByKindBasis](../IMetaAttributesSet/IMetaAttributesSet.FindByKindBasis.htm)


		 Метод FindByKindBasis
		 осуществляет поиск атрибута по типу и базису.


		 ![](../../Sub_Image.gif)
		 [FindByValuesObject](../IMetaAttributesSet/IMetaAttributesSet.FindByValuesObject.htm)


		 Метод FindByValuesObject
		 осуществляет поиск атрибута по ключу объекта, на который ссылается
		 атрибут.


		 ![](../../Sub_Image.gif)
		 [IndexOf](../IMetaAttributesSet/IMetaAttributesSet.IndexOf.htm)


		 Метод IndexOf возвращает
		 индекс атрибута в наборе.


		 ![](../../Sub_Image.gif)
		 [Move](../IMetaAttributesSet/IMetaAttributesSet.Move.htm)


		 Метод Move осуществляет
		 перемещение атрибутов в наборе.


См. также:


[Интерфейсы сборки Rds](../KeRds_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
