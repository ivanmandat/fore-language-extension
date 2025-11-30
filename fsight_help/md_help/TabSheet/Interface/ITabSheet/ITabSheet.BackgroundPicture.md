# ITabSheet.BackgroundPicture

ITabSheet.BackgroundPicture
-


# ITabSheet.BackgroundPicture


## Синтаксис


BackgroundPicture: [IGxImage](ModDrawing.chm::/Interface/IGxImage/IGxImage.htm);


## Описание


Свойство BackgroundPicture определяет
 фоновое изображение всей таблицы.


## Комментарии


Фоновое изображение таблицы располагается на самом заднем плане. Фон,
 определенный для ячеек ([ITabCellStyle.BackgroundBrush](../ITabCellStyle/ITabCellStyle.BackgroundBrush.htm)
 / [ITabCellStyle.BackgroundPicture](../ITabCellStyle/ITabCellStyle.BackgroundPicture.htm))
 будет перекрывать фон таблицы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox с наименованием
 «TabSheetBox1» и какого-либо источника данных для «TabSheetBox1». Добавьте ссылки на системные
 сборки: Drawing, Tab.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    TSheet: ITabSheet;

Begin

    TSheet := TabSheetBox1.Source.GetTabSheet;

    TSheet.BackgroundPicture := GxImage.FromFile("С:\Background.png");

End Sub Button1OnClick;


При нажатии на кнопку для всей таблицы будет установлено фоновое изображение,
 загруженное из указанного файла.


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
