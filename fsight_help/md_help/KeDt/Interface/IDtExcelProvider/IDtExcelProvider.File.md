# IDtExcelProvider.File

IDtExcelProvider.File
-


# IDtExcelProvider.File


## Синтаксис


File: String;


## Описание


Свойство File определяет путь
 и наименование файла, из которого будет производиться импорт данных.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL и в корневом каталоге диска С файла Microsoft Excel
 с наименованием Data.xls.


Добавьте ссылки на системные сборки: Andy, Drawing, Dt, ETL, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    EtlTask: IEtlTask;

	    EtlProvider: IEtlPlainDataProvider;

	    ExcelProvider: IDtExcelProvider;

	    WxProvider: IWxRectangle;

	    WxETLProvider: IWxETLObject;

	Begin

	    MB := MetabaseClass.Active;

	    //Получение задачи ETL

	    MObj := MB.ItemById("ETL").Edit;

	    EtlTask := MObj As IEtlTask;

	    //Создание объекта "Импорт из Excel"

	    EtlProvider := EtlTask.Create(EtlObjectType.PlainDataExcelProvider) As IEtlPlainDataProvider;

	    EtlProvider := EtlProvider.Edit;

	    EtlProvider.Id := "Excel_Provider";

	    EtlProvider.Name := "Импорт из Excel";

	    EtlProvider.Description := "Импорт из Excel";

	    //Настройка источника данных

	    ExcelProvider := EtlProvider.Provider As IDtExcelProvider;

	    ExcelProvider.DriverVersion := "Excel 8.0";

	    ExcelProvider.File := "c:\Data.xls";

	    ExcelProvider.HasHeader := True;

	    ExcelProvider.ImexMode := DtExcelImexMode.Import;

	    ExcelProvider.Query := "Select * From [Лист1$]";

	    EtlProvider.FillDefault;

	    //Сохраняем источник

	    EtlProvider.Save;

	    //Начало создания визуального объекта

	    WxProvider := EtlTask.Workspace.CreateRectangle;

	    WxETLProvider := New WxETLObject.Create;

	    WxETLProvider.ETLObject := EtlProvider;

	    WxProvider.Style.TextPosition := WxTextPosition.Bottom;

	    WxProvider.Style.PictureMarginTop := -10;

	    WxProvider.PinPosition := New GxPointF.Create(50, 50);

	    WxProvider.Extension := WxETLProvider As IWxShapeExtension;

	    //Сохранение задачи ETL

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в задаче ETL будет создан объект «Импорт из
 Excel». Данный источник будет импортировать все данные из файла Data.xls
 с листа с наименованием «Лист1». При подключении будут использоваться
 драйвера версии Excel 8.0. Из первой строки файла будут импортироваться
 наименования полей. Поля, содержащие данные разных типов, будут импортироваться
 полностью.


См. также:


[IDtExcelProvider](IDtExcelProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
