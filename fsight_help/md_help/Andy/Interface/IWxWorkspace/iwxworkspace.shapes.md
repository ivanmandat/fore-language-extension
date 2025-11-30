# IWxWorkspace.Shapes

IWxWorkspace.Shapes
-


# IWxWorkspace.Shapes


## Синтаксис


		Shapes: [IWxShapes](../IWxShapes/IWxShapes.htm);


## Описание


Свойство Shapes возвращает коллекцию
 фигур.


## Пример


В рассматриваемом примере предполагается наличие формы с размещёнными
 на ней компонентами Button и UiWorkspaceObject с идентификаторами
 «Button1» и «UiWorkspaceObject1» соотоветственно. К UiWorkspaceObject
 должен быть подключён соответствующий объект репозитория. Также этот компонент
 должен содержать заранее созданную фигуру.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    ws: IWxWorkspace;

		    Shapes: IWxShapes;

		    Shape: IWxShape;

		Begin

		    ws := UiWorkspaceObject1.Instance As IWxWorkspace;

		    ws.BeginUpdate;

		    Shapes := ws.Shapes;

		    Shape := Shapes.Item(0);

		    Shape.Angle := 40;

		    Shape.Size := New GxSizeF.Create(43, 78);

		    ws.EndUpdate;

		End Sub Button1OnClick;


После выполнения примера при нажатии на компонент «Button1» на компоненте
 «UiWorkspaceObject1» будут изменены размер и угол поворота фигуры.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
