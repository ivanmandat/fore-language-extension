# IGxTextureBrush.WrapMode

IGxTextureBrush.WrapMode
-


# IGxTextureBrush.WrapMode


## Синтаксис


WrapMode: [GxWrapMode](../../Enums/GxWrapMode.htm);


## Описание


Свойство WrapMode определяет
 метод наложения текстуры.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием Button1. В корневом каталоге диска С расположен
 файл Image.jpg.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Im: IGxImage;

	    BrRect: IGxRectF;

	    Br: IGxBrush;

	Begin

	    Im := GxImage.FromFile("c:\Image.jpg");

	    BrRect := New GxRectF.Create(0, 0, Im.Width / 2, Im.Height / 2);

	    Br := New GxTextureBrush.Create(Im, GxWrapMode.Tile, BrRect);

	    Self.Brush := Br;

	End Sub Button1OnClick;


При нажатии на кнопку вся область формы будет залита с помощью созданной
 текстурной кисти. В качестве текстуры будет использоваться четверть изображения.


См. также:


[IGxTextureBrush](IGxTextureBrush.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
