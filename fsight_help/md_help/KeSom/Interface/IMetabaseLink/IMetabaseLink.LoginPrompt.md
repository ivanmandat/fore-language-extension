# IMetabaseLink.LoginPrompt

IMetabaseLink.LoginPrompt
-


# IMetabaseLink.LoginPrompt


## Синтаксис


LoginPrompt: Boolean;


## Описание


Свойство LoginPrompt определяет
 признак автоматического подключения к репозиторию.


## Комментарии


Допустимые значения:


	- True. Значение по умолчанию.
	 Автоматическое подключение не происходит, при установке соединения
	 с репозиторием будут запрошены [учётные
	 данные](UiNavObj.chm::/database/UiDb_database_authorization.htm);


	- False. Использовать
	 автоматическое подключение. Учётные данные для подключения указываются
	 в свойстве [IMetabaseLink.Credentials](IMetabaseLink.Credentials.htm)
	 или используются указанные при входе в репозиторий, если свойству
	 [IMetabaseLink.UseMetabaseCredentials](IMetabaseLink.UseMetabaseCredentials.htm)
	 установлено значение True.


## Пример


Пример использования приведен в описании свойства [IMetabaseLink.Credentials](IMetabaseLink.Credentials.htm).


См. также:


[IMetabaseLink](IMetabaseLink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
