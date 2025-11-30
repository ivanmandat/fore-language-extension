# IAdoMdCatalog.AutoRefresh

IAdoMdCatalog.AutoRefresh
-


# IAdoMdCatalog.AutoRefresh


## Синтаксис


AutoRefresh: Boolean;


## Описание


Свойство AutoRefresh определяет,
 будет ли производиться автоматическое обновление структуры кубов.


## Комментарии


Допустимые значения:


	- True. Производится автообновление
	 структуры куба при его первом открытии или при открытии после очистки
	 кеша;


	- False. Автообновление
	 структуры кубов не производится. Обновление осуществляется при первом
	 подключении к репозиторию ADOMD или при выполнении методов [IAdoMdCatalogInstance.Refresh](../IAdoMdCatalogInstance/IAdoMdCatalogInstance.Refresh.htm),
	 [IAdoMdCatalogInstance.RefreshBySQL](../IAdoMdCatalogInstance/IAdoMdCatalogInstance.RefreshBySQL.htm),
	 [IAdoMdCube.Refresh](../IAdoMdCube/IAdoMdCube.Refresh.htm).


См. также:


[IAdoMdCatalog](IAdoMdCatalog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
