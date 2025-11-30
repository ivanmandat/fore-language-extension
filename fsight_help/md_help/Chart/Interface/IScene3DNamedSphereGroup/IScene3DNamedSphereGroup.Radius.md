# IScene3DNamedSphereGroup.Radius

IScene3DNamedSphereGroup.Radius
-


# IScene3DNamedSphereGroup.Radius


## Синтаксис


Radius: Double;


## Описание


Свойство Radius определяет радиус
 коннектора. Значение задается в долях от минимального радиуса точки в
 группе, допустимые значения находятся в диапазоне [0.0;1.0].


По умолчанию свойство имеет значение «0.2».


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	    SpG : IScene3DNamedSphereGroup;

	Begin

	    s.DisplayedObjects.NamedSphereGroups.Count := 1;

	    s.DisplayedObjects.NamedSphereGroups.Item(0).SphereCount := 3;

	    SpG := s.DisplayedObjects.NamedSphereGroups.Item(0);

	    Spg.Radius := 0.4;

	End Sub Chart3D;


После выполнения примера радиус коннектора будет изменен на заданный.


См. также:


[IScene3DNamedSphereGroup](IScene3DNamedSphereGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
