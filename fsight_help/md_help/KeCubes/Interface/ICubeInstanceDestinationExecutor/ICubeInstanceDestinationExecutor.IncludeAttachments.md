# ICubeInstanceDestinationExecutor.IncludeAttachments

ICubeInstanceDestinationExecutor.IncludeAttachments
-


# ICubeInstanceDestinationExecutor.IncludeAttachments


## Синтаксис


		IncludeAttachments: Boolean;


## Описание


Свойство IncludeAttachments
 определяет, будет ли при расчёте получена информация о вложениях.


## Комментарии


Если свойству установить значение True,
 то в результирующей матрице куба будет доступна информация и вложениях.
 Дальнейшая работа с вложениями осуществляется с помощью [менеджера
 вложений](../ICubeAttachmentManager/ICubeAttachmentManager.htm) (для создания менеджера вложений используется метод [ICubeExecuteResult.CreateAttachmentManager](../ICubeExecuteResult/ICubeExecuteResult.CreateAttachmentManager.htm)).


## Пример


Пример использования приведён в описании методов [ICubeAttachmentManager.ReadAttachments](../ICubeAttachmentManager/ICubeAttachmentManager.ReadAttachments.htm),
 [ICubeAttachmentManager.EditAttachments](../ICubeAttachmentManager/ICubeAttachmentManager.EditAttachments.htm).


См. также:


[ICubeInstanceDestinationExecutor](ICubeInstanceDestinationExecutor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
