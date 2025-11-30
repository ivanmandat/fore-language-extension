# Подключение к системе управления версиями в ОС Linux

Подключение к системе управления версиями в ОС Linux
-


# Подключение к системе управления версиями в ОС Linux


При работе в ОС Linux поддерживается работа с системой управления версиями
 Git. Для подключения к Git необходимо установить пакет [libgit2](https://libgit2.org/)
 версии 0.28.*.


Настройки подключения указываются для каждого репозитория в файле [Metabases.xml](Setup.chm::/06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm)
 или в реестре и в дальнейшем экспортируются в файл [registry.reg](Setup.chm::/UiWebSetup/03_Setup_Web/config_and_setting.htm):


	- VcsLocalPath и VcsStoredPath. Путь до папки клона
	 репозитория, в которой хранятся локальные файлы объектов.


	- VcsName. Тип системы
	 управления версиями - «Git».


Примечание.
 Для работы с системой управления версиями Git предполагается, что уже
 создан репозиторий и создан его локальный клон.


Если удалённый репозиторий требует авторизации, то она возможна только
 посредством SSH. Для этого необходимо в ветке реестра [HKEY_CURRENT_USER\Software\Foresight\Foresight Analytics Platform\10.0\DevEnv\Git] добавить следующие ключи:


	- UserName. Имя пользователя,
	 под которым осуществляется авторизация;


	- SshkeyPath. Путь до
	 приватного SSH-ключа. Рядом с ним должен лежать публичный ключ (имеет
	 имя: <имя приватного>.pub).


Полученную ветку реестра необходимо экспортировать в файл и сохранить
 его в домашний каталог Linux, где расположен файл [registry.reg](Setup.chm::/UiWebSetup/03_Setup_Web/config_and_setting.htm).


[![](../../Opened.gif)![](../../Closed.gif)Пример файла](javascript:TextPopup(this))


	Windows Registry Editor Version 5.00


	[HKEY_CURRENT_USER\Software\Foresight\Foresight Analytics Platform\10.0\DevEnv\Git]


	"UserName"="user"


	"SshKeyPath"="/home/organization/.ssh/id_rsa"


Имя пользователя в реестре можно не указывать, но при этом путь до удалённого
 репозитория, который указан в файле «/.git/config», должен иметь вид:
 ssh://<имя пользователя>@<хост.поддомен.домен>:<порт>/<путь
 до удалённого репозитория>


Инструкция по генерации SSH-ключей для Azure Devops доступна на сайте
 [https://docs.microsoft.com/en-us/azure/devops/repos/git/use-ssh-keys-to-authenticate?view=azure-devops](https://docs.microsoft.com/en-us/azure/devops/repos/git/use-ssh-keys-to-authenticate?view=azure-devops).


См. также:


[Разработка
 приложений в команде](../../01_Development_Environment/06_Version_Control_System/VSC_Introduction.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
