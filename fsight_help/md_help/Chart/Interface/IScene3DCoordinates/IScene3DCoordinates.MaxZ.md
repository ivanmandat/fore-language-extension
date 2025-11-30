# IScene3DCoordinates.MaxZ

IScene3DCoordinates.MaxZ
-


# IScene3DCoordinates.MaxZ


## Синтаксис


MaxZ: Double;


## Описание


Свойство MaxZ возвращает максимальное
 значение оси Z.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	    t : Double;

	Begin

	    t := s.DisplayedObjects.SceneCoordinates.MaxZ;

	End Sub Chart3D;


После выполнения примера в переменной t будет храниться максимальное
 значение оси Z.


См. также:


[IScene3DCoordinates](IScene3DCoordinates.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
