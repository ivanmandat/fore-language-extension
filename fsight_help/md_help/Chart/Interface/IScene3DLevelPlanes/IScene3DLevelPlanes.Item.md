# IScene3DLevelPlanes.Item

IScene3DLevelPlanes.Item
-


# IScene3DLevelPlanes.Item


## Синтаксис


Item(Index: Integer): [IScene3DPlane](../IScene3DPlane/IScene3DPlane.htm);


## Параметры


Index - индекс плоскости указания
 уровня.


## Описание


Свойство Item возвращает плоскость
 указания уровня по заданному индексу.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	    Level : IScene3DLevelPlanes;

	Begin

	    Level := s.DisplayedObjects.LevelPlanes;

	    Level.Count := 2;

	    Level.Item(0).Color := New GxColor.CreateARGB(255,0,0,255);

	    Level.Item(0).Offset := -0.3;

	    Level.Item(1).Color := New GxColor.CreateRGB(255,0,0);

	    Level.Item(1).Offset := 0.3;

	End Sub Chart3D;


После выполнения примера на сцене будут отображены две плоскости указания
 уровня.


См. также:


[IScene3DLevelPlanes](IScene3DLevelPlanes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
