# IScene3DDisplayedObjects.TextureManager

IScene3DDisplayedObjects.TextureManager
-


# IScene3DDisplayedObjects.TextureManager


## Синтаксис


TextureManager: [IScene3DTextureManager](../IScene3DTextureManager/IScene3DTextureManager.htm);


## Описание


Свойство TextureManager позволяет
 работать с текстурами.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	Begin

	    s.DisplayedObjects.TextureManager.LoadFromFile("c:\1.bmp");

	    s.DisplayedObjects.CoordinatePlanes.BackPlane.Plane.BitmapIndex := 0;

	End Sub Chart3D;


После выполнения примера задний план сцены будет закрашен текстурой,
 загруженной из файла.


См. также:


[IScene3DDisplayedObjects](IScene3DDisplayedObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
