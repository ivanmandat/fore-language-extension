# IEtlTask.Create

IEtlTask.Create
-


# IEtlTask.Create


## Синтаксис


Create(Type: [EtlObjectType](../../Enums/EtlObjectType.htm)):
 [IEtlObject](../IEtlObject/IEtlObject.htm);


## Параметры


Type. Тип
 объекта задачи ETL.


## Описание


Метод Create создает объект
 задачи ETL. Тип объекта передается посредством параметра Type.


## Пример


Для выполнения примера добавьте ссылки на системные сборки:


	- Andy;


	- Drawing;


	- Dt;


	- Etl;


	- Metabase.


Предполагается наличие в репозитории папки с идентификатором «ETLTASKS»
 и файла «data.xls» на локальном диске, из которого будут импортироваться
 данные. Создадим новую задачу ETL в папке с указанным идентификатором.
 Добавим в задачу объект «Импорт из Excel».


	Sub  UserProc;

	Var

	    MB: IMetabase;

	    ci: IMetabaseObjectCreateInfo;

	    MbObj: IMetabaseObject;

	    EtlTask: IEtlTask;

	    EtlProvider: IEtlPlainDataProvider;

	    ExcelProvider: IDtExcelProvider;

	    WxConsumer: IWxRectangle;

	    WxETLConsumer: IWxEtlObject;

	Begin

	    MB := MetabaseClass.Active;

	    //Создаем новую задачу ETL

	    ci := Mb.CreateCreateInfo;

	    ci.ClassId := MetabaseObjectClass.KE_CLASS_ETLTASK;

	    ci.Parent := MB.ItemById("ETLTASKS");

	    ci.Name := "Задача ETL";

	    ci.Id := "ETLTASK";

	    MbObj := Mb.CreateObject(ci).Edit;

	    EtlTask := MbObj As IEtlTask;

	    //Создаем объект "Импорт из Excel"

	    EtlProvider := EtlTask.Create(EtlObjectType.PlainDataExcelProvider) As IEtlPlainDataProvider;

	    EtlProvider := EtlProvider.Edit;

	    EtlProvider.Id := "File_XLS";

	    EtlProvider.Name := "Источник данных XLS";

	    EtlProvider.Description := "Данные из файла data.xls";

	    //Настраиваем источник данных

	    ExcelProvider := EtlProvider.Provider As IDtExcelProvider;

	    ExcelProvider.File := "c:\data.xls";

	    ExcelProvider.DriverVersion := "Excel 8.0";

	    ExcelProvider.Query := "select * from [Лист1$]";

	    ExcelProvider.HasHeader := False;

	    EtlProvider.FillDefault;

	    //Сохраняем источник Excel

	    EtlProvider.Save;

	    //Создаем визуальный объект

	    WxConsumer := EtlTask.Workspace.CreateRectangle;

	    WxETLConsumer := New WxEtlObject.Create;

	    WxETLConsumer.EtlObject := EtlProvider;

	    WxConsumer.Style.TextPosition := WxTextPosition.Bottom;

	    WxConsumer.Style.PictureMarginTop := -10;

	    WxConsumer.PinPosition := New GxPointF.Create(50, 50);

	    WxConsumer.Extension := WxETLConsumer As IWxShapeExtension;

	    //Сохраняем объект репозитория

	    MbObj.Save;

	End Sub UserProc;


После выполнения примера в папке с идентификатором «ETLTASKS» будет
 создана задача ETL с наименованием «Задача ETL». В данной задаче ETL будет
 добавлен объект «Импорт из Excel» с идентификатором «FILE_XLS», данные
 берутся из файла «c:\data.xls».


См. также:


[IEtlTask](IEtlTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
