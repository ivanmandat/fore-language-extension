# IDtDbaseProvider.Path

IDtDbaseProvider.Path
-


# IDtDbaseProvider.Path


## Синтаксис


Path: String;


## Описание


Свойство Path определяет путь
 к каталогу, в котором располагаются таблицы, из которых будут импортироваться
 данные.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL и в корневом каталоге диска С файла базы данных
 Base_1.Dbf.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    EtlTask: IEtlTask;

    EtlProvider: IEtlPlainDataProvider;

    DbaseProvider: IDtDbaseProvider;

    WxProvider: IWxRectangle;

    WxETLProvider: IWxETLObject;

Begin

    MB := MetabaseClass.Active;

    // Поиск задачи ETL. Объект репозитория с идентификатором "ETL"

    MObj := MB.ItemById("ETL").Edit;

    EtlTask := MObj As IEtlTask;

    // Начало создания источника

    // Создание объекта "Импорт из Dbase"

    EtlProvider := EtlTask.Create(EtlObjectType.PlainDataDbaseProvider) As IEtlPlainDataProvider;

    EtlProvider := EtlProvider.Edit;

    EtlProvider.Id := "Dbase_Provider";

    EtlProvider.Name := "Импорт из Dbase";

    EtlProvider.Description := "Импорт из Dbase";

    // Настройка источника данных

    DbaseProvider := EtlProvider.Provider As IDtDbaseProvider;

    DbaseProvider.Path := "c:\";

    DbaseProvider.DriverVersion := "dBASE IV";

    DbaseProvider.Query := "Select * from Base_1";

    EtlProvider.FillDefault;

    // Сохраняем источник

    EtlProvider.Save;

    // Конец создания источника

    // Начало создания визуального объекта

    WxProvider := EtlTask.Workspace.CreateRectangle;

    WxETLProvider := New WxETLObject.Create;

    WxETLProvider.ETLObject := EtlProvider;

    WxProvider.Style.TextPosition := WxTextPosition.Bottom;

    WxProvider.Style.PictureMarginTop := -10;

    WxProvider.PinPosition := New GxPointF.Create(50, 50);

    WxProvider.Extension := WxETLProvider As IWxShapeExtension;

    // Конец создания визуального объекта

    // Сохранение задачи ETL

    MObj.Save;

End Sub UserProc;


После выполнения примера в задаче ETL будет создан объект «Импорт из
 Dbase». Данный источник будет импортировать данные из файла базы данных.
 При подключении будут использоваться драйвера dBASE IV.


См. также:


[IDtDbaseProvider](IDtDbaseProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
