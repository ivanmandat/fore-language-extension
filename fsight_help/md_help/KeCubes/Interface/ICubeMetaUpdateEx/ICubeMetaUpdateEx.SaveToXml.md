# ICubeMetaUpdateEx.SaveToXml

ICubeMetaUpdateEx.SaveToXml
-


# ICubeMetaUpdateEx.SaveToXml


## Синтаксис


SaveToXml(WriterXml: Variant; Metabase: [IMetabase](kesom.chm::/interface/imetabase/imetabase.htm));


## Параметры


WriterXml. Объект, в который
 будут сохранены параметры копирования базы данных временных рядов в виде
 XML-кода;


Metabase. Репозиторий, содержащий
 копируемую базу данных временных рядов.


## Описание


Метод SaveToXml сохраняет в
 виде XML-кода параметры копирования базы данных временных рядов.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubUpdateEx: ICubeMetaUpdateEx;

    Rub: IRubricator;

    CrInfo: IMetabaseObjectCreateInfo;

    XmlDoc: IXMLDOMDocument3;

    Element: IXmlDomElement;

    s: string;

Begin

    Mb := MetabaseClass.Active;

    RubUpdateEx := New CubeMetaUpdateClass.Create As ICubeMetaUpdateEx;

    Rub := mb.ItemById("FC").Bind As IRubricator;

    RubUpdateEx.Rubricator := Rub;

    RubUpdateEx.Metabase := Mb;

    CrInfo := RubUpdateEx.CreateInfo;

    CrInfo.Parent := Mb.Root;

    s := Mb.GenerateId("FC_COPY");

    CrInfo.Id := s;

    CrInfo.Name := s;

    RubUpdateEx.CopyData := True;

    RubUpdateEx.CopyExtraObjects := False;

    RubUpdateEx.RdsDatabase := Rub.Database;

    XmlDoc := New DOMDocument60.Create;

    Element := XmlDoc.createElement("Root");

    XmlDoc.appendChild(Element);

    RubUpdateEx.SaveToXml(Element, Mb);

    XmlDoc.save("C:\FC_COPY.XML");

End Sub UserProc;


После выполнения примера параметры копирования базы данных временных
 рядов в виде XML-кода будут сохранены в указанный файл. В файле параметры
 будут содержаться в разделе Root.


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
