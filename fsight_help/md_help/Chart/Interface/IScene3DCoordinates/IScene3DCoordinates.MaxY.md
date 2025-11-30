# IScene3DCoordinates.MaxY

IScene3DCoordinates.MaxY
-


# IScene3DCoordinates.MaxY


## Синтаксис


MaxY: Double;


## Описание


Свойство MaxY возвращает максимальное
 значение оси Y.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	    t : Double;

	Begin

	    t := s.DisplayedObjects.SceneCoordinates.MaxY;

	End Sub Chart3D;


После выполнения примера в переменной t будет храниться максимальное
 значение оси Y.


См. также:


[IScene3DCoordinates](IScene3DCoordinates.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
