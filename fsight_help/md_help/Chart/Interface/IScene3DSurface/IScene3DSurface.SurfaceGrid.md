# IScene3DSurface.SurfaceGrid

IScene3DSurface.SurfaceGrid
-


# IScene3DSurface.SurfaceGrid


## Синтаксис


SurfaceGrid: [IScene3DGrid](../IScene3DGrid/IScene3DGrid.htm);


## Описание


Свойство SurfaceGrid определяет
 параметры линий сетки поверхности. Работа с доступными параметрами осуществляется
 посредством интерфейса IScene3DGrid.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	    sur : IScene3DSurface;

	Begin

	    sur := s.DisplayedObjects.Surfaces.Item(0);

	    sur.SurfaceGrid.Color := New GxColor.CreateRGB(255,0,0);

	End Sub Chart3D;


После выполнения примера цвет линий сетки поверхности будет изменен
 на красный.


См. также:


[IScene3DSurface](IScene3DSurfaces.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
