# IScene3DPrimitive.BitmapIndex

IScene3DPrimitive.BitmapIndex
-


# IScene3DPrimitive.BitmapIndex


## Синтаксис


BitmapIndex: Integer;


## Описание


Свойство BitmapIndex определяет
 индекс картинки, которая находится в коллекции текстур IScene3DTextureManager.


По умолчанию значение свойства «-1», то есть текстура не определена.


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


[IScene3DPrimitive](IScene3DPrimitive.htm)
 | [IScene3DTextureManager](../IScene3DTextureManager/IScene3DTextureManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
