# Ограничения при работе с BI-сервером на Linux

Ограничения при работе с BI-сервером на Linux
-


# Ограничения при работе с BI-сервером на Linux


При работе с BI-сервером, установленным на ОС Linux, существуют следующие
 ограничения:


	- Доменная и интегрированная доменная аутентификация, а также
	 работа по подключению доменных пользователей из Active Directory,
	 доступны только если репозиторий создан на базе СУБД Oracle или PostgreSQL.
	 Также потребуется [дополнительная
	 настройка](../Authentication/Domain_Authentication_Apache.htm). Интегрированная доменная аутентификация доступна только
	 для СУБД PostgreSQL.


	- Доступно подключение к репозиториям, созданным на базе любых
	 [поддерживаемых СУБД](../../01_SysReq/database_Support.htm).
	 С помощью драйвера WEB Service можно подключиться к СУБД через веб-сервис
	 BI-сервера. Если BI-сервер установлен на сервере под управлением ОС
	 Windows, то подключение доступно к любым [поддерживаемым
	 СУБД](../../01_SysReq/database_Support.htm). Подключение к репозиторию на базе СУБД Microsoft SQL Server
	 возможно с использованием ODBC драйвера после [дополнительной
	 настройки](https://learn.microsoft.com/ru-ru/sql/connect/odbc/microsoft-odbc-driver-for-sql-server?view=sql-server-ver16).


	- Не поддерживается работа с каталогом ADOMD.


	- Не поддерживаются методы моделирования и статистики, использующие
	 анализ X11, X12-ARIMA. TRAMO/SEATS и методы пакета R будут доступны,
	 если осуществлена [интеграция](UiNav.chm::/02_Navigator/CommonSettings/Integration.htm)
	 с ними.


	- Недоступен импорт данных из базы данных Microsoft Access (*.mdb).


	- При работе с [задачей
	 ETL](UiETL.chm::/Desktop/01_General_Info/UiETL_General.htm), а также при работе из Fore с источниками/приёмниками
	 [сборки
	 Dt](KeDt.chm::/KeDt_Introduction.htm), имеются следующие ограничения:


		- не поддерживаются источники/приёмники, работающее через
		 OLE DB (Access, FoxPro, Dbase, Paradox, OleDb), а также Microsoft
		 Excel (*.xlsx) при выборе драйвера отличного от ExcelEx. Данное
		 ограничение также распространяется:


			- при использовании в качестве источника/приёмника объекта
			 репозитория «Документ» - ограничение накладывается на исходный
			 файл;


			- при использовании объекта «Копирование данных» - ограничение
			 накладывается на его источник/приёмник;


		- для источника/приёмника репозитория поддерживаются только
		 те объекты репозитория (Таблицы, Представления, Запросы, Справочники
		 НСИ, Составные справочники НСИ), которые ссылаются на базу данных
		 с [поддерживаемой
		 СУБД](../../01_SysReq/database_Support.htm);


		- команда СУБД работает только для баз данных, настроенных
		 на [поддерживаемые
		 СУБД](../../01_SysReq/database_Support.htm);


		- не поддерживается работа с источником «[Веб-страница](UiETL.chm::/Desktop/03_ETLObjects/02_Inputs/UiEtl_Inputs_Web.htm)».


	- Работа с сообщениями электронной почты возможна с помощью ресурсов
	 [сборки
	 Net](ModNet.chm::/Interface/KeNet_Interface.htm)
	 только при использовании кроссплатформенных классов, имеющих в своем
	 наименовании префикс Curl*.


	- При работе с файлами и папками с помощью ресурсов [сборки IO](ModIo.chm::/Interface/ModIo_Interface.htm)
	 необходимо учитывать различия в файловых системах, которые используют
	 операционные системы Windows и Linux. Некоторые свойства/методы могут
	 не работать или работать некорректно.


	- Не поддерживается работа с визуальными [формами](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/DevEnv_Form.htm),
	 которые разрабатываются в настольном приложении, а также ресурсами,
	 которые предназначены для работы с визуальными [компонентами](UiDevEnv.chm::/01_Development_Environment/Development_environment_components.htm)
	 среды разработки (ресурсы сборок [Forms](ModForms.chm::/ModForms_Title.htm),
	 [ExtCtrls](KeExtCtrls.chm::/KeExtCtrls_Title.htm)
	 и других).


	- Не поддерживаются визуальные диалоги, реализуемые в [сборке Ui](UiLib.chm::/UiLib_Title.htm).


Также имеются следующие ограничения:


[![](../../Opened.gif)![](../../Closed.gif)Ограничение
 по используемым шрифтам](javascript:TextPopup(this))


	Для настройки оформления объектов репозитория, предназначенных в
	 дальнейшем для экспорта или печати, не рекомендуется использовать
	 шрифты, на которые компания Microsoft (или какие-либо другие разработчики)
	 приобрели лицензии и допускает их бесплатное использование только
	 в ОС Windows. При необходимости использования таких шрифтов необходимо
	 решать вопрос о закупке лицензий требуемых шрифтов для использования
	 в рамках определенного проекта. Список шрифтов, не рекомендованных
	 к использованию:


		- Agency FB Bold (AGENCYB.TTF);


		- Agency FB (AGENCYR.TTF);


		- Arial (arial.ttf);


		- Arial Bold (arialbd.ttf);


		- Arial Bold Italic
		 (arialbi.ttf);


		- Arial Italic (ariali.ttf);


		- Arial Narrow (ARIALN.TTF);


		- Arial Narrow Bold
		 (ARIALNB.TTF);


		- Arial Narrow Bold Italic
		 (ARIALNBI.TTF);


		- Arial Narrow Italic (ARIALNI.TTF);


		- Arial Black (ariblk.ttf);


		- Calibri (calibri.ttf);


		- Calibri Bold (calibribd.ttf);


		- Calibri Bold Italic (calibribi.ttf);


		- Calibri Italic (calibrii.ttf);


		- Comic Sans MS (comic.ttf);


		- Comic Sans MS Bold (comicbd.ttf);


		- Courier New (cour.ttf);


		- Courier New Bold (courbd.ttf);


		- Courier New Bold Italic (courbi.ttf);


		- Courier New Italic (couri.ttf);


		- Georgia (georgia.ttf);


		- Georgia Bold (georgiabd.ttf);


		- Georgia Bold Italic (georgiabi.ttf);


		- Georgia Italic (georgiai.ttf);


		- Impact (impact.ttf);


		- Kristen ITC (ITCKRIST.TTF);


		- Lucida Sans Unicode (l_10646.ttf);


		- Wide Latin (LATINWD.TTF);


		- Segoe UI (segoeui.ttf);


		- Segoe UI Bold (segoeuib.ttf);


		- Segoe UI Italic (segoeuii.ttf);


		- Segoe UI Light (segoeuil.ttf);


		- Segoe UI Bold Italic (segoeuiz.ttf);


		- Segoe UI Semibold (seguisb.ttf);


		- SimSun (simsun.ttf);


		- Tahoma (tahoma.ttf);


		- Tahoma Bold (tahomabd.ttf);


		- Times New Roman (times.ttf);


		- Times New Roman Bold (timesbd.ttf);


		- Times New Roman Bold Italic (timesbi.ttf);


		- Times New Roman Italic (timesi.ttf);


		- Trebuchet MS (trebuc.ttf);


		- Trebuchet MS Bold (trebucbd.ttf);


		- Trebuchet MS Bold Italic (trebucbi.ttf);


		- Trebuchet MS Italic (trebucit.ttf);


		- Verdana (verdana.ttf);


		- Verdana Bold (verdanabd.ttf);


		- Verdana Bold Italic (verdanabi.ttf);


		- Verdana Italic (verdanai.ttf);


		- Vivaldi Italic (VIVALDII.TTF).


[![](../../Opened.gif)![](../../Closed.gif)Ограничение
 по используемым кодовым страницам](javascript:TextPopup(this))


	При конвертации текстовых данных поддерживаются не все кодовые страницы,
	 доступные в ОС Windows. Ниже представлен список поддерживаемых кодовых
	 страниц:


			 Значение
			 Краткое описание


			 437
			 OEM_US.
			 United States.


			 720
			 Arabic_TransparentASMO.
			 Arabic - Transparent ASMO.


			 850
			 OEM_MultilingualLatinI.
			 OEM - Multilingual Latin I.


			 866
			 OEM_Russian.
			 OEM - Russian.


			 932
			 OEM_Japanese.
			 ANSI/OEM - Japanese, Shift-JIS.


			 936
			 OEM_SimplifiedChinese.
			 ANSI/OEM - Simplified Chinese (PRC, Singapore).


			 949
			 OEM_Korean.
			 ANSI/OEM - Korean (Unified Hangeul Code).


			 950
			 OEM_TraditionalChinese.
			 ANSI/OEM - Traditional Chinese (Taiwan; Hong Kong SAR, PRC).


			 1200
			 UCS2_LittleEndian.
			 Юникод с прямым порядком байтов (UTF-16LE).


			 1201
			 UCS2_BigEndian.
			 Юникод с обратным порядком байтов (UTF-16BE).


			 1250
			 ANSI_CentralEuropean.
			 ANSI - Central European.


			 1251
			 ANSI_Cyrillic.
			 ANSI - Cyrillic.


			 1252
			 ANSI_Latin.
			 ANSI - Latin I.


			 1253
			 ANSI_Greek.
			 ANSI - Greek.


			 1254
			 ANSI_Turkish.
			 ANSI - Turkish.


			 1255
			 ANSI_Hebrew.
			 ANSI - Hebrew.


			 1256
			 ANSI_Arabic.
			 ANSI - Arabic.


			 1257
			 ANSI_Baltic.
			 ANSI - Baltic.


			 1258
			 ANSI_OEM_Vietnamese.
			 ANSI/OEM - Vietnamese.


			 10005
			 MAC_Hebrew.
			 MAC - Hebrew.


			 10006
			 MAC_Greek.
			 MAC - Greek I.


			 10007
			 MAC_Cyrillic.
			 MAC - Cyrillic.


			 10029
			 MAC_LatinII.
			 MAC - Latin II.


			 10079
			 MAC_Icelandic.
			 MAC - Icelandic.


			 10081
			 MAC_Turkish.
			 MAC - Turkish.


			 20000
			 CNS_Taiwan.
			 CNS - Taiwan.


			 20105
			 IA5_International.
			 IA5 IRV International Alphabet No. 5 (7-bit).


			 20106
			 IA5_German. IA5
			 German (7-bit).


			 20107
			 IA5_Swedish.
			 IA5 Swedish (7-bit).


			 20108
			 IA5_Norwegian.
			 IA5 Norwegian (7-bit).


			 20866
			 KOI8R.
			 Russian - KOI8-R


			 20932
			 JISX. JIS X 0208-1990
			 & 0121-1990.


			 21866
			 KOI8U.
			 Ukrainian (KOI8-U).


			 28591
			 ISO_LatinI.
			 ISO 8859-1 Latin I.


			 28592
			 ISO_CentralEurope.
			 ISO 8859-2 Central Europe.


			 28593
			 ISO_Latin3.
			 ISO 8859-3 Latin 3.


			 28594
			 ISO_Baltic.
			 ISO 8859-4 Baltic.


			 28595
			 ISO_Cyrillic.
			 ISO 8859-5 Cyrillic.


			 28597
			 ISO_Greek.
			 ISO 8859-7 Greek.


			 28599
			 ISO_Latin5.
			 ISO 8859-9 Latin 5.


			 28605
			 ISO_Latin9.
			 ISO 8859-15 Latin 9.


			 51932
			 EUC_Japanese.
			 EUC. Japanese.


			 51949
			 EUC_Korean. EUC
			 - Korean.


			 51950
			 EUC_TraditionalChinese.
			 EUC - Traditional Chinese.


			 52936
			 HZGB2312_SimplifiedChinese.
			 HZ-GB2312 Simplified Chinese.


			 54936
			 GB18030_SimplifiedChinese.
			 Windows XP: GB18030 Simplified Chinese (4 Byte).


			 65001
			 UTF8.
			 Unicode UTF-8 (без BOM).


	Также указанные кодовые страницы должны поддерживаться установленной
	 в ОС Linux версией библиотеки Qt.


[![](../../Opened.gif)![](../../Closed.gif)Ограничение
 по поддерживаемым языкам](javascript:TextPopup(this))


	Не поддерживается работа с использованием следующих языков:


		- Арабский (идентификатор языка - 1025);


		- Азербайджанский (идентификатор языка - 1068).


См. также:


[Установка
 BI-сервера в OC Linux](../Install_Web_on_Linux.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
