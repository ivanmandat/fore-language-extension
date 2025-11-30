# Установка и настройка ClickHouse

Установка и настройка ClickHouse
-


# Установка и настройка ClickHouse


ClickHouse ─ колоночная аналитическая
 СУБД с открытым кодом, позволяющая выполнять аналитические запросы в режиме
 реального времени на структурированных больших данных.


Примечание.
 При некорректной настройке ClickHouse могут возникнуть [ограничения
 в работе с моделью данных](#error_setup).


## Шаг 1. Установка ClickHouse


Для установки ClickHouse:


	ОС
	 Linux ОС Windows


			- Соберите драйвер [clickhouse-odbc](https://github.com/ClickHouse/clickhouse-odbc?tab=readme-ov-file#building-from-sources)
			 вручную на основе ресурсов, соответствующих используемой версии
			 ОС Linux, и установите его на компьютер с установленным [BI-сервером](setup.chm::/UiWebSetup/UiWebSetup_TitlePage.htm).


			- Установите драйвер [clickhouse-client](https://clickhouse.com/docs/install)
			 на компьютер с установленным BI-сервером.


			- Раздайте права доступа к папкам:


				- /var/lib/clickhouse/user_files:


		sudo chown www-data:www-data
		 /var/lib/clickhouse/user_files


				- /var/lib/clickhouse:


		sudo chmod 755
		 /var/lib/clickhouse


			- Перезапустите clickhouse-server:


		sudo systemctl
		 restart clickhouse-server


			- Установите драйвер [clickhouse-odbc](https://github.com/ClickHouse/clickhouse-odbc/releases)
			 на компьютер с установленным [BI-сервером](setup.chm::/UiWebSetup/UiWebSetup_TitlePage.htm).


			- Установите драйвер [clickhouse-client](https://clickhouse.com/docs/install)
			 на компьютер с установленным BI-сервером одним из способов:


				- в виртуальной среде
				 Docker запустите контейнер clickhouse:


		docker run -d
		 --name clickhouse --volume="<путь
		 до папки, содержащей временные файлы>" --ulimit
		 nofile=262144:262144 clickhouse/clickhouse-server


		В подстановке <путь до папки,
		 содержащей временные файлы>
		 укажите путь до папки, в которой хранятся временные файлы
		 внутри контейнера. Например: temp:/tmp;


				- с помощью встроенной
				 функции Windows - [Windows Subsystem
				 for Linux](https://learn.microsoft.com/en-us/windows/wsl/install) (WSL). Для получения подробной информации
				 об установке ClickHouse с помощью WSL обратитесь к [официальной документации](https://clickhouse.com/docs/knowledgebase/install-clickhouse-windows10).


## Шаг 2. Настройка ClickHouse


После установки драйверов clickhouse-odbc и clickhouse-client:


	- Создайте в репозитории объект «База данных» с подключением к
	 серверу ClickHouse. Подробное описание приведено в разделе «[Подключение к реляционным
	 базам данных](uinavobj.chm::/database/UiDb_database.htm)».


	- Создайте [переменную
	 репозитория](uinav.chm::/02_Navigator/UiNav_GlobalVariables.htm) EXTRACT_DB. В качестве значения укажите
	 Id объекта «База данных».


	- Создайте в репозитории служебного пользователя, у которого будет
	 доступ к необходимым объектам (моделям), установите привилегии «[Вход в систему](Admin.chm::/04_SecurityPolicy/Admin_Priv.htm#enter)»,
	 «[Вход
	 в навигатор объектов](Admin.chm::/04_SecurityPolicy/Admin_Priv.htm#login_to_object_navigator)» и «[Право
	 чтения и открытия всех объектов](Admin.chm::/04_SecurityPolicy/Admin_Priv.htm#objects)».


	- Запустите консольное приложение [PP.Util](setup.chm::/05_RepoMngr/Service_Applications/PP_Util.htm)
	 от имени пользователя www-data для Astra Linux, Ubuntu или apache
	 для CentOS, РЕД ОС, Rocky Linux, ALT Linux. После чего сохраните учётные
	 данные служебного пользователя. Пример команды:


sudo -u www-data PP_NODISPLAY=1
 /opt/foresight/fp10.x-biserver/bin/PP.Util /save_creds mb_defenition /DEC
 login pass


Где:


		- mb_defenition. Идентификатор
		 репозитория;


		- login. Имя служебного
		 пользователя;


		- pass. Пароль служебного
		 пользователя.


После выполнения команды учётные данные служебного
 пользователя будут сохранены в файл [Metabases.xml](setup.chm::/06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm#MiniTOCBookMark4).


[![](../opened.gif)![](../closed.gif)В
 случае возникновения ошибки](javascript:TextPopup(this))


	Если при выполнении настройки ClickHouse возникли ошибки, или
	 если репозиторий [подключен
	 не к серверу СУБД PostgreSQL](DataSources/add_data_sources.htm), то могут возникнуть ограничения
	 в работе с моделью данных:


		- переход в [режим извлечения
		 данных](data_modes.htm#extract) будет недоступен;


		- добавление файлов в модель с помощью вкладки «Загрузка
		 файла» в [окне
		 добавления источника](DataSources/add_data_sources.htm) будет заблокировано;


		- [ручное обновление
		 файлов](data_modes.htm#manual_update) будет заблокировано.


	Ошибки, возникшие при настройке ClickHouse, записываются в [файл
	 отладочной информации](KnowledgeBase.chm::/01_Fore/KB000030/KnowledgeBase_KB000030_1.htm). В файл будут записаны:


		- основные этапы извлечения данных:


			- удаление существующей таблицы;


			- создание таблицы с наименованием «ключ объекта метабазы»;


			- загрузка исходной таблицы в csv-файл средствами ETL;


			- вставка данных из csv-файла в таблицу;


			- удаление csv-файла;


			- создание итоговой таблицы;


		- ошибки, возникающие в ClickHouse.


	Основные этапы извлечения данных в файле отладочной информации обозначаются
	 параметром EXTRACT. Например:


	8.130380 2024/10/02 10:18:10.249 2920 axis2_http_server.exe
	 EXTRACT: [16084] CreateTable


	8.130570 2024/10/02 10:18:10.249 2920 axis2_http_server.exe
	 SQL: [18748] CREATE TABLE "237346" ("Количество"
	 Nullable(Int32), "Сумма" Nullable(Decimal(30, 2)), "SKU"
	 Nullable(Int32), "Код заказа" Nullable(Int32), "Причина
	 возврата" Nullable(String), "Дата возврата" Nullable(Date))
	 ENGINE = MergeTree() ORDER BY tuple()


	8.802336 2024/10/02 10:18:10.935 2920 axis2_http_server.exe
	 EXTRACT: [14412] ToCSV 0.665 s


	8.802389 2024/10/02 10:18:10.935 2920 axis2_http_server.exe
	 EXTRACT: [14412] FromCSV


	8.803020 2024/10/02 10:18:10.936 2920 axis2_http_server.exe
	 EXTRACT: [14412] INSERT INTO "237343" FORMAT CSV


См. также:


[Построение
 модели данных](Building_Data_Model.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
