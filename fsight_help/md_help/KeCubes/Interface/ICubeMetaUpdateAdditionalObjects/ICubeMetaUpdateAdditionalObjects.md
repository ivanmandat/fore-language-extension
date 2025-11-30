# ICubeMetaUpdateAdditionalObjects

ICubeMetaUpdateAdditionalObjects
-


# ICubeMetaUpdateAdditionalObjects


## Описание


Интерфейс CubeMetaUpdateAdditionalObjects
 предназначен для работы с коллекцией объектов, которые должны быть скопированы
 вместе с базой данных временных рядов, но не являются вложенными по отношению
 к нему.


## Комментарии


В коллекции могут содержаться объекты различных классов. Если необходимо
 скопировать регламентный или экспресс-отчет, то он должен зависеть только
 от одной базы данных временных рядов. Для работы с элементами коллекции
 предназначен интерфейс [ICubeMetaUpdateAdditionalObject](../ICubeMetaUpdateAdditionalObject/ICubeMetaUpdateAdditionalObject.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](ICubeMetaUpdateAdditionalObjects.Count.htm)
		 Свойство Count возвращает
		 количество объектов в коллекции.


		 ![](../../Property_Image.gif)
		 [Item](ICubeMetaUpdateAdditionalObjects.Item.htm)
		 Свойство Item возвращает
		 объект из коллекции по его индексу.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](ICubeMetaUpdateAdditionalObjects.Add.htm)
		 Метод Add добавляет
		 указанный объект в коллекцию.


		 ![](../../Sub_Image.gif)
		 [Clear](ICubeMetaUpdateAdditionalObjects.Clear.htm)
		 Метод Clear очищает
		 коллекцию объектов.


		 ![](../../Sub_Image.gif)
		 [FindById](ICubeMetaUpdateAdditionalObjects.FindById.htm)
		 Метод FindById осуществляет
		 поиск объекта в коллекции по его идентификатору.


		 ![](../../Sub_Image.gif)
		 [FindByKey](ICubeMetaUpdateAdditionalObjects.FindByKey.htm)
		 Метод FindByKey осуществляет
		 поиск объекта в коллекции по его ключу.


		 ![](../../Sub_Image.gif)
		 [Remove](ICubeMetaUpdateAdditionalObjects.Remove.htm)
		 Метод Remove удаляет
		 объект из коллекции по его индексу.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
