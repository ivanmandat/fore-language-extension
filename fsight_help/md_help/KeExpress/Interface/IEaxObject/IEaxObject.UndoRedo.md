# IEaxObject.UndoRedo

IEaxObject.UndoRedo
-


# IEaxObject.UndoRedo


## Синтаксис


UndoRedo: [IUndoRedo](ForeSys.chm::/Interface/IUndoRedo/IUndoRedo.htm);


## Описание


Свойство UndoRedo возвращает
 параметры стека изменений объекта экспресс-отчета.


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

	    Object: IEaxObject;

	    UndoRedoObject: IUndoRedo;

	Begin

	    // Получим репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Analyzer := Metabase.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    // Получим пузырьковую диаграмму

	    Object := Analyzer.BubbleChart As IEaxObject;

	    // Получим стек изменений пузырьковой диаграммы

	    UndoRedoObject := Object.UndoRedo;

	    // Зададим доступность и количество изменений стека

	    UndoRedoObject.Enabled := True;

	    UndoRedoObject.Limit := 5;

	    //Сохраним изменения

	    (Analyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для пузырьковой диаграммы экспресс-отчета будет
 доступен стек изменений с ограничением по количеству операций отмены/повтора,
 равному 5 действиям.


См. также:


[IEaxObject](IEaxObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
