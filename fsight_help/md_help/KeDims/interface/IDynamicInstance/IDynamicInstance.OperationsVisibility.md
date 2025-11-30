# IDynamicInstance.OperationsVisibility

IDynamicInstance.OperationsVisibility
-


# IDynamicInstance.OperationsVisibility


## Синтаксис


OperationsVisibility: [DynamicInstanceOperationsVisibility](../../Enums/DynamicInstanceOperationsVisibility.htm);


## Описание


Свойство OperationsVisibility
 возвращает информацию о том, в каких справочниках будут отображаться изменения.


## Пример


Для выполнения примера предполагается наличие в репозитории табличного
 справочника НСИ с настроенной динамической загрузкой элементов и с идентификатором
 «DYNDIM».


Добавьте ссылки на системные сборки: Dimensions и Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Dim: IDynamicInstance;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Dim := MB.ItemById("DYNDIM").Open(Null) As IDynamicInstance;

    // Выведем наименования дочерних справочников

    For i := 1 To Dim.ChildrenInstancesCount Do

        Debug.WriteLine("Наименование дочернего справочника: " + Dim.ChildInstance(i
 - 1).DimInstance.Name);

    End For;

    // Выведем информацию о распространении изменений основного справочника

    Select Case Dim.OperationsVisibility

        Case DynamicInstanceOperationsVisibility.Local:

            Debug.WriteLine("Изменения основного справочника не распространяются на другие справочники");

        Case DynamicInstanceOperationsVisibility.Global:

            Debug.WriteLine("Изменения основного справочника распространяются на дочерние справочники");

        Case DynamicInstanceOperationsVisibility.PreSet:

            Debug.WriteLine("Изменения основного справочника распространяются на справочники множества "

                    + Dim.PreSetMark);

    End Select;

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены наименования
 дочерних справочников и информация о том, распространяются ли изменения
 в основном справочнике на другие справочники.


См. также:


[IDynamicInstance](IDynamicInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
