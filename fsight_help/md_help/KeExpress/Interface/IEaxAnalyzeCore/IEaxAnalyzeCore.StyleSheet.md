# IEaxAnalyzeCore.StyleSheet

IEaxAnalyzeCore.StyleSheet
-


# IEaxAnalyzeCore.StyleSheet


## Синтаксис


StyleSheet: [IStyleSheet](ModDrawing.chm::/Interface/IStyleSheet/IStyleSheet.htm);


## Описание


Свойство StyleSheet определяет
 внешнюю таблицу стилей, используемую экспресс-отчетом.


## Комментарии


Для работы с внутренней таблицей стилей используйте свойство [IEaxAnalyzeCore.InnerStyleSheet](IEaxAnalyzeCore.InnerStyleSheet.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором EXPRESS_STYLE и таблицы стилей с идентификатором STYLE_TB.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Report: IEaxAnalyzer;

	    Style: IStyleSheet;

	Begin

	    mb := MetabaseClass.Active;

	    Report := mb.ItemById("EXPRESS_STYLE").Edit As IEaxAnalyzer;

	    Style := mb.ItemById("STYLE_TB").Bind As IStyleSheet;

	    Report.StyleSheet := Style;

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера к отчету EXPRESS_STYLE будет подключена
 внешняя таблица стилей STYLE_TB.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
