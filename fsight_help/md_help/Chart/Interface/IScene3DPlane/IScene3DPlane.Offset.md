# IScene3DPlane.Offset

IScene3DPlane.Offset
-


# IScene3DPlane.Offset


## Синтаксис


Offset: Double;


## Описание


Свойство Offset определяет смещение
 уровня относительно начала координат [-0.5; 0.5] (вдоль вектора собственной
 нормали).


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	Begin

	    s.DisplayedObjects.LevelPlanes.Count := 1;

	    s.DisplayedObjects.LevelPlanes.Item(0).Type := Scene3DPlaneOrientation.XOYl;

	    s.DisplayedObjects.LevelPlanes.Item(0).Offset := 0.3;

	End Sub Chart3D;


После выполнения примера плоскость уровня будет смещена на заданное
 расстояние.


См. также:


[IScene3DPlane](IScene3DPlane.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
