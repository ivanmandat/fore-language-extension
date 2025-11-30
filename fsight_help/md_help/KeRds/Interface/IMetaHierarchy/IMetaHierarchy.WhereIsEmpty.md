# IMetaHierarchy.WhereIsEmpty

IMetaHierarchy.WhereIsEmpty
-


# IMetaHierarchy.WhereIsEmpty


## Синтаксис


WhereIsEmpty: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство WhereIsEmpty определяет,
 присутствуют ли в иерархии записи, для которых установлен признак пустоты.


## Комментарии


Допустимые значения:


	- TriState.OnOption. Поиск
	 производится только среди пустых записей;


	- TriState.OffOption.
	 Поиск производится только среди непустых записей;


	- TriState.Undefined.
	 По умолчанию. Поиск производится по всем записям.


Если WhereIsEmpty <> Undefined,
 то свойство [IMetaHierarchyLevel.IncludeAll](../IMetaHierarchyLevel/IMetaHierarchyLevel.IncludeAll.htm)
 должно иметь значение False.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором FC_IS_EMPTY. В данной базе присутствует признак
 пустоты показателей.


Добавьте ссылки на системные сборки: Cubes, Metabase, Rds.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrObj: IMetabaseObject;

    CatInst: IRubricatorInstance;

    DictInst: IMetaDictionaryInstance;

    HierarchyInst: IMetaHierarchyInstance;

    Mems: IMetaMembersSet;

Begin

    Mb := MetabaseClass.Active;

    RubrObj := Mb.ItemById("FC_IS_EMPTY").Bind;

    CatInst := RubrObj.Open(Null) As IRubricatorInstance;

    DictInst := CatInst.GetDictionary(RubricatorDictionary.Facts);

    HierarchyInst := DictInst.DefaultHierarchy;

    HierarchyInst.WhereIsEmpty := TriState.OnOption;

    HierarchyInst.Build;

    Mems := HierarchyInst.GetRootMembers;

    ShowMembers(Mems);

End Sub UserProc;


Sub ShowMembers(Mems: IMetaMembersSet);

Var

    Mem: IMetaMember;

    Ml: IMetaMemberLeaf;

Begin

    If Not Mems.Eof Then

        Repeat

            Mem := Mems.Current;

            If Mem.IsLeaf Then

                Ml := Mem As IMetaMemberLeaf;

                Debug.WriteLine("  " + Mem.Name + " IsEmpty = " + Ml.IsEmpty.ToString);

            Else

                Debug.WriteLine(Mem.Name);

                If Not Mem.Children.IsEmpty Then

                    ShowMembers(Mem.Children.GetMembers);

                End If;

            End If;

            Mems.Next;

        Until Mems.Eof;

    End If;

End Sub ShowMembers;


После выполнения процедуры UserProc
 в окно консоли будет выведена иерархия базы данных временных рядов, содержащая
 только пустые показатели.


См. также:


[IMetaHierarchy](IMetaHierarchy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
