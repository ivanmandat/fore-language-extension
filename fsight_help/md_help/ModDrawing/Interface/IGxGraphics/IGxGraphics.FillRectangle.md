# IGxGraphics.FillRectangle

IGxGraphics.FillRectangle
-


# IGxGraphics.FillRectangle


## Синтаксис


FillRectangle(Brush: [IGxBrush](../IGxBrush/IGxBrush.htm);
 Rect: [IGxRect](../IGxRect/IGxRect.htm));


## Параметры


Brush. Кисть.


Rect. Целочисленный прямоугольник,
 который необходимо залить.


## Описание


Метод FillRectangle заливает
 целочисленный прямоугольник кистью, передаваемой посредством параметра
 Brush.


## Пример


Для выполнения примера предполагается наличие формы, где расположены:
 кнопка с наименованием «Button1», невизуальный компонент UiTabSheet1
 с наименованием «UiTabSheet1», компонент TabSheetBox1 с наименованием
 «TabSheetBox1». Подключите системные сборки: Drawing, Report, Tab.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    BMP: IGxBitmap;

    Graph: IGxGraphics;

    Brush: IGxBrush;

    Color: IGxColor;

    Rect: IGxRect;

    Picture: IPrxPicture;

Begin

    BMP := GxBitmap.CreateNew(200, 100, GxPixelFormat.Format32bppArgb);

    Graph := GxGraphicsClass.FromImage(BMP);

    // Создание прямоугольника, цвета и кисти

    Rect := New GxRect.Create(0, 0, 200, 200);

    Color := GxColor.FromKnownColor(GxKnownColor.Yellow);

    Brush := New GxSolidBrush.Create(Color);

    // Закрашивает прямоугольник заданной кистьюи задает высококачественное изображение

    Graph.FillRectangle(Brush, Rect);

    Graph.SmoothingMode := GxSmoothingMode.HighQuality;

    Picture := TabSheetBox1.Source.GetTabSheet.Objects.Add("PrxPicture", New GxRectF.Create(5, 5, 5, 5)) As IPrxPicture;

    Picture.AutoSize := True;

    Picture.Image := BMP;

End Sub Button1OnClick;


При нажатии на кнопку в компоненте «TabSheetBox1» будет отрисован прямоугольник
 желтого цвета в верхнем левом углу.


См. также:


[IGxGraphics](IGxGraphics.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
