# IMetabaseUpdateKeyMap

IMetabaseUpdateKeyMap
-


# IMetabaseUpdateKeyMap


Сборка: Metabase;


## Описание


Интерфейс IMetabaseUpdateKeyMap
 используется для работы с картой ключей, применяемых для повторного сопоставления
 объектов обновления.


## Иерархия наследования


           IMetabaseUpdateKeyMap


## Комментарии


Для получения карты ключей используйте свойство [IMetabaseUpdateContext.KeyMap](../IMetabaseUpdateContext/IMetabaseUpdateContext.KeyMap.htm).


Карта ключей представляет собой коллекцию элементов, описывающих объект
 из обновления и объект, сопоставляемый ему, в репозитории-приёмнике. Добавление
 элементов в коллекцию выполняется автоматически после выполнения методов
 интерфейса [IMetabaseUpdateContext](../IMetabaseUpdateContext/IMetabaseUpdateContext.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IMetabaseUpdateKeyMap.Count.htm)
		 Свойство Count
		 возвращает количество элементов в коллекции.


		 ![](../../Property_Image.gif)
		 [IsEmpty](IMetabaseUpdateKeyMap.IsEmpty.htm)
		 Свойство IsEmpty
		 возвращает признак того, пустая ли карта ключи.


		 ![](../../Property_Image.gif)
		 [Item](IMetabaseUpdateKeyMap.Item.htm)
		 Свойство Item
		 возвращает указанный элемент из коллекции.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [FindByNewKey](IMetabaseUpdateKeyMap.FindByNewKey.htm)
		 Метод FindByNewKey
		 выполняет поиск параметров сопоставления объекта по его ключу
		 в репозитории-приёмнике.


		 ![](../../Sub_Image.gif)
		 [FindByOldId](IMetabaseUpdateKeyMap.FindByOldId.htm)
		 Метод FindByOldId выполняет
		 поиск параметров сопоставления объекта по его идентификатору и
		 классу в обновлении.


		 ![](../../Sub_Image.gif)
		 [FindByOldKey](IMetabaseUpdateKeyMap.FindByOldKey.htm)
		 Метод FindByOldKey
		 выполняет поиск параметров сопоставления объекта по его ключу
		 в обновлении.


		 ![](../../Sub_Image.gif)
		 [Remove](IMetabaseUpdateKeyMap.Remove.htm)
		 Метод Remove
		 удаляет элемент из коллекции по его индексу.


См. также:


[Интерфейсы
 сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
