# IEaxAnalyzeCore.LoadSettingsFromXml

IEaxAnalyzeCore.LoadSettingsFromXml
-


# IEaxAnalyzeCore.LoadSettingsFromXml


## Синтаксис


LoadSettingsFromXml(Element: [IXmlDomElement](ModXml.chm::/develop.htm));


## Параметры


Element. Объект в формате xml,
 из которого будут загружены параметры экспресс-отчёта.


## Описание


Метод LoadSettingsFromXml загружает
 параметры экспресс-отчёта из xml-документа.


## Комментарии


Для выгрузки параметров экспресс-отчета в xml используйте метод [IEaxAnalyzeCore.SaveSettingsToXml](IEaxAnalyzeCore.SaveSettingsToXml.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором OLAP. В файловой системе должен существовать файл C:\OlapSettings.xml,
 содержащий параметры экспресс-отчёта в формате xml.


Добавьте ссылки на системные сборки: Express, Metabase, Xml.


	Sub UserProc;

	Var

	    mb: Imetabase;

	    Eax: IEaxAnalyzer;

	    XmlDoc: IXmlDomDocument3;

	    el: IXmlDomElement;

	Begin

	    mb := MetabaseClass.Active;

	    // Получаем xml-документ

	    XmlDoc := New FreeThreadedDOMDocument60.Create;

	    XmlDoc.load("C:\OlapSettings.xml");

	    el := XmlDoc.selectSingleNode("Root") As IXmlDomElement;

	    // Получаем экспресс-отчёт

	    Eax := mb.ItemById("OLAP").Edit As IEaxAnalyzer;

	    // Загружаем настройки экспресс-отчёта из xml-документа

	    Eax.LoadSettingsFromXml(el);

	    // Сохраняем экспресс-отчёт

	    (Eax As IMetabaseObject).Save;

	End Sub UserProc;


Результат выполнения примера: параметры экспресс-отчёта загружены из
 файла C:\OlapSettings.xml.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
