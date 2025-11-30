# ITabCellStyle.LoadFromXml

ITabCellStyle.LoadFromXml
-


# ITabCellStyle.LoadFromXml


## Синтаксис


LoadFromXml(Xml: String);


## Параметры


Xml. Строка в формате XML,
 содержащая описание стиля ячейки.


## Описание


Метод LoadFromXml загружает
 стиль ячейки из строки в формате XML.


## Комментарии


Для сохранения стиля ячейки в строку формата XML используйте метод [ITabCellStyle.SaveToXml](ITabCellStyle.SaveToXml.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчета с идентификатором «REG_REPORT_TAB». В файловой системе должен быть
 файл «C:\Style.xml», содержащий стиль ячейки в формате XML.


Добавьте ссылки на системные сборки: Metabase, Report, Tab, Xml.


			Sub UserProc;

Var

    mb: IMetabase;

    Report: IPrxReport;

    Tab: ITabSheet;

    Range: ITabRange;

    Style: ITabCellStyle;

    StyleXml: String;

    XML: FreeThreadedDOMDocument60;

Begin

    mb := MetabaseClass.Active;

    // Получаем стиль ячейки из файла формата XML

    XML := New FreeThreadedDOMDocument60.Create;

    XML.load("C:\Style.xml");

    StyleXml := XML.xml;

    // Получаем регламентный отчет

    Report := mb.ItemById("REG_REPORT_TAB").Edit As IPrxReport;

    // Получаем стиль ячейки

    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

    Range := Tab.Cell(0, 0);

    Style := Range.Style;

    // Загружаем полученный стиль

    Style.LoadFromXml(StyleXml);

    // Сохраняем изменения

    (Report As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера стиль для первой ячейки на активном
 листе отчета будет загружен из файла «C:\Style.xml».


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
