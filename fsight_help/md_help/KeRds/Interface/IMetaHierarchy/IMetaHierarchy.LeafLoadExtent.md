# IMetaHierarchy.LeafLoadExtent

IMetaHierarchy.LeafLoadExtent
-


# IMetaHierarchy.LeafLoadExtent


## Синтаксис


LeafLoadExtent: Integer;


## Описание


Свойство LeafLoadExtent накладывает
 ограничение на количество загружаемых листьевых элементов.


## Комментарии


Чем больше число загружаемых листьевых элементов, тем медленнее выполняется
 загрузка.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC_COMM.


Добавьте ссылки на системные сборки Metabase, Cubes, Rds.


	Sub UserProc;

	Var

	   mb: IMetabase;

	    RubDesc: IMetabaseObjectDescriptor;

	    RubrIn: IRubricatorInstance;

	    DictInst: IMetaDictionaryInstance;

	    HieDef: IMetaHierarchy;

	    HieInst: IMetaHierarchyInstance;

	    Mems: IMetaMembers;

	Begin

	    mb := MetabaseClass.Active;

	    RubDesc := mb.ItemById("FC_COMM");

	    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

	    DictInst := RubrIn.GetDictionary(RubricatorDictionary.Facts);

	    HieDef := DictInst.Dictionary.DefaultHierarchy;

	    HieDef.Attributes.MoveAllTo(HieDef.Attributes, HieDef.Levels.Leaf);

	// Установили ограничение

	    HieDef.LeafLoadExtent := 128;

	    HieInst := DictInst.OpenHierarchy(HieDef);

	    Mems := HieInst.GetRootMembers;

	    Mems.Reset;

	    Repeat

	        Debug.WriteLine(Mems.Current.Name);

	        Mems.Next;

	    Until Not Mems.Eof;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены наименования
 корневых элементов иерархии базы данных временных рядов с учетом наложенного
 ограничения.


См. также:


[IMetaHierarchy](IMetaHierarchy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
