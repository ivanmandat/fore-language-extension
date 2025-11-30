# IAuditFilterCondition.ClassCount

IAuditFilterCondition.ClassCount
-


# IAuditFilterCondition.ClassCount


## Синтаксис


ClassCount: Integer;


## Описание


Свойство ClassCount определяет
 количество классов, по которым будет осуществляться фильтрация.


## Пример


Для выполнения примера предполагается наличие фильтра протокола доступа
 с идентификатором «FILTER».


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

    Con.ClassCount := 2;

    Con.ClassId(0) := MetabaseObjectClass.KE_CLASS_PROCEDURALREPORT;

    Con.ClassId(1) := MetabaseObjectClass.KE_CLASS_EXPRESSREPORT;

    Obj.Save;

    FilCon.SaveToFile(FilCon.DefaultFileName);

End Sub UserProc;


После выполнения примера будет изменено свойство условия фильтрации:
 показывать записи протокола доступа только для классов объектов «Регламентный
 отчет» и «Экспресс-отчет».


См. также:


[IAuditFilterCondition](IAuditFilterCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
