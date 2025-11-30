# IEaxAnalyzeCore.UndoRedo

IEaxAnalyzeCore.UndoRedo
-


# IEaxAnalyzeCore.UndoRedo


## Синтаксис


UndoRedo: [IUndoRedo](ForeSys.chm::/Interface/IUndoRedo/IUndoRedo.htm);


## Описание


Свойство UndoRedo возвращает
 параметры стека изменений экспресс-отчета.


## Комментарии


Для использования параметров стека изменений необходимо, чтобы свойство
 [IUndoRedo.Enabled](ForeSys.chm::/Interface/IUndoRedo/IUndoRedo.Enabled.htm)
 принимало значение True.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором EXPRESS_REPORT, содержащего пузырьковую диаграмму.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    UndoRedoAnalyzer: IUndoRedo;

	Begin

	    // Получим репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Analyzer := Metabase.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    // Получим стек изменений экспресс-отчёта

	    UndoRedoAnalyzer := Analyzer.UndoRedo;

	    // Зададим доступность и количество изменений стека

	    UndoRedoAnalyzer.Enabled := True;

	    UndoRedoAnalyzer.Limit := 20;

	    // Сохраним изменения

	    (Analyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для экспресс-отчета будет доступен стек изменений
 с ограничением по количеству операций отмены/повтора, равному 20 действиям.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
