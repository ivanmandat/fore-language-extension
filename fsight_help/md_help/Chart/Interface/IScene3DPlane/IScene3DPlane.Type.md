# IScene3DPlane.Type

IScene3DPlane.Type
-


# IScene3DPlane.Type


## Синтаксис


Type: [Scene3DPlaneOrientation](../../Enums/Scene3DPlaneOrientation.htm);


## Описание


Свойство Type определяет ориентацию
 уровня относительно плоскостей системы координат.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	Begin

	    s.DisplayedObjects.LevelPlanes.Count := 1;

	    s.DisplayedObjects.LevelPlanes.Item(0).Type := Scene3DPlaneOrientation.XOYl;

	End Sub Chart3D;


После выполнения примера на сцене будет отображена плоскость уровня
 параллельная плоскости XOY.


См. также:


[IScene3DPlane](IScene3DPlane.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
