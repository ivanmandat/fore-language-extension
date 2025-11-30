# ICubeMetaUpdateDictionaryRemapings.FindByKey

ICubeMetaUpdateDictionaryRemapings.FindByKey
-


# ICubeMetaUpdateDictionaryRemapings.FindByKey


## Синтаксис


FindByKey(Key: Integer): [ICubeMetaUpdateDictionaryRemaping](../ICubeMetaUpdateDictionaryRemaping/ICubeMetaUpdateDictionaryRemaping.htm);


## Параметры


Key. Ключ объекта-источника.


## Описание


Метод FindByKey осуществляет
 поиск соответствия в коллекции по ключу объекта-источника.


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

Begin

    Mb := MetabaseClass.Active;

    RubUpdateEx := New CubeMetaUpdateClass.Create As ICubeMetaUpdateEx;

    XmlDoc := New DOMDocument60.Create;

    XmlDoc.load("C:\FC_COPY.XML");

    Element := XmlDoc.selectSingleNode("root") As IXmlDomElement;

    RubUpdateEx.LoadFromXml(Element, Mb);

    DictRemapings := RubUpdateEx.DictionaryRemapings;

    DictRemap := DictRemapings.FindByKey(67);

    If DictRemap <> Null Then

        Debug.WriteLine("Объект-приёмник: " + DictRemap.Target.Id);

    End If;

End Sub UserProc;


После выполнения примера параметры копирования базы данных временных
 рядов будут загружены из XML-файла. Будет произведен поиск соответствия
 для объекта-источника с ключом 67. Если соответствие было найдено, то
 в окно консоли будут выведен идентификатор объекта-приёмника.


См. также:


[ICubeMetaUpdateDictionaryRemapings](ICubeMetaUpdateDictionaryRemapings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
