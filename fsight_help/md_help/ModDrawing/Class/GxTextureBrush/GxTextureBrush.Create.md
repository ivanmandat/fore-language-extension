# GxTextureBrush.Create

GxTextureBrush.Create
-


# GxTextureBrush.Create


## Синтаксис


Create(Image: [IGxImage](../../Interface/IGxImage/IGxImage.htm); [WrapMode: [GxWrapMode](../../Enums/GxWrapMode.htm) = 0;] [BrushSize: [IGxRectF](../../Interface/IGxRectF/IGxRectF.htm) = Null]);


## Параметры


Image. Изображение, используемое как текстура;


WrapMode. Метод наложения текстуры;


BrushSize. Прямоугольник, определяющий часть изображения, используемую как текстура. Размеры данного прямоугольника не должны превышать размеры используемого изображения. Ограничение части изображения осуществляется относительно верхнего левого угла.


## Описание


Конструктор Create создает новую текстурную кисть в соответствии с указанными параметрами.


## Пример


			Function GetGxTextureBrush(FileName: String): IGxTextureBrush;

Var

    TextureBrush: IGxTextureBrush;

Begin

    If File.Exists(FileName) Then

        TextureBrush := New GxTextureBrush.Create(GxImage.FromFile(FileName));

        Return TextureBrush;

    Else

        Return Null;

    End If;

End Function GetGxTextureBrush;


Данная функция вернет текстурную кисть, основанную на изображении, путь к которому передается в качестве входного параметра.


См. также:


[GxTextureBrush](GxTextureBrush.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
