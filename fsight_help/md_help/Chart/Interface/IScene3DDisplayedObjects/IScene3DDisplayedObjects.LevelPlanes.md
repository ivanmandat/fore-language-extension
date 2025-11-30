# IScene3DDisplayedObjects.LevelPlanes

IScene3DDisplayedObjects.LevelPlanes
-


# IScene3DDisplayedObjects.LevelPlanes


## Синтаксис


LevelPlanes: [IScene3DLevelPlanes](../IScene3DLevelPlanes/IScene3DLevelPlanes.htm);


## Описание


Свойство LevelPlanes определяет
 параметры плоскости уровня.


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


[IScene3DDisplayedObjects](IScene3DDisplayedObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
