# IEtlPlainDataProvider.FillFromSource

IEtlPlainDataProvider.FillFromSource
-


# IEtlPlainDataProvider.FillFromSource


## Синтаксис


FillFromSource;


## Описание


Метод FillFromSource заполняет
 поля выхода на основании структуры файла-источника. При вызове метода
 поля [источника](IEtlPlainDataProvider.Provider.htm) будут
 очищены, а затем заполнены на основании структуры файла-источника.


## Пример


Для выполнения примера в репозитории необходимо наличие задачи ETL с
 идентификатором ETL и файла C:\TestDocument.xls, который будет источником
 данных.


	Sub UserProc;

	Var

	    Metabase : IMetabase;

	    MObj: IMetabaseObject;

	    EtlTask: IEtlTask;

	    EtlProvider: IEtlPlainDataProvider;

	    ExcelProvider: IDtExcelProvider;

	Begin

	    Metabase := MetabaseClass.Active;

	    MObj := Metabase.ItemById("ETL").Edit;

	    EtlTask := MObj As IEtlTask;

	    // Создание объекта «Импорт из Excel»

	    EtlProvider := EtlTask.Create(EtlObjectType.PlainDataExcelProvider) As IEtlPlainDataProvider;

	    EtlProvider:= EtlProvider.Edit;

	    EtlProvider.Id:= "File_XLS";

	    EtlProvider.Name:= "Источник данных XLS";

	    // Настройка источника данных

	    ExcelProvider := EtlProvider.Provider As IDtExcelProvider;

	    ExcelProvider.File := "c:\TestDocument.xls";

	    ExcelProvider.DriverVersion := "Excel 8.0";

	    ExcelProvider.Query := "select * from [Лист1$]";

	    EtlProvider.FillFromSource;

	    EtlProvider.Save;

	    // Cоздание визуального объекта

	    CreateWX(EtlProvider, EtlTask);

	    MObj.Save;

	End Sub UserProc;


	Sub CreateWX(CopyObj: IEtlPlainDataProvider; etltask: IEtltask);

	Var

	    WxDataTrans: IWxRectangle;

	    WxETLDataTrans: IWxEtlObject;

	Begin

	    WxDataTrans := EtlTask.Workspace.CreateRectangle;

	    WxDataTrans.Id := CopyObj.Id;

	    WxETLDataTrans := New WxEtlObject.Create;

	    WxETLDataTrans.EtlObject := CopyObj;

	    WxDataTrans.Style.TextPosition := WxTextPosition.Bottom;

	    WxDataTrans.Style.PictureMarginTop := -10;

	    WxDataTrans.PinPosition := New GxPointF.Create(20, 20);

	    WxDataTrans.Extension := WxETLDataTrans As IWxShapeExtension;

	End Sub CreateWX;


После выполнения примера (UserProc) для задачи ETL будет создан источник
 данных XLS, поля выхода которого будут соответствовать имеющимся полям
 в файле TestDocument.xls на первом листе.


См. также:


[IEtlPlainDataProvider](IEtlPlainDataProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
