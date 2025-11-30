# IMap.UndoRedo

IMap.UndoRedo
-


# IMap.UndoRedo


## Синтаксис


UndoRedo: [IUndoRedo](ForeSys.chm::/Interface/IUndoRedo/IUndoRedo.htm);


## Описание


Свойство UndoRedo возвращает
 параметры стека изменений (отмены/повтора) карты.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT.


Добавьте ссылки на системные сборки: Express, Map, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    TUnRed: IUndoRedo;

	Begin

	    MB := MetabaseClass.Active;

	    Express := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    TUnRed := Express.Map.Map.UndoRedo;

	    TUnRed.Enabled := True;

	    TUnRed.Limit := 30;

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для карты экспресс-отчета будет доступен стек
 изменений с ограничением по количеству операций отмены/повтора = 30 действий.


См. также:


[IMap](IMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
