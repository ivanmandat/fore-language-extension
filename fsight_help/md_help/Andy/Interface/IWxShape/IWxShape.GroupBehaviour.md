# IWxShape.GroupBehaviour

IWxShape.GroupBehaviour
-


# IWxShape.GroupBehaviour


## Синтаксис


GroupBehaviour: [WxGroupBehaviour](../../Enums/WxGroupBehaviour.htm);


## Описание


Свойство GroupBehaviour определяет
 поведение объекта при изменении размера группы, в которую он включен.


## Комментарии


Значение по умолчанию - [ScaleWithGroup](../../Enums/WxGroupBehaviour.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента WorkspaceBox с наименованием
 WorkspaceBox1 и какого-либо источника данных для WorkspaceBox1.


Добавьте ссылки на системные сборки: Andy, Drawing, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Wsp: IWxWorkspace;

	    Shape: IWxShape;

	    Reg: IWxRegulargon;

	    Rec: IWxRoundedRectangle;

	    i: Integer;

	Begin

	    Wsp := WorkspaceBox1.View.Workspace;

	    Reg := Wsp.CreateRegulargon;

	    Reg.Id := "Reg1";

	    Reg.PinPosition := New GxPointF.Create(12, 2);

	    Reg.NumberOfSides := 5;

	    Reg.Text := "Трапеция";

	    Rec := Wsp.CreateRoundedRectangle;

	    Rec.Id := "Rectangle1";

	    Rec.PinPosition := New GxPointF.Create(12.3, -2);

	    Rec.RoundingOffset := 9;

	    Rec.Text := "Фигура";

	    Shape := Wsp.Shapes.Item(0);

	    Shape.GroupBehaviour := WxGroupBehaviour.RepositionOnly;

	    For i := 0 To Wsp.Shapes.Count - 1 Do

	        WorkspaceBox1.View.SelectedShapes.Add(Wsp.Shapes.Item(i));

	    End For;

	    WorkspaceBox1.View.GroupSelectedShapes;

	End Sub Button1OnClick;


После выполнения примера все объекты на рабочем пространстве будут сгруппированы,
 причем при изменении размера группы только первый объект не будет изменять
 свои размеры.


См. также:


[IWxShape](IWxShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
