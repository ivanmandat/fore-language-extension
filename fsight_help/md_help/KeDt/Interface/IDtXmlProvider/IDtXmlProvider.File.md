# IDtXmlProvider.File

IDtXmlProvider.File
-


# IDtXmlProvider.File


## Синтаксис


File: String;


## Описание


Свойство File определяет путь
 и наименование текстового файла, из которого будет производиться импорт
 данных.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL и в корневом каталоге диска С XML файла Data.xml.


[![](../../opened.gif)![](../../closed.gif)Структура XML-файла](javascript:TextPopup(this))


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


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    EtlTask: IEtlTask;

    EtlProvider: IEtlPlainDataProvider;

    XMLProvider: IDtXMLProvider;

    WxProvider: IWxRectangle;

    WxETLProvider: IWxETLObject;

Begin

    MB := MetabaseClass.Active;

    // Поиск задачи ETL. Объект репозитория с идентификатором "ETL"

    MObj := MB.ItemById("ETL").Edit;

    EtlTask := MObj As IEtlTask;

    // Начало создания источника

    // Создание объекта "Импорт из XML"

    EtlProvider := EtlTask.Create(EtlObjectType.PlainDataXMLProvider) As IEtlPlainDataProvider;

    EtlProvider := EtlProvider.Edit;

    EtlProvider.Id := "XML_Provider";

    EtlProvider.Name := "Импорт из XML";

    EtlProvider.Description := "Импорт из XML";

    // Настройка источника данных

    XMLProvider := EtlProvider.Provider As IDtXMLProvider;

    XMLProvider.File := "c:\Data.xml";

    XMLProvider.FormatType := DtXmlFormatType.FieldsAsNodes;

    XMLProvider.XPath := "Data/Row";

    XMLProvider.FieldsFromFile;

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
 XML». Источник будет импортировать данные из указанного XML-файла. Значения
 полей будут браться из дочерних вершин вершины Row.


См. также:


[IDtXmlProvider](IDtXmlProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
