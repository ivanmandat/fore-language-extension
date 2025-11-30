# IDtXmlConsumer.FormatType

IDtXmlConsumer.FormatType
-


# IDtXmlConsumer.FormatType


## Синтаксис


FormatType: [DtXmlFormatType](../../Enums/DtXmlFormatType.htm);


## Описание


Свойство FormatType определяет
 формат структуры файла, в соответствии с которым будет производиться экспорт
 данных.


## Комментарии


По умолчанию используется формат с полями как дочерними вершинами.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    EtlTask: IEtlTask;

    EtlConsumer: IEtlPlainDataConsumer;

    XMLConsumer: IDtXmlConsumer;

    WxConsumer: IWxRectangle;

    WxETLConsumer: IWxETLObject;

Begin

    MB := MetabaseClass.Active;

    // Поиск задачи ETL. Объект репозитория с идентификатором "ETL"

    MObj := MB.ItemById("ETL").Edit;

    EtlTask := MObj As IEtlTask;

    // Начало создания приёмника

    // Создание объекта "Экспорт в XML"

    EtlConsumer := EtlTask.Create(EtlObjectType.PlainDataXmlConsumer) As IEtlPlainDataConsumer;

    EtlConsumer := EtlConsumer.Edit;

    EtlConsumer.Id := "XML_Consumer";

    EtlConsumer.Name := "Экспорт в XML";

    EtlConsumer.Description := "Экспорт в XML";

    // Настройка приёмника данных

    XMLConsumer := EtlConsumer.Consumer As IDtXmlConsumer;

    XMLConsumer.DataNodeName := "Row";

    XMLConsumer.File := "c:\Data_out.Xml";

    XMLConsumer.FormatType := DtXmlFormatType.FieldsAsAttributes;

    XMLConsumer.RootNodeName := "Data";

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
 XML». Данный приёмник будет экспортировать данные в XML файл Data_out.xml.
 Если файл не существует, то он будет создан.


При экспорте файл примет следующий вид:


<Data>


<Row Code="10"
 Country="Russia" Year="1990" Value="100.5"
 />


<Row Code="10"
 Country="Russia" Year="1991" Value="104.1"
 />


<Row Code="10"
 Country="Russia" Year="1992" Value="107.2"
 />


<Row Code="10"
 Country="Russia" Year="1993" Value="106.7"
 />


<Row Code="20"
 Country="France" Year="1990" Value="90.3"
 />


<Row Code="20"
 Country="France" Year="1991" Value="104.5"
 />


<Row Code="20"
 Country="France" Year="1992" Value="102.3"
 />


<Row Code="20"
 Country="France" Year="1993" Value="100.5"
 />


...


</Data>


См. также:


[IDtXmlConsumer](IDtXmlConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
