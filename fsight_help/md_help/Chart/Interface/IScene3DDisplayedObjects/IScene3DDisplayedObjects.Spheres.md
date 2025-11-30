# IScene3DDisplayedObjects.Spheres

IScene3DDisplayedObjects.Spheres
-


# IScene3DDisplayedObjects.Spheres


## Синтаксис


Spheres: [IScene3DSpheres](../IScene3DSpheres/IScene3DSpheres.htm);


## Описание


Свойство Spheres определяет
 параметры сфер (точек) на сцене. Работа с доступными параметрами осуществляется
 посредством интерфейса IScene3DSpheres.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	    sphere: IScene3DSphere;

	    Hulls : IScene3DConvexHulls;

	Begin

	    s := Chart3DBox1.Scene;

	    s.DisplayedObjects.Spheres.Count := 1;

	    sphere := s.DisplayedObjects.Spheres.Item(0);

	    sphere.R := 0.1;

	    sphere.Color := New GxColor.CreateRGB(255,0,0);

	End Sub Chart3D;


После выполнения примера на сцене будет отображена сфера (точка) с заданным
 радиусом.


См. также:


[IScene3DDisplayedObjects](IScene3DDisplayedObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
