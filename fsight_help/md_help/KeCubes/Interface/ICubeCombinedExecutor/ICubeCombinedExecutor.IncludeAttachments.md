# ICubeCombinedExecutor.IncludeAttachments

ICubeCombinedExecutor.IncludeAttachments
-


# ICubeCombinedExecutor.IncludeAttachments


## Синтаксис


		IncludeAttachments: Boolean;


## Описание


Свойство IncludeAttachments
 определяет, будет ли при расчёте получена информация о вложениях.


## Комментарии


Работа с вложениями доступна в [стандартных
 кубах](../IStandardCube/IStandardCube.htm). Если свойству установить значение True,
 то в результирующей матрице куба будет доступна информация о вложениях.
 Дальнейшая работа с вложениями осуществляется с помощью [менеджера
 вложений](../ICubeAttachmentManager/ICubeAttachmentManager.htm) (для создания менеджера вложений используется метод [ICubeExecuteResult.CreateAttachmentManager](../ICubeExecuteResult/ICubeExecuteResult.CreateAttachmentManager.htm)).


См. также:


[ICubeCombinedExecutor](ICubeCombinedExecutor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
