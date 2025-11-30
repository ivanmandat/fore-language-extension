# Установка серверной части конструктора бизнес-приложений на Apache2

Установка серверной части конструктора бизнес-приложений на Apache2
-


# Установка серверной части конструктора
 бизнес-приложений на Apache2


Установка серверной части конструктора бизнес-приложений на веб-сервер
 Apache2 выполняется автоматически с помощью дистрибутива или [вручную](../../UiWebSetup/03_Setup_Web/configure_apache.htm).
 Ручной способ установки и настройки Apache2 используется в качестве альтернативного
 варианта для доступа к ресурсам конструктора бизнес-приложений.


Для установки серверной части конструктора бизнес-приложений на веб-сервер
 Apache2 в ОС Linux:


	- Убедитесь в выполнении следующих условий:


		- установлен [BI-сервер](../../UiWebSetup/Install_Web_on_Linux.htm)
		 и веб-сервер Apache2;


		- доступна сеть Интернет;


		- установка серверной части конструктора бизнес-приложений
		 производится от имени пользователя, обладающего правами локального
		 администратора компьютера.


	- Скопируйте дистрибутив из [комплекта
	 поставки продукта «Форсайт. Аналитическая платформа»](../../02_AK_Install/DistributionKit.htm#linux)
	 в домашнюю директорию /home/<имя
	 пользователя>:


		- foresight-fp10.x-dba*.deb
		 для Debian-подобных дистрибутивов;


		- foresight-fp10.x-dba*.rpm
		 для RedHat-подобных дистрибутивов и ALT Linux.


	- Установите скопированный дистрибутив серверной части конструктора
	 бизнес-приложений:


		- Astra Linux:


sudo dpkg -i foresight-fp10.x-dba*.deb


		- Rocky Linux:


sudo yum localinstall
 foresight-fp10.x-dba*.rpm


		- РЕД ОС:


sudo dnf install foresight-fp10.x-dba*.rpm


		- ALT Linux:


sudo apt-get install
 -y foresight-fp10.x-dba*.rpm


Примечание.
 Для установки пакетов может использоваться другая утилита.


	- Отключите режим AstraMode для экземпляра apache2-fp10.x-dba,
	 если используется Astra Linux SE 1.7. Для этого замените строку «#AstraMode
	 on» в конфигурационном файле /etc/apache2-fp10.x-dba/apache2.conf на
	 «AstraMode off».


	- При необходимости определите IP-адрес или DNS-имя сервера, на
	 котором установлена серверная часть конструктора бизнес-приложений:


ip address

hostname


Данные параметры используются при [настройке
 конфигурации конструктора бизнес-приложений](../Configuration_Designer_of_Business_Applications.htm) и [проверке
 работы BI-сервера](../../UiWebSetup/01_BIServer/CheckBIServices.htm).


После выполнения действий серверная часть конструктора бизнес-приложений
 будет установлена в папку /opt/foresight/fp10.x-dba.
 При установке будет создан и настроен новый экземпляр apache2-fp10.x-dba
 для Astra Linux, httpd-fp10.x-dba
 для РЕД ОС, Rocky Linux, httpd2-fp10.x-dba
 для ALT Linux. В файл с переменными окружения /etc/opt/foresight/fp10.x-dba/envvars будут добавлены
 три переменные: PATH_TO_DBA, PP_SOM и BI_HOST. В переменных будут заданы
 путь до места расположения файлов конструктора бизнес-приложений, адрес
 и хост BI-сервера по умолчанию. При необходимости измените значения переменных.
 Данные переменные используются в файле конфигурации Apache2:


	- /etc/apache2-fp10.x-dba/sites-available/webserver.conf
	 в Astra Linux;


	- /etc/httpd-fp10.x-dba/conf.d/00-virtualhost.conf
	 в РЕД ОС, Rocky Linux;


	- /etc/httpd2-fp10.x-dba/conf/sites-available/default.conf
	 в ALT Linux.


Конструктор бизнес-приложений настроен на работу с локальным BI-сервером
 по порту 8810. Адрес
 BI-сервера можно изменить в файле /opt/foresight/fp10.x-dba/config/config.json.
 Сам конструктор бизнес-приложений будет доступен по порту 8210.


См. также:


[Серверная
 часть конструктора бизнес-приложений](../Backend_Designer_of_Business_Applications.htm) | [Ручная
 установка и настройка Apache2 для доступа к конструктору бизнес-приложений](Manual_Install_Designer_of_Business_Applications_Apache.htm)
 | [Установка
 серверной части конструктора бизнес-приложений на IIS](../ASP_NET/Install_Backend_Designer_of_Business_Applications_ASP_NET.htm) | [Установка
 серверной части конструктора бизнес-приложений на Java](../Java/Install_Backend_Designer_of_Business_Applications_Java.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
