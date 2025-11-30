# IResourceItems

IResourceItems
-


# IResourceItems


Сборка: IO;


## Описание


Интерфейс IResourceItems является
 базовым и содержит свойства и методы для интерфейсов, реализующих объекты
 редактора ресурсов.


## Иерархия наследования


           IResourceItems


## Комментарии


В редакторе ресурсов могут содержаться строковые элементы и изображения.
 Для работы со строковыми элементами ресурсов используйте интерфейс [IResourceStrings](../IResourceStrings/IResourceStrings.htm),
 для работы с изображениями - интерфейс [IResourceBinaries](../IResourceBinaries/IResourceBinaries.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IResourceItems.Count.htm)


		 Свойство Count возвращает
		 количество строк/изображений в редакторе ресурсов.


		 ![](../../Property_Image.gif)
		 [Id](IResourceItems.Id.htm)


		 Свойство Id определяет
		 идентификатор объекта с указанным ключом.


		 ![](../../Property_Image.gif)
		 [Key](IResourceItems.Key.htm)


		 Свойство Key возвращает
		 ключ объекта с указанным индексом.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IResourceItems.Add.htm)


		 Метод Add добавляет
		 объект в редактор ресурсов.


		 ![](../../Sub_Image.gif)
		 [Clear](IResourceItems.Clear.htm)


		 Метод Clear удаляет
		 все объекты редактора ресурсов.


		 ![](../../Sub_Image.gif)
		 [FindById](IResourceItems.FindById.htm)


		 Метод FindById выполняет
		 поиск ключа объекта редактора ресурсов по указанному идентификатору
		 объекта.


		 ![](../../Sub_Image.gif)
		 [FindByKey](IResourceItems.FindByKey.htm)


		 Метод FindByKey
		 выполняет поиск индекса объекта редактора ресурсов по указанному
		 ключу объекта.


		 ![](../../Sub_Image.gif)
		 [Remove](IResourceItems.Remove.htm)


		 Метод Remove удаляет
		 объект редактора ресурсов по заданному индексу.


		 ![](../../Sub_Image.gif)
		 [RemoveById](IResourceItems.RemoveById.htm)


		 Метод RemoveById удаляет
		 объект редактора ресурсов по заданному идентификатору.


		 ![](../../Sub_Image.gif)
		 [RemoveByKey](IResourceItems.RemoveByKey.htm)


		 Метод RemoveByKey удаляет
		 объект редактора ресурсов по заданному ключу.


См. также:


[Интерфейсы сборки IO](../ModIo_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
