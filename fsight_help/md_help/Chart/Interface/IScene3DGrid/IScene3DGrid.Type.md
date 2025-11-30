# IScene3DGrid.Type

IScene3DGrid.Type
-


# IScene3DGrid.Type


## Синтаксис


Type: [Scene3DGridType](../../Enums/Scene3DGridType.htm);


## Описание


Свойство Type определяет тип
 сетки.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	Begin

	    s.DisplayedObjects.CoordinatePlanes.BackPlane.Grid.Type := Scene3DGridType.Dotted;

	End Sub Chart3D;


После выполнения примера тип сетки задней стенки системы координат будет
 изменен на заданный.


См. также:


[IScene3DGrid](IScene3DGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
