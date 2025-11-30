# ITabImages.Add

ITabImages.Add
-


# ITabImages.Add


## Синтаксис


Add(Image: [IGxImage](ModDrawing.chm::/Interface/IGxImage/IGxImage.htm)):
 Integer;


## Параметры


Image.
 Картинка, которую необходимо добавить в коллекцию картинок таблицы.


## Описание


Метод Add добавляет в коллекцию
 картинку, которая передается в качестве входного параметра Image,
 после чего возвращает индекс этой картинки в коллекции.


## Пример


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Range: ITabRange;

	    Image: IGxImage;

	    i: Integer;

	Begin

	    Range := UiTabSheet1.TabSheet.View.Selection.Range;

	    Image := GxImage.FromFile("c:\view.bmp");

	    i := UiTabSheet1.TabSheet.Images.Add(Image);

	    Range.Style.NormalPicture := i;

	    Range.Style.EnablePictures := TriState.OnOption;

	End Sub Button1OnClick;


После выполнения примера в коллекцию картинок таблицы добавляется картинка
 "c:\view.bmp". Затем эта картинка устанавливается для выделенного
 диапазона ячеек.


См. также:


[ITabImages](ITabImages.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
