# IExporter.CSSClassName

IExporter.CSSClassName
-


# IExporter.CSSClassName


## Синтаксис


CSSClassName: String;


## Описание


Свойство CSSClassName определяет
 префикс для элементов таблицы стилей HTML.


## Комментарии


По умолчанию префикс отсутствует. Использование префикса позволяет избежать
 дублирования названий стилей при экспорте отчета, если страницы отчета
 содержат свои собственные стили.


## Пример


В рассматриваемом примере предполагается существование объекта Report
 типа IPrxReport. Модуль должен содержать ссылки на системные сборки :
 Report, Tab, Drawing.


			Sub UserProc;

Var

    Report: IPrxReport;

    Tab: ITabSheet;

    Exp: ITabSheetExporter;

Begin

    Tab := (Report.Sheets.Item(0) As IPrxTable).TabSheet;

    Exp := New TabSheetExporter.Create;

    Exp.TabSheet := Tab;

    Exp.CSSClassName := "someprefix";

    Exp.ExportToFile("c:\Отчет.html", "html");

End Sub UserProc;


После выполнения примера будет произведен экспорт страницы отчета. К
 именам классов html-стилей будет добавлен указанный префикс. Например,
 вместо «c_1» будет - «somedprefixc_1».


См. также:


[IExporter](IExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
