# Получение таблицы

Получение таблицы
-


# Получение таблицы


Для работы с таблицей данных предназначен интерфейс [ITabSheet](Hierarchy/Table.htm).


В данном разделе приведены различные способы получения таблицы:


	- [из регламентного отчета](Get_Table.htm#report);


	- [из экспресс-отчета](Get_Table.htm#olap);


	- [с помощью компонента TabSheetBox](Get_Table.htm#tabsheetbox). Источником данных
	 для компонента могут быть:


		- [экспресс-отчет](Get_Table.htm#tabsheetbox_olap);


		- [регламентный
		 отчет](Get_Table.htm#tabsheetbox_report);


		- [таблица, не привязанная
		 к репозиторию](Get_Table.htm#tabsheetbox_table).


## Получение таблицы из регламентного отчета


Приведен пример получения таблицы из регламентного отчета с идентификатором
 «REPORT_TAB».


### Пример


Для выполнения примера добавьте ссылки на системные сборки: Metabase,
 Report, Tab.


	Sub GetTable;

	Var

	    mb: IMetabase;

	    Report: IPrxReport;

	    Table: ITabSheet;

	Begin

	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Получаем регламентный отчет

	    Report := mb.ItemById("REPORT_TAB").Bind As IPrxReport;

	    // Получаем таблицу

	    Table := (Report.ActiveSheet As IPrxTable).TabSheet;

	End Sub GetTable;


## Получение таблицы из экспресс-отчета


Приведен пример получения таблицы из экспресс-отчета с идентификатором
 «OLAP_TAB».


### Пример


Для выполнения примера добавьте ссылки на системные сборки: Express,
 Metabase, Tab.


	Sub GetTable;

	Var

	    mb: IMetabase;

	    Report: IEaxAnalyzer;

	    Table: ITabSheet;

	Begin

	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Получаем экспресс-отчет

	    Report := mb.ItemById("OLAP_TAB").Bind As IEaxAnalyzer;

	    // Получаем таблицу

	    Table := Report.Grid.TabSheet;

	End Sub GetTable;


## Получение таблицы с помощью компонента TabSheetBox


Приведен пример получения таблицы с помощью компонента [TabSheetBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/TabSheetBox.htm).


### Источник данных - экспресс-отчет


Для выполнения примера предполагается наличие формы, содержащей компоненты
 [TabSheetBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/TabSheetBox.htm) с
 идентификатором «TabSheetBox1» и [UiErAnalyzer](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiErAnalyzer.htm) с идентификатором
 «UiErAnalyzer1». В репозитории предполагается наличие экспресс-отчета
 «OLAP_TAB».


Добавьте ссылку на системную сборку Metabase.


#### Пример


	Sub GetTable;

	Var

	    mb: IMetabase;

	    Table: ITabSheet;

	Begin

	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Указываем экспресс-отчет в качестве источника данных для UiErAnalyzer1

	    UiErAnalyzer1.Object := mb.ItemById("OLAP_TAB");

	    // Указываем UiErAnalyzer1 в качестве источника данных для TabSheetBox1

	    TabSheetBox1.Source := UiErAnalyzer1 As ITabSheetSource;

	    // Активируем UiErAnalyzer1

	    UiErAnalyzer1.Active := True;

	    // Получаем таблицу

	    Table := TabSheetBox1.Source.GetTabSheet;

	End Sub GetTable;


### Источник данных - регламентный отчет


Для выполнения примера предполагается наличие формы, содержащей компоненты
 [TabSheetBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/TabSheetBox.htm) с
 идентификатором «TabSheetBox1» и [UIReport](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiReport.htm) с идентификатором
 «UiReport1». В репозитории предполагается наличие регламентного отчета
 с идентификатором «REPORT_TAB».


#### Пример


Добавьте ссылку на системную сборку Metabase.


	Sub GetTable;

	Var

	    mb: IMetabase;

	    Table: ITabSheet;

	Begin

	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Указываем регламентный отчет в качестве источника данных для UiReport1

	    UiReport1.Object := mb.ItemById("REPORT_TAB");

	    // Указываем UiReport1 в качестве источника данных для TabSheetBox1

	    TabSheetBox1.Source := UiReport1 As ITabSheetSource;

	    // Активируем UiReport1

	    UiReport1.Active := True;

	    // Получаем таблицу

	    Table := TabSheetBox1.Source.GetTabSheet;

	End Sub GetTable;


### Источник данных - таблица, не привязанная
 к репозиторию


Компонент [UiTabSheet](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiTabSheet.htm)
 позволяет создавать таблицы, не привязанные к источникам данных из репозитория.


Для выполнения примера предполагается наличие формы, содержащей компоненты
 [TabSheetBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/TabSheetBox.htm) с
 идентификатором «TabSheetBox1» и [UiTabSheet](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiTabSheet.htm) с
 идентификатором «UiTabSheet1».


#### Пример


Добавьте ссылку на системную сборку Metabase.


	Sub GetTable;

	Var

	    mb: IMetabase;

	    Table: ITabSheet;

	Begin

	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Указываем UiTabSheet1 в качестве источника данных для TabSheetBox1

	    TabSheetBox1.Source := UiTabSheet1 As ITabSheetSource;

	    // Получаем таблицу

	    Table := TabSheetBox1.Source.GetTabSheet;

	End Sub GetTable;


См. также:


[Общие принципы программирования
 с использованием сборки Tab](Programming_principles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
