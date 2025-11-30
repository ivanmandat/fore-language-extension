# IScene3DCoordinates.MinZ

IScene3DCoordinates.MinZ
-


# IScene3DCoordinates.MinZ


## Синтаксис


MinZ: Double;


## Описание


Свойство MinZ возвращает минимальное
 значение оси Z.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	    t : double;

	Begin

	    t := s.DisplayedObjects.SceneCoordinates.Minz;

	End Sub Chart3D;


После выполнения примера в переменной t будет храниться минимальное
 значение оси Z.


См. также:


[IScene3DCoordinates](IScene3DCoordinates.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
