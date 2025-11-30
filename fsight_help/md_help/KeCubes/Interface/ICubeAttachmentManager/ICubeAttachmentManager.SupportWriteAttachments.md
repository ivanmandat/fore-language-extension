# ICubeAttachmentManager.SupportWriteAttachments

ICubeAttachmentManager.SupportWriteAttachments
-


# ICubeAttachmentManager.SupportWriteAttachments


## Синтаксис


		SupportWriteAttachments(Iterator: [IMatrixModelIterator](ForeSys.chm::/Interface/IMatrixModelIterator/IMatrixModelIterator.htm)):
		 Boolean;


## Параметры


Iterator. Итератор матрицы
 с вложениями.


## Описание


Метод SupportWriteAttachments
 проверяет, может ли быть изменён список вложений в текущей позиции итератора.


## Комментарии


Список вложений может быть изменён, если в текущей позиции итератора
 имеется привязка факта к полю для хранения вложений.


Метод возвращает значение True,
 если список вложений может быть изменён и False,
 если список вложений не доступен для редактирования.


## Пример


Пример использования приведён в описании метода [ICubeAttachmentManager.EditAttachments](ICubeAttachmentManager.EditAttachments.htm).


См. также:


[ICubeAttachmentManager](ICubeAttachmentManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
