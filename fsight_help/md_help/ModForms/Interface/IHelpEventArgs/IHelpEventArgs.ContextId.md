# IHelpEventArgs.ContextId

IHelpEventArgs.ContextId
-


# IHelpEventArgs.ContextId


## Синтаксис


ContextId: Variant;


## Описание


Свойство ContextId возвращает
 идентификатор раздела справки установленный у компонента, находившегося
 в фокусе, когда было сгенерировано событие.


## Пример


Для выполнения примера предполагается наличие формы и расположенных
 на ней каких-либо компонентов. Для всех компонентов установлены уникальные
 значения свойства HelpContext. Для обработки события OnHelp формы установлена
 данная процедура. В папке приложения должен содержаться файл Help.chm.


			Sub FormOnHelp(Sender: Object; Args: IHelpEventArgs);

Var

    Help: IWinApplicationHelp;

Begin

    Help := WinApplication.Help;

    Help.Context(Args.ContextId, "Help.chm");

End Sub FormOnHelp;


При выборе компонента и нажатии клавиши F1 будет вызываться файл справки
 Help.chm. Соответствующий раздел справки будет искаться по значению идентификатора
 раздела справки, установленного для конкретного компонента.


См. также:


[IHelpEventArgs](IHelpEventArgs.htm)
 | [IControl.HelpContext](../IControl/IControl.HelpContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
