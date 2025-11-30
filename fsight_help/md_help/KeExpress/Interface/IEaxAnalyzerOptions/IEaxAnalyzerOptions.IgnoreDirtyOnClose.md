# IEaxAnalyzerOptions.IgnoreDirtyOnClose

IEaxAnalyzerOptions.IgnoreDirtyOnClose
-


# IEaxAnalyzerOptions.IgnoreDirtyOnClose


## Синтаксис


IgnoreDirtyOnClose: Boolean;


## Описание


Свойство IgnoreDirtyOnClose
 определяет состояние опции «Не спрашивать подтверждения при закрытии измененного
 отчета».


## Комментарии


При включенной опции все несохраненные изменения будут отменены.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Opt: IEaxAnalyzerOptions;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Opt := Expr.Options;

	    Opt.IgnoreDirtyOnClose := True;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет включена опция «Не спрашивать подтверждения
 при закрытии измененного отчета».


См. также:


[IEaxAnalyzerOptions](IEaxAnalyzerOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
