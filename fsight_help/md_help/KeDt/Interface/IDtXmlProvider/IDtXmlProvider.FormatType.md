# IDtXmlProvider.FormatType

IDtXmlProvider.FormatType
-


# IDtXmlProvider.FormatType


## Синтаксис


FormatType: [DtXmlFormatType](../../Enums/DtXmlFormatType.htm);


## Описание


Свойство FormatType определяет
 формат структуры файла, в соответствии с которым будет производиться импорт
 данных. По умолчанию используется формат с полями как дочерними вершинами.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором "Etl" и в корневом каталоге диска С XML файла
 Data.xml.


[![](../../opened.gif)![](../../closed.gif)Структура XML-файла](javascript:TextPopup(this))


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

    XMLProvider.FormatType := DtXmlFormatType.FieldsAsAttributes;

    XMLProvider.XPath := "Data/Row[@Year > ""1991"" and @Year < ""1993""]";

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
 полей будут браться из значений атрибутов вершины Row. Импортироваться
 будут те записи, для которых значение атрибута Year находится в диапазоне
 (1991;1993).


См. также:


[IDtXmlProvider](IDtXmlProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
