# IDtObject.Load

IDtObject.Load
-


# IDtObject.Load


## Синтаксис


Load(Element: [IXMLDOMElement](ModXml.chm::/develop.htm));


## Параметры


Element. XML-элемент, из которого
 будут загружены параметры источника/приёмника данных.


## Описание


Метод Load загружает параметры
 источника/приёмника данных из XML.


## Комментарии


Для сохранения параметров источника/приёмника данных в формате XML используйте
 метод [IDtObject.Save](IDtObject.Save.htm).


## Пример


Для выполнения примера предполагается наличие XML-файла «D:\UserProvider.xml»,
 содержащего параметры пользовательского приёмника данных.


Добавьте ссылки на системные сборки: Dt, Metabase, Xml.


	Sub Load;

	Var

	    UsProv: IDtUserProviderEx;

	    Doc: FreeThreadedDOMDocument60;

	Begin

	    UsProv := New DtUserProviderEx.Create;

	    UsProv.Metabase := MetabaseClass.Active;

	    Doc := New FreeThreadedDOMDocument60.Create;

	    Doc.load("D:\UserProvider.xml");

	    UsProv.Load(Doc.documentElement);

	    UsProv.Open;

	    UsProv.Close;

	End Sub Load;


После выполнения примера параметры пользовательского приёмника данных
 будут загружены из указанного файла.


См. также:


[IDtObject](IDtObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
