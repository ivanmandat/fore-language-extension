# Перезапуск серверной части конструктора бизнес-приложений

Перезапуск серверной части конструктора бизнес-приложений
-


# Перезапуск серверной части конструктора бизнес-приложений


Для перезапуска серверной части конструктора бизнес-приложений перезапустите
 веб-сервер, на котором она установлена:


	- Apache2. Доступно только
	 в ОС Linux. Для перезапуска веб-сервера выполните команду:


		- Debian-подобные дистрибутивы:


sudo systemctl restart
 apache2-fp10.x-dba


		- RedHat-подобные дистрибутивы:


sudo systemctl restart
 httpd-fp10.x-dba


		- ALT Linux:


sudo systemctl restart
 httpd2-fp10.x-dba


	- IIS. Доступно только
	 в ОС Windows. Для получения подробной информации обратитесь к документации
	 [Internet Information Services](https://docs.microsoft.com/ru-ru/previous-versions/commerce-server/ms957500(v%3dcs.70));


	- Java. Для перезапуска
	 веб-сервера:


		- в OC Linux:


			- если Apache Tomcat запущен в качестве [службы](../UiWebSetup/04_FAQ/run_apache.htm)
			 OC Linux, то выполните команду:


sudo systemctl restart
 tomcat


Примечание.
 Файл tomcat является пользовательским и его наименование может отличаться.


			- если Apache Tomcat запущен вручную, то выполните команды:


/path_to_tomcat/bin/catalina.sh
 stop

/path_to_tomcat/bin/catalina.sh start


Где «path_to_tomcat»
 путь до установки Apache Tomcat.


		- в ОС Windows:


			- Откройте скрытые значки на панели задач.


			- Выполните команду контекстного меню Apache Tomcat «Stop service», затем выполните
			 команду «Start service».


После выполнения действий серверная часть конструктора бизнес-приложений
 будет перезапущена.


См. также:


[Серверная
 часть конструктора бизнес-приложений](Backend_Designer_of_Business_Applications.htm) | [Открытие
 бизнес-приложения](Open_Business_Application.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
