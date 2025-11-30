# ICubeAttachmentsEdited

ICubeAttachmentsEdited
-


# ICubeAttachmentsEdited


Сборка: Cubes;


## Описание


Интерфейс ICubeAttachmentsEdited
 предназначен для редактирования коллекции вложений, хранящихся по определённой
 координате куба.


## Иерархия наследования


ICubeAttachmentsEdited


## Комментарии


Для редактирования коллекции вложений используйте метод [ICubeAttachmentManager.ReadAttachments](../ICubeAttachmentManager/ICubeAttachmentManager.ReadAttachments.htm).
 После завершения редактирования также необходимо вызвать метод [ICubeAttachmentManager.Post](../ICubeAttachmentManager/ICubeAttachmentManager.Post.htm).


## Свойства, унаследованные от [ICubeAttachments](../ICubeAttachments/ICubeAttachments.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attributes](../ICubeAttachments/ICubeAttachments.Attributes.htm)


		 Свойство Attributes
		 возвращает коллекцию атрибутов справочника, в котором хранятся
		 вложения куба.


		 ![](../../Property_Image.gif)
		 [Count](../ICubeAttachments/ICubeAttachments.Count.htm)


		 Свойство Count возвращает
		 количество вложений в коллекции.


		 ![](../../Property_Image.gif)
		 [Item](../ICubeAttachments/ICubeAttachments.Item.htm)


		 Свойство Item возвращает
		 параметры вложения с указанным индексом.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddNew](ICubeAttachmentsEdited.AddNew.htm)


		 Метод AddNew создаёт
		 новое вложение.


		 ![](../../Sub_Image.gif)
		 [Edit](ICubeAttachmentsEdited.Edit.htm)


		 Метод Edit открывает
		 на редактирование вложение с указанными индексом.


		 ![](../../Sub_Image.gif)
		 [EditByKey](ICubeAttachmentsEdited.EditByKey.htm)


		 Метод EditByKey открывает
		 на редактирование вложение с указанными ключом.


		 ![](../../Sub_Image.gif)
		 [Remove](ICubeAttachmentsEdited.Remove.htm)


		 Метод Remove удаляет
		 вложение с указанным индексом.


		 ![](../../Sub_Image.gif)
		 [RemoveByKey](ICubeAttachmentsEdited.RemoveByKey.htm)


		 Метод RemoveByKey удаляет
		 вложение с указанным ключом.


## Методы, унаследованные от [ICubeAttachments](../ICubeAttachments/ICubeAttachments.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [FindByKey](../ICubeAttachments/ICubeAttachments.FindByKey.htm)


		 Метод FindByKey осуществляет
		 поиск по ключу и возвращает параметры вложения в случае удачного
		 поиска.


		 ![](../../Sub_Image.gif)
		 [IndexOf](../ICubeAttachments/ICubeAttachments.IndexOf.htm)


		 Метод IndexOf возвращает
		 индекс указанного вложения в коллекции.


		 ![](../../Sub_Image.gif)
		 [IndexOfKey](../ICubeAttachments/ICubeAttachments.IndexOfKey.htm)


		 Метод IndexOfKey для
		 вложения с указанным ключом возвращает индекс в коллекции.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
