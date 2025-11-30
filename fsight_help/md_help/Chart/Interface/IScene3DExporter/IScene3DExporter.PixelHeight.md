# IScene3DExporter.PixelHeight

IScene3DExporter.PixelHeight
-


# IScene3DExporter.PixelHeight


## Синтаксис


PixelHeight: Integer;


## Описание


Свойство PixelHeight определяет
 высоту трехмерной сцены в пикселях.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», и регламентного отчета с идентификатором
 «Rep_1», который содержит объект - трехмерная сцена. Необходимо подключить
 системные сборки Chart, ExtCtrls, Drawing, Export, Forms, Metabase, Report,
 Tab.


Пример является обработчиком события OnClick для кнопки.


			Sub Button1OnClick(Sender: Object; Args: IEventArgs);

Var

    exp : IScene3DExporter;

    tab : ITabObject;

    mb : IMEtabase;

Begin

    mb := MetabaseClass.Active;

    exp := New Scene3DExporter.Create;

    exp.Scene3D := ((mb.ItemById("Rep_1").Bind As IPrxReport).sheets.item(0) As IPrxTable).TabSheet.Objects.Item(0).Extension As IScene3D;

    exp.PixelHeight := 500;

    exp.PixelWidth := 500;

    exp.ExportToFile("C:\temp\1.jpg","jpg");

    exp.GetBitmap.SaveToFile("C:\2.jpg");


    exp.Scale := 0.5;

End Sub Button1OnClick;


При нажатии кнопки в файл будет загружено графическое изображение трехмерной
 сцены, используемой в регламентном отчете, с заданной высотой и
 шириной в пикселях, и с заданной шкалой.


См. также:


[IScene3DExporter](IScene3DExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
