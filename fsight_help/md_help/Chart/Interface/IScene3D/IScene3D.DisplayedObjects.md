# IScene3D.DisplayedObjects

IScene3D.DisplayedObjects
-


# IScene3D.DisplayedObjects


## Синтаксис


DisplayedObjects: [IScene3DDisplayedObjects](../IScene3DDisplayedObjects/IScene3DDisplayedObjects.htm);


## Описание


Свойство DisplayedObjects определяет
 параметры объектов трехмерной сцены. Работа с доступными параметрами осуществляется
 посредством интерфейса IScene3DDisplayedObjects.


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


[IScene3D](IScene3D.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
