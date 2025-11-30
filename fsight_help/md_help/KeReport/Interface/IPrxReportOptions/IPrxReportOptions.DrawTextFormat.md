# IPrxReportOptions.DrawTextFormat

IPrxReportOptions.DrawTextFormat
-


# IPrxReportOptions.DrawTextFormat


## Синтаксис


DrawTextFormat: [GxDrawTextFormat](ModDrawing.chm::/Enums/GxDrawTextFormat.htm);


## Описание


Свойство DrawTextFormat определяет
 режим отрисовки текста в листах отчета, автофигурах отчета и диаграммах
 отчета.


## Комментарии


По умолчанию свойству установлено значение Default_,
 при этом используется редактор GDI+.


Информация о работе с WPF-редактором представлена в статье «[Использование
 форматированного текста](KnowledgeBase.chm::/01_Fore/knowledgebase_kb000034.htm)».


## Пример


Для выполнения примера добавьте ссылки на системные сборки «Metabase»,
 «Drawing» и «Report». В репозитории должен быть регламентный отчет с идентификатором
 «Report».


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Options: IPrxReportOptions;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("Report").Edit As IPrxReport;

    Options := Report.Options;

    Options.DrawTextFormat := GxDrawTextFormat.Wpf;

    Report.MetabaseObject.Save;

End Sub UserProc;


После выполнения примера у регламентного отчета с идентификатором «Report»
 будет изменен режим отрисовки текста.


См. также:


[IPrxReportOptions](IPrxReportOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
