# IChart3DBox.Scene

IChart3DBox.Scene
-


# IChart3DBox.Scene


## Синтаксис


Scene: [IScene3D](../IScene3D/IScene3D.htm);


## Описание


Свойство Scene возвращает интерфейс,
 реализующий свойства и методы трехмерной сцены.


## Пример


В рассматриваемом примере предполагается существование объекта Chart3DBox1 типа Chart3DBox.


	Sub Chart3D;

	Var

	    Chart3DBox1: Chart3DBox;

	    s : IScene3D;

	    Hulls : IScene3DConvexHulls;

	    Hull : IScene3DConvexHull;

	Begin

	    s := Chart3DBox1.Scene;

	    Hulls := s.DisplayedObjects.ConvexHulls;

	    Hulls.Count := 1;

	    Hull := Hulls.Item(0);

	    Hull.TextStyle.Color := New GxColor.CreateARGB(255,255,0,0);

	End Sub Chart3D;


После выполнения примера цвет имен точек замкнутой поверхности будет
 изменен на красный.


См. также:


[IChart3DBox](IChart3DBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
