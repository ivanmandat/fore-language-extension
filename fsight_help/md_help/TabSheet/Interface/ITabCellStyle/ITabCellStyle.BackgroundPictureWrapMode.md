# ITabCellStyle.BackgroundPictureWrapMode

ITabCellStyle.BackgroundPictureWrapMode
-


# ITabCellStyle.BackgroundPictureWrapMode


## Синтаксис


BackgroundPictureWrapMode: [TabFormatWrapMode](../../Enums/TabFormatWrapMode.htm);


## Описание


Свойство BackgroundPictureWrapMode
 определяет метод наложения фонового изображения.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox с наименованием
 «TabSheetBox1» и какого-либо источника данных для «TabSheetBox1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    TSheet: ITabSheet;

    Selection: ITabRange;

    Style: ITabCellStyle;

    i: Integer;

Begin

    TSheet := TabSheetBox1.Source.GetTabSheet;

    i := TSheet.Images.Add(GxImage.FromFile("c:\Background.png"));

    Selection := TSheet.View.Selection.Range;

    //Параметры стиля

    Style := Selection.Style;

    //Установка изображения

    Style.EnablePictures := TriState.OnOption;

    Style.BackgroundPicture := i;

    Style.BackgroundPictureWrapMode := TabFormatWrapMode.Tile;

End Sub Button1OnClick;


При нажатии на кнопку для ячеек, которые выделены в «TabSheetBox1»,
 будет задано фоновое изображение: изображение будет загружено из указанного
 файла и будет чередоваться для полного заполнения области каждой ячейки.


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
