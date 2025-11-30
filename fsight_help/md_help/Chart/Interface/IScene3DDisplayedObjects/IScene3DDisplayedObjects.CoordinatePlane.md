# IScene3DDisplayedObjects.CoordinatePlane

IScene3DDisplayedObjects.CoordinatePlane
-


# IScene3DDisplayedObjects.CoordinatePlane


## Синтаксис


CoordinatePlanes: [IScene3DCoordinatePlanes](../IScene3DCoordinatePlanes/IScene3DCoordinatePlanes.htm);


## Описание


Свойство CoordinatePlanes определяет
 параметры плоскостей системы координат. Работа с доступными параметрами
 осуществляется посредством интерфейса IScene3DCoordinatePlanes.


Плоскости отображаются по умолчанию.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	Begin

	    S.BeginUpdate;

	    S.DisplayedObjects.CoordinatePlanes.TextStyles.TextStyleOX.Color := New GxColor.CreateARGB(255,0,0,255);

	    S.EndUpdate;

	End Sub Chart3D;


После выполнения примера цвет надписей по оси OX будет изменен на синий.


См. также:


[IScene3DDisplayedObjects](IScene3DDisplayedObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
