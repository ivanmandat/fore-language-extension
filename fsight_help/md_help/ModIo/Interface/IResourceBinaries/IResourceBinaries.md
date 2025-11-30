# IResourceBinaries

IResourceBinaries
-


# IResourceBinaries


Сборка: IO;


## Описание


Интерфейс IResourceBinaries
 содержит свойства и методы для работы с изображениями редактора ресурсов.


## Иерархия наследования


           [IResourceItems](../IResourceItems/IResourceItems.htm)


           IResourceBinaries


## Комментарии


Для получения изображений текущего языка ресурсов используйте свойство
 [IResourceObject.Binaries](../IResourceObject/IResourceObject.Binaries.htm),
 для получения изображений для конкретного языка - свойство [IResourceLocale.Binaries](../IResourceLocale/IResourceLocale.Binaries.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Value](IResourceBinaries.Value.htm)


		 Свойство Value определяет
		 изображение редактора ресурсов, идентификатор которого передается
		 посредством параметра Id.


		 ![](../../Property_Image.gif)
		 [ValueByKey](IResourceBinaries.ValueByKey.htm)


		 Свойство ValueByKey
		 определяет изображение редактора ресурсов, ключ которого передается
		 посредством параметра Key.


## Свойства, унаследованные от [IResourceItems](../IResourceItems/IResourceItems.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](../IResourceItems/IResourceItems.Count.htm)


		 Свойство Count возвращает
		 количество строк/изображений в редакторе ресурсов.


		 ![](../../Property_Image.gif)
		 [Id](../IResourceItems/IResourceItems.Id.htm)


		 Свойство Id определяет
		 идентификатор объекта с указанным ключом.


		 ![](../../Property_Image.gif)
		 [Key](../IResourceItems/IResourceItems.Key.htm)


		 Свойство Key возвращает
		 ключ объекта с указанным индексом.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Load](IResourceBinaries.Load.htm)


		 Метод Load загружает
		 изображение с указанным ключом из ресурсов в поток.


## Методы, унаследованные от [IResourceItems](../IResourceItems/IResourceItems.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](../IResourceItems/IResourceItems.Add.htm)


		 Метод Add добавляет
		 объект в редактор ресурсов.


		 ![](../../Sub_Image.gif)
		 [Clear](../IResourceItems/IResourceItems.Clear.htm)


		 Метод Clear удаляет
		 все объекты редактора ресурсов.


		 ![](../../Sub_Image.gif)
		 [FindById](../IResourceItems/IResourceItems.FindById.htm)


		 Метод FindById выполняет
		 поиск ключа объекта редактора ресурсов по указанному идентификатору
		 объекта.


		 ![](../../Sub_Image.gif)
		 [FindByKey](../IResourceItems/IResourceItems.FindByKey.htm)


		 Метод FindByKey
		 выполняет поиск индекса объекта редактора ресурсов по указанному
		 ключу объекта.


		 ![](../../Sub_Image.gif)
		 [Remove](../IResourceItems/IResourceItems.Remove.htm)


		 Метод Remove удаляет
		 объект редактора ресурсов по заданному индексу.


		 ![](../../Sub_Image.gif)
		 [RemoveById](../IResourceItems/IResourceItems.RemoveById.htm)


		 Метод RemoveById удаляет
		 объект редактора ресурсов по заданному идентификатору.


		 ![](../../Sub_Image.gif)
		 [RemoveByKey](../IResourceItems/IResourceItems.RemoveByKey.htm)


		 Метод RemoveByKey удаляет
		 объект редактора ресурсов по заданному ключу.


См. также:


[Интерфейсы сборки IO](../ModIo_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
