# ITabTableStyles.SaveToXml

ITabTableStyles.SaveToXml
-


# ITabTableStyles.SaveToXml


## Синтаксис


SaveToXml: String;


## Описание


Метод SaveToXml сохраняет стили
 оформления таблицы в строку формата XML.


## Комментарии


Для загрузки стилей оформления таблицы из строки в формате XML используйте
 метод [ITabTableStyles.LoadFromXml](ITabTableStyles.LoadFromXml.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчета с идентификатором «REG_REPORT_TAB», содержащего стили таблицы.


Добавьте ссылки на системные сборки: Metabase, Report, Tab, Xml.


			Sub UserProc;

Var

    mb: IMetabase;

    Report: IPrxReport;

    Tab: ITabSheet;

    Style: ITabTableStyles;

    StyleXml: String;

    XML: FreeThreadedDOMDocument60;

Begin

    mb := MetabaseClass.Active;

    // Получаем регламентный отчет

    Report := mb.ItemById("REG_REPORT_TAB").Bind As IPrxReport;

    // Получаем стили таблицы

    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

    Style := Tab.TableStyles;

    // Сохраняем стили таблицы в файл формата XML

    StyleXml := Style.SaveToXml;

    XML := New FreeThreadedDOMDocument60.Create;

    XML.loadXML(StyleXml);

    XML.save("C:\TableStyles.xml");

End Sub UserProc;


В результате выполнения примера стили таблицы с активного листа отчета
 будут выгружены в файл «C:\TableStyles.xml» в формате XML.


См. также:


[ITabTableStyles](ITabTableStyles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
