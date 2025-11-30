# IScene3DTextureManager.LoadFromFile

IScene3DTextureManager.LoadFromFile
-


# IScene3DTextureManager.LoadFromFile


## Синтаксис


LoadFromFile(FileName: String);


## Параметры


FileName - путь, имя и тип
 файла.


## Описание


Метод LoadFromFile позволяет
 загрузить текстуры из файла в конец списка текстур.


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


[IScene3DTextureManager](IScene3DTextureManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
