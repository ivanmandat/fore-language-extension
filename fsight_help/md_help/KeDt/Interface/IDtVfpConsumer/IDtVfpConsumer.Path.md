# IDtVfpConsumer.Path

IDtVfpConsumer.Path
-


# IDtVfpConsumer.Path


## Синтаксис


Path: String;


## Описание


Свойство Path определяет путь
 к базе данных или каталогу со свободными таблицами Viasual Foxpro.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL и в корневом каталоге диска С базы данных Visual
 Foxpro - Data.dbc. В базе данных имеется таблица Table_1.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    EtlTask: IEtlTask;

    EtlConsumer: IEtlPlainDataConsumer;

    VfpConsumer: IDtVfpConsumer;

    WxConsumer: IWxRectangle;

    WxETLConsumer: IWxETLObject;

Begin

    MB := MetabaseClass.Active;

    // Поиск задачи ETL. Объект репозитория с идентификатором "ETL"

    MObj := MB.ItemById("ETL").Edit;

    EtlTask := MObj As IEtlTask;

    // Начало создания источника

    // Создание объекта "Экспорт в Visual Foxpor"

    EtlConsumer := EtlTask.Create(EtlObjectType.PlainDataVfpConsumer) As IEtlPlainDataConsumer;

    EtlConsumer := EtlConsumer.Edit;

    EtlConsumer.Id := "Vfp_Consumer";

    EtlConsumer.Name := "Экспорт в Visual Foxpor";

    EtlConsumer.Description := "Экспорт в Visual Foxpor";

    // Настройка источника данных

    VfpConsumer := EtlConsumer.Consumer As IDtVfpConsumer;

    VfpConsumer.Path := "c:\Data.dbc";

    VfpConsumer.Table := "Table_1";

    EtlConsumer.FillDefault;

    // Сохраняем источник

    EtlConsumer.Save;

    // Конец создания источника

    // Начало создания визуального объекта

    WxConsumer := EtlTask.Workspace.CreateRectangle;

    WxETLConsumer := New WxETLObject.Create;

    WxETLConsumer.ETLObject := EtlConsumer;

    WxConsumer.Style.TextPosition := WxTextPosition.Bottom;

    WxConsumer.Style.PictureMarginTop := -10;

    WxConsumer.PinPosition := New GxPointF.Create(50, 50);

    WxConsumer.Extension := WxETLConsumer As IWxShapeExtension;

    // Конец создания визуального объекта

    // Сохранение задачи ETL

    MObj.Save;

End Sub UserProc;


После выполнения примера в задаче ETL будет создан объект «Экспорт в
 Visual Foxpro». Данный приёмник будет экспортировать данные в указанную
 таблицу в базе данных Foxpro.


См. также:


[IDtVfpConsumer](IDtVfpConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
