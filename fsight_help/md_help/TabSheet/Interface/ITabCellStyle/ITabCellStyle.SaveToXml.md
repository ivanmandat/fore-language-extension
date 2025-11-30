# ITabCellStyle.SaveToXml

ITabCellStyle.SaveToXml
-


# ITabCellStyle.SaveToXml


## Синтаксис


SaveToXml: String;


## Описание


Метод SaveToXml сохраняет стиль
 ячейки таблицы в строку формата XML.


## Комментарии


Для загрузки стиля ячейки таблицы из строки в формате XML используйте
 метод [ITabCellStyle.LoadFromXml](ITabCellStyle.LoadFromXml.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчета с идентификатором «REG_REPORT_TAB».


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

    // Получаем регламентный отчет

    Report := mb.ItemById("REG_REPORT_TAB").Bind As IPrxReport;

    // Получаем стиль ячейки

    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

    Range := Tab.Cell(0, 0);

    Style := Range.Style;

    // Сохраняем стиль ячейки в файл формата XML

    StyleXml := Style.SaveToXml;

    XML := New FreeThreadedDOMDocument60.Create;

    XML.loadXML(StyleXml);

    XML.save("C:\Style.xml");

End Sub UserProc;


В результате выполнения примера стиль первой ячейки на активном листе
 отчета будет выгружен в файл «C:\Style.xml» в формате XML.


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
