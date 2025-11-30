# Обновление веб-приложения в ОС Linux

Обновление веб-приложения в ОС Linux
-


# Обновление веб-приложения в ОС Linux


В [комплект поставки](../02_AK_Install/DistributionKit.htm)
 входят [дистрибутивы](../02_AK_Install/DistributionKit.htm#linux)
 foresight-fp10.x-biserver*,
 foresight-fp10.x-webserver*,
 которые используются при [установке
 BI-сервера](../UiWebSetup/Install_Web_on_Linux.htm) и [серверной
 части веб-приложения](../UiWebSetup/03_Setup_Web/ApacheWebApp/Apache_WebApp.htm). С помощью данных дистрибутивов можно произвести
 обновление BI-сервера и серверной части веб-приложения в рамках одного
 релиза. Каждый пользователь должен самостоятельно произвести обновление
 на локальном компьютере.


Перед обновлением создайте копию базы данных и текущего сервера, на
 которых будет выполняться обновление и тестирование новой версии веб-приложения.
 Также убедитесь, что все пользователи отключены от репозитория и доступна
 сеть Интернет. Обновление BI-сервера и серверной части веб-приложения
 выполняется от имени пользователя, обладающего правами локального администратора
 компьютера.


Для обновления веб-приложения в ОС Linux:


	- [Обновите BI-сервер](#bi_server).


	- [Обновите серверную часть веб-приложения](#web_server).


Для обновления [установленных](../Extensions/install_or_update_extensions.htm)
 расширений «[Алгоритмы
 расчёта](CalculationAlgorithm.chm::/Purpose.htm)», «[Управление
 бизнес-процессами](BPM.chm::/Modeling_of_business_processes.htm)», «[Интерактивные
 формы ввода данных](DataEntryForms.chm::/DataEntryForms_Purpose.htm)», «[Конструктор бизнес-приложений](Constructor.chm::/Intro/Designer_business_applications.htm)»,
 «[Кеш
 кубов](UiNav.chm::/02_Navigator/Cache_In_Blob.htm#console)» обратитесь
 к разделу «[Обновление
 расширений](../Extensions/Update/update_extensions.htm)».


Для обновления версии репозитория метаданных обратитесь к разделу «[Обновление версии
 репозитория метаданных](../05_RepoMngr/Linux/Update_Repository.htm)».


## Обновление BI-сервера


Для обновления BI-сервера:


	- Остановите текущие запущенные процессы BI-сервера:


		- Astra Linux:


sudo
 systemctl stop apache2-fp10.x


		- РЕД ОС, Rocky Linux:


sudo
 systemctl stop httpd-fp10.x


		- ALT Linux:


sudo
 systemctl stop httpd2-fp10.x


	- Остановите службу [планировщика
	 задач](uiappsrv.chm::/3_Work_Tasks/Stop_Runnig_Tasks.htm) scheduler.service, если настроено выполнение
	 задач по расписанию:


sudo systemctl stop scheduler.service


	- Скопируйте дистрибутив foresight-fp10.x-biserver*.deb/rpm
	 из комплекта поставки в домашнюю директорию /home/<имя
	 пользователя>. Наименование дистрибутива зависит от версии
	 OC Linux.


При необходимости определите пользователя,
 от имени которого будет обновлён BI-сервер:


whoami


	- Установите скопированный дистрибутив BI-сервера:


		- Astra Linux:


sudo
 dpkg -i foresight-fp10.x-biserver*.deb


		- Rocky Linux:


sudo
 yum localinstall foresight-fp10.x-biserver*.rpm


		- РЕД ОС:


sudo
 dnf install foresight-fp10.x-biserver*.rpm


		- ALT Linux:


sudo
 apt-get install -y foresight-fp10.x-biserver*.rpm


	- [Проверьте
	 работу BI-сервера](../UiWebSetup/01_BIServer/CheckBIServices.htm).


После выполнения действий BI-сервер будет обновлён с текущей на новую
 версию.


## Обновление серверной части веб-приложения


Для обновления серверной части веб-приложения:


	- Скопируйте дистрибутив foresight-fp10.x-webserver*.deb/rpm
	 из комплекта поставки в домашнюю директорию /home/<имя
	 пользователя>. Наименование дистрибутива зависит от версии
	 OC Linux.


	- Установите скопированный дистрибутив серверной части веб-приложения:


		- Astra Linux:


sudo dpkg -i foresight-fp10.x-webserver*.deb


		- Rocky Linux:


sudo yum localinstall
 foresight-fp10.x-webserver*.rpm


		- РЕД ОС:


sudo dnf install foresight-fp10.x-webserver*.rpm


		- ALT Linux:


sudo apt-get install
 -y foresight-fp10.x-webserver*.rpm


	- Убедитесь, что при использовании Astra Linux SE 1.7 отключён
	 режим AstraMode. В конфигурационном файле /etc/apache2-fp10.x-web/apache2.conf
	 должна содержаться строка «AstraMode off».


После выполнения действий серверная часть веб-приложения будет обновлена
 с текущей на новую версию.


См. также:


[Обновление
 продукта «Форсайт. Аналитическая платформа»](Update.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
