# IScene3DTextureManager.PreviewImage

IScene3DTextureManager.PreviewImage
-


# IScene3DTextureManager.PreviewImage


## Синтаксис


PreviewImage(Index: Integer): [IGxImage](ModDrawing.chm::/Interface/IGxImage/IGxImage.htm);


## Параметры


Index -
 индекс текстуры.


## Описание


Свойство PreviewImage позволяет
 работать с текстурой как с картинкой.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


			Sub Chart3D;

Var

    s : IScene3D;

Begin

    s.DisplayedObjects.TextureManager.PreviewImage(0).RotateFlip(GxRotate FlipType.RotateNoneFlipX);

End Sub Chart3D;


После выполнения примера текстура с индексом «0» будет отражена слева
 направо.


См. также:


[IScene3DTextureManager](IScene3DTextureManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
