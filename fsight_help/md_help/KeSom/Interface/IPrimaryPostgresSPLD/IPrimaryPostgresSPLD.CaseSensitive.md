# IPrimaryPostgresSPLD.CaseSensitive

IPrimaryPostgresSPLD.CaseSensitive
-


# IPrimaryPostgresSPLD.CaseSensitive


## Синтаксис


		CaseSensitive: Boolean;


## Описание


Свойство CaseSensitive определяет
 признак учёта регистра при работе с репозиторием на сервере PostgreSQL.


## Комментарии


Допустимые значения:


	- True. При работе с репозиторием
	 на сервере PostgreSQL учитывается различный регистр наименования репозитория,
	 идентификаторов объектов и их полей в СУБД;


	- False. При работе с
	 репозиторием на сервере PostgreSQL наименование репозитория, идентификаторы
	 объектов и их полей в СУБД преобразуются к нижнему регистру в момент
	 обращения платформы к серверу.


При настройке подключения к северу PostgreSQL учёт регистра можно определить
 одним из способов:


	- с помощью свойства [ISecurityPackageLogonData.ParamValue](../ISecurityPackageLogonData/ISecurityPackageLogonData.ParamValue.htm),
	 в котором используется параметр модуля безопасности с наименованием
	 «CASESENSITIVE» и строковым значением True
	 или False. Использование данного
	 способа определения учёта регистра приведено в примере для [ISecurityPackageLogonData.ParamValue](../ISecurityPackageLogonData/ISecurityPackageLogonData.ParamValue.htm);


	- через [преобразование
	 типов](Fore.chm::/07_Operations/Operations_of_the_creation_object.htm). Объект, реализующий интерфейс [ISecurityPackageLogonData](../ISecurityPackageLogonData/ISecurityPackageLogonData.htm),
	 преобразовывается к интерфейсу [IPrimaryPostgresSPLD](IPrimaryPostgresSPLD.htm)
	 с помощью операции As и используется свойство CaseSensitive.


## Пример


Использование свойства приведено в примере для [IPrimaryPostgresSPLD.Database](IPrimaryPostgresSPLD.Database.htm).


См. также:


[IPrimaryPostgresSPLD](IPrimaryPostgresSPLD.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
