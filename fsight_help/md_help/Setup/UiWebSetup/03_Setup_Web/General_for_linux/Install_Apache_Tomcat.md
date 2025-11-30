# Установка и настройка веб-сервера Apache Tomcat

Установка и настройка веб-сервера Apache Tomcat
-


# Установка и настройка веб-сервера Apache Tomcat


Для установки Apache Tomcat в ОС Linux выполните следующие действия:


	- Создайте системного пользователя tomcat (без домашнего каталога,
	 без пароля, без права входа в систему):


sudo useradd -r -M tomcat


	- Скопируйте архив с установочным файлом Apache Tomcat 7 в домашний
	 каталог;


	- Создайте каталог /opt/tomcat7:


sudo mkdir /opt/tomcat7


	- Распакуйте архив в домашнем каталоге, выполнив в терминале команды:


cd /opt/tomcat7


sudo tar xvfz /home/foresight/<имя
 архива Apache Tomcat 7>.tar.gz


	- Добавьте пользователя Apache Tomcat с правами manager-gui.
	 Для этого откройте файл tomcat-users.xml, выполнив в терминале команду:


sudo nano /opt/tomcat7/<имя
 архива Apache Tomcat 7>/conf/tomcat-users.xml


Перейдите в конец файла и перед закрывающим
 тегом </tomcat-users> добавьте строки:


<role rolename="manager-gui"/>


<user username="имя
 пользователя системы" password="пароль пользователя системы"
 roles="manager-gui"/>


	- Если менялась версия Java (вместо OpenJDK была установлена
	 Oracle Java), то нужно изменить переменную JAVA_HOME в файле /home/foresight/.bashrc:


sudo nano ~/.bashrc


Замените значение переменной JAVA_HOME, если
 вы установили Oracle Java 7, на следующее:


export JAVA_HOME="/usr/lib/jvm/java-7-oracle"


	- Увеличьте допустимый лимит загружаемых файлов, отредактировав
	 файл web.xml и добавив по единице в начале числа к имеющимся значениям
	 параметров max-file-size и max-request-size:


sudo nano /opt/tomcat7/<имя
 архива Apache Tomcat 7>/webapps/manager/config/web.xml


Приведите параметры в разделе <multipart-config>
 к следующему виду:


<max-file-size>1524288000</max-file-size>


<max-request-size>1524288000</max-request-size>


	- Сделайте пользователя tomcat владельцем каталога /opt/tomcat7:


sudo chown -R tomcat:tomcat
 /opt/tomcat7


	- Запустите Apache Tomcat, выполнив в терминале команды:


cd /opt/tomcat7/<имя
 архива Apache Tomcat 7>/bin/


sudo -u tomcat /catalina.sh
 run


В терминале должно появиться сообщение «INFO:
 Server startup in XXX ms», где XXX время запуска сервера».


Примечание.
 При перезапуске операционной системы сервер Apache Tomcat автоматически
 перезапускаться не будет. Чтобы настроить автоматический запуск сервера
 при загрузке системы, выполните настройки, приведенные в разделе «[Настройка
 запуска Apache Tomcat в качестве сервиса](../../04_FAQ/run_apache.htm)».


	- Для проверки работы Apache Tomcat откройте в браузере страницу
	 http://localhost:8080/.


Совет. Для доступа
 к веб-приложению обратитесь к статье «[Открытие
 веб-приложения](../Opening_Web_Application.htm)».


См. также:


[Установка
 серверной части веб-приложения на Java](../Java_WebApp.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
