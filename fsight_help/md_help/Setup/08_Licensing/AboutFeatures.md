# О единицах лицензирования продукта

О единицах лицензирования продукта
-


# О единицах лицензирования продукта «Форсайт. Аналитическая платформа»


Термин «Единица лицензирования»
 используется, чтобы идентифицировать инструмент или функциональность продукта
 «Форсайт. Аналитическая платформа»,
 которые лицензируются.


Для работы с «Форсайт. Аналитическая платформа»
 требуются валидные лицензии. При отсутствии валидной лицензии недоступен
 вызов операций для соответствующего инструмента продукта «Форсайт. Аналитическая платформа»
 в настольном приложении и в веб-приложении.


Некоторые инструменты продукта «Форсайт. Аналитическая платформа»
 содержат операции, для выполнения которых требуются лицензии других инструментов:
 из функциональности инструмента А пользователь прямо или косвенно обращается
 к функциональности инструмента Б. Данное обращение проходит успешно, если
 у пользователя имеется валидная лицензия на функциональность инструмента
 Б, в противном случае появится [сообщение об ограничении
 лицензии](FAQ.chm::/Errors/LicenceErrors.htm#6_2). Например, в инструменте «[Аналитические
 панели](UIAdhoc.chm::/UiAdhoc_Purpose.htm)»
 при построении аналитической панели и подключении готового регламентного
 отчёта к нему проверяется наличие валидной лицензии «Отчёты».


В таблице приведено соответствие между единицами лицензирования и функциональностью
 продукта «Форсайт. Аналитическая платформа»:


		 Наименование единицы лицензирования
		 Описание единицы лицензирования
		 Дополнительные единицы лицензирования


		 AnalyticsPlatform
		 Форсайт. Аналитическая платформа.
		 Единица лицензирования позволяет устанавливать соединение с репозиторием,
		 а также разрешает работу с функциональностью следующих инструментов:


			- [навигатор
			 объектов](GetStarted.chm::/Interface/Interface_Navigator.htm);


			- [работа
			 со справочниками НСИ](UiNavObj.chm::/reference_book/Work/Work_Dictionary.htm#rds);


			- работа с расширением «[Конструктор бизнес-приложений](Constructor.chm::/Intro/Designer_business_applications.htm)»;


			- [рабочее
			 пространство](uiwsp.chm::/1_intro/uiwsp_intro.htm);


			- [менеджер
			 обновлений](updmanager.chm::/admin_updatetitle.htm);


			- [менеджер
			 репозитория](../05_RepoMngr/Setup_RepoMngr_Work_Main.htm).


		При запуске [менеджера
		 лицензий](RMS/Intro_LicenseManager.htm) проверяется наличие валидной единицы лицензирования
		 AnalyticsPlatform.


		Базовая единица лицензирования входит во все варианты поставки
		 продукта.


		 PP_DWDesigner
		 [Конструктор хранилища
		 данных](UiNavObj.chm::/DataWarehousing.htm). Единица лицензирования разрешает
		 [редактировать
		 измерения](UiSelection.chm::/Selection/Dimension_edit.htm) источников данных в инструментах
		 и открывать мастера следующих объектов:


			- [база
			 данных](UiNavObj.chm::/database/UiDb_database.htm);


			- [импорт
			 данных](UiNavObj.chm::/Data_import_wizard/Data_import_wizard.htm);


			- [все
			 виды кубов](UiNavObj.chm::/Cube/UiMd_Cube_Type.htm);


			- [все
			 виды справочников](UiNavObj.chm::/reference_book/Create.htm);


			- [каталог
			 ADOMD](UiNavObj.chm::/ADOMD/UiDb_relational_ADOMD.htm);


			- [таблица](UiNavObj.chm::/Table/UiDb_relational_table.htm);


			- [процедура](uinavobj.chm::/procedure/UiDb_relationa_procedure.htm);


			- [команда
			 СУБД](UiNavObj.chm::/CUBD/UiDb_relationa_CUBD.htm);


			- [база
			 данных временных рядов](UiNavObj.chm::/TimeSeriesDatabase/CreateTimeSeriesDatabase.htm);


			- [репозиторий
			 НСИ](UiNavObj.chm::/repository_RDS/RepositoryRDS.htm).


		 PP_Adm
		 Администрирование.
		 Единица лицензирования разрешает работу с функциональностью инструмента
		 «[Менеджер
		 безопасности](admin.chm::/admin_title.htm)».
		Примечание.
		 При входе в менеджер безопасности создается соединение с репозиторием,
		 поэтому одновременно с PP_Adm требуется одна конкурентная сессия
		 по единице AnalyticsPlatform.


		 PP_DashboardViewer
		 Аналитические панели. Просмотр.
		 Единица лицензирования разрешает работу с функциональностью инструмента
		 «[Аналитические
		 панели](uiadhoc.chm::/uiadhoc_purpose.htm)» в режиме просмотра готовых аналитических
		 панелей.
		 PP_OLAP

PP_ReportViewer

PP_TimeSeries

PP_Stat

PP_Modeling
		Примечание.
		 Дополнительная единица лицензирования PP_Modeling используется
		 для отображения [вычисляемых
		 элементов](UiAnalyticalArea.chm::/Work_with_dimensions/Edited_elements.htm) и [фильтрации
		 данных](UiAnalyticalArea.chm::/Working_with_table_data/Filtering.htm) по формуле.


		 PP_DashboardEditor
		 Аналитические панели. Редактирование.
		 Единица лицензирования разрешает работу с функциональностью инструмента
		 «[Аналитические
		 панели](uiadhoc.chm::/uiadhoc_purpose.htm)» в режиме создания и редактирования
		 аналитических панелей.
		 PP_OLAP

PP_ReportViewer

PP_TimeSeries

PP_Stat

PP_Modeling
		Примечание.
		 Дополнительная единица лицензирования PP_Modeling используется
		 при работе с таблицей для добавления [вычисляемых
		 элементов](UiAnalyticalArea.chm::/Work_with_dimensions/Edited_elements.htm) и настройки [фильтрации
		 данных](UiAnalyticalArea.chm::/Working_with_table_data/Filtering.htm) по формуле.


		 PP_ETL
		 ETL. Единица лицензирования
		 разрешает работу с функциональностью инструмента «[Задача
		 ETL](UiETL.chm::/desktop/01_General_Info/UiETL_General.htm)».


		 PP_OLAP
		 Аналитические запросы (OLAP).
		 Единица лицензирования разрешает работу с функциональностью инструмента
		 «[Аналитические
		 запросы (OLAP)](uiexpress.chm::/purpose/UiExpress_Purpose.htm)».
		 PP_Stat

PP_Modeling
		Примечание.
		 Дополнительная единица лицензирования PP_Modeling используется
		 при работе с таблицей для добавления [вычисляемых
		 элементов](UiAnalyticalArea.chm::/Work_with_dimensions/Edited_elements.htm) и настройки [фильтрации
		 данных](UiAnalyticalArea.chm::/Working_with_table_data/Filtering.htm) по формуле.


		 PP_ReportViewer
		 Отчётность. Просмотр.
		 Единица лицензирования разрешает работу с функциональностью инструмента
		 «[Отчеты](uireport.chm::/uireport_purpose.htm)»
		 и расширения «[Интерактивные
		 формы ввода данных](DataEntryForms.chm::/DataEntryForms_Purpose.htm)» в режиме просмотра.
		 PP_Stat

PP_Modeling
		Примечание.
		 Дополнительная единица лицензирования PP_Modeling используется:
		 для отображения [вычисляемых
		 элементов](UiAnalyticalArea.chm::/Work_with_dimensions/Edited_elements.htm) и [фильтрации
		 данных](UiAnalyticalArea.chm::/Working_with_table_data/Filtering.htm) по формуле; для расчёта алгоритма, подключённого
		 к форме ввода.


		 PP_ReportEditor
		 Отчётность. Редактирование.
		 Единица лицензирования разрешает работу с функциональностью инструмента
		 «[Отчеты](uireport.chm::/uireport_purpose.htm)»
		 и расширения «[Интерактивные
		 формы ввода данных](DataEntryForms.chm::/DataEntryForms_Purpose.htm)» в режиме редактирования.
		 PP_Stat

PP_Modeling
		Примечание.
		 Дополнительная единица лицензирования PP_Modeling используется:
		 при работе с таблицей для добавления [вычисляемых
		 элементов](UiAnalyticalArea.chm::/Work_with_dimensions/Edited_elements.htm) и настройки [фильтрации
		 данных](UiAnalyticalArea.chm::/Working_with_table_data/Filtering.htm) по формуле; для подключения и расчёта
		 алгоритма в форме ввода.


		 PP_TimeSeries
		 Анализ временных рядов.
		 Единица лицензирования разрешает работу с функциональностью инструмента
		 «[Анализ
		 временных рядов](uidw.chm::/UiDw_Title.htm)».
		 PP_Stat

PP_Modeling


		 PP_Modeling
		 Моделирование и прогнозирование.
		 Единица лицензирования разрешает работу с функциональностью инструмента
		 «[Моделирование
		 и прогнозирование](uimodelling.chm::/1_modelling/uimodelling_first.htm)» и расширения «[Алгоритмы
		 расчёта](CalculationAlgorithm.chm::/Purpose.htm)».
		 PP_Stat

PP_OLAP

PP_ReportEditor
		Примечание.
		 Дополнительные единицы лицензирования PP_OLAP и PP_ReportEditor
		 используется для [построения
		 алгоритма расчёта](CalculationAlgorithm.chm::/Web/Work/Construction_of_the_calculation_algorithm.htm).


		 PP_Scheduler
		 Планировщик задач.
		 Единица лицензирования разрешает работу с функциональностью инструмента
		 «[Планировщик
		 задач](uiappsrv.chm::/UiAppSrv_purpose.htm)» и расширения «[Управление
		 бизнес-процессами](BPM.chm::/Modeling_of_business_processes.htm)».
		Примечание.
		 При работе с планировщиком задач создается соединение с репозиторием,
		 поэтому одновременно с PP_Scheduler требуется одна конкурентная
		 сессия по единице AnalyticsPlatform. При выполнении бизнес-процессов
		 на сервере требуется несколько единиц лицензирования AnalyticsPlatform
		 в зависимости от заданного количества [исполнителей](BPM.chm::/Web/Process/Setting_planner.htm#server).


		 Для работы с расширением:


			- PP_ReportViewer;


			- PP_Modeling;


			- PP_ETL.


		 PP_SelfService
		 Информационная панель/Модель
		 данных. Единица лицензирования разрешает работу с функциональностью
		 инструмента «[Информационная
		 панель](dataanalysis.chm::/Dashboard.htm)» и [модели
		 данных](uidashboard.chm::/DataModel/create_data_model.htm).


		 PP_Stat
		 Статистика. Единица
		 лицензирования разрешает работу с функциональностью инструмента
		 «[Интеллектуальный
		 анализ данных](DataMining.chm::/DataMining_Intro.htm)» и с системными сборками
		 [Stat](statlib.chm::/statlibintroduction.htm)
		 и [MathFin](mathlib.chm::/interface/interfaces.htm).
		 Следующие интерфейсы и методы не требуют для работы данную единицу
		 лицензирования:


			- все методы [IStatistics](statlib.chm::/interface/istatistics/istatistics.htm)
			 (кроме [Forecast](statlib.chm::/interface/istatistics/istatistics.forecast.htm),
			 [LinEst](statlib.chm::/interface/istatistics/istatistics.linest.htm),
			 [LogEst](statlib.chm::/interface/istatistics/istatistics.logest.htm));


			- [ISmCensus2](statlib.chm::/interface/ismcensus2/ismcensus2.htm);


			- все методы обработки пропусков [IMissingData](statlib.chm::/interface/imissingdata/imissingdata.htm);


			- все методы [IFinance](mathlib.chm::/interface/ifinance/ifinance.htm)
			 (кроме [Irr](mathlib.chm::/interface/ifinance/ifinance.irr.htm),
			 [XIrr](mathlib.chm::/interface/ifinance/ifinance.mirr.htm),
			 [YieldF](mathlib.chm::/interface/ifinance/ifinance.yieldf.htm),
			 [RedemptionYield](MathLib.chm::/Interface/IFinance/IFinance.RedemptionYield.htm));


			- все методы [IMath](mathlib.chm::/interface/imath/imath.htm)
			 (кроме [MInverse](mathlib.chm::/interface/imath/imath.minverse.htm));


			- [ISmAutoCorrelation](statlib.chm::/interface/ismautocorrelation/ismautocorrelation.htm);


			- [ISmPairCorrelation](statlib.chm::/interface/ismpaircorrelation/ismpaircorrelation.htm).


		 PP_DevEnv
		 Среда разработки. Единица
		 лицензирования разрешает работу со [средой
		 разработки](uidevenv.chm::/01_development_environment/01_purpose_of_the_constructor/purpose_of_the_constructor.htm).
		 Выполнение некоторых операций из кода требует единицы лицензирования
		 на другие инструменты. Например, при выполнении из кода операции
		 редактирования экспресс-отчета проверяется валидная лицензия PP_OLAP.


		 PP_ExcelAddin
		 Excel Add-In. Единица
		 лицензирования разрешает работу с [надстройкой «Форсайт. Аналитическая платформа»
		 для Microsoft Excel](exceladdin.chm::/ExcelAddin_Purpose.htm).
		Примечание.
		 При работе с надстройкой создается соединение с репозиторием,
		 поэтому одновременно с PP_ExcelAddin требуется одна конкурентная
		 сессия по единице AnalyticsPlatform.


		 PP_OLAP

PP_TimeSeries

PP_Stat


		 PP_WordAddin
		 Word Add-In. Единица
		 лицензирования разрешает работу с [надстройкой «Форсайт. Аналитическая платформа»
		 для Microsoft Word](wordaddin.chm::/title.htm).
		Примечание.
		 При работе с надстройкой создается соединение с репозиторием,
		 поэтому одновременно с PP_WordAddin требуется одна конкурентная
		 сессия по единице AnalyticsPlatform.


		 PP_OLAP

PP_ReportViewer

PP_ReportEditor

PP_TimeSeries


		 PP_PowerPointAddin
		 PowerPoint Add-In.
		 Единица лицензирования разрешает работу с [надстройкой
		 «Форсайт. Аналитическая платформа»
		 для Microsoft PowerPoint](PowerPointAddin.chm::/PowerPointAddIn_Title.htm).
		Примечание.
		 При работе с надстройкой создается соединение с репозиторием,
		 поэтому одновременно с PP_PowerPointAddin требуется одна конкурентная
		 сессия по единице AnalyticsPlatform.


		 PP_OLAP

PP_ReportViewer

PP_ReportEditor

PP_TimeSeries


См. также:


[Активация продукта «Форсайт. Аналитическая платформа»](Admin_Licensing.htm)
 | [О типе и времени действия лицензии](Admin_Licensing_Variants.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
