# IAdhocDimSyncItem.IsGeneral

IAdhocDimSyncItem.IsGeneral
-


# IAdhocDimSyncItem.IsGeneral


## Синтаксис


IsGeneral: Boolean;


## Описание


Свойство IsGeneral определяет,
 является ли синхронизируемое измерение основным.


## Комментарии


Допустимые значения:


	- True. Измерение является
	 основным. В индексе синхронизации может быть только одно основное
	 измерение;


	- False. Измерение не
	 является основным.


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «ADHOC_SYNCDEM». Данная аналитическая панель
 должна содержать несколько синхронизируемых измерений.


Добавьте ссылки на системные сборки: Adhoc, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    Adhoc: IAdhocReport;

    DimsSync: IAdhocDimsSynchronization;

    i, j: Integer;

    Index: IAdhocDimSyncIndex;

    Item: IAdhocDimSyncItem;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем аналитическую панель

    Adhoc := mb.ItemById("ADHOC_SYNCDEM").Edit As IAdhocReport;

    // Получаем синхронизируемые измерения

    DimsSync := Adhoc.Synchronization.Dimensions;

    // Выполняем итерации по всем индексам синхронизации

    // и указываем, что последнее измерение в каждом индексе является основным

    For i := 0 To DimsSync.Count - 1 Do

        Index := DimsSync.Item(i);

        For j := 0 To Index.Dimensions.Count - 1 Do

            Item := Index.Dimensions.Item(j);

            Item.IsGeneral := False;

        End For;

        Index.GeneralDimSyncItem := Item;

    End For;

    // Сохраняем изменения

    (Adhoc As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в аналитической панели заданы основные
 измерения для каждого индекса синхронизации.


См. также:


[IAdhocDimSyncItem](IAdhocDimSyncItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
