# IWxEtlObject.EtlObject

IWxEtlObject.EtlObject
-


# IWxEtlObject.EtlObject


## Синтаксис


EtlObject: Object;


## Описание


Свойство EtlObject определяет
 объект задачи ETL, которому соответствует графический объект.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MbObj: IMetabaseObject;

	    EtlTask: IEtlTask;

	    EtlProvider: IEtlPlainDataProvider;

	    ExcelProvider: IDtExcelProvider;

	    WxConsumer: IWxRectangle;

	    WxETLConsumer: IWxEtlObject;

	Begin

	    MB := MetabaseClass.Active;

	    //Поиск задачи ETL. Объект репозитория с идентификатором "ETL"

	    MbObj := MB.ItemById("ETL").Edit;

	    EtlTask := MbObj As IEtlTask;

	    //Начало создания источника Excel

	    //Создание объекта "Импорт из Excel"

	    EtlProvider := EtlTask.Create(EtlObjectType.PlainDataExcelProvider) As IEtlPlainDataProvider;

	    EtlProvider := EtlProvider.Edit;

	    EtlProvider.Id := "File_XLS";

	    EtlProvider.Name := "Источник данных XLS";

	    EtlProvider.Description := "Данные из файла data.xls";

	    //Настройка источника данных

	    ExcelProvider := EtlProvider.Provider As IDtExcelProvider;

	    ExcelProvider.File := "c:\data.xls" ;

	    ExcelProvider.DriverVersion := "Excel 8.0";

	    ExcelProvider.Query := "select * from [Лист1$]";

	    ExcelProvider.HasHeader := False;

	    EtlProvider.FillDefault;

	    //Сохраняем источник Excel

	    EtlProvider.Save;

	    //Конец создания источника Excel

	    //Начало создания визуального объекта

	    WxConsumer := EtlTask.Workspace.CreateRectangle;

	    WxETLConsumer := New WxEtlObject.Create;

	    WxETLConsumer.EtlObject := EtlProvider;

	    WxConsumer.Style.TextPosition := WxTextPosition.Bottom;

	    WxConsumer.Style.PictureMarginTop := -10;

	    WxConsumer.PinPosition := New GxPointF.Create(50, 50);

	    WxConsumer.Extension := WxETLConsumer As IWxShapeExtension;

	    //Конец создания визуального объекта

	    //Сохранение объекта репозитория

	    MbObj.Save;

	End Sub UserProc;


После выполнения примера в задаче ETL будет создан объект «Импорт из
 Excel» с идентификатором «FILE_XLS», данные берутся из файла «c:\data.xls».
 После создания объекта, для его отображения на рабочем пространстве задачи
 ETL, создается графический объект.


См. также:


[IWxEtlObject](IWxETLObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
