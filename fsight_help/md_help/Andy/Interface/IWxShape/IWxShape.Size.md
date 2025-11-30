# IWxShape.Size

IWxShape.Size
-


# IWxShape.Size


## Синтаксис


		Size: [IGxSizeF](ModDrawing.chm::/Interface/IGxSizeF/IGxSizeF.htm);


## Описание


Свойство Size определяет размеры
 фигуры.


## Комментарии


Для определения угла поворота фигуры используйте свойство [IWxShape.Angle](IWxShape.Angle.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента WorkspaceBox
 с наименованием «WorkspaceBox1» и какого-либо источника данных для «WorkspaceBox1».


Добавьте ссылки на системные сборки: Andy, Drawing, Workspace.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    Ws: IWxWorkspace;

		    Shape: IWxShape;

		    Size: IGxSizeF;

		    Reg: IWxRegulargon;

		Begin

		    Ws := WorkspaceBox1.View.Workspace;

		    Reg := Ws.CreateRegulargon;

		    Reg.Id := "Reg1";

		    Reg.PinPosition := New GxPointF.Create(12, 2);

		    Reg.NumberOfSides := 5;

		    Reg.Text := "Трапеция";

		    WS.BeginUpdate;

		    Shape := WS.Shapes.Item(0);

		    Shape.Angle := 40;

		    Size := New GxSizeF.Create(43, 78);

		    Shape.Size := Size;

		    WS.EndUpdate;

		End Sub Button1OnClick;


После выполнения примера будут изменены размеры и угол поворота фигуры.


См. также:


[IWxShape](IWxShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
