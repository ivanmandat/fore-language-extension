# ITabSheet.LoadStyleSheetFromXml

ITabSheet.LoadStyleSheetFromXml
-


# ITabSheet.LoadStyleSheetFromXml


## Синтаксис


LoadStyleSheetFromXml(pStyleSheet: [IStyleSheet](ModDrawing.chm::/Interface/IStyleSheet/IStyleSheet.htm),
 Xml: String);


## Параметры


pStyleSheet. Коллекция стилей
 оформления таблицы, которую нужно загрузить;


Xml. Строка в формате XML,
 содержащая описание коллекции стилей таблицы.


## Описание


Метод LoadStyleSheetFromXml
 загружает коллекцию стилей таблицы из строки в формате XML.


## Комментарии


Для сохранения стилей таблицы в строку формата XML используйте метод
 [ITabSheet.SaveStyleSheetToXml](ITabSheet.SaveStyleSheetToXml.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчета с идентификатором «REG_REPORT_TAB», содержащего подключенные внешние
 стили. В файловой системе должен быть файл «C:\StyleSheet.xml», содержащий
 стили таблицы в формате XML.


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

    // Получаем коллекцию стилей таблицы из файла формата XML

    XML := New FreeThreadedDOMDocument60.Create;

    XML.load("C:\StyleSheet.xml");

    StyleXml := XML.xml;

    // Получаем регламентный отчет

    Report := mb.ItemById("REG_REPORT_TAB").Edit As IPrxReport;

    // Получаем коллекцию стилей таблицы

    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

    Style := (Tab.StyleSheet As IMetabaseObject).Edit As IStyleSheet;

    // Загружаем полученные стили

    Tab.LoadStyleSheetFromXml(Style, StyleXml);

    // Сохраняем изменения

    (Report As IMetabaseObject).Save;

    (Style As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера коллекция стилей таблицы для активного
 листа отчета будет загружена из файла «C:\TableStyles.xml».


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
