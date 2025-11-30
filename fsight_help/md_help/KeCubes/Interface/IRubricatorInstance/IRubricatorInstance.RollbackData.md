# IRubricatorInstance.RollbackData

IRubricatorInstance.RollbackData
-


# IRubricatorInstance.RollbackData


## Синтаксис


RollbackData(ToRevision: Integer);


## Параметры


ToRevision. Ключ ревизии.


## Описание


Метод RollbackData осуществляет
 откат на данные базы данных временных рядов в указанной ревизии.


## Комментарии


RollbackData может использоваться
 для поиска и устранения ошибок в данных базы данных временных рядов.


При откате данных создается новая ревизия, содержащая факторы и данные
 с ключом ToRevision. Ревизии
 между ToRevision и добавляемой
 ревизией не удаляются. Если в ревизии ToRevision
 каких-либо точек данных не было, а в последующих ревизиях они появились,
 то такие точки в новой ревизии получают значение Null.
 Если в ревизии ToRevision не
 было каких-либо показателей, то в новую ревизию они добавляются как удаленные.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_RUBRICATOR. В базе должна присутствовать ревизия
 с ключом 1.


Добавить ссылки на системные сборки: Cubes, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    RubInst: IRubricatorInstance;

	    Rev: IRubricatorRevision;

	Begin

	    Mb := MetabaseClass.Active;

	    RubInst := Mb.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

	    Rev := RubInst.OpenRevision("Ревизия");

	    RubInst.RollbackData(1);

	End Sub UserProc;


После выполнения примера будет произведен откат данных базы данных временных
 рядов на ревизию с указанным ключом 1.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
