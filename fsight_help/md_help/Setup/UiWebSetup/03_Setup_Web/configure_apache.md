# Ручная установка и настройка Apache2 для доступа к ресурсам веб-приложения

Ручная установка и настройка Apache2 для доступа к ресурсам веб-приложения
-


# Ручная установка и настройка Apache2
 для доступа к ресурсам веб-приложения


Ниже приведён пример ручной установки и настройки Apache2 для доступа
 к ресурсам веб-приложения в ОС Linux.


Совет. Для установки
 серверной части веб-приложения в ОС Linux рекомендуется использовать дистрибутивы,
 входящие в [комплект
 поставки продукта «Форсайт. Аналитическая платформа»](../../02_AK_Install/DistributionKit.htm).


Для установки серверной части веб-приложения вручную:


	- Убедитесь, что установлен [BI-сервер](../UiWebSetup_TitlePage.htm).


	- Создайте каталог, в котором будут располагаться файлы серверной
	 части веб-приложения, например: /opt/foresight/fp/10.x.


	- Скопируйте архив pp.war из папки Java_PPWeb, входящей в [комплект
	 поставки](../../02_AK_Install/DistributionKit.htm).


	- Вставьте архив pp.war в каталог /opt/foresight/fp/10.x
	 и распакуйте его с помощью команды:


unzip pp.war


	- Откройте файл [PP.xml](PP_config_Java.htm#pp_xml),
	 расположенный в каталоге /opt/foresight/fp/10.x/config,
	 для настройки конфигурации веб-приложения. По умолчанию в файле содержится
	 следующая структура:


<?xml version="1.0"
 encoding="utf-8" ?>

<pp>

    <service url="" />

    <metabase id="" />

</pp>


	- Задайте параметры подключения к BI-серверу:


		- service. Укажите
		 путь, по которому располагается BI-сервер, в качестве значения
		 атрибута url:


			- если BI-сервер был установлен с помощью установочного
			 пакета:


			http://localhost:8810/FPBI_App_v10.x/axis2/services/PP.SOM.Som


			- если BI-сервер был установлен на веб-сервер Apache2:


			http://localhost:80/axis2/services/PP.SOM.Som


			- если BI-сервер был запущен с помощью служебного приложения
			 [axis2_http_server](../../05_RepoMngr/Setup_RepoMngr_Main.htm#axis2):


			http://localhost:9090/axis2/services/PP.SOM.Som


		- metabase. Укажите
		 идентификатор репозитория, заданный при настройке BI-сервера в
		 файле registry.reg или Metabases.xml, в качестве значения атрибута
		 id. Для получения подробной
		 информации о файлах обратитесь к разделу «[Конфигурация
		 и настройка](config_and_setting.htm)».


Пример файла PP.xml:


<?xml version="1.0"
 encoding="utf-8" ?>

<pp>

   <service url="http://localhost:8810/FPBI_App_v10.x/axis2/services/PP.SOM.Som"/>

    <metabase id="WAREHOUSE" />

</pp>


После выполнения действий будет установлена серверная часть веб-приложения.
 Задайте дополнительные настройки для Apache2 в зависимости от операционной
 системы, в которой запущен веб-сервер:


	- [на
	 ОС Astra Linux](Astra_Linux/configure_apache_to_access_resources_web_pp.htm);


	- [на
	 RedHat-подобных дистрибутивах](RHEL/configure_apache_to_access_resources_web_pp.htm);


	- [на
	 ОС ALT Linux](ALT_Linux/Configure_Apache_to_Access_Resources_Web_ALT_Linux.htm).


См. также:


[Установка
 серверной части веб-приложения на Apache2](ApacheWebApp/Apache_WebApp.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
