# IPrxPicture.AutoSize

IPrxPicture.AutoSize
-


# IPrxPicture.AutoSize


## Синтаксис


AutoSize: Boolean;


## Описание


Свойство AutoSize определяет,
 будет ли автоматически изменяться размер элемента управления до размеров
 изображения, размещенного в нем.


## Комментарии


При значении True используется
 автоматическое изменения размера элемента управления до размеров изображения,
 при значении False изменение размеров
 не происходит.


По умолчанию свойство имеет значение False.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGULAR_REPORT», на листе которого размещено изображение.Подключите
 системные сборки: Metabase, Report, Tab, Drawing.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Report: IPrxReport;

	    Sheet: IPrxTable;

	    Image: IPrxPicture;

	    Pict: IGxImage;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("REGULAR_REPORT").Edit;

	    Report := MObj As IPrxReport;

	    Sheet := Report.Sheets.Item(0) As IPrxTable;

	    Image := Sheet.TabSheet.Objects.Item(0).Extension As IPrxPicture;

	    Pict := GxImage.FromFile("C:\Logo.jpg");

	    Image.Image := Pict;

	    Image.AutoSize := True;

	    Image.Center := True;

	    Image.Proportional := False;

	    Image.Stretch := False;

	    MObj.Save;

	End Sub UserProc;


В регламентном отчете изменится изображение на заданное в оригинальном
 размере, будет включено центрирование изображения, отключено сохранение
 пропорций и растягивание изображения до размеров элемента управления,
 в котором оно размещено.


См. также:


[IPrxPicture](IPrxPicture.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
