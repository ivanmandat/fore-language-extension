# IRdsDictionaryInstance.CreateBatch

IRdsDictionaryInstance.CreateBatch
-


# IRdsDictionaryInstance.CreateBatch


## Синтаксис


CreateBatch(BatchType: [RdsDictionaryBatchType](../../Enums/RdsDictionaryBatchType.htm)):
 [IRdsDictionaryBatch](../IRdsDictionaryBatch/IRdsDictionaryBatch.htm);


## Параметры


BatchType. Тип пакета элементов.


## Описание


Метод CreateBatch создает пакет
 элементов справочника НСИ.


## Комментарии


Пакет предназначен для выполнения каких-либо действий над всеми элементами
 в пакете одновременно.


## Пример


Для выполнения примера в репозитории требуется наличие версионного табличного
 справочника НСИ с идентификатором DICT.


Добавьте ссылки на системные сборки: Metabase, Rds.


			Sub UserProc;

Var

    mb: IMetabase;

    RdsDictObj: IMetabaseObject;

    DictInst: IRdsDictionaryInstance;

    DictBatch: IRdsDictionaryBatch;

    DelBatch: IRdsDictionaryBatchDelete;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем справочник

    RdsDictObj := mb.ItemById("DICT").Edit;

    DictInst := RdsDictObj.Open(Null) As IRdsDictionaryInstance;

    // Создаем пакет для удаления элементов

    DictBatch := DictInst.CreateBatch(RdsDictionaryBatchType.Delete);

    If DictBatch.BatchType = RdsDictionaryBatchType.Delete Then

        DelBatch := DictBatch As IRdsDictionaryBatchDelete;

        // Задаем дату окончания действия для значений элементов

        DelBatch.CloseDate := DateTime.Parse("30.12.2999");

    End If;

    // Выполняем удаление элементов и выводим результат в окно консоли

    Debug.WriteLine("Число обработанных элементов: " + DelBatch.Execute.ToString);

    Debug.WriteLine("Число удаленных элементов: " + DelBatch.Count.ToString);

    RdsDictObj.Save;

End Sub UserProc;


В результате выполнения примера создан пакет для удаления элементов
 и задана дата окончания действия 30.12.2999 г. В окно консоли выведено
 количество обработанных и удаленных элементов.


См. также:


[IRdsDictionaryInstance](IRdsDictionaryInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
