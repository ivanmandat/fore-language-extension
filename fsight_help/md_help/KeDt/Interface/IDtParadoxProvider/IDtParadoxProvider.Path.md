# IDtParadoxProvider.Path

IDtParadoxProvider.Path
-


# IDtParadoxProvider.Path


## Синтаксис


Path: String;


## Описание


Свойство Path определяет путь
 к каталогу, в котором располагаются таблицы Paradox, из которых будут
 импортироваться данные.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL и в корневом каталоге диска С таблицы Paradox Table_1.Db.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    EtlTask: IEtlTask;

    EtlProvider: IEtlPlainDataProvider;

    ParadoxProvider: IDtParadoxProvider;

    WxProvider: IWxRectangle;

    WxETLProvider: IWxETLObject;

Begin

    MB := MetabaseClass.Active;

    // Поиск задачи ETL. Объект репозитория с идентификатором "ETL"

    MObj := MB.ItemById("ETL").Edit;

    EtlTask := MObj As IEtlTask;

    // Начало создания источника

    // Создание объекта "Импорт из Paradox"

    EtlProvider := EtlTask.Create(EtlObjectType.PlainDataParadoxProvider) As IEtlPlainDataProvider;

    EtlProvider := EtlProvider.Edit;

    EtlProvider.Id := "Paradox_Provider";

    EtlProvider.Name := "Импорт из Paradox";

    EtlProvider.Description := "Импорт из Paradox";

    // Настройка источника данных

    ParadoxProvider := EtlProvider.Provider As IDtParadoxProvider;

    ParadoxProvider.DriverVersion := "Paradox 7.X";

    ParadoxProvider.Path := "c:\";

    ParadoxProvider.Query := "Select * from Table_1";

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

    // Сохранение задачи Etl

    MObj.Save;

End Sub UserProc;


После выполнения примера в задаче ETL будет создан объект «Импорт из
 Paradox». Данный источник будет импортировать данные из указанной таблицы.
 При подключении будут использоваться драйвера Paradox 7.X.


См. также:


[IDtParadoxProvider](IDtParadoxProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
