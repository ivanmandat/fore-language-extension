# IWorkspaceBox.GetShapeByPt

IWorkspaceBox.GetShapeByPt
-


# IWorkspaceBox.GetShapeByPt


## Синтаксис


GetShapeByPt(Pt: [IGxPoint](ModDrawing.chm::/Interface/IGxPoint/IGxPoint.htm)):
 [IWxShape](Andy.chm::/Interface/IWxShape/IWxShape.htm);


## Параметры


Pt. Координаты точки, находящейся
 в пределах фигуры, информацию о которой необходимо получить.


## Описание


Метод GetShapeByPt позволяет
 получить информацию о фигуре по экранным координатам точки, которая находится
 в пределах фигуры.


## Комментарии


Координаты точки должны быть заданы относительно области компонента.
 Если в области указанной точки отсутствует фигура, то метод возвращает
 значение Null.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента WorkspaceBox с наименованием WorkspaceBox1 и компонента
 UiWorkspaceObject, либо UiWorkspace, являющегося источником данных для
 компонента WorkspaceBox1.


Добавьте ссылки на системные сборки: Andy, ExtCtrls, Forms, Ui, Workspace.


	Sub WorkspaceBox1OnMouseDown(Sender: Object; Args: IMouseClickEventArgs);

	Var

	    Pt: IGxPoint;

	    Shape: IWxShape;

	Begin

	    Pt := Args.pPoint As IGxPoint;

	    Shape := WorkspaceBox1.GetShapeByPt(Pt);

	    If Shape <> Null Then

	        s := Shape.Id;

	    End If;

	End Sub WorkspaceBox1OnMouseDown;


При наведении курсора на рабочее пространство и нажатии кнопки мыши,
 если курсор был наведен на какую-либо фигуру, то в переменной "s"
 будет содержаться идентификатор этой фигуры.


См. также:


[IWorkspaceBox](IWorkspaceBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
