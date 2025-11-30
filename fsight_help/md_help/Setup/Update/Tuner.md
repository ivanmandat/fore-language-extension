# Настройки репозиториев, автообновления, контактной информации и др. из файла

Настройки репозиториев, автообновления, контактной информации и др. из файла
-


# Настройки репозиториев, автообновления, контактной информации и др.
 из файла


С помощью XML-файла можно задать настройки, которые будут установлены
 в процессе [обновления продукта](Update.htm):


	- параметры репозиториев;


	- параметры автоматического обновления;


	- системные переменные среды;


	- параметры отображения [окна регистрации](GetStarted.chm::/GetStarted/Get_Started.htm);


	- контактная информация в окне «[О
	 Программе](UiNav.chm::/GUI/Info.htm)»;


	- адрес электронной почты для отправки сообщения об ошибке «Форсайт. Аналитическая платформа».


Также эти настройки можно задать отдельно от обновления, используя Tuner.exe.


Для применения дополнительных настроек при обновлении продукта
 [инсталлятором](ManualUpdate.htm):


	- Создайте [XML-файл](#structure) с наименованием Install.pptuner
	 и разместите его рядом с инсталлятором.


	- Выполните [обновление инсталлятором](ManualUpdate.htm).


После выполнения действий в процессе обновления будут заданы дополнительные
 настройки.


Для установки дополнительных настроек с помощью Tuner.exe:


	- Создайте [XML-файл](#structure) и разместите его
	 рядом с Tuner.exe.


	- Запустите Tuner.exe из командной строки с указанием имени XML-файла:


Tuner.exe <XML-файл>


В подстановке <XML-файл> укажите файл с расширением
 *.xml, содержащий информацию о дополнительных настройках, например: tuner.xml.


После выполнения действий будут заданы дополнительные настройки.


## Структура XML-файла


Для создания XML-файла откройте стандартный текстовый редактор.


Дополнительные настройки задаются в разделах:


		 Раздел
		 Краткое описание


		 <[Metabases](#metabases)>
		 Параметры репозиториев.


		 <[AutoUpdate](#autoupdate)>
		 Параметры автообновления.


		 <[Environments](#environments)>
		 Определение системных переменных среды.


		 <[Splash](#splash)>
		 Отображение изображения в [окне регистрации](GetStarted.chm::/GetStarted/Get_Started.htm).


		 <[Login](#login)>
		 Отображение кнопки «Настройка»
		 в [окне
		 регистрации](GetStarted.chm::/GetStarted/Get_Started.htm).


		 <[AboutWindow](#aboutwindow)>
		 Определение контактной информации в окне «[О
		 Программе](UiNav.chm::/GUI/Info.htm)».


		 <[Exception](#exception)>
		 Определение адреса электронной почты для отправки сообщения
		 об ошибке «Форсайт. Аналитическая платформа»
		 с помощью команды главного меню «Справка
		 > Сообщить об ошибке» в [навигаторе
		 объектов](GetStarted.chm::/Interface/Interface_Navigator.htm).


Описание разделов:


[![](../Opened.gif)![](../Closed.gif)<Metabases>](javascript:TextPopup(this))


	Параметры репозиториев.


	Раздел <Metabases> может
	 содержать один или несколько подразделов <Metabase>
	 для настройки параметров конкретных репозиториев.


	Подраздел <Metabase>
	 может содержать следующие атрибуты и подразделы:


			 Атрибуты/подраздел
			 Описание


			 Driver
			 Идентификатор драйвера. Список СУБД и соответствующих идентификаторов
			 драйверов представлен в разделе «[Поддерживаемые
			 СУБД](../01_SysReq/database_Support.htm)».


			 Package
			 Cтандартный пакет безопасности продукта «Форсайт. Аналитическая платформа»:


				- STANDARDSECURITYPACKAGE.


			 Authentication
			 Тип аутентификации:


				- 1. По умолчанию.
				 Парольная;


				- 2. Интегрированная
				 доменная;


				- 3. Ролевая;


			Примечание.
			 Ролевой тип аутентификации является устаревшим и используется
			 для совместимости с прошлыми версиями.


				- 4. Доменная.


			 Name
			 Наименование репозитория.


			 Ident
			 Идентификатор репозитория.


			 Scope
			 Ветка реестра, в которую будут добавлены настройки подключения
			 к репозиторию:


				- LM. Ветка
				 реестра [HKEY_LOCAL_MACHINE], репозиторий настроен для
				 всех пользователей;


				- CU. По умолчанию.
				 Ветка реестра [HKEY_CURRENT_USER], репозиторий настроен
				 для текущего пользователя.


			Необязательный атрибут.


			 <LogonData>
			 Подраздел определяет настройки СУБД и содержит следующие
			 атрибуты:


				- Server.
				 Наименование сервера. Атрибут актуален для СУБД Oracle,
				 Microsoft SQL Server, Microsoft SQL Server (ODBC), PostgreSQL;


				- FileName.
				 Наименование файла базы данных. Атрибут актуален для СУБД
				 SQLite;


				- Scheme.
				 Наименование схемы репозитория. Атрибут актуален для СУБД
				 Oracle;


				- Database.
				 Наименование схемы репозитория. Атрибут актуален для СУБД
				 Microsoft SQL Server, Microsoft SQL Server (ODBC), PostgreSQL;


				- Metabase.
				 Идентификатор схемы репозитория. Атрибут актуален для
				 СУБД WSF;


				- EndPoint.
				 Адрес BI-сервера. Атрибут актуален для СУБД WEB Service.


			Список актуальных СУБД, на базе которых может быть создан репозиторий,
			 представлен в разделе «[Поддерживаемые
			 СУБД](../01_SysReq/database_Support.htm)».

Сводный список идентификаторов драйверов
			 представлен в разделе «[Настройка
			 списка репозиториев](../06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm#id)».


[![](../Opened.gif)![](../Closed.gif)<AutoUpdate>](javascript:TextPopup(this))


	Параметры автообновления.


	Раздел может содержать следующие атрибуты:


			 Атрибуты
			 Описание


			 Profile
			 Название профайла, в который будут записаны настройки автообновления.


Путь в реестре до профайла:


				- в 32-разрядной ОС Windows: [HKEY_CURRENT_USER\SOFTWARE\Wow6432Node\Foresight\Foresight Analytics Platform\10.0\AutoUpdate\Profiles\<имя профайла>];


				- в 64-разрядной ОС Windows: [HKEY_CURRENT_USER\SOFTWARE\Foresight\Foresight Analytics Platform\10.0\AutoUpdate\Profiles\<имя профайла>].


			По умолчанию имя профайла совпадает с номером версии - 10.9.


			 SourceType
			 Источник обновления:


				- Path. Папка
				 на диске;


				- Db. Сервер
				 базы данных.


			 Update
			 Автообновление:


				- Ask. Запрашивать
				 разрешение перед процедурой обновления;


				- ""(пустое).
				 Не производить обновление;


				- Always.
				 Производить автоматически (без запроса).


			 Db
			 Параметры сервера базы данных с обновлением:
			DB:LABEL;SERVER@,


			Где:


				- Db. Тип
				 СУБД Oracle, Microsoft SQL Server;


				- LABEL. Метка
				 обновления;


				- SERVER.
				 Сервер базы данных.


			Примечание.
			 Атрибут актуален только при использовании файлов обновления,
			 расположенных на сервере базы данных.


			 Source
			 Путь к источнику обновления.
			Примечание.
			 Атрибут актуален только при использовании файлов обновления,
			 расположенных в папке на диске.


[![](../Opened.gif)![](../Closed.gif)<Environments>](javascript:TextPopup(this))


	Определение системных переменных среды.


	Раздел <Environments> может
	 содержать один или несколько подразделов <Environment>
	 для определения конкретных системных переменных среды.


	Подраздел <Environment>
	 может содержать следующие атрибуты и подразделы:


			 Атрибуты
			 Описание


			 Name
			 Имя переменной.


			 Args
			 Значение переменной.


[![](../Opened.gif)![](../Closed.gif)<Splash>](javascript:TextPopup(this))


	Отображение изображения в [окне регистрации](GetStarted.chm::/GetStarted/Get_Started.htm).


	Раздел может содержать следующий атрибут:


			 Атрибут
			 Описание


			 Visible
			 Признак отображения изображения в окне регистрации:


				- 0. Не отображать
				 изображение в окне регистрации;


				- 1. Отображать
				 изображение в окне регистрации.


	Для получения подробной информации об отключении изображения в окне
	 регистрации с помощью настроек реестра обратитесь к разделу «[Отключение
	 изображения в окне регистрации](../06_AK_Client_Config/Setup_ClientConfigOffImage.htm)».


	Для получения подробной информации об изменении пиктограммы и изображения
	 в окне регистрации обратитесь к разделу «[Смена
	 пиктограммы и изображения в окне регистрации](../06_AK_Client_Config/ChangeIcon.htm)».


[![](../Opened.gif)![](../Closed.gif)<Login>](javascript:TextPopup(this))


	Отображение кнопки «Настройка»
	 в [окне
	 регистрации](GetStarted.chm::/GetStarted/Get_Started.htm).


	Раздел может содержать следующий атрибут:


			 Атрибут
			 Описание


			 VisibleAdvanced
			 Признак отображения кнопки в окне регистрации:


				- 0. Не отображать кнопку
				 «Настройка»;


				- 1. Отображать кнопку «Настройка».


	Для получения подробной информации о скрытии кнопки «Настройка»
	 с помощью настроек реестра обратитесь к разделу «[Скрытие
	 кнопки «Настройка» в окне регистрации](../06_AK_Client_Config/Setup_SysReq_Client.htm)».


[![](../Opened.gif)![](../Closed.gif)<AboutWindow>](javascript:TextPopup(this))


	Определение контактной информации в окне «[О
	 Программе](UiNav.chm::/GUI/Info.htm)».


	Раздел содержит следующие подразделы:


			 Подраздел
			 Описание


			 <App>
			 Информация о программе. Подраздел может содержать следующие
			 атрибуты:


				- Name. Имя
				 программы;


				- Version.
				 Версия программы.


			 <Info>
			 Информация о технической поддержке. Подраздел может содержать
			 следующие атрибуты:


				- Address.
				 Адрес;


				- Phone. Телефон;


				- Fax. Факс;


				- Email. Адрес
				 электронной почты;


				- Website.
				 Адрес веб-сайта;


				- Title. Заголовок
				 столбца, содержащего информацию о технической поддержке.


			 <Copyright>
			 Дополнительная информация. Подраздел может содержать следующие
			 атрибуты:


				- Value. Авторские
				 права.


	Примечание.
	 Номер лицензии изменить или скрыть невозможно.


	Для отмены заданных настроек и отображения стандартной информации
	 в окне «О Программе» удалите
	 в реестре раздел About:


		- в 32-разрядной ОС Windows: [HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Foresight\Foresight Analytics Platform\10.0\About];


		- в 64-разрядной ОС Windows: [HKEY_LOCAL_MACHINE\SOFTWARE\Foresight\Foresight Analytics Platform\10.0\About].


[![](../Opened.gif)![](../Closed.gif)<Exception>](javascript:TextPopup(this))


	Определение адреса электронной почты для отправки сообщения об ошибке
	 «Форсайт. Аналитическая платформа»
	 с помощью команды главного меню «Справка
	 > Сообщить об ошибке» в [навигаторе
	 объектов](GetStarted.chm::/Interface/Interface_Navigator.htm).


	Раздел может содержать следующий атрибут:


			 Атрибут
			 Описание


			 EMail
			 Адрес электронной почты, который будет подставляться в
			 поле адресата при отправке сообщения об ошибке платформы.


## Примеры


В примерах приведены настройки XML-файла для разных типов драйвера.


[![](../Opened.gif)![](../Closed.gif)Настройка
 для драйвера Microsoft SQL Server](javascript:TextPopup(this))


<?xml version="1.0" encoding="utf-8"?>
<Configuration>
    <Metabases>
        <Metabase Driver="MSSQL2012" Package="STANDARDSECURITYPACKAGE" Name="MSSQL Repository" Ident="MSSQLRepository">
            <LogonData Server="MSSQLSERVER" Database="MSSQLDB" />
        </Metabase>
    </Metabases>
</Configuration>


[![](../Opened.gif)![](../Closed.gif)Настройка
 для драйвера Oracle](javascript:TextPopup(this))


<?xml version="1.0" encoding="utf-8"?>
<Configuration>
    <Metabases>
        <Metabase Driver="ORCL8" Package="STANDARDSECURITYPACKAGE" Name="Oracle Repository" Ident="OracleRepository">
            <LogonData Server="OracleServer" Scheme="OracleScheme" />
        </Metabase>
    </Metabases>
</Configuration>


[![](../Opened.gif)![](../Closed.gif)Настройка
 для драйвера PostgreSQL](javascript:TextPopup(this))


<?xml version="1.0" encoding="utf-8"?>
<Configuration>
    <Metabases>
        <Metabase Driver="POSTGRES" Package="STANDARDSECURITYPACKAGE" Name="POSTGRES Repository" Ident="POSTGRESRepository">
            <LogonData Server="POSTGRES" Database="POSTGRES" />
        </Metabase>
    </Metabases>
</Configuration>


[![](../Opened.gif)![](../Closed.gif)Настройка
 для драйвера SQLite](javascript:TextPopup(this))


<?xml version="1.0" encoding="utf-8"?>
<Configuration>
    <Metabases>
        <Metabase Driver="SQLITE" Package="STANDARDSECURITYPACKAGE" Name="SQLITE Repository" Ident="SQLITERepository">
            <LogonData FileName="C:\Work\sqlite_repo" />
        </Metabase>
    </Metabases>
    <AutoUpdate Profile="9.2" Source="Z:\WebBuild\LastKnowGood\Win" SourceType="Path" Update="Ask" Db="ORACLE:LABEL;SERVER@" />
    <Splash Visible="1"/>
    <Login VisibleAdvanced = "1" />
    <Environments>
        <Environment Name="TEST_PER1" Args="ARGS_VALUE1"/>
        <Environment Name="TEST_PER2" Args="ARGS_VALUE2"/>
        <Environment Name="TEST_PER3" Args="ARGS_VALUE3"/>
    </Environments>
    <AboutWindow>
        <App Name="Foresight" Version="Custom-built 2018"/>

        <Info Title="Техническая поддержка" Email="support@organizationname.com" Website="www.organizationname.com"/>
        <Copyright Value="Organization name"/>
    </AboutWindow>
    <Exception EMail = "support@mail.com" />
</Configuration>


См. также:


[Настройка интерфейса
 окна регистрации в настольном приложении](../06_AK_Client_Config/Setup_ClientConfig.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
