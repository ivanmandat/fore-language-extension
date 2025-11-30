# IPrxReport.StyleSheet

IPrxReport.StyleSheet
-


# IPrxReport.StyleSheet


## Синтаксис


StyleSheet: [IStyleSheet](ModDrawing.chm::/Interface/IStyleSheet/IStyleSheet.htm);


## Описание


Свойство StyleSheet определяет
 таблицу стилей, стили которой будут использоваться для оформления ячеек
 таблиц регламентного отчета.


## Пример


Рассмотрим пример подключения таблицы стилей к регламентному отчёту.


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT_GLOBALSTYLE и таблицы стилей с идентификатором
 GLOBAL_STYLE.


Добавьте ссылки на системные сборки: Drawing, Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Report: IPrxReport;

	    StyleSheet: IStyleSheet;

	Begin

	    // Откроем регламентный отчёт на редактирование

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("REPORT_GLOBALSTYLE").Edit;

	    Report := MObj As IPrxReport;

	    // Добавим таблицу стилей для отчёта

	    StyleSheet := MB.ItemById("GLOBAL_STYLE").Bind As IStyleSheet;

	    Report.StyleSheet := StyleSheet;

	    // Сохраним отчёт

	    MObj.Save;

	End Sub UserProc;


В результате выполнения примера для регламентного отчёта с идентификатором
 REPORT_GLOBALSTYLE в качестве набора стилей оформления будет назначена
 таблица стилей с идентификатором GLOBAL_STYLE.


Рассмотрим пример применения стиля из таблицы стилей, уже подключённой
 к регламентному отчёту.


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT_GLOBALSTYLE с подключённой к нему таблицей
 стилей. В таблице стилей должно содержаться несколько стилей ячеек.


Добавьте ссылки на системные сборки: Drawing, Metabase, Report, Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Report: IPrxReport;

	    ContainerCollection: IStyleContainerCollection;

	    StyleContainer: IStyleContainer;

	    StyledEntity: IStyledEntity;

	    StyleSheet: IStyleSheet;

	    TabSheet: ITabSheet;

	    TabStyle: ITabCellStyle;

	Begin

	    // Откроем регламентный отчёт на редактирование

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("REPORT_GLOBALSTYLE").Edit;

	    Report := MObj As IPrxReport;

	    // Получим таблицу открытого листа отчёта

	    TabSheet := (Report.ActiveSheet As IPrxTable).TabSheet;

	    // Получим таблицу стилей отчёта

	    StyleSheet := Report.StyleSheet;

	    // Выполним поиск контейнеров, содержащих стили для ячеек таблицы

	    ContainerCollection := StyleSheet.FindByTag("TAB");

	    // Выберем второй контейнер среди найденных

	    StyleContainer := ContainerCollection.Item(1);

	    // Применим к диапазону ячеек A0:K10 выбранный стиль

	    TabStyle := New TabCellStyle.Create;

	    StyledEntity := TabStyle As IStyledEntity;

	    StyledEntity.LoadStyleFromContainer(StyleContainer);

	    TabSheet.Cells(0,0,10,10).Style := TabStyle;

	    // Сохраним отчёт

	    MObj.Save;

	End Sub UserProc;


В результате выполнения примера в регламентном отчёте с идентификатором
 REPORT_GLOBALSTYLE для диапазона ячеек A0:K10 будет применён второй стиль
 из таблицы стилей.


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
