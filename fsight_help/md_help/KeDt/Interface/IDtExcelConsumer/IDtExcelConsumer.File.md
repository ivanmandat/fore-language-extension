# IDtExcelConsumer.File

IDtExcelConsumer.File
-


# IDtExcelConsumer.File


## Синтаксис


File: String;


## Описание


Свойство File определяет путь
 и наименование файла, в который будет производиться экспорт данных.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    EtlTask: IEtlTask;

    EtlConsumer: IEtlPlainDataConsumer;

    ExcelConsumer: IDtExcelConsumer;

    WxConsumer: IWxRectangle;

    WxETLConsumer: IWxETLObject;

Begin

    MB := MetabaseClass.Active;

    // Поиск задачи ETL. Объект репозитория с идентификатором "ETL"

    MObj := MB.ItemById("ETL").Edit;

    EtlTask := MObj As IEtlTask;

    // Начало создания источника

    // Создание объекта "Экспорт в Excel"

    EtlConsumer := EtlTask.Create(EtlObjectType.PlainDataExcelConsumer) As IEtlPlainDataConsumer;

    EtlConsumer := EtlConsumer.Edit;

    EtlConsumer.Id := "Excel_Consumer";

    EtlConsumer.Name := "Экспорт в Excel";

    EtlConsumer.Description := "Экспорт в Excel";

    // Настройка источника данных

    ExcelConsumer := EtlConsumer.Consumer As IDtExcelConsumer;

    ExcelConsumer.File := "c:\DataOut.xls";

    ExcelConsumer.Table := "ВыходныеДанные";

    ExcelConsumer.DriverVersion := "Excel 8.0";

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
 Excel». Данный приёмник будет экспортировать данные в файл Microsoft Excel
 DataOut.xls. Если такого файла не существует, то он будет создан. Наименование
 листа, на который производится экспорт - "ВыходныеДанные". При
 подключении будут использоваться драйвера версии Excel 8.0.


См. также:


[IDtExcelConsumer](IDtExcelConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
