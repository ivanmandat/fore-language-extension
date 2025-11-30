# ISearchEngineServiceBase.SaveToXml

ISearchEngineServiceBase.SaveToXml
-


# ISearchEngineServiceBase.SaveToXml


## Синтаксис


SaveToXml(Writer: Variant);


## Параметры


Writer. XML-элемент, в который
 осуществляется сохранение параметров поискового сервиса.


## Описание


Метод SaveToXml сохраняет настройки
 поискового сервиса в указанный XML-элемент.


## Комментарии


В качестве параметра Writer
 необходимо указать XML-элемент, описываемый интерфейсом IXmlDomElement.
 Указываемый элемент должен быть создан и включен в структуру XML-документа,
 в который будут сохранены настройки.


## Пример


Подключите системные сборки BISearch, Metabase, XML.


			Sub UserProc;

Var

    MB: IMetabase;

    SearchFactory: ISearchEngineServiceFactory;

    SearchEngine: ISearchEngineServiceBase;

    XMLDoc: IXMLDOMDocument3;

    XMLElement: IXmlDomElement;

Begin

    MB := MetabaseClass.Active;

    SearchFactory := New SearchEngineServiceFactory.Create;

    SearchEngine := SearchFactory.CreateSearchEngine(MB);

    //...

    //Настройка параметров поисковой платформы

    //...

    //Создание нового XML-документа

    XMLDoc := New DOMDocument60.Create;

    //Создание корневой вершины

    XMLElement := XMLDoc.createElement("Search");

    XMLDoc.appendChild(XMLElement);

    //Сохранение настроек в файл

    SearchEngine.SaveToXml(XMLElement);

    XMLDoc.save("c:\SearchEngine.xml");

End Sub UserProc;


При выполнении примера будет создан объект, предоставляющий доступ к
 поисковому сервису. После проведения каких-либо настроек, эти настройки
 будут сохранены в файл «SearchEngine.xml».


См. также:


[ISearchEngineServiceBase](ISearchEngineServiceBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
