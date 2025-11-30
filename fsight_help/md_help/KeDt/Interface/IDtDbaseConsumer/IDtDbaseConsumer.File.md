# IDtDbaseConsumer.File

IDtDbaseConsumer.File
-


# IDtDbaseConsumer.File


## Синтаксис


File: String;


## Описание


Свойство File определяет путь
 и наименование файла DBF таблицы, в которую будет производиться экспорт
 данных.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL и в корневом каталоге диска С файла базы данных
 Base_1.Dbf.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    EtlTask: IEtlTask;

    EtlConsumer: IEtlPlainDataConsumer;

    DbaseConsumer: IDtDbaseConsumer;

    WxConsumer: IWxRectangle;

    WxETLConsumer: IWxETLObject;

Begin

    MB := MetabaseClass.Active;

    // Поиск задачи ETL. Объект репозитория с идентификатором "ETL"

    MObj := MB.ItemById("ETL").Edit;

    EtlTask := MObj As IEtlTask;

    // Начало создания приёмника

    // Создание объекта "Экспорт в Dbase"

    EtlConsumer := EtlTask.Create(EtlObjectType.PlainDataDbaseConsumer) As IEtlPlainDataConsumer;

    EtlConsumer := EtlConsumer.Edit;

    EtlConsumer.Id := "Dbase_Consumer";

    EtlConsumer.Name := "Экспорт в Dbase";

    EtlConsumer.Description := "Экспорт в Dbase";

    // Настройка приёмника данных

    DbaseConsumer := EtlConsumer.Consumer As IDtDbaseConsumer;

    DbaseConsumer.File := "c:\Base_1.Dbf";

    DbaseConsumer.DriverVersion := "dBASE IV";

    EtlConsumer.FillDefault;

    // Сохраняем приёмник

    EtlConsumer.Save;

    // Конец создания приёмника

    // Начало создания визуального объекта

    WxConsumer := EtlTask.Workspace.CreateRectangle;

    WxETLConsumer := New WxETLObject.Create;

    WxETLConsumer.ETLObject := EtlConsumer;

    WxConsumer.Style.TextPosition := WxTextPosition.Bottom;

    WxConsumer.Style.PictureMarginTop := -10;

    WxConsumer.PinPosition := New GxPointF.Create(50, 50);

    WxConsumer.Extension := WxETLConsumer As IWxShapeExtension;

    // Конец создания визуального объекта

    // Сохранение задачи Etl

    MObj.Save;

End Sub UserProc;


После выполнения примера в задаче ETL будет создан объект «Экспорт в
 Dbase». Данный приёмник будет экспортировать данные в файл базы данных.
 При подключении будут использоваться драйвера dBASE IV.


См. также:


[IDtDbaseConsumer](IDtDbaseConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
