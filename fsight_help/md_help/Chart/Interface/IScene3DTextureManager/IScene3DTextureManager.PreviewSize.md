# IScene3DTextureManager.PreviewSize

IScene3DTextureManager.PreviewSize
-


# IScene3DTextureManager.PreviewSize


## Синтаксис


PreviewSize: Integer;


## Описание


Свойство PreviewSize определяет
 размер картинки предварительного просмотра текстуры. Значение задается
 для стороны квадрата в пикселях, должно быть указано число кратное степени
 2, (макс. значение 1024).


По умолчанию свойство имеет значение «64».


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	Begin

	    s.DisplayedObjects.TextureManager.PreviewSize := 128;

	End Sub Chart3D;


После выполнения примера будет установлен заданный размер картинки предварительного
 просмотра текстуры.


См. также:


[IScene3DTextureManager](IScene3DTextureManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
