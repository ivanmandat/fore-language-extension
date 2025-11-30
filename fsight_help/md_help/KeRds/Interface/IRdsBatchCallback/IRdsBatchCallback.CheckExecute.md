# IRdsBatchCallback.CheckExecute

IRdsBatchCallback.CheckExecute
-


# IRdsBatchCallback.CheckExecute


## Синтаксис


CheckExecute(CheckType: Integer): Boolean;


## Параметры


CheckType - тип конфликта,
 который необходимо проверить.


## Описание


Метод CheckExecute реализует
 событие, возникающее при выполнении метода [Execute](../IRdsDictionaryBatch/IRdsDictionaryBatch.Execute.htm),
 в случае возникновения конфликтов.


## Комментарии


Данное событие произойдет, если во время выполнения возникают какие-либо
 разногласия, которые необходимо разрешить. Если пользовательская функция
 возвращает значение True, то конфликт
 считается разрешенным. Если функция возвращает значение False,
 то выполнение прекращается.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «RDS». В данном репозитории создан справочник НСИ с идентификатором «Country».
 Для справочника включено отслеживание ссылок на элементы.


			Sub UserProc;

Var

    MB: IMetabase;

    Dict: IRdsDictionary;

    DictInst: IRdsDictionaryInstance;

    DictBatch: IRdsDictionaryBatch;

    DelBatch: IRdsDictionaryBatchDelete;

    BatchFilters: IRdsDictionaryFilterConditions;

    Filter: IRdsDictionaryFilterCondition;

    Attr: IRdsAttribute;

Begin

    MB := MetabaseClass.Active;

    Dict := MB.ItemByIdNamespace("Country", MB.GetObjectKeyById("RDS")).Bind As IRdsDictionary;

    DictInst := Dict.Open(Null) As IRdsDictionaryInstance;

    DictBatch := DictInst.CreateBatch(RdsDictionaryBatchType.Delete);

    DelBatch := DictBatch As IRdsDictionaryBatchDelete;

    BatchFilters := DelBatch.Filter;

    Attr := Dict.Attributes.FindById("ACTUAL");

    Filter := BatchFilters.Add(Attr);

    Filter.Value := False;

    DelBatch.Callback := New MyCallback.Create;

    DelBatch.Execute;

End Sub UserProc;


Class MyCallback: Object, IRdsBatchCallback

    Function OnError(Element: Integer; ErrorType: integer; Error: IException): RdsBatchCallbackContinue;

    Begin

        Debug.WriteLine("Ошибка!");

        Debug.WriteLine("    элемент: " + Element.ToString);

        Debug.WriteLine("    тип ошибки: " + ErrorType.ToString);

        Debug.WriteLine("    текст ошибки: " + Error.Message);

        Return RdsBatchCallbackContinue.Continue_;

    End function OnError;


    Function CheckExecute(CheckType: Integer): Boolean;

    Begin

        If CheckType = RdsCheckExecuteDeleteBatch.DeleteDepends Then

            Return False;

        End If;

    End Function CheckExecute;

End Class MyCallback;


При выполнении примера будет создан пакет для удаления элементов с обработчиком
 исключительных ситуаций и разрешения конфликтов. Пакет будет выполнен.
 Все ошибки, возникшие во время выполнения будут выведены в окно консоли.
 При возникновении конфликта, связанного с удалением объектов, от которых
 зависят объекты репозитория, выполнение пакета будет отменено.


См. также:


[IRdsBatchCallback](IRdsBatchCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
