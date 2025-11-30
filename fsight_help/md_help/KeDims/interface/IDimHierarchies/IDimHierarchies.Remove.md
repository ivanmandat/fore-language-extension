# IDimHierarchies.Remove

IDimHierarchies.Remove
-


# IDimHierarchies.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index - индекс иерархии в коллекции.


## Описание


Метод Remove осуществляет удаление
 альтернативной иерархии из коллекции по индексу. Метод возвращает значение
 True, если удаление иерархии прошло
 успешно.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 с идентификатором «TB_BASE».


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    OriginalModelObj: IMetabaseObject;

	    OriginalModel: IDimensionModel;

	    Hierarchies: IDimHierarchies;

	    i: Integer;

	    Hierarchy: IDimHierarchy;

	Begin

	    Mb := MetabaseClass.Active;

	    OriginalModelObj := Mb.ItemById("TB_BASE").Edit;

	    OriginalModel := OriginalModelObj As IDimensionModel;

	    Hierarchies := OriginalModel.Hierarchies;

	    If Hierarchies.Remove(0) Then

	        Debug.WriteLine("Удаление альтернативной иерархии прошло успешно");

	    Else

	        Debug.WriteLine("Альтернативная иерархия не была удалена");

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация об
 результатах удаления первой альтернативной иерархии в коллекции справочника
 «TB_BASE».


См. также:


[IDimHierarchies](IDimHierarchies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
