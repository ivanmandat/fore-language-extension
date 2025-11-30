# IMetabaseObjectFindInfo.AttributeEx

IMetabaseObjectFindInfo.AttributeEx
-


# IMetabaseObjectFindInfo.AttributeEx


## Синтаксис


AttributeEx: [FindAttributeEx](../../Enums/FindAttributeEx.htm);


## Описание


Свойство AttributeEx определяет
 атрибут, по значениям которого будет осуществляться расширенный поиск.


## Комментарии


По умолчанию свойству установлено значение FindAttributeEx.Ident,
 при этом поиск значения указанного в свойстве [IMetabaseObjectFindInfo.Text](IMetabaseObjectFindInfo.Text.htm)
 будет осуществляться среди идентификаторов объектов.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MDescs: IMetabaseObjectDescriptors;

    MDesc: IMetabaseObjectDescriptor;

    FInfo: IMetabaseObjectFindInfo;

Begin

    MB := MetabaseClass.Active;

    FInfo := MB.CreateFindInfo;

    FInfo.Text := "33";

    FInfo.AttributeEx := FindAttributeEx.Key;

    FInfo.WholeWordsOnly := False;

    //Поиск объектов

    MDescs := MB.Find(FInfo);

    //Просмотр результатов

    For Each MDesc In MDescs Do

        Debug.WriteLine("Идентификатор: " + MDesc.Id + "; Наименование: " + MDesc.Name);

    End For;

End Sub UserProc;


При выполнении примера будет осуществлён поиск всех объектов, содержащих
 в своем ключе значение «33». Наименования и идентификаторы найденных объектов
 будут выведены в консоль среды разработки.


См. также:


[IMetabaseObjectFindInfo](IMetabaseObjectFindInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
