# IEaxAnalyzeCore.SaveSettingsToXml

IEaxAnalyzeCore.SaveSettingsToXml
-


# IEaxAnalyzeCore.SaveSettingsToXml


## Синтаксис


SaveSettingsToXml(Element: [IXmlDomElement](ModXml.chm::/develop.htm);
 Options: [EaxSaveSettings](../../Enums/EaxSaveSettings.htm));


## Параметры


Element. Объект, в который
 будут сохранены параметры экспресс-отчёта;


Options. Параметры сохранения
 визуализаторов экспресс-отчёта.


## Описание


Метод SaveSettingsToXml
 выгружает параметры экспресс-отчёта в формате xml.


## Комментарии


Для загрузки параметров экспресс-отчета из xml используйте метод [IEaxAnalyzeCore.LoadSettingsFromXml](IEaxAnalyzeCore.LoadSettingsFromXml.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором OLAP.


Добавьте ссылки на системные сборки: Express, Metabase, Xml.


	Sub UserProc;

	Var

	    mb: Imetabase;

	    Eax: IEaxAnalyzer;

	    XmlDoc: IXmlDomDocument3;

	    el: IXmlDomElement;

	Begin

	    mb := MetabaseClass.Active;

	    // Создадим xml-документ

	    XmlDoc := New FreeThreadedDOMDocument60.Create;

	    el := XmlDoc.createElement("Root");

	    XmlDoc.appendChild(el);

	    // Получим экспресс-отчёт

	    Eax := mb.ItemById("OLAP").Bind As IEaxAnalyzer;

	    // Выгрузим настройки экспресс-отчёта в xml-документ

	    Eax.SaveSettingsToXml(el, EaxSaveSettings.Grid);

	    // Сохраним xml-документ

	    XmlDoc.save("C:\OlapSettings.xml");

	End Sub UserProc;


Результат выполнения примера: настройки таблицы экспресс-отчёта сохранены
 в формате xml в файл C:\OlapSettings.xml.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
