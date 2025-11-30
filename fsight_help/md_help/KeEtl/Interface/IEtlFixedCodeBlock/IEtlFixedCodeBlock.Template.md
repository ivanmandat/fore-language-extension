# IEtlFixedCodeBlock.Template

IEtlFixedCodeBlock.Template
-


# IEtlFixedCodeBlock.Template


## Синтаксис


Template: [IEtlTemplate](KeFore.chm::/Interface/IEtlTemplate/IEtlTemplate.htm);


## Описание


Свойство Template определяет
 шаблон, на основе которого создаётся процедура пользователя.


## Комментарии


Шаблон для процедур пользователя хранятся в коллекции [ISharedParams.EtlTemplates](KeFore.chm::/Interface/ISharedParams/ISharedParams.EtlTemplates.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL_TASK. Также в репозитории должен быть модуль с идентификатором
 M_ETLPROCEDURE. В модуле имеется класс UserProcedure, который реализует
 методы интерфейса [IEtlCustomCodeBlock](../IEtlCustomCodeBlock/IEtlCustomCodeBlock.htm).


Добавьте ссылки на системные сборки: Andy, Drawing, Etl, Fore, Metabase,
 XML.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Params: ISharedParams;

	    Templates: IEtlTemplates;

	    Template: IEtlTemplate;

	    EtlTask: IEtlTask;

	    Etl: IEtlFixedCodeBlock;

	    XmlDoc: IXmlDomDocument3;

	    XmlElement, SubElement: IXmlDomElement;

	    Rect: IWxRectangle;

	    WxETL: IWxEtlObject;

	Begin

	    MB := MetabaseClass.Active;

	    // Создание шаблона для пользовательской процедуры

	    Params := MB.SpecialObject(MetabaseSpecialObject.SharedParams).Edit As ISharedParams;

	    Templates := Params.EtlTemplates(ETLTemplateType.CodeBlock);

	    Template := Templates.Add;

	    Template.Module := MB.ItemById("M_ETLPROCEDURE");

	    Template.Class_ := "UserProcedure";

	    Template.Id := "NewCodeBlock";

	    Template.Name := "Пользовательская процедура (шаблон)";

	    (Params As IMetabaseObject).Save;

	    // Задача ETL

	    EtlTask := MB.ItemById("ETL_TASK").Edit As IEtlTask;

	    // Создание пользовательской процедуры на базе шаблона

	    Etl := EtlTask.Create(EtlObjectType.FixedCodeBlock) As IEtlFixedCodeBlock;

	    Etl.Id := "PlainFixedCodeBlock";

	    Etl.Name := "Процедура на основе шаблона";

	    Etl.Template := Template;

	    XmlDoc := New FreeThreadedDOMDocument60.Create;

	    XmlElement := XmlDoc.createElement("UserData") As IXmlDomElement;

	    SubElement := XmlDoc.createElement("Info");

	    SubElement.setAttribute("Version", "1");

	    SubElement.setAttribute("Date", DateTime.Today.ToString);

	    XmlElement.appendChild(SubElement);

	    SubElement := XmlDoc.createElement("Data");

	    SubElement.setAttribute("Prop1", "Value1");

	    SubElement.setAttribute("Prop2", "Value2");

	    XmlElement.appendChild(SubElement);

	    XmlDoc.appendChild(XmlElement);

	    Etl.UserData := XMLDoc.documentElement;

	    // Визуальное представление процедуры

	    Rect := EtlTask.Workspace.CreateRectangle;

	    WxETL := New WxEtlObject.Create;

	    WxETL.EtlObject := Etl;

	    Rect.Style.TextPosition := WxTextPosition.Bottom;

	    Rect.Style.PictureMarginTop := -10;

	    Rect.PinPosition := New GxPointF.Create(50, 50);

	    Rect.Extension := WxETL As IWxShapeExtension;

	    // Сохранение изменений

	    (EtlTask As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера в задаче ETL будет создан и настроен новый шаблон
 для процедур. На базе этого шаблона на рабочем пространстве задачи ETL
 будет создана новая пользовательская процедура. Для процедуры будут заданы
 основные настройки и определён набор пользовательских данных в формате
 XML.


См. также:


[IEtlFixedCodeBlock](IEtlFixedCodeBlock.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
