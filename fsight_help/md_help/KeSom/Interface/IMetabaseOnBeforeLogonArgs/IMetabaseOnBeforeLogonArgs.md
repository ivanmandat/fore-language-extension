# IMetabaseOnBeforeLogonArgs

IMetabaseOnBeforeLogonArgs
-


# IMetabaseOnBeforeLogonArgs


Сборка: Metabase;


## Описание


Интерфейс IMetabaseOnBeforeLogonArgs
 описывает аргумент события, наступающего при подключении к репозиторию
 с помощью веб-сервиса.


## Иерархия наследования


IMetabaseOnBeforeLogonArgs


## Комментарии


Аргумент используется в событии [IMetabaseCustomEvents.OnBeforeLogon](../IMetabaseCustomEvents/IMetabaseCustomEvents.OnBeforeLogon.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AdditionalData](IMetabaseOnBeforeLogonArgs.AdditionalData.htm)
		 Свойство AdditionalData
		 возвращает дополнительные данные, которые могут использоваться
		 при подключении к репозиторию.


		 ![](../../Property_Image.gif)
		 [AllowLogon](IMetabaseOnBeforeLogonArgs.AllowLogon.htm)
		 Свойство AllowLogon
		 определяет, разрешено ли пользователю подключение к репозиторию.


		 ![](../../Property_Image.gif)
		 [Credentials](IMetabaseOnBeforeLogonArgs.Credentials.htm)
		 Свойство Credentials
		 возвращает учётные данные, которые были переданы в операцию веб-сервиса
		 при подключении к репозиторию.


		 ![](../../Property_Image.gif)
		 [Handled](IMetabaseOnBeforeLogonArgs.Handled.htm)
		 Свойство Handled определяет,
		 будет ли переопределено подключение к репозиторию.


		 ![](../../Property_Image.gif)
		 [Metabase](IMetabaseOnBeforeLogonArgs.Metabase.htm)
		 Свойство Metabase возвращает
		 соединение с репозиторием, созданное с сохранёнными учетными данными
		 по умолчанию.


		 ![](../../Property_Image.gif)
		 [ResultMetabase](IMetabaseOnBeforeLogonArgs.ResultMetabase.htm)
		 Свойство ResultMetabase
		 определяет результирующее соединение с репозиторием, моникёр которого
		 будет передан в веб-сервис.


См. также:


[Интерфейсы
 сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
