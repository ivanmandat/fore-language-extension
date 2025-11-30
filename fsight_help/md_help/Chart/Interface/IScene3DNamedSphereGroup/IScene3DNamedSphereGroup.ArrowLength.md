# IScene3DNamedSphereGroup.ArrowLength

IScene3DNamedSphereGroup.ArrowLength
-


# IScene3DNamedSphereGroup.ArrowLength


## Синтаксис


ArrowLength: Double;


## Описание


Свойство ArrowLength определяет
 длину стрелки коннектора. Значение задается в долях длины от начала стрелки
 до конца коннектора, допустимые значения находятся в диапазоне [0, 1].


По умолчанию свойство имеет значение «0.2».


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

	    SpG.ArrowLength := 0.4;

	    s.EndUpdate;

	End Sub Chart3D;


После выполнения примера будет изменена длина стрелки коннектора на
 заданную.


См. также:


[IScene3DNamedSphereGroup](IScene3DNamedSphereGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
