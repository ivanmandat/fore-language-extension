# IScene3DCoordinates.MaxX

IScene3DCoordinates.MaxX
-


#


# IScene3DCoordinates.MaxX


## Синтаксис


MaxX: Double;


## Описание


Свойство MaxX возвращает максимальное
 значение оси X.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	    t : double;

	Begin

	    t := s.DisplayedObjects.SceneCoordinates.MaxX;

	End Sub Chart3D;


После выполнения примера в переменной t будет храниться максимальное
 значение оси X.


См. также:


[IScene3DCoordinates](IScene3DCoordinates.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
