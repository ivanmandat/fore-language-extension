# IDtObject.Save

IDtObject.Save
-


# IDtObject.Save


## Синтаксис


Save(Element: [IXMLDOMElement](ModXml.chm::/develop.htm));


## Параметры


Element. XML-элемент, в который
 будут сохранены параметры источника/приёмника данных.


## Описание


Метод Save сохраняет параметры
 источника/приёмника данных в формате XML.


## Комментарии


Для загрузки параметров источника/приёмника данных из формата XML используйте
 метод [IDtObject.Load](IDtObject.Load.htm).


## Пример


Для выполнения примера предполагается наличие модуля с идентификатором
 CUSTOM_LOAD, содержащего класс [MyDtCustomProvider](../IDtUserProviderEx/MyDtCustomProvider.htm).


Добавьте ссылки на системные сборки: Dt, Metabase, Xml.


	Sub Save;

	Var

	    MB: IMetabase;

	    UsProv: IDtUserProviderEx;

	    Doc: FreeThreadedDOMDocument60;

	    Element: IXmlDomElement;

	Begin

	    MB := MetabaseClass.Active;

	    UsProv := New DtUserProviderEx.Create;

	    UsProv.Metabase := MB;

	    UsProv.Module := MB.ItemById("CUSTOM_IMPORT");

	    UsProv.Macro := "MyDtCustomProvider";

	    UsProv.Open;

	    Doc := New FreeThreadedDOMDocument60.Create;

	    Element := Doc.createElement("UserProvider");

	    UsProv.Save(Element);

	    Doc.appendChild(Element);

	    Doc.save("D:\UserProvider.xml");

	    UsProv.Close;

	End Sub Save;


После выполнения примера параметры созданного пользовательского приёмника
 данных будут выгружены в XML-файл «D:\UserProvider.xml».


См. также:


[IDtObject](IDtObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
