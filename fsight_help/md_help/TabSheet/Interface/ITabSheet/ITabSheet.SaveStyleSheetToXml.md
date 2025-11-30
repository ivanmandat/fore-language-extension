# ITabSheet.SaveStyleSheetToXml

ITabSheet.SaveStyleSheetToXml
-


# ITabSheet.SaveStyleSheetToXml


## Синтаксис


SaveStyleSheetToXml(pStyleSheet: [IStyleSheet](ModDrawing.chm::/Interface/IStyleSheet/IStyleSheet.htm)):
 String;


## Параметры


pStyleSheet. Коллекция стилей
 оформления таблицы, которую нужно сохранить.


## Описание


Метод SaveStyleSheetToXml сохраняет
 коллекцию стилей оформления таблицы в строку формата XML.


## Комментарии


Для загрузки коллекции стилей оформления таблицы из строки в формате
 XML используйте метод [ITabSheet.LoadStyleSheetFromXml](ITabSheet.LoadStyleSheetFromXml.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчета с идентификатором «REG_REPORT_TAB», содержащего подключенные внешние
 стили.


Добавьте ссылки на системные сборки: Drawing, Metabase, Report, Tab,
 Xml.


			Sub UserProc;

Var

    mb: IMetabase;

    Report: IPrxReport;

    Tab: ITabSheet;

    Style: IStyleSheet;

    StyleXml: String;

    XML: FreeThreadedDOMDocument60;

Begin

    mb := MetabaseClass.Active;

    // Получаем регламентный отчет

    Report := mb.ItemById("REG_REPORT_TAB").Bind As IPrxReport;

    // Получаем коллекцию стилей таблицы

    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

    Style := Tab.StyleSheet;

    // Сохраняем коллекцию стилей таблицы в файл формата XML

    StyleXml := Tab.SaveStyleSheetToXml(Style);

    XML := New FreeThreadedDOMDocument60.Create;

    XML.loadXML(StyleXml);

    XML.save("C:\StyleSheet.xml");

End Sub UserProc;


В результате выполнения примера коллекция стилей таблицы с активного
 листа отчета будет выгружена в файл «C:\StyleSheet.xml» в формате XML.


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
