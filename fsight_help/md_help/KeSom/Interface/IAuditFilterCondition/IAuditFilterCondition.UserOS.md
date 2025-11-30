# IAuditFilterCondition.UserOS

IAuditFilterCondition.UserOS
-


# IAuditFilterCondition.UserOS


## Синтаксис


UserOS(Index: Integer): String;


## Параметры


Index. Индекс
 позиции. Количество пользователей ОС определяется свойством [IAuditFilterCondition.UserOSCount](IAuditFilterCondition.UserOSCount.htm).


## Описание


Свойство UserOS определяет наименование
 пользователя операционной системы, для которого будут отображаться записи
 протокола.


## Пример


Для выполнения примера предполагается наличие фильтра протокола доступа
 с идентификатором FILTER, а также наличие пользователей ОС USER_1 и USER_2.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    FilCon: IAuditFiltersContainer;

	    Objs: IAuditFilterObjects;

	    Obj: IAuditFilterObject;

	    Con: IAuditFilterCondition;

	    Fil: IAuditFilter;

	Begin

	    FilCon := New AuditFiltersContainer.Create;

	    FilCon.Load;

	    Objs := FilCon.Filters;

	    Obj := Objs.FindById("FILTER").Edit;

	    Fil := Obj.Filter;

	    Con := Fil.Item(0);

	    Con.UserOSCount := 2;

	    Con.UserOS(0) := "USER_1";

	    Con.UserOS(1) := "USER_2";

	    Obj.Save;

	    FilCon.SaveToFile(FilCon.DefaultFileName);

	End Sub UserProc;


После выполнения примера будет изменено свойство условия фильтрации:
 показывать записи протокола доступа только для заданных пользователей
 ОС.


См. также:


[IAuditFilterCondition](IAuditFilterCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
