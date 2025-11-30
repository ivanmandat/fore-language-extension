# IMetabaseObjectFindInfo.ContainersContent

IMetabaseObjectFindInfo.ContainersContent
-


# IMetabaseObjectFindInfo.ContainersContent


## Синтаксис


ContainersContent: Boolean;


## Описание


Свойство ContainersContent определяет
 признак поиска среди объектов в объекта-контейнерах.


## Комментарии


Допустимые значения:


	- True. Производить поиск
	 среди объектов в объектах-контейнерах;


	- False. Значение по умолчанию.
	 Не производить поиск среди объектов в объектах-контейнерах.


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 с идентификатором DICTIONARY.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MDescs: IMetabaseObjectDescriptors;

    MDesc: IMetabaseObjectDescriptor;

    FInfo: IMetabaseObjectFindInfo;

Begin

    MB := MetabaseClass.Active;

    FInfo := MB.CreateFindInfo;

    FInfo.ClassId := MetabaseObjectClass.KE_CLASS_DIMSELECTIONSCHEMA;

    FInfo.Scope := MB.ItemById("DICTIONARY");

    FInfo.InternalObjects := True;

    FInfo.ContainersContent := True;

    FInfo.WholeWordsOnly := False;

    MDescs := MB.Find(FInfo);

    For Each MDesc In MDescs Do

        Debug.WriteLine("Идентификатор: " + MDesc.Id + "; Наименование: " + MDesc.Name);

    End For;

End Sub UserProc;


При выполнении примера будет осуществлён поиск всех дочерних объектов,
 которые являются схемами отметками для указанного справочника. Идентификаторы
 и наименования найденных объектов будут выведены в консоль среды разработки.


См. также:


[IMetabaseObjectFindInfo](IMetabaseObjectFindInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
