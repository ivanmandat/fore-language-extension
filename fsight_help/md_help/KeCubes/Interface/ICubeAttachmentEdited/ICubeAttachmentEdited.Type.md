# ICubeAttachmentEdited.Type

ICubeAttachmentEdited.Type
-


# ICubeAttachmentEdited.Type


## Синтаксис


		Type: [CubeAttachmentType](../../Enums/CubeAttachmentType.htm);


## Описание


Свойство Type определяет тип
 вложения.


## Комментарии


При создании нового вложения, в зависимости от его типа, должны быть
 заданы значения различных атрибутов. Атрибуты «NAME», «TIMESTAMP», «USER_ID»
 задаются для любых вложений. Специфические атрибуты, задаваемы в зависимости
 от типа вложения:


	- [CubeAttachmentType.Value](../../Enums/CubeAttachmentType.htm).
	 В атрибуте «ATTACHMENT» задаётся поток, связанный с сохраняемым файлом.
	 Также могут быть заданы атрибуты «FILE_NAME» и «FILE_SIZE».


	- [CubeAttachmentType.Document](../../Enums/CubeAttachmentType.htm).
	 В справочнике должен быть создан дополнительный целочисленный атрибут,
	 имеющий признак [связи
	 с объектами репозитория](../ICubeAttachmentAttribute/ICubeAttachmentAttribute.ObjectLinked.htm). В качестве значения этого атрибута указывается
	 ключ объекта репозитория, являющегося документом. Также могут быть
	 заданы атрибуты «FILE_NAME» и «FILE_SIZE».


	- [CubeAttachmentType.URL](../../Enums/CubeAttachmentType.htm).
	 В атрибуте «URL» задаётся сохраняемая ссылка.


## Пример


Пример использования приведён в описании метода [ICubeAttachmentManager.EditAttachments](../ICubeAttachmentManager/ICubeAttachmentManager.EditAttachments.htm).


См. также:


[ICubeAttachmentEdited](ICubeAttachmentEdited.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
