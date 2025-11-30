# IScene3DCoordinates.MinY

IScene3DCoordinates.MinY
-


# IScene3DCoordinates.MinY


## Синтаксис


MinY: Double;


## Описание


Свойство MinY возвращает минимальное
 значение оси Y.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	    t : double;

	Begin

	    t := s.DisplayedObjects.SceneCoordinates.MinY;

	End Sub Chart3D;


После выполнения примера в переменной t будет храниться минимальное
 значение оси Y.


См. также:


[IScene3DCoordinates](IScene3DCoordinates.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
