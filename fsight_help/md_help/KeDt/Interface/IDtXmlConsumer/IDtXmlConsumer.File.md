# IDtXmlConsumer.File

IDtXmlConsumer.File
-


# IDtXmlConsumer.File


## Синтаксис


File: String;


## Описание


Свойство File определяет путь
 и наименование текстового файла, в который будет производиться экспорт
 данных.


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

    XMLConsumer.FormatType := DtXmlFormatType.FieldsAsNodes;

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


<Row>


<I_FIELD>10</I_FIELD>


<D_FIELD>10.4</D_FIELD>


<S_FIELD>A</S_FIELD>


<DATE_FIELD>01.01.2006</DATE_FIELD>


<B_FIELD>0</B_FIELD>


</Row>


<Row>


<I_FIELD>20</I_FIELD>


<D_FIELD>24.4</D_FIELD>


<S_FIELD>B</S_FIELD>


<DATE_FIELD>01.02.2006</DATE_FIELD>


<B_FIELD>1</B_FIELD>


</Row>


....


</Data>


См. также:


[IDtXmlConsumer](IDtXmlConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
