# IScene3DNamedSphereGroup.SphereItem

IScene3DNamedSphereGroup.SphereItem
-


# IScene3DNamedSphereGroup.SphereItem


## Синтаксис


SphereItem(Index: Integer): [IScene3DNamedSphere](../IScene3DNamedSphere/IScene3DNamedSphere.htm);


## Параметры


Index - индекс точки.


## Описание


Свойство SphereItem возвращает
 точку именованной группы по заданному индексу.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	    SpG : IScene3DNamedSphereGroup;

	Begin

	    s.DisplayedObjects.NamedSphereGroups.Count := 1;

	    SpG := s.DisplayedObjects.NamedSphereGroups.Item(0);

	    SpG.SphereCount := 3;

	    s.BeginUpdate;

	    SpG.SphereItem(0).ValueX := 0.02;

	    SpG.SphereItem(0).ValueY := 0.01;

	    SpG.SphereItem(1).ValueX := 0.01;

	    SpG.SphereItem(1).ValueY := 0.02;

	    s.EndUpdate;

	End Sub Chart3D;


После выполнения примера на сцене будет отображена группа, состоящая
 из трех точек.


См. также:


[IScene3DNamedSphereGroup](IScene3DNamedSphereGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
