# Введение: Сборка Dt

Введение: Сборка Dt
-


# Введение в сборку Dt


Основные интерфейсы источников данных:


	- [IDtAccessProvider](Interface/IDtAccessProvider/IDtAccessProvider.htm)
	 - интерфейс содержит свойства и методы источника данных - [Импорт
	 из Access](UiETL.chm::/Desktop/03_ETLObjects/02_Inputs/UIetl_Inputs_Access.htm).


	- [IDtDbaseProvider](Interface/IDtDbaseProvider/IDtDbaseProvider.htm)
	 - интерфейс содержит свойства и методы источника данных - [Импорт
	 из Dbase](UiETL.chm::/Desktop/03_ETLObjects/02_Inputs/uietl_inputs_dbase.htm).


	- [IDtExcelProvider](Interface/IDtExcelProvider/IDtExcelProvider.htm)
	 - интерфейс содержит свойства и методы источника данных - [Импорт
	 из Excel](UiETL.chm::/Desktop/03_ETLObjects/02_Inputs/UiEtl_Inputs_Excel.htm).


	- [IDtMetabaseProvider](Interface/IDtMetabaseProvider/IDtMetabaseProvider.htm)
	 - интерфейс содержит свойства и методы источника данных - [Источник
	 репозитория](UiETL.chm::/Desktop/03_ETLObjects/02_Inputs/UiEtl_Inputs_Repo.htm).


	- [IDtOleDbProvider](Interface/IDtOleDbProvider/IDtOleDbProvider.htm)
	 - интерфейс содержит свойства и методы источника данных - [Импорт
	 из OleDb](UiETL.chm::/Desktop/03_ETLObjects/02_Inputs/UiEtl_Inputs_OleDB.htm).


	- [IDtParadoxProvider](Interface/IDtParadoxProvider/IDtParadoxProvider.htm)
	 - интерфейс содержит свойства и методы источника данных - [Импорт
	 из Paradox](UiETL.chm::/Desktop/03_ETLObjects/02_Inputs/UiEtl_Inputs_Paradox.htm).


	- [IDtTextProvider](Interface/IDtTextProvider/IDtTextProvider.htm)
	 - интерфейс содержит свойства и методы источника данных - [Импорт
	 из текста](UiETL.chm::/Desktop/03_ETLObjects/02_Inputs/UiEtl_Inputs_Text.htm).


	- [IDtUserProvider](Interface/IDtUserProvider/IDtUserProvider.htm)
	 - интерфейс содержит свойства и методы источника данных - [Источник пользователя](UiETL.chm::/Desktop/03_ETLObjects/02_Inputs/Uietl_Inputs_User.htm).


	- [IDtUserProviderEx](Interface/IDtUserProviderEx/IDtUserProviderEx.htm)
	 - интерфейс содержит свойства и методы для получения данных с помощью
	 пользовательского алгоритма.


	- [IDtVfpProvider](Interface/IDtVfpProvider/IDtVfpProvider.htm)
	 - интерфейс содержит свойства и методы источника данных - [Импорт
	 из Visual Foxpro](UiETL.chm::/Desktop/03_ETLObjects/02_Inputs/UiEtl_Inputs_VisualFoxPro.htm).


	- [IDtWebProvider](Interface/IDtWebProvider/IDtWebProvider.htm)
	 - интерфейс содержит свойства и методы источника данных - [Импорт
	 из Web](UiETL.chm::/Desktop/03_ETLObjects/02_Inputs/UiEtl_Inputs_Web.htm).


	- [IDtXmlProvider](Interface/IDtXmlProvider/IDtXmlProvider.htm)
	 - интерфейс содержит свойства и методы источника данных - [Импорт
	 из XML](UiETL.chm::/Desktop/03_ETLObjects/02_Inputs/UiEtl_Inputs_XML.htm).


Основные интерфейсы приёмников данных:


	- [IDtAccessConsumer](Interface/IDtAccessConsumer/IDtAccessConsumer.htm)
	 - интерфейс содержит свойства и методы приёмника данных - [Экспорт
	 в Access](UiETL.chm::/Desktop/03_ETLObjects/03_Outputs/Access/UiEtl_Outputs_Access.htm).


	- [IDtDbaseConsumer](Interface/IDtDbaseConsumer/IDtDbaseConsumer.htm)
	 - интерфейс содержит свойства и методы приёмника данных - [Экспорт
	 в Dbase](UiETL.chm::/Desktop/03_ETLObjects/03_Outputs/Dbase/UiEtl_outputs_Dbase.htm).


	- [IDtExcelConsumer](Interface/IDtExcelConsumer/IDtExcelConsumer.htm)
	 - интерфейс содержит свойства и методы приёмника данных - [Экспорт
	 в Excel](UiETL.chm::/Desktop/03_ETLObjects/03_Outputs/Excel/UiEtl_Outputs_Excel.htm).


	- [IDtMetabaseConsumer](Interface/IDtMetabaseConsumer/IDtMetabaseConsumer.htm)
	 - интерфейс содержит свойства и методы приёмника данных - [Приёмник
	 репозитория](UiETL.chm::/Desktop/03_ETLObjects/03_Outputs/Repositoriy/UiEtl_Outputs_Repo.htm).


	- [IDtOleDbConsumer](Interface/IDtOleDbConsumer/IDtOleDbConsumer.htm)
	 - интерфейс содержит свойства и методы приёмника данных - [Экспорт
	 через OleDb](UiETL.chm::/Desktop/03_ETLObjects/03_Outputs/OleDB/UiEtl_Outputs_OleDB.htm).


	- [IDtSqlCommandConsumer](Interface/IDtSqlCommandConsumer/IDtSqlCommandConsumer.htm)
	 - интерфейс содержит свойства и методы преобразователя данных - [Команда
	 СУБД](UiETL.chm::/Desktop/03_ETLObjects/Other/DB_command.htm).


	- [IDtTextConsumer](Interface/IDtTextConsumer/IDtTextConsumer.htm)
	 - интерфейс содержит свойства и методы приёмника данных - [Экспорт
	 в текст](UiETL.chm::/Desktop/03_ETLObjects/03_Outputs/Text/UiEtl_Outputs_Text.htm).


	- [IDtUserConsumer](Interface/IDtUserConsumer/IDtUserConsumer.htm)
	 - интерфейс содержит свойства и методы приёмника данных - [Приёмник
	 пользователя](UiETL.chm::/Desktop/03_ETLObjects/03_Outputs/user/UiEtl_Outputs_User.htm).


	- [IDtUserConsumerEx](Interface/IDtUserConsumerEx/IDtUserConsumerEx.htm)
	 - интерфейс содержит свойства и методы для выгрузки данных с помощью
	 пользовательского алгоритма.


	- [IDtVfpConsumer](Interface/IDtVfpConsumer/IDtVfpConsumer.htm)
	 - интерфейс содержит свойства и методы приёмника данных - [Экспорт
	 в Visual Foxpro](UiETL.chm::/Desktop/03_ETLObjects/03_Outputs/Visual_FoxPro/UiEtl_Outputs_VisualFoxPro.htm).


	- [IDtXmlConsumer](Interface/IDtXmlConsumer/IDtXmlConsumer.htm)
	 - интерфейс содержит свойства и методы приёмника данных - [Экспорт
	 в XML](UiETL.chm::/Desktop/03_ETLObjects/03_Outputs/XML/UiEtl_outputs_XML.htm).


См. также:


[Интерфейсы сборки Dt](Interface/KeDt_Interface.htm)
 | [Перечисления
 сборки Dt](Enums/KeDt_Enums.htm) | [Классы сборки Dt](Class/KeDt_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
