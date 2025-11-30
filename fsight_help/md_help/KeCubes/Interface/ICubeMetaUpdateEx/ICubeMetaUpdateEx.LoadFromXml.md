# ICubeMetaUpdateEx.LoadFromXml

ICubeMetaUpdateEx.LoadFromXml
-


# ICubeMetaUpdateEx.LoadFromXml


## Синтаксис


LoadFromXml(ReaderXml: Variant; Metabase: [IMetabase](kesom.chm::/interface/imetabase/imetabase.htm));


## Параметры


ReaderXml. Объект, из которого
 будут загружены параметры копирования базы данных временных рядов;


Metabase. Репозиторий, в который
 будет скопирована базы данных временных рядов.


## Описание


Метод LoadFromXml загружает
 параметры копирования базы данных временных рядов, сохраненные в виде
 xml-кода.


## Пример


Для выполнения примера предполагается наличие файла C:\FC_COPY.XML,
 содержащего параметры копирования базы данных временных рядов в виде XML-кода..
 Параметры должны содержаться в разделе Root.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubUpdateEx: ICubeMetaUpdateEx;

    XmlDoc: IXMLDOMDocument3;

    Element: IXmlDomElement;

Begin

    Mb := MetabaseClass.Active;

    RubUpdateEx := New CubeMetaUpdateClass.Create As ICubeMetaUpdateEx;

    XmlDoc := New DOMDocument60.Create;

    XmlDoc.load("C:\FC_COPY.XML");

    Element := XmlDoc.selectSingleNode("Root") As IXmlDomElement;

    RubUpdateEx.LoadFromXml(Element, Mb);

    RubUpdateEx.Apply(Null);

End Sub UserProc;


После выполнения примера параметры копирования базы данных временных
 рядов будут загружены из XML-файла. По данным параметрам будет произведено
 копирование базы данных временных рядов.


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
