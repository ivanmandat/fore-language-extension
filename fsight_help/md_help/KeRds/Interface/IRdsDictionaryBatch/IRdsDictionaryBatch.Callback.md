# IRdsDictionaryBatch.Callback

IRdsDictionaryBatch.Callback
-


# IRdsDictionaryBatch.Callback


## Синтаксис


Callback: [IRdsBatchCallback](../IRdsBatchCallback/IRdsBatchCallback.htm);


## Описание


Свойство Callback определяет
 обработчик исключительных ситуаций, возникающих при выполнении пакета.


## Комментарии


Для обработчика следует создать собственный класс, переопределяющий
 все свойства и методы интерфейса [IRdsBatchCallback](../IRdsBatchCallback/IRdsBatchCallback.htm).


## Комментарии


По умолчанию Callback имеет
 значение Null, т.е. обработчик
 исключительных ситуаций отсутствует.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «RDS_REPO», содержащим неверсионный
 справочник НСИ с идентификатором «DICT».


Необходимо добавить ссылки на системные сборки «Metabase», «Rds».


			Sub UserProc;

Var

    mb: IMetabase;

    RdrRepoDescr: IMetabaseObjectDescriptor;

    RdsDictObj: IMetabaseObject;

    DictInst: IRdsDictionaryInstance;

    DictBatch: IRdsDictionaryBatch;

    DelBatch: IRdsDictionaryBatchDelete;

    Callback: IRdsBatchCallback;

Begin

    mb := MetabaseClass.Active;

    RdrRepoDescr := mb.ItemById("RDS_REPO");

    RdsDictObj := mb.ItemByIdNamespace("DICT", RdrRepoDescr.Key).Edit;

    DictInst := RdsDictObj.Open(Null) As IRdsDictionaryInstance;

    DictBatch := DictInst.CreateBatch(RdsDictionaryBatchType.Delete);

    DelBatch := DictBatch As IRdsDictionaryBatchDelete;

    Callback := New MCallback.Create;

    DelBatch.Callback := Callback;

    DelBatch.Execute;

    RdsDictObj.Save;

End Sub UserProc;


Public Class MCallback: Object, IRdsBatchCallback


    Function OnError(Element: Integer; ErrorType: Integer; Error: IException): RdsBatchCallbackContinue;

        Begin

            Debug.WriteLine("Ошибка!");

            Debug.WriteLine("    элемент: " + Element.ToString);

            Debug.WriteLine("    тип ошибки: " + ErrorType.ToString);

            Debug.WriteLine("    текст ошибки: " + Error.Message);

            Return RdsBatchCallbackContinue.Continue_;

    End function OnError;


    Function CheckExecute(CheckType: integer): boolean;

    Begin

        Return False;

    End Function CheckExecute;


End Class MCallback;


После выполнения примера будет создан пакет для удаления элементов
 с обработчиком исключительных ситуаций. Пакет будет выполнен. Все ошибки,
 возникшие во время выполнения будут выведены в окно консоли.


См. также:


[IRdsDictionaryBatch](IRdsDictionaryBatch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
