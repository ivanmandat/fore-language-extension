# IDtVfpProvider.Path

IDtVfpProvider.Path
-


# IDtVfpProvider.Path


## Синтаксис


Path: String;


## Описание


Свойство Path определяет путь
 к базе данных или каталогу со свободными таблицами Visual Foxpro.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL и в корневом каталоге диска С базы данных Visual
 Foxpro - Data.dbc. В базе данных имеется таблица Table_1.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    EtlTask: IEtlTask;

    EtlProvider: IEtlPlainDataProvider;

    VfpProvider: IDtVfpProvider;

    WxProvider: IWxRectangle;

    WxETLProvider: IWxETLObject;

Begin

    MB := MetabaseClass.Active;

    // Поиск задачи ETL. Объект репозитория с идентификатором "ETL"

    MObj := MB.ItemById("ETL").Edit;

    EtlTask := MObj As IEtlTask;

    // Начало создания источника

    // Создание объекта "Импорт из Visual Foxpor"

    EtlProvider := EtlTask.Create(EtlObjectType.PlainDataVfpProvider) As IEtlPlainDataProvider;

    EtlProvider := EtlProvider.Edit;

    EtlProvider.Id := "Vfp_Provider";

    EtlProvider.Name := "Импорт из Visual Foxpor";

    EtlProvider.Description := "Импорт из Visual Foxpor";

    // Настройка источника данных

    VfpProvider := EtlProvider.Provider As IDtVfpProvider;

    VfpProvider.Path := "c:\Data.dbc";

    VfpProvider.Query := "Select * From Table_1";

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
 Visual Foxpro». Данный источник будет импортировать данные из таблицы
 Table_1, хранящейся в указанной базе данных Visual Foxpro.


См. также:


[IDtVfpProvider](IDtVfpProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
