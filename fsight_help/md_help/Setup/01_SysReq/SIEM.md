# Поддержка работы с системами управления событиями информационной безопасности

Поддержка работы с системами управления событиями информационной безопасности
-


# Поддержка работы с системами управления
 событиями информационной безопасности


Настольное приложение, веб-приложение и BI-сервер на базе «Форсайт. Аналитическая платформа»
 поддерживают работу с системами управления событиями информационной безопасности
 - SIEM-системами.


Готовое решение на базе «Форсайт. Аналитическая платформа»
 может быть интегрировано через прикладную систему со средством, позволяющим
 анализировать в реальном времени происходящие события и вовремя реагировать
 на угрозы безопасности в информационных системах.


Примечание.
 SIEM-системы не входят в комплект поставки «Форсайт. Аналитическая платформа».


Основополагающий принцип SIEM-систем заключается в том, что данные о
 безопасности информационной системы собираются из разных источников, и
 результат их обработки предоставляется в едином интерфейсе, доступном
 для аналитиков безопасности, что облегчает изучение характерных особенностей,
 соответствующих инцидентам безопасности


Одной из главных целей использования SIEM-систем является повышение
 уровня информационной безопасности в имеющейся архитектуре за счёт обеспечения
 возможности манипулировать информацией о безопасности и осуществлять упреждающее
 управление инцидентами и событиями безопасности в близком к реальному
 времени режиме.


При работе с системами управления событиями безопасности решаются следующие
 задачи:


	- сбор, обработка и анализ событий безопасности, поступающих в
	 систему из множества источников;


	- обнаружение в режиме реального времени атак и нарушений критериев
	 и политик безопасности;


	- оперативная оценка защищенности информационных, телекоммуникационных
	 и других критически важных ресурсов;


	- анализ и управление рисками безопасности;


	- проведение расследований инцидентов;


	- принятие эффективных решений по защите информации;


	- формирование отчетных документов.


Для интеграции может быть использован [протокол доступа](KeSom.chm::/Interface/IAuditLog/IAuditLog.htm).


Установку и настройку системы управления событиями безопасности осуществляет
 системный администратор.


Система управления событиями безопасности разворачивается в среде окружения.
 При планировании и развертывании приложения системный администратор окружения
 должен использовать руководства по администрированию, предоставляемые
 производителями соответствующих SIEM-систем.


Интеграция с внешними SIEM-системами поддерживается через файлы формата
 CEF и через пересылку сообщений о событиях безопасности формата CEF в
 реальном времени по протоколу syslog.


## Импорт журнала аудита безопасности в SIEM-системы


Журнал аудита безопасности продукта «Форсайт. Аналитическая платформа»
 хранится в базе данных во внутреннем виде.


Для экспорта файла используйте менеджер безопасности или планировщик
 задач.


	- в менеджере безопасности:


		- Зайдите в [менеджер
		 безопасности](Admin.chm::/Admin_Title.htm)
		 под учётной записью с администратора.


		- Перейдите на вкладку «Протокол
		 доступа».


		- Сохраните протокол доступа в файл:


			- в настольном приложении выполните команду «Протокол
			 доступа > Сохранить в файл > Полный протокол/Текущее
			 представление» в главном меню;


			- в веб-приложении нажмите кнопку ![](export.png) «Экспортировать» на панели
			 инструментов.


После чего будет открыт стандартный диалог,
 в котором необходимо указать:


			- имя файла;


			- тип файла. Для полного протокола выберите тип «Файлы
			 протокола доступа (*.cef)». Для текущего представления - CEF
			 (*.cef);


			- месторасположение файла.


		- Нажмите кнопку «Сохранить».


	- в планировщике задач:


		- Создайте Fore-модуль с помощью
		 методов [IAuditLog.Archive](KeSom.chm::/Interface/IAuditLog/IAuditLog.Archive.htm)
		 или [IAuditLog.ArchiveToDate](KeSom.chm::/Interface/IAuditLog/IAuditLog.ArchiveToDate.htm).


		- Создайте [задачу выполнения
		 сборки](uiappsrv.chm::/3_Work_Tasks/Work_Task.htm), укажите созданный модуль и настройте
		 периодичность выполнения задачи.


		- Запустите задачу на [выполнение](uiappsrv.chm::/1_Work_AppSrv/UiAppSrv_Work_Run.htm).


Затем средствами SIEM-сервера настройте импорт файла.


Для получения информации о создании декодера для разбора события обратитесь
 к статье «[Пример импорта данных в Wazuh](decoder_example.htm)».


## Пересылка сообщений о событиях безопасности формата CEF в реальном
 времени по протоколу syslog


Для пересылки сообщений аудита на syslog-сервер настройте:


	- файл [settings.xml](../UiWebSetup/03_Setup_Web/BI_Server_Settings_XML.htm#syslogserver);


	- [системный
	 реестр](../UiWebSetup/03_Setup_Web/BI_Server_Registry_Key.htm#syslogserver).


Приоритет поиска настроек:


	- settings.xml.


	- Раздел [HKEY_CURRENT_USER].


	- Раздел [HKEY_LOCAL_MACHINE].


Если при поиске в источнике найден раздел SysLogServer, то считается,
 что настройки прочитаны успешно, даже если раздел пустой или содержит
 некорректные записи. Чтение остальных источников не производится. Если
 в источнике какой-либо из параметров отсутствует, то значения будут браться
 по умолчанию:


Active = False


Host = 127.0.0.1


Port = 514


Protocol = 0


## Формат событий CEF, используемый в «Форсайт. Аналитическая платформа»


CEF-файл состоит из набора событий, каждое событие записано отдельной
 текстовой строкой. Событие соответствует определённому действию, выполненному
 в репозитории. Строка события состоит из заголовка и набора полей. Заголовок
 начинается с CEF:0| и заканчивается |AuditLog|Unknown|. В зависимости
 от того, какое действие выполнялось, для формирования событий используется
 полный или сокращённый список полей. В операциях будут доступны следующие
 поля:


	- act. Событие (операция);


	- cs1Label. Значение всегда
	 «MetabaseId»;


	- cs1. Идентификатор репозитория;


	- rt. Дата и время генерации
	 события;


	- outcome. Результат выполнения
	 операции. Допустимые значения: Success, Failure;


	- shost. Рабочая станция;


	- suser. Пользователь
	 ОС;


	- cs2Label. Значение всегда
	 «PlatformUser»;


	- cs2. Пользователь «Форсайт. Аналитическая платформа».
	 Поле будет пустым, если вход был неуспешен, значение поля outcome
	 = Failure;


	- cs3Label. Значение всегда
	 «IPAddresses»;


	- cs3. Набор IP-адресов;


	- cs4Label. Значение всегда
	 «ObjectName»;


	- cs4. Наименование объекта;


	- cs5Label. Значение всегда
	 «ObjectId»;


	- cs5. Идентификатор объекта;


	- cs6Label. Значение всегда
	 «AccessLevel». Поле присутствует при включенном мандатном методе управления
	 доступом;


	- cs6. Уровень доступа.
	 Поле присутствует при включенном мандатном методе управления доступом;


	- msg. Комментарий к событию.
	 Поле может иметь пустое значение.


Список доступных операций:


		 Операция
		 Описание
		 Поля
		 Пример


		 FSAP_EV_LOGONS_IN
		 Вход в систему.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_LOGONS_IN|AuditLog|Unknown|act=
		 cs1Label=MetabaseId cs1=WAREHOUSE rt=Aug 05 2025 12:00:10+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 msg=Версия платформы:
		 10.9.15.0 x64 Настольное приложение


		 FSAP_EV_LOGONS_OUT
		 Выход из системы.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_LOGONS_OUT|AuditLog|Unknown|act=
		 cs1Label=MetabaseId cs1=WAREHOUSE rt=Aug 05 2025 14:15:50+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 msg=


		 FSAP_EV_LOGONS_NAVIGATOR
		 Вход в навигатор.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_LOGONS_NAVIGATOR|AuditLog|Unknown|act=Вход
		 в навигатор cs1Label=MetabaseId cs1=WAREHOUSE rt=Aug 05 2025 12:00:11+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 msg=


		 FSAP_EV_OBJECT_OPERATIONS
		 Выполнение какого-либо действия над объектом репозитория.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_OBJECT_OPERATIONS|AuditLog|Unknown|act=Изменение
		 cs1Label=MetabaseId cs1=WAREHOUSE rt=Aug 05 2025 13:15:43+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Форма ввода/вывода cs5Label=ObjectId cs5=OBJ444299 msg=


		 FSAP_EV_OO_READ
		 Чтение объекта.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_OO_READ|AuditLog|Unknown|act=Чтение
		 cs1Label=MetabaseId cs1=WAREHOUSE rt=Aug 05 2025 13:20:59+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Форма ввода/вывода cs5Label=ObjectId cs5=OBJ444299 msg=


		 FSAP_EV_OO_CREATE
		 Создание объекта.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_OO_CREATE|AuditLog|Unknown|act=Создание
		 cs1Label=MetabaseId cs1=WAREHOUSE rt=Aug 05 2025 12:08:25+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Таблица cs5Label=ObjectId cs5=OBJ446424 msg=


		 FSAP_EV_OO_CHANGE
		 Изменение объекта.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_OO_CHANGE|AuditLog|Unknown|act=Изменение
		 cs1Label=MetabaseId cs1=WAREHOUSE rt=Aug 06 2025 16:39:12+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Регламентный отчет cs5Label=ObjectId cs5=OBJ446419 msg=


		 FSAP_EV_OO_DELETE
		 Удаление объекта.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_OO_DELETE|AuditLog|Unknown|act=Удаление
		 cs1Label=MetabaseId cs1=WAREHOUSE rt=Jul 18 2025 17:18:19+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Стандартный куб cs5Label=ObjectId cs5=OBJ444245 msg=


		 FSAP_EV_RDSE_READ
		 Чтение элементов справочника.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_RDSE_READ|AuditLog|Unknown|act=Чтение
		 элементов справочника cs1Label=MetabaseId cs1=WAREHOUSE rt=Jul
		 30 2025 16:25:37+05:00 outcome=Success shost=IVANOV suser=ivan.ivanov
		 cs2Label=PlatformUser cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1
		 cs4Label=ObjectName cs4=Территориальные образования cs5Label=ObjectId
		 cs5=DIC_RF msg=


		 FSAP_EV_RDSE_CHANGE
		 Изменение элементов справочника.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_RDSE_CHANGE|AuditLog|Unknown|act=Изменение
		 элементов справочника cs1Label=MetabaseId cs1=WAREHOUSE rt=Jul
		 17 2025 13:08:29+05:00 outcome=Success shost=IVANOV suser=ivan.ivanov
		 cs2Label=PlatformUser cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1
		 cs4Label=ObjectName cs4=Справочник cs5Label=ObjectId cs5=DICT2
		 msg=Изменены элементы: 5   атрибуты: Порядок.


		 FSAP_EV_RDSE_ADD
		 Добавление элементов в справочник.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_RDSE_ADD|AuditLog|Unknown|act=Добавление
		 элементов в справочник cs1Label=MetabaseId cs1=WAREHOUSE rt=Jul
		 30 2025 10:39:41+05:00 outcome=Success shost=IVANOV suser=ivan.ivanov
		 cs2Label=PlatformUser cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1
		 cs4Label=ObjectName cs4=Справочник cs5Label=ObjectId cs5=OBJ444935
		 msg=Добавлены элементы: Итоговые показания.


		 FSAP_EV_RDSE_DELETE
		 Удаление элементов из справочника.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_RDSE_DELETE|AuditLog|Unknown|act=Удаление
		 элементов из справочника cs1Label=MetabaseId cs1=WAREHOUSE rt=Jul
		 17 2025 17:07:10+05:00 outcome=Success shost=IVANOV suser=ivan.ivanov
		 cs2Label=PlatformUser cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1
		 cs4Label=ObjectName cs4=Справочник cs5Label=ObjectId cs5=OBJ444935
		 msg=Удалены элементы: Для проверки.


		 FSAP_EV_OSO_OBJECT_RIGHTS_CHANGE
		 Изменение прав на объект.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_OSO_OBJECT_RIGHTS_CHANGE|AuditLog|Unknown|act=Изменение
		 прав cs1Label=MetabaseId cs1=WAREHOUSE rt=Jul 02 2025 16:04:12+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Сегмент куба cs5Label=ObjectId cs5=OBJ433272 msg=Убрано наследование
		 прав доступа от родительского объекта


		 FSAP_EV_OSO_RDS_ELEMENT_RIGHTS_CHANGE
		 Изменение прав на элемент справочника НСИ.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_OSO_RDS_ELEMENT_RIGHTS_CHANGE|AuditLog|Unknown|act=Изменение
		 прав на элементы cs1Label=MetabaseId cs1=WAREHOUSE rt=Dec 16 2025
		 11:59:25+05:00 outcome=Success shost=IVANOV suser=ivan.ivanov
		 cs2Label=PlatformUser cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1
		 cs4Label=ObjectName cs4=Справочник социально-экономических показателей
		 cs5Label=ObjectId cs5=DIC_SEP_COPY3 msg=Изменены права пользователю/группе
		 'TESTER' были: 'Чтение,Изменение,Удаление'; стали: 'Нет доступа'
		 на элемент 'ИНВЕСТИЦИИ'


		 FSAP_EV_UO_READ
		 Чтение обновления из файла или объекта репозитория.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_UO_READ|AuditLog|Unknown|act=Чтение
		 обновления cs1Label=MetabaseId cs1=WAREHOUSE rt=Jul 24 2025 09:33:35+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 msg=Файл: D:\\Updates\\2.pefx
		 Дата: 24.07.2025 9:33:35 Размер: 2602578


		 FSAP_EV_UO_SAVE
		 Сохранение обновления в файл или объект репозитория.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_UO_SAVE|AuditLog|Unknown|act=Запись
		 обновления cs1Label=MetabaseId cs1=WAREHOUSE rt=Aug 01 2025 13:54:26+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 msg=Файл: D:\\Updates\\3.pefx
		 Дата: 01.08.2025 13:43:31 Размер: 1241279


		 FSAP_EV_UO_APPLY
		 Применение обновления в репозитории.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_UO_APPLY|AuditLog|Unknown|act=Применение
		 обновления cs1Label=MetabaseId cs1=WAREHOUSE rt=Jul 24 2025 09:36:30+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 msg=


		 FSAP_EV_UO_QUERY
		 Выполнение SQL-запроса во время обновления.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_UO_QUERY|AuditLog|Unknown|act=Применение
		 SQL-оператора cs1Label=MetabaseId cs1=WAREHOUSE rt=Aug 07 2025
		 14:56:40+05:00 outcome=Success shost=IVANOV suser=ivan.ivanov
		 cs2Label=PlatformUser cs2=Admin cs3Label=IPAddresses cs3=10.10.10.1
		 msg=INSERT into "T_UPDATE" (updatedate) VALUES (CURRENT_TIMESTAMP);


		 FSAP_EV_SO_POLICY_CHANGE
		 Изменение политики безопасности.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_SO_POLICY_CHANGE|AuditLog|Unknown|act=Изменение
		 политики cs1Label=MetabaseId cs1=WAREHOUSE rt=Jul 15 2025 14:40:47+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 msg=Изменение пароля
		 пользователю 'TESTER'


		 FSAP_EV_SO_POLICY_READ
		 Чтение политики безопасности.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_SO_POLICY_READ|AuditLog|Unknown|act=Чтение
		 политики cs1Label=MetabaseId cs1=WAREHOUSE rt=Aug 07 2025 09:47:32+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 msg=


		 FSAP_EV_SO_SNAPSHOT_SAVE
		 Сохранение резервной копии политики безопасности.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_SO_SNAPSHOT_SAVE|AuditLog|Unknown|act=Сохранение
		 контура политики безопасности cs1Label=MetabaseId cs1=WAREHOUSE
		 rt=Aug 07 2025 14:54:36+05:00 outcome=Success shost=IVANOV suser=ivan.ivanov
		 cs2Label=PlatformUser cs2=Admin cs3Label=IPAddresses cs3=10.10.10.1
		 filePath=Файл: D:\\Archive\\Warehouse[07_08_2025].pppolicy


		 FSAP_EV_SO_SNAPSHOT_APPLY
		 Восстановление резервной копии политики безопасности.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_SO_SNAPSHOT_APPLY|AuditLog|Unknown|act=Применение
		 контура политики безопасности cs1Label=MetabaseId cs1=WAREHOUSE
		 rt=Aug 07 2025 14:54:40+05:00 outcome=Success shost=IVANOV suser=ivan.ivanov
		 cs2Label=PlatformUser cs2=Admin cs3Label=IPAddresses cs3=10.10.10.1
		 filePath=Файл: D:\\Archive\\Warehouse[07_08_2025].pppolicy Дата:
		 07.08.2025 14:54:36 Размер: 3142


		 FSAP_EV_SO_AUDITLOG_ARCHIVE_SAVE
		 Сохранение протокола доступа в файл.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_SO_AUDITLOG_ARCHIVE_SAVE|AuditLog|Unknown|act=Сохранение
		 протокола доступа cs1Label=MetabaseId cs1=WAREHOUSE rt=Apr 03
		 2025 17:37:06+05:00 outcome=Success shost=IVANOV suser=ivan.ivanov
		 cs2Label=PlatformUser cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1
		 filePath=D:\\Archive\\протокол_доступа_Warehouse_2020-2025.pplog


		 FSAP_EV_VCS_CONNECTION_CHANGE
		 Подключение к системе управления версиями (VCS).
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_VCS_CONNECTION_CHANGE|AuditLog|Unknown|act=Подключение
		 к VCS cs1Label=MetabaseId cs1=WAREHOUSE rt=Aug 07 2025 17:10:55+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 msg=Репозиторий
		 подключен к системе управления версиями, Team Foundation Server
		 - https://testserver.ru/company/WORK/_git/Project, Team Project
		 -


		 FSAP_EV_VCS_PARAMETERS_CHANGE
		 Изменение настроек системы управления версиями (VCS).
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_VCS_PARAMETERS_CHANGE|AuditLog|Unknown|act=Изменение
		 настроек VCS cs1Label=MetabaseId cs1=WAREHOUSE rt=Aug 07 2025
		 17:24:38+05:00 outcome=Success shost=IVANOV suser=ivan.ivanov
		 cs2Label=PlatformUser cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1
		 msg=Изменен проект на сервере TFS - 'https://testserver.ru/company/WORK/_git/Test'
		 (был - 'https://testserver.ru/company/WORK/_git/Project')


		 FSAP_EV_VCS_REPOSITORY_SYNCHRONIZED
		 Синхронизация системы управления версиями с репозиторием.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_VCS_REPOSITORY_SYNCHRONIZED|AuditLog|Unknown|act=Синхронизация
		 с VCS cs1Label=MetabaseId cs1=WAREHOUSE rt=Aug 07 2025 17:10:05+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 msg=Выполнена синхронизация
		 репозитория с системой управления версиями, Team Foundation Server
		 - https://testserver.ru/company/WORK/_git/Project, Team Project
		 -


		 FSAP_EV_CUSTOM_OPERATIONS
		 События безопасности для операций с пользовательскими объектами.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_CUSTOM_OPERATIONS|AuditLog|Unknown|act=Запустить
		 cs1Label=MetabaseId cs1=WAREHOUSE rt=Apr 03 2025 18:29:35+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Процесс cs5Label=ObjectId cs5=OBJ347351 msg=Выполнение операции
		 'Запустить' пользовательского объекта


		 FSAP_EV_IEO_PRINT
		 Печать.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_IEO_PRINT|AuditLog|Unknown|act=Печать
		 cs1Label=MetabaseId cs1=WAREHOUSE rt=Aug 06 2025 11:44:56+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Информационная панель cs5Label=ObjectId cs5=OBJ425821 msg=Предварительный
		 просмотр Кол-во страниц: 1 Результат: Отправлено на печать


		 FSAP_EV_IEO_EXPORT
		 Экспорт.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_IEO_EXPORT|AuditLog|Unknown|act=Экспорт
		 cs1Label=MetabaseId cs1=WAREHOUSE rt=Aug 06 2025 11:44:56+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Информационная панель cs5Label=ObjectId cs5=OBJ425821 msg=Количество
		 копий: 1 Кол-во страниц: 1 Результат: Успешно


		 FSAP_EV_IEO_IMPORT
		 Импорт.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_IEO_IMPORT|AuditLog|Unknown|act=Импорт
		 cs1Label=MetabaseId cs1=WAREHOUSE rt=Jul 17 2025 16:44:33+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Показатели cs5Label=ObjectId cs5=OBJ444003 msg=


		 FSAP_EV_IEO_EXPORT_WEB
		 Экспорт в веб.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_IEO_EXPORT_WEB|AuditLog|Unknown|act=Экспорт
		 cs1Label=MetabaseId cs1=WAREHOUSE rt=Aug 05 2025 11:39:29+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Регламентный отчёт cs5Label=ObjectId cs5=OBJ446419 msg=Сохранение
		 в буфер обмена информации из объекта


		 FSAP_EV_OO_TBL_SELECT
		 Извлечение данных.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_OO_TBL_SELECT|AuditLog|Unknown|act=Извлечение
		 данных cs1Label=MetabaseId cs1=WAREHOUSE rt=Sep 03 2025 18:02:21+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Таблица cs5Label=ObjectId cs5=OBJ390754 msg=


		 FSAP_EV_OO_TBL_INSERT
		 Вставка данных.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_OO_TBL_INSERT|AuditLog|Unknown|act=Вставка
		 данных cs1Label=MetabaseId cs1=WAREHOUSE rt=Jul 17 2025 18:01:26+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Таблица cs5Label=ObjectId cs5=OBJ444030 msg=


		 FSAP_EV_OO_TBL_UPDATE
		 Изменение данных.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_OO_TBL_UPDATE|AuditLog|Unknown|act=Изменение
		 данных cs1Label=MetabaseId cs1=WAREHOUSE rt=Jul 18 2025 14:07:18+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Таблица cs5Label=ObjectId cs5=OBJ444030 msg=


		 FSAP_EV_OO_TBL_DELETE
		 Удаление данных.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_OO_TBL_DELETE|AuditLog|Unknown|act=Удаление
		 данных cs1Label=MetabaseId cs1=WAREHOUSE rt=Jul 15 2025 17:22:59+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Таблица cs5Label=ObjectId cs5=OBJ443707 msg=


		 FSAP_EV_OO_TBL_ALTER
		 Изменение структуры таблицы.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_OO_TBL_ALTER|AuditLog|Unknown|act=Изменение
		 структуры таблицы cs1Label=MetabaseId cs1=WAREHOUSE rt=Aug 05
		 2025 12:08:23+05:00 outcome=Success shost=IVANOV suser=ivan.ivanov
		 cs2Label=PlatformUser cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1
		 cs4Label=ObjectName cs4=Таблица cs5Label=ObjectId cs5=OBJ446424
		 msg=


		 FSAP_EV_OO_PROC_EXECUTE
		 Выполнение процедуры.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_OO_PROC_EXECUTE|AuditLog|Unknown|act=Выполнение
		 cs1Label=MetabaseId cs1=WAREHOUSE rt=Jul 17 2025 10:15:25+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Удаление некорректных данных cs5Label=ObjectId cs5=_DELETE_INCORRECT_DATA
		 msg=


		 FSAP_EV_OO_PROC_ALTER
		 Изменение текста процедуры.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_OO_PROC_ALTER|AuditLog|Unknown|act=Изменение
		 текста cs1Label=MetabaseId cs1=WAREHOUSE rt=Jul 16 2025 08:48:01+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Процедура cs5Label=ObjectId cs5=P_UPDATE msg=


		 FSAP_EV_OO_MSPRB_EXECUTE
		 Запуск расчёта задачи моделирования.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_OO_MSPRB_EXECUTE|AuditLog|Unknown|act=Выполнение
		 cs1Label=MetabaseId cs1=WAREHOUSE rt=Aug 07 2025 15:37:32+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=Admin cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Задача моделирования cs5Label=ObjectId cs5=OBJ20162 msg=


		 FSAP_EV_OO_MSVAL_EXECUTE
		 Выполнение правила валидации.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_OO_MSVAL_EXECUTE|AuditLog|Unknown|act=Execution
		 cs1Label=MetabaseId cs1=WAREHOUSE rt=Dec 08 2025 11:44:34+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Новое правило валидации cs5Label=ObjectId cs5=OBJ33886 msg=


		 FSAP_EV_OO_SCHT_EXECUTE
		 Выполнение задачи в контейнере запланированных задач.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_OO_SCHT_EXECUTE|AuditLog|Unknown|act=Выполнение
		 cs1Label=MetabaseId cs1=WAREHOUSE rt=Feb 05 2025 14:48:46+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Выполнение модуля cs5Label=ObjectId cs5=OBJ414410 msg=


		 FSAP_EV_OO_CUBE_WRITE_DATA
		 Сохранение данных в куб.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_OO_CUBE_WRITE_DATA|AuditLog|Unknown|act=Сохранение
		 данных cs1Label=MetabaseId cs1=WAREHOUSE rt=Jul 30 2025 10:42:04+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Куб cs5Label=ObjectId cs5=OBJ444939 msg=


		 FSAP_EV_OO_CUBE_READ_FORMULAS
		 Чтение формул вычисляемого куба.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_OO_CUBE_READ_FORMULAS|AuditLog|Unknown|act=Чтение
		 формул cs1Label=MetabaseId cs1=WAREHOUSE rt=Apr 09 2025 12:31:19+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Вычисляемый куб cs5Label=ObjectId cs5=CALC_CUBE msg=


		 FSAP_EV_OO_CUBE_SAVE_FORMULAS
		 Сохранение формул вычисляемого куба.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_OO_CUBE_SAVE_FORMULAS|AuditLog|Unknown|act=Сохранение
		 формул cs1Label=MetabaseId cs1=WAREHOUSE rt=Aug 07 2025 17:08:36+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Вычисляемый куб cs5Label=ObjectId cs5=CALC_CUBE msg=


		 FSAP_EV_OO_CUBE_EXECUTE
		 Выполнение загрузчика данных в куб.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_OO_CUBE_EXECUTE|AuditLog|Unknown|act=Выполнение
		 cs1Label=MetabaseId cs1=WAREHOUSE rt=Aug 07 2025 15:03:14+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=Admin cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Загрузчик в куб cs5Label=ObjectId cs5=OBJ20137 msg=


		 FSAP_EV_OO_DB_OPEN_CONNECTION
		 Открытие соединения объекта «База данных».
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_OO_DB_OPEN_CONNECTION|AuditLog|Unknown|act=Открытие
		 соединения cs1Label=MetabaseId cs1=WAREHOUSE rt=Jul 16 2025 15:13:05+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=База данных_test cs5Label=ObjectId cs5=OBJ443816 msg=Сервер:
		 <test.server>


		 FSAP_EV_OO_ETL_TASK_EXECUTE
		 Выполнение задачи ETL.
		 act, cs1Label, cs1, rt, outcome, shost, suser, cs2Label, cs2,
		 cs3Label, cs3, cs4Label, cs4, cs5Label, cs5, cs6Label, cs6, msg.
		 CEF:0|Foresight|Foresight Analytics Platform|10.9.0|FSAP_EV_OO_ETL_TASK_EXECUTE|AuditLog|Unknown|act=Выполнение
		 cs1Label=MetabaseId cs1=WAREHOUSE rt=Jul 16 2025 16:15:28+05:00
		 outcome=Success shost=IVANOV suser=ivan.ivanov cs2Label=PlatformUser
		 cs2=ADMIN cs3Label=IPAddresses cs3=10.10.10.1 cs4Label=ObjectName
		 cs4=Задача ETL cs5Label=ObjectId cs5=OBJ443815 msg=


См. также:


[Системные
 требования](SystemRequirement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
