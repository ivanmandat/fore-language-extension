# IMetabase.GetPendingCheckins

IMetabase.GetPendingCheckins
-


# IMetabase.GetPendingCheckins


## Синтаксис


GetPendingCheckins: [IMetabaseObjectDescriptors](../IMetabaseObjectDescriptors/IMetabaseObjectDescriptors.htm);


## Описание


Метод GetPendingCheckins возвращает
 описание всех объектов репозитория, которые захвачены для редактирования.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    PCheck: IMetabaseObjectDescriptors;

	    Count: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    PCheck := MB.GetPendingCheckins;

	    Count := PCheck.Count;

	End Sub UserProc;


После выполнения примера в переменной «Count» будет содержаться количество
 захваченных для редактирования объектов репозитория.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
