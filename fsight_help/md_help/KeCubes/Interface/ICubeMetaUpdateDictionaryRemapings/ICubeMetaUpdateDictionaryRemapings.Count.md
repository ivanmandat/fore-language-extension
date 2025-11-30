# ICubeMetaUpdateDictionaryRemapings.Count

ICubeMetaUpdateDictionaryRemapings.Count
-


# ICubeMetaUpdateDictionaryRemapings.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 соответствий в коллекции.


## Пример


Для выполнения примера предполагается наличие файла C:\FC_COPY.XML,
 содержащего параметры копирования базы данных временных рядов в виде XML-кода.
 Параметры должны содержаться в разделе Root.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubUpdateEx: ICubeMetaUpdateEx;

    XmlDoc: IXMLDOMDocument3;

    Element: IXmlDomElement;

    DictRemapings: ICubeMetaUpdateDictionaryRemapings;

    DictRemap: ICubeMetaUpdateDictionaryRemaping;

    i: Integer;

Begin

    Mb := MetabaseClass.Active;

    RubUpdateEx := New CubeMetaUpdateClass.Create As ICubeMetaUpdateEx;

    XmlDoc := New DOMDocument60.Create;

    XmlDoc.load("C:\FC_COPY.XML");

    Element := XmlDoc.selectSingleNode("root") As IXmlDomElement;

    RubUpdateEx.LoadFromXml(Element, Mb);

    DictRemapings := RubUpdateEx.DictionaryRemapings;

    For i := 0 To DictRemapings.Count - 1 Do

        DictRemap := DictRemapings.Item(i);

        Debug.WriteLine("Объект-источник:" + DictRemap.SourceId);

        Debug.WriteLine("Объект-приёмник:" + DictRemap.Target.Id);

        Debug.WriteLine("-----------");

    End For;

End Sub UserProc;


После выполнения примера параметры копирования базы данных временных
 рядов будут загружены из XML-файла. В окно консоли будут выведены идентификаторы
 объектов копируемой базы данных временных рядов и идентификаторы соответствующих
 им объектов базы-копии.


См. также:


[ICubeMetaUpdateDictionaryRemapings](ICubeMetaUpdateDictionaryRemapings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
