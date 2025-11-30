# ITabTableStyles.LoadFromXml

ITabTableStyles.LoadFromXml
-


# ITabTableStyles.LoadFromXml


## Синтаксис


LoadFromXml(Xml: String);


## Параметры


Xml. Строка в формате XML,
 содержащая описание стилей таблицы.


## Описание


Метод LoadFromXml загружает
 стили таблицы из строки в формате XML.


## Комментарии


Для сохранения стилей таблицы в строку формата XML используйте метод
 [ITabTableStyles.SaveToXml](ITabTableStyles.SaveToXml.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчета с идентификатором «REG_REPORT_TAB», содержащего стили таблицы.
 В файловой системе должен быть файл «C:\TableStyles.xml», содержащий стили
 таблицы в формате XML.


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

    // Получаем стили таблицы из файла формата XML

    XML := New FreeThreadedDOMDocument60.Create;

    XML.load("C:\TableStyles.xml");

    StyleXml := XML.xml;

    // Получаем регламентный отчет

    Report := mb.ItemById("REG_REPORT_TAB").Edit As IPrxReport;

    // Получаем стили таблицы

    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

    Style := Tab.TableStyles;

    // Загружаем полученные стили

    Style.LoadFromXml(StyleXml);

    // Сохраняем изменения

    (Report As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера стили таблицы для активного листа отчета
 будут загружены из файла «C:\TableStyles.xml».


См. также:


[ITabTableStyles](ITabTableStyles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
