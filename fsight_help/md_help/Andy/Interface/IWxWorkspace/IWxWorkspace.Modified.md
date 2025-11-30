# IWxWorkspace.Modified

IWxWorkspace.Modified
-


# IWxWorkspace.Modified


## Синтаксис


Modified: Boolean;


## Описание


Свойство Modified возвращает
 True, если были произведены изменения
 рабочего пространства.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента WorkspaceBox и компонента
 UiWorkspace с наименованием UiWorkspace1, являющимся источником данных
 для WorkspaceBox.


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

	    If wsp.Modified Then

	    b := WinApplication.YesNoCancelBox("Сохранить измененные данные?", b1);

	        If b1 Then

	        Else

	            wsp.Undo(wsp.UndoNumSteps);

	        End If;

	    End If;

	End Sub Button1OnClick;


После выполнения примера и в случае если в рабочем пространстве были
 произведены изменения, то будет предложено их сохранить.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
