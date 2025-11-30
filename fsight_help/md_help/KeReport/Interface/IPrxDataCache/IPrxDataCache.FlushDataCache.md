# IPrxDataCache.FlushDataCache

IPrxDataCache.FlushDataCache
-


# IPrxDataCache.FlushDataCache


## Синтаксис


FlushDataCache;


## Описание


Метод FlushDataCache очищает
 содержимое кеша данных.


## Комментарии


Метод актуален, если включено кеширование данных, то есть [IPrxDataCache.UseDataCache](IPrxDataCache.UseDataCache.htm) = True.


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

    DataCache.UseDataCache := True;

    DataCache.FlushDataCache;

    (Report As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера для реляционной области данных будет
 произведена очистка кеша данных.


См. также:


[IPrxDataCache](IPrxDataCache.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
