# IScene3DNamedSphereGroup.Name

IScene3DNamedSphereGroup.Name
-


# IScene3DNamedSphereGroup.Name


## Синтаксис


Name: String;


## Описание


Свойство Name определяет имя
 группы.


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

	    Spg.Name := "Группа точек";

	End Sub Chart3D;


После выполнения примера группе именованных точек с индексом «0» будет
 присвоено заданное имя.


См. также:


[IScene3DNamedSphereGroup](IScene3DNamedSphereGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
