# IPrxDataCache.UseDataCache

IPrxDataCache.UseDataCache
-


# IPrxDataCache.UseDataCache


## Синтаксис


UseDataCache: Boolean;


## Описание


Свойство UseDataCache определяет
 признак использования кеширования данных.


## Комментарии


Допустимые значения:


	- True. Значение по умолчанию.
	 Кеширование данных включено;


	- False. Кеширование данных
	 отключено.


В кеш попадают все данные, полученные из источника в соответствии с
 указанной [отметкой](../IPrxSlice/IPrxSlice.Selection.htm).
 При изменении отметки данные берутся из кеша. Отсутствующие данные извлекаются
 из источника данных и также кешируются.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGULAR_REPORT», содержащего реляционную область данных.


Добавьте ссылки на системные сборки Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    DataCache: IPrxDataCache;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

	    DataCache := Report.TableSources.Item(0).DataCache;

	    DataCache.UseDataCache := False;

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для реляционной области данных будет
 отключено кеширование.


См. также:


[IPrxDataCache](IPrxDataCache.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
