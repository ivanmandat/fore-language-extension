# IWorkspaceBox.ConvertPtToView

IWorkspaceBox.ConvertPtToView
-


# IWorkspaceBox.ConvertPtToView


## Синтаксис


ConvertPtToView(Pt: [IGxPoint](ModDrawing.chm::/Interface/IGxPoint/IGxPoint.htm)):
 [IGxPointF](ModDrawing.chm::/Interface/IGxPointF/IGxPointF.htm);


## Параметры


Pt - экранные координаты точки,
 по которым необходимо получить координаты в рабочем пространстве.


## Описание


Метод ConvertPtToView позволяет
 получить координаты точки в рабочем пространстве по экранным координатам
 точки.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента WorkspaceBox с наименованием WorkspaceBox1 и компонента
 UiWorkspaceObject, либо UiWorkspace, являющегося источником данных для
 компонента WorkspaceBox1.


Добавьте ссылки на системные сборки: Andy, ExtCtrls, Forms, Ui, Workspace.


	Sub WorkspaceBox1OnMouseDown(Sender: Object; Args: IMouseClickEventArgs);

	    Var

	        Pt: IGxPoint;

	        PtF: IGxPointF;

	        x, y: Double;

	    Begin

	        Pt := Args.pPoint As IGxPoint;

	        PtF := WorkspaceBox1.ConvertPtToView(Pt);

	        x := PtF.X;

	        y := PtF.Y;

	End Sub WorkspaceBox1OnMouseDown;


После выполнения примера, при наведении курсора на рабочее пространство
 и нажатии кнопки мыши, в переменных x
 и y будут содержаться координаты
 рабочего пространства, полученные с помощью преобразования экранных координат
 курсора мыши.


См. также:


[IWorkspaceBox](IWorkspaceBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
