# IKeyPreviewEventArgs.Cancel

IKeyPreviewEventArgs.Cancel
-


# IKeyPreviewEventArgs.Cancel


## Синтаксис


Cancel: Boolean;


## Описание


Свойство Cancel определяет признак
 происхождения дальнейшего события, связанного с нажатием клавиш.


## Комментарии


Если свойству установлено значение True,
 то дальнейшее событие будет отменено.


## Пример


Для выполнения примера предполагается наличие формы. На форме расположено
 несколько компонентов, которые могут принимать фокус. В качестве обработчика
 события OnKeyPreview для всех компонентов используется следующая процедура:


			Sub ProcedureOnKeyPreview(Sender: Object; Args: IKeyPreviewEventArgs);

Begin

    If Args.Key = Keys.F1 Then

        Args.Cancel := True;

    End If;

End Sub ProcedureOnKeyPreview;


После выполнения примера, если при вводе текста в области какого-либо
 компонента была нажата функциональная клавиша F1, то дальнейшие события
 (такие как OnKeyDown, OnKeyUp) происходить не будут.


См. также:


[IKeyPreviewEventArgs](IKeyPreviewEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
