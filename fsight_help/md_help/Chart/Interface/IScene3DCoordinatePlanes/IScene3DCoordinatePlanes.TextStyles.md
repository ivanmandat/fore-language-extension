# IScene3DCoordinatePlanes.TextStyles

IScene3DCoordinatePlanes.TextStyles
-


# IScene3DCoordinatePlanes.TextStyles


## Синтаксис


TextStyles: [IScene3DCoordinateTextStyles](../IScene3DCoordinateTextStyles/IScene3DCoordinateTextStyles.htm);


## Описание


Свойство TextStyles определяет
 параметры надписей осей координат. Работа с доступными параметрами осуществляется
 посредством интерфейса IScene3DCoordinateTextStyles.


## Пример


В рассматриваемом примере предполагается существование объекта S типа
 IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	    Plane : IScene3DCoordinatePlanes;

	Begin

	    Plane := s.DisplayedObjects.CoordinatePlanes;

	    Plane.TextStyles.TextStyleOX.Color := New GxColor.CreateARGB(255,0,0,255);

	End Sub Chart3D;


После выполнения примера цвет надписей по оси OX будет изменен на синий.


См. также:


[IScene3DCoordinatePlanes](IScene3DCoordinatePlanes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
