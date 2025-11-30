# IScene3DDisplayedObjects.ConvexHulls

IScene3DDisplayedObjects.ConvexHulls
-


# IScene3DDisplayedObjects.ConvexHulls


## Синтаксис


ConvexHulls: [IScene3DConvexHulls](../IScene3DConvexHulls/IScene3DConvexHulls.htm);


## Описание


Свойство ConvexHulls определяет
 параметры коллекции трехмерных замкнутых поверхностей. Работа с доступными
 параметрами осуществляется посредством интерфейса IScene3DConvexHulls.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	    Hulls : IScene3DConvexHulls;

	    Hull : IScene3DConvexHull;

	Begin

	    Hulls := S.DisplayedObjects.ConvexHulls;

	    Hulls.Count := 1;

	    Hull := Hulls.Item(0);

	    Hulls.Item(0).Name := "Поверхность 1";

	End Sub Chart3D;


После выполнения примера поверхности с индексом «0» будет присвоено
 имя «Поверхность 1».


См. также:


[IScene3DDisplayedObjects](IScene3DDisplayedObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
