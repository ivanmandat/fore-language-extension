# IScene3DDisplayedObjects.NamedSphereGroups

IScene3DDisplayedObjects.NamedSphereGroups
-


# IScene3DDisplayedObjects.NamedSphereGroups


## Синтаксис


NamedSphereGroups: [IScene3DNamedSphereGroups](../IScene3DNamedSphereGroups/IScene3DNamedSphereGroups.htm);


## Описание


Свойство NamedSphereGroups определяет
 параметры группы именованных точек.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	    SpG : IScene3DNamedSphereGroup;

	Begin

	    s.DisplayedObjects.NamedSphereGroups.Count := 1;

	    s.DisplayedObjects.NamedSphereGroups.Item(0).SphereCount := 3;

	    SpG := s.DisplayedObjects.NamedSphereGroups.Item(0);

	    //изменение расположения точек

	    s.BeginUpdate;

	    SpG.SphereItem(0).ValueX := 0.02;

	    SpG.SphereItem(0).ValueY := 0.01;

	    SpG.SphereItem(1).ValueX := 0.01;

	    SpG.SphereItem(1).ValueY := 0.02;

	    s.EndUpdate;

	End Sub Chart3D;


После выполнения примера на сцене будет расположена группа, состоящая
 из трех точек.


См. также:


[IScene3DDisplayedObjects](IScene3DDisplayedObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
