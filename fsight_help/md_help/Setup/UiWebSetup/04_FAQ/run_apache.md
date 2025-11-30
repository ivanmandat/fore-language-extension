# Настройка запуска Apache Tomcat в качестве службы на Linux

Настройка запуска Apache Tomcat в качестве службы на Linux
-


# Настройка запуска Apache Tomcat в качестве службы на Linux


Чтобы не запускать Apache Tomcat каждый раз после перезапуска операционной
 системы вручную, можно настроить автоматический запуск Apache Tomcat в
 качестве службы. Это актуально, если Apache Tomcat был скачан архивом,
 а не установлен из репозитория. Для этого выполните следующие действия:


	- Скопируйте в домашний каталог файл tomcat, расположенный в папке
	 с установленным Apache Tomcat.


	- Отредактируйте файл tomcat для указания своих переменных окружения
	 и имени пользователя для Tomcat:


nano ~/tomcat


	- Измените значение параметров CATALINA_HOME и CATALINA_BASE на
	 /opt/tomcat7/<имя архива Apache Tomcat 7>, а для параметра TOMCAT_USER
	 укажите имя созданного пользователя для Tomcat. Используя данные из
	 примера получится:


CATALINA_HOME=/opt/tomcat7/<имя
 архива Apache Tomcat 7>


CATALINA_BASE=/opt/tomcat7/<имя
 архива Apache Tomcat 7>


TOMCAT_USER=tomcat


	- Перенесите файл tomcat в каталог /etc/init.d/, выполнив в терминале
	 команды:


sudo cp tomcat /etc/init.d/


sudo chmod +x /etc/init.d/tomcat


	- Добавьте Apache Tomcat в список системных служб, выполнив в
	 терминале команду:


sudo -u tomcat /opt/tomcat7/<имя
 архива Apache Tomcat 7>/bin/catalina.sh stop


sudo chkconfig --add
 tomcat


	- Включите службу Tomcat. Для этого откройте список служб, выполнив
	 команду главного меню Система > Администратор > Службы. В открывшемся
	 окне в списке служб выберите Tomcat и нажмите кнопку «Включить». Дополнительно
	 выполните в терминале команду:


sudo chkconfig tomcat
 on


	- Запустите Apache Tomcat, выполнив в терминале команду:


sudo service tomcat start


См. также:


[Вопросы
 и ответы](Setup_FAQ.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
