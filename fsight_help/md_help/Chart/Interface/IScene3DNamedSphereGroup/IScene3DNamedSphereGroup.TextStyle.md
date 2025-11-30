# IScene3DNamedSphereGroup.TextStyle

IScene3DNamedSphereGroup.TextStyle
-


# IScene3DNamedSphereGroup.TextStyle


## Синтаксис


TextStyle: [IScene3DTextStyle](../IScene3DTextStyle/IScene3DTextStyle.htm);


## Описание


Свойство TextStyle определяет
 параметры надписей. Работа с доступными параметрами осуществляется посредством
 интерфейса IScene3DTextStyle.


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

	    SpG.SphereItem(0).Name := "точка №1";

	    Spg.TextStyle.Color := New GxColor.CreateRGB(255,0,0);

	    s.EndUpdate;

	End Sub Chart3D;


После выполнения примера имя точки с индексом «0» будет красного цвета.


См. также:


[IScene3DNamedSphereGroup](IScene3DNamedSphereGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
