# IMetaMembersSet.CurrentOffset

IMetaMembersSet.CurrentOffset
-


# IMetaMembersSet.CurrentOffset


## Синтаксис


CurrentOffset: Integer;


## Описание


Свойство CurrentOffset возвращает
 число уровней иерархии от корня справочника до набора элементов.


## Комментарии


Для получения текущего элемента в наборе используйте метод [IMetaMembersSet.Current](IMetaMembersSet.Current.htm).


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором TSDB.


Добавьте ссылки на системные сборки: Cubes, Metabase, Rds.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rubr: IMetabaseObject;

	    RubrInst: IRubricatorInstance;

	    Facts: IMetaDictionaryInstance;

	    Hierarchy: IMetaHierarchy;

	    HInstance: IMetaHierarchyInstance;

	    Members: IMetaMembers;

	Begin

	    MB := MetabaseClass.Active;

	    Rubr := MB.ItemById("TSDB").Bind;

	    RubrInst := Rubr.Open(Null) As IRubricatorInstance;

	    Facts := RubrInst.GetDictionary(RubricatorDictionary.Facts);

	    Hierarchy := Facts.Dictionary.DefaultHierarchy;

	    HInstance := Facts.OpenHierarchy(Hierarchy);

	    Members := HInstance.GetRootMembers;

	    Members.Reset;

	    Debug.WriteLine("Число уровней иерархии: " + Members.CurrentOffset.ToString);

	    Debug.WriteLine("Наименования корневых элементов в иерархии:");

	    Debug.Indent;

	    While Not Members.Eof Do

	        Debug.WriteLine(Members.Current.Name);

	        Members.Next;

	    End While;

	    Debug.Unindent;

	End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены:


	- число уровней иерархии;


	- наименования корневых элементов в иерархии показателей.


См. также:


[IMetaMembersSet](IMetaMembersSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
