# IResourceStrings

IResourceStrings
-


# IResourceStrings


Сборка: IO;


## Описание


Интерфейс IResourceStrings предназначен
 для работы со строковыми элементами в редакторе ресурсов.


## Иерархия наследования


           [IResourceItems](../IResourceItems/IResourceItems.htm)


           IResourceStrings


## Комментарии


Для получения строковых элементов текущего языка ресурсов используйте
 свойство [IResourceObject.Strings](../IResourceObject/IResourceObject.Strings.htm),
 для получения строковых элементов ресурсов для конкретного языка - свойство
 [IResourceLocale.Strings](../IResourceLocale/IResourceLocale.Strings.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Value](IResourceStrings.Value.htm)


		 Свойство Value определяет
		 строку редактора ресурсов по идентификатору.


		 ![](../../Property_Image.gif)
		 [ValueByKey](IResourceStrings.ValueByKey.htm)


		 Свойство ValueByKey
		 определяет строку редактора ресурсов по ключу.


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
