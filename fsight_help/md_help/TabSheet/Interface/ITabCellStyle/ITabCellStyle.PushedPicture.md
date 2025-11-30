# ITabCellStyle.PushedPicture

ITabCellStyle.PushedPicture
-


# ITabCellStyle.PushedPicture


## Синтаксис


PushedPicture: Integer;


## Описание


Свойство PushedPicture определяет
 индекс изображения, которое будет отображаться в ячейке таблицы при нажатии
 мышкой по изображению.


## Комментарии


Коллекция изображений таблицы доступна в свойстве [Images](../ITabSheet/ITabSheet.Images.htm).
 Для использования изображений в ячейке необходимо, чтобы свойству [EnablePictures](ITabCellStyle.EnablePictures.htm)
 было установлено значение [TriState.OnOption](ForeSys.chm::/Enums/TriState.htm).
 Изображение, установленное в данном свойстве не отображается, если не
 установлено изображение [ITabCellStyle.NormalPicture](ITabCellStyle.NormalPicture.htm).


			Sub UserProc;

Var

    TSheet: ITabSheet;

    TRange: ITabRange;

    Style: ITabCellStyle;

Begin

    TSheet := UiTabSheet1.TabSheet;

    TSheet.Images.AddFromImageList(ImageList1);

    TRange := TSheet.View.Selection.Range;

    Style := TRange.Style;

    Style.EnablePictures := TriState.OnOption;

    Range.Style.NormalPicture := 1;

    Range.Style.PushedPicture := 2;

End Sub UserProc;


При нажатии на кнопку в коллекцию изображений таблицы будут добавлены
 изображения компонента «ImageList1». Для выделенного диапазона ячеек в
 обычном режиме будет отображаться изображение с индексом 1. При нажатии
 по какому-либо изображению будет отображаться изображение с индексом 2.


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
