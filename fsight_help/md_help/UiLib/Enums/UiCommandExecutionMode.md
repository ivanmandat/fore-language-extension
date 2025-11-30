# UiCommandExecutionMode

UiCommandExecutionMode
-


# UiCommandExecutionMode


## Описание


Перечисление UiCommandExecutionMode содержит режимы открытия объекта. Актуально, если открываемый объект содержит параметры.


Используется следующим свойством:


-
[IUiCommandExecutionContext.ExecutionMode](../Interface/IUiCommandExecutionContext/IUiCommandExecutionContext.ExecutionMode.htm).


## Допустимые значения


 Значение
 Краткое описание


 0
 DoDefault. Способ открытия определяется платформой.


 1
 PromptUser. Выводить диалог установки значений параметров. Диалог выводится всегда. В зависимости от настроек в диалоге могут отображаться значения параметров по умолчанию либо значения, заданные пользователем в свойстве [Data](../Interface/IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).


 2
 DontPromptUser. Не выводить диалог установки значений параметров. Диалог не выводится, если для всех параметров заданы значения по умолчанию либо необходимые значения определены в свойстве [Data](../Interface/IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).


См. также:


[Перечисления сборки Ui](Ui_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
