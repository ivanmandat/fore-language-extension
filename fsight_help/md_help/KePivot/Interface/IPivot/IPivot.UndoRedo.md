# IPivot.UndoRedo

IPivot.UndoRedo
-


# IPivot.UndoRedo


## Синтаксис


UndoRedo: [IUndoRedo](ForeSys.chm::/Interface/IUndoRedo/IUndoRedo.htm);


## Описание


Свойство UndoRedo возвращает
 параметры стека изменений таблицы.


## Комментарии


Для использования параметров стека изменений необходимо, чтобы свойство
 [IUndoRedo.Enabled](ForeSys.chm::/Interface/IUndoRedo/IUndoRedo.Enabled.htm)
 принимало значение True.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором EXPRESS_REPORT, содержащего таблицу.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


Sub UserProc;

		Var

		    Metabase: IMetabase;

		    Analyzer: IEaxAnalyzer;

		    Pivot: IPivot;

		    UndoRedo: IUndoRedo;

		Begin

		    // Получим репозиторий

		    Metabase := MetabaseClass.Active;

		    // Получим экспресс-отчёт

		    Analyzer := Metabase.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

		    // Получим таблицу экспресс-отчета

		    Pivot := Analyzer.Pivot;

		    //Получим стек изменений таблицы

		    UndoRedo := Pivot.UndoRedo;

		    // Зададим доступность и количество изменений стека

		    UndoRedo.Enabled := True;

		    UndoRedo.Limit := 20;

		    //Сохраним изменения в экспресс-отчете

		    (Analyzer As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для таблицы экспресс-отчёта будет доступен
 стек изменений с ограничением по количеству операций отмены/повтора, равному
 20 действиям.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
