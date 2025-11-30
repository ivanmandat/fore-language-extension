# IMetabaseUpdateObjectRemapping

IMetabaseUpdateObjectRemapping
-


# IMetabaseUpdateObjectRemapping


Сборка: Metabase;


## Описание


Интерфейс IMetabaseUpdateObjectRemapping
 используется для работы с параметрами повторного сопоставления объекта
 репозитория в обновлении и в репозитории-приёмнике.


## Иерархия наследования


           [IMetabaseUpdateRemapping](../IMetabaseUpdateRemapping/IMetabaseUpdateRemapping.htm)


           IMetabaseUpdateObjectRemapping


## Комментарии


Для получения карты ключей, содержащей коллекцию параметров повторного
 сопоставления, используйте свойство [IMetabaseUpdateContext.KeyMap](../IMetabaseUpdateContext/IMetabaseUpdateContext.KeyMap.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ClassId](IMetabaseUpdateObjectRemapping.ClassId.htm)
		 Свойство ClassId
		 возвращает индекс класса, которому принадлежит объект.


		 ![](../../Property_Image.gif)
		 [HasMultiValues](IMetabaseUpdateObjectRemapping.HasMultiValues.htm)
		 Свойство HasMultiValues
		 возвращает признак того, что объект участвует в нескольких повторных
		 сопоставлениях.


		 ![](../../Property_Image.gif)
		 [Map](IMetabaseUpdateObjectRemapping.Map.htm)
		 Свойство Map
		 возвращает коллекцию повторных сопоставлений указанного типа.


		 ![](../../Property_Image.gif)
		 [NullRemapping](IMetabaseUpdateObjectRemapping.NullRemapping.htm)


		 Свойство NullRemapping
		 возвращает признак того, что для объекта используется нулевое
		 повторное сопоставление.


		 ![](../../Property_Image.gif)
		 [Object](IMetabaseUpdateObjectRemapping.Object.htm)


		 Свойство Object
		 возвращает объект в репозитории-приёмнике, используемый для повторного
		 сопоставления.


## Свойства, унаследованные от [IMetabaseUpdateRemapping](../IMetabaseUpdateRemapping/IMetabaseUpdateRemapping.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [NewId](../IMetabaseUpdateRemapping/IMetabaseUpdateRemapping.NewId.htm)
		 Свойство NewId
		 возвращает идентификатор сопоставляемого элемента в репозитории-приёмнике.


		 ![](../../Property_Image.gif)
		 [NewKey](../IMetabaseUpdateRemapping/IMetabaseUpdateRemapping.NewKey.htm)
		 Свойство NewKey
		 возвращает ключ сопоставляемого элемента в репозитории-приёмнике.


		 ![](../../Property_Image.gif)
		 [OldId](../IMetabaseUpdateRemapping/IMetabaseUpdateRemapping.OldId.htm)
		 Свойство OldId
		 возвращает идентификатор сопоставляемого элемента в обновлении.


		 ![](../../Property_Image.gif)
		 [OldKey](../IMetabaseUpdateRemapping/IMetabaseUpdateRemapping.OldKey.htm)


		 Свойство OldKey
		 возвращает ключ сопоставляемого элемента в обновлении.


		 ![](../../Property_Image.gif)
		 [Type](../IMetabaseUpdateRemapping/IMetabaseUpdateRemapping.Type.htm)


		 Свойство Type
		 возвращает тип сопоставляемого элемента.


См. также:


[Интерфейсы
 сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
