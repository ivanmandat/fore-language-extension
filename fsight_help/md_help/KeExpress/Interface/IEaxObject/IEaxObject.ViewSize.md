# IEaxObject.ViewSize

IEaxObject.ViewSize
-


# IEaxObject.ViewSize


## Синтаксис


ViewSize: [IGxSizeF](ModDrawing.chm::/Interface/IGxSizeF/IGxSizeF.htm);


## Описание


Свойство ViewSize возвращает
 размер объекта экспресс-отчета.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS_REPORT.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Object: IEaxObject;

	Begin

	    // Получим экспресс-отчёт

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    // Установим размер объекта

	    Object.ViewSize := New GxSizeF.Create(100, 100);

	    // Сохраним изменения

	    MObj.Save;

	End Sub UserProc;


В результате выполнения примера будет установлен размер объекта экспресс-отчёта.


См. также:


[IEaxObject](IEaxObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
