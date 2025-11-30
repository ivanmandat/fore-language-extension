# ISearchEngineServiceBase.LoadFromXml

ISearchEngineServiceBase.LoadFromXml
-


# ISearchEngineServiceBase.LoadFromXml


## Синтаксис


LoadFromXml(Reader: Variant);


## Параметры


Reader. XML-элемент, из которого
 осуществляется загрузка параметров поискового сервиса.


## Описание


Метод LoadFromXml загружает
 параметры поискового сервиса из указанного XML-элемента.


## Комментарии


В качестве параметра Reader
 необходимо указать XML-элемент, описываемый интерфейсом IXmlDomElement.
 Структура дочерних элементов должна быть сформирована с помощью метода
 [SaveToXml](ISearchEngineServiceBase.SaveToXml.htm).


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 «С» файла с наименованием «SearchEngine.xml». В файле должны быть сохранены
 параметры работы поискового сервиса. Подключите системные сборки BISearch,
 Metabase, XML.


			Sub UserProc;

Var

    MB: IMetabase;

    SearchFactory: ISearchEngineServiceFactory;

    SearchEngine: ISearchEngineServiceBase;

    XMLDoc: IXMLDOMDocument3;

Begin

    MB := MetabaseClass.Active;

    SearchFactory := New SearchEngineServiceFactory.Create;

    SearchEngine := SearchFactory.CreateSearchEngine(MB);

    //Загрузка настроек из XML-файла

    XMLDoc := New DOMDocument60.Create;

    XMLDoc.load("c:\SearchEngine.xml");

    SearchEngine.LoadFromXml(XMLDoc.documentElement);

    //...

    //Работа с поисковой платформой

    //...

End Sub UserProc;


При выполнении примера будет создан объект, предоставляющий доступ к
 поисковому сервису. Настройки объекта будут загружены из указанного файла.


См. также:


[ISearchEngineServiceBase](ISearchEngineServiceBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
