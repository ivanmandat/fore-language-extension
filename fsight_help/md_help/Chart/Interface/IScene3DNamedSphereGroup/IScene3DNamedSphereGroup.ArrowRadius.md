# IScene3DNamedSphereGroup.ArrowRadius

IScene3DNamedSphereGroup.ArrowRadius
-


# IScene3DNamedSphereGroup.ArrowRadius


## Синтаксис


ArrowRadius: Double;


## Описание


Свойство ArrowRadius определяет
 радиус раскрытия стрелки коннектора. Значение задается в долях от радиуса
 коннектора, допустимые значения находятся в диапазоне [1.0;3.0].


По умолчанию свойство имеет значение «2».


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

	    SpG.ArrowRadius := 3;

	    s.EndUpdate;

	End Sub Chart3D;


После выполнения примера радиус раскрытия стрелки коннектора будет изменен
 на заданный.


См. также:


[IScene3DNamedSphereGroup](IScene3DNamedSphereGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
