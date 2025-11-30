# ITabObjectExporter.GetBitmap

ITabObjectExporter.GetBitmap
-


# ITabObjectExporter.GetBitmap


## Синтаксис


GetBitmap: [IGxBitmap](ModDrawing.chm::/Interface/IGxBitmap/IGxBitmap.htm);


## Описание


Метод GetBitmap возвращает графическое
 изображение объекта.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1" и компонентов UiReport
 и ImageBox с наименованиями "UiReport1"
 и "ImageBox1" соответственно.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Obj: ITabObject;

	    Exp: ITabObjectExporter;

	Begin

	    Obj := UiReport1.Report.ActiveSheet.Table.Objects.Item(0);

	    Exp := New TabObjectExporter.Create;

	    Exp.Object := Obj;

	    ImageBox1.Image := Exp.GetBitmap;

	End Sub Button1OnClick;


При нажатии на кнопку в компонент "ImageBox1" будет загружено
 графическое изображение первого объекта, расположенного на активном листе
 регламентного отчета, загруженного в компонент "UiReport1".


См. также:


[ITabObjectExporter](ITabObjectExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
