# GxRectF

GxRectF
-


# GxRectF


Сборка: Drawing;


## Описание


Класс GxRectF реализует прямоугольник
 с вещественными размерами.


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Create](GxRectF.Create.htm)
		 Конструктор Create
		 создает новый прямоугольник с указанными размерами.


		 ![](../../Sub_Image.gif)
		 [CreateFromEdges](GxRectF.CreateFromEdges.htm)
		 Конструктор CreateFromEdges
		 создает новый прямоугольник, рассчитывая размеры и расположение
		 в соответствии с указанными угловыми точками.


		 ![](../../Sub_Image.gif)
		 [CreateFromOrigin](GxRectF.CreateFromOrigin.htm)
		 Конструктор CreateFromOrigin
		 создает новый прямоугольник в соответствии с указанным расположением
		 и размером.


		 ![](../../Sub_Image.gif)
		 [CreateFromRect](GxRectF.CreateFromRect.htm)
		 Конструктор CreateFromRect
		 создает новый прямоугольник, на основе указанного прямоугольника.


## Свойства объекта класса, унаследованные от [IGxRectF](../../Interface/IGxRectF/IGxRectF.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Bottom](../../Interface/IGxRectF/IGxRectF.Bottom.htm)
		 Свойство Bottom определяет
		 координату по оси Y для нижней стороны прямоугольника.


		 ![](../../Property_Image.gif)
		 [Height](../../Interface/IGxRectF/IGxRectF.Height.htm)
		 Свойство Height определяет
		 высоту вещественного прямоугольника.


		 ![](../../Property_Image.gif)
		 [IsEmpty](../../Interface/IGxRectF/IGxRectF.IsEmpty.htm)
		 Свойство IsEmpty возвращает
		 признак соответствия пустому вещественному прямоугольнику.


		 ![](../../Property_Image.gif)
		 [Left](../../Interface/IGxRectF/IGxRectF.Left.htm)
		 Свойство Left определяет
		 координату по оси X для левой стороны прямоугольника.


		 ![](../../Property_Image.gif)
		 [Right](../../Interface/IGxRectF/IGxRectF.Right.htm)
		 Свойство Right определяет
		 координату по оси X для правой стороны прямоугольника.


		 ![](../../Property_Image.gif)
		 [Size](../../Interface/IGxRectF/IGxRectF.Size.htm)
		 Свойство Size определяет
		 размер вещественного прямоугольника.


		 ![](../../Property_Image.gif)
		 [Top](../../Interface/IGxRectF/IGxRectF.Top.htm)
		 Свойство Top определяет
		 координату по оси Y для верхней стороны прямоугольника.


		 ![](../../Property_Image.gif)
		 [Width](../../Interface/IGxRectF/IGxRectF.Width.htm)
		 Свойство Width определяет
		 ширину вещественного прямоугольника.


## Методы объекта класса, унаследованные от [IGxRectF](../../Interface/IGxRectF/IGxRectF.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Contains](../../Interface/IGxRectF/IGxRectF.Contains.htm)
		 Метод Contains проверяет
		 наличие точки с указанными координатами в текущем прямоугольнике.


		 ![](../../Sub_Image.gif)
		 [ContainsP](../../Interface/IGxRectF/IGxRectF.ContainsP.htm)
		 Метод ContainsP проверяет
		 наличие точки в текущем вещественном прямоугольнике.


		 ![](../../Sub_Image.gif)
		 [ContainsR](../../Interface/IGxRectF/IGxRectF.ContainsR.htm)
		 Метод ContainsR проверяет
		 наличие вещественного прямоугольника в текущем прямоугольнике.


		 ![](../../Sub_Image.gif)
		 [Deflate](../../Interface/IGxRectF/IGxRectF.Deflate.htm)
		 Метод Deflate осуществляет
		 уменьшение размеров вещественного прямоугольника на указанные
		 значения по ширине и по высоте.


		 ![](../../Sub_Image.gif)
		 [DeflateS](../../Interface/IGxRectF/IGxRectF.DeflateS.htm)
		 Метод DeflateS осуществляет
		 уменьшение размеров вещественного прямоугольника на указанный
		 размер.


		 ![](../../Sub_Image.gif)
		 [Equals](../../Interface/IGxRectF/IGxRectF.Equals.htm)
		 Метод Equals проверяет
		 равенство текущего вещественного прямоугольника с прямоугольником,
		 передаваемым посредством входного параметра.


		 ![](../../Sub_Image.gif)
		 [Inflate](../../Interface/IGxRectF/IGxRectF.Inflate.htm)
		 Метод Inflate осуществляет
		 увеличение размеров целочисленного прямоугольника на указанные
		 значения по ширине и по высоте.


		 ![](../../Sub_Image.gif)
		 [InflateS](../../Interface/IGxRectF/IGxRectF.InflateS.htm)
		 Метод InflateS осуществляет
		 увеличение целочисленного прямоугольника на указанный размер.


		 ![](../../Sub_Image.gif)
		 [Intersect](../../Interface/IGxRectF/IGxRectF.Intersect.htm)
		 Метод Intersect возвращает
		 прямоугольник, являющийся результатом пересечения текущего прямоугольника
		 и прямоугольника, передаваемого в качестве входного параметра.


		 ![](../../Sub_Image.gif)
		 [IntersectsWith](../../Interface/IGxRectF/IGxRectF.IntersectsWith.htm)
		 Метод IntersectsWith
		 осуществляет проверку на пересечение текущего прямоугольника и
		 прямоугольника, передаваемого в качестве входного параметра.


		 ![](../../Sub_Image.gif)
		 [Offset](../../Interface/IGxRectF/IGxRectF.Offset.htm)
		 Метод Offset осуществляет
		 смещение вещественного прямоугольника на заданные значения по
		 осям Х и Y.


		 ![](../../Sub_Image.gif)
		 [OffsetP](../../Interface/IGxRectF/IGxRectF.OffsetP.htm)
		 Метод OffsetP осуществляет
		 смещение вещественного прямоугольника на значения координат точки,
		 передаваемой посредством входного параметра.


		 ![](../../Sub_Image.gif)
		 [OffsetS](../../Interface/IGxRectF/IGxRectF.OffsetS.htm)
		 Метод OffsetS осуществляет
		 смещение вещественного прямоугольника на размер, передаваемый
		 посредством входного параметра.


См. также:


[Классы сборки Drawing](../ModDrawing_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
