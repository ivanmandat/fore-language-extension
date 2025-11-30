# IGxGraphics.FillRectangleF

IGxGraphics.FillRectangleF
-


# IGxGraphics.FillRectangleF


## Синтаксис


FillRectangleF(Brush: [IGxBrush](../IGxBrush/IGxBrush.htm);
 Rect: [IGxRectF](../IGxRectF/IGxRectF.htm));


## Параметры


Brush. Кисть.


Rect. Вещественный прямоугольник,
 который необходимо залить.


## Описание


Метод FillRectangleF заливает
 вещественный прямоугольник кистью, передаваемой посредством параметра
 Brush.


## Пример


Для выполнения примера предполагается наличие формы, где расположены:
 кнопка с наименованием «Button1», невизуальный компонент UiTabSheet1
 с наименованием «UiTabSheet1», компонент TabSheetBox1
 с наименованием «TabSheetBox1».


Подключите системные сборки: Drawing, Report, Tab.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    BMP: IGxBitmap;

    Graph: IGxGraphics;

    Brush: IGxBrush;

    Color: IGxColor;

    Rect: IGxRectF;

    Picture: IPrxPicture;

    DpiX, DpiY: Double;

Begin

    BMP := GxBitmap.CreateNew(200, 100, GxPixelFormat.Format32bppArgb);

    Graph := GxGraphicsClass.FromImage(BMP);

    // Создание прямоугольника, цвета и кисти

    Rect := New GxRectF.Create(0, 0, 200.15, 200.15);

    Color := GxColor.FromKnownColor(GxKnownColor.Yellow);

    Brush := New GxSolidBrush.Create(Color);

    // Закрашивает прямоугольник заданной кистью

    Graph.FillRectangleF(Brush, Rect);

    Picture := TabSheetBox1.Source.GetTabSheet.Objects.Add("PrxPicture", New GxRectF.Create(5, 5, 5, 5)) As IPrxPicture;

    Picture.AutoSize := True;

    Picture.Image := BMP;

    // Вывод горизонтального и вертикального разрешения

    DpiX := Graph.DpiX;

    DpiY := Graph.DpiY;

    Debug.WriteLine("DpiX: " + DpiX.ToString);

    Debug.WriteLine("DpiY: " + DpiY.ToString);

End Sub Button1OnClick;


При нажатии на кнопку в компоненте «TabSheetBox1» будет отрисован прямоугольник
 желтого цвета в верхнем левом углу, в окно консоли будут выведены значения
 горизонтального и вертикального разрешения графического объекта.


См. также:


[IGxGraphics](IGxGraphics.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
