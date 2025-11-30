# IWxWorkspace.Redo

IWxWorkspace.Redo
-


# IWxWorkspace.Redo


## Синтаксис


		Redo([Steps: Integer = 1]);


## Параметры


Steps. Количество шагов. По
 умолчанию параметр равен единице.


## Описание


Метод Redo производит повтор
 заданного количества отмененных действий. В случае если параметр не задан,
 то метод повторяет последнее отмененное действие.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента WorkspaceBox
 и компонента UiWorkspace с наименованием
 «UiWorkspace1», являющимся источником данных для WorkspaceBox.


Добавьте ссылки на системные сборки: Andy, Drawing, Ui.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    wsp: IWxWorkspace;

		    Arrow: IWxArrow;

		    b, b1: Boolean;

		Begin

		    wsp := UiWorkspace1.WxWorkspace;

		    Arrow := wsp.CreateArrow;

		    Arrow.FirstPoint := New GxPointF.Create(1, 2);

		    Arrow.LastPoint := New GxPointF.Create(3, 19);

		    Arrow.Angle := 10;

		    wsp.Undo(wsp.UndoNumSteps);

		    If wsp.Modified Then

		    b := WinApplication.YesNoCancelBox("Сохранить измененные данные?", b1);

		        If b1 Then

		        Else

		            wsp.Redo(wsp.RedoNumSteps);

		        End If;

		    End If;

		End Sub Button1OnClick;


После выполнения примера будет произведен повтор всех возможных действий.


См. также:


[IWxWorkspace](IWxWorkspace.htm) | [WxWorkspace.UndoEnabled](IWxWorkspace.UndoEnabled.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
