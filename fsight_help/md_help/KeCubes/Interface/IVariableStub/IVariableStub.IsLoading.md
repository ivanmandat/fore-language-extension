# IVariableStub.IsLoading

IVariableStub.IsLoading
-


# IVariableStub.IsLoading


## Синтаксис


IsLoading: Boolean;


## Описание


Свойство IsLoading возвращает
 признак того, загружены ли данные в источник. True
 - данные загружены.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором «CONT_MODEL», содержащим переменную с
 идентификатором «VAR».


Добавьте ссылки на системные сборки «Metabase», «Cubes».


			Sub UserProc;

Var

    MB: IMetabase;

    MObj, VObj: IMetabaseObjectDescriptor;

    Stub: IVariableStub;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("CONT_MODEL");

    VObj := MB.ItemByIdNamespace("VAR", MObj.Key);

    Stub := VObj.Bind As IVariableStub;

    If Stub.IsLoading Then

        If Stub.IsSaving Then

            Debug.WriteLine("Данные в переменную загружены и сохранены");

        Else

            Debug.WriteLine("Данные в переменную загружены, но не сохранены");

        End If;

    Else

        Debug.WriteLine("Данные в переменную не загружены");

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены сведения о состоянии
 данных переменной.


См. также:


[IVariableStub](IVariableStub.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
