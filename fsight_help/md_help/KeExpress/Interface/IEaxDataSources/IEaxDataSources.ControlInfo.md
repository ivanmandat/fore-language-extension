# IEaxDataSources.ControlInfo

IEaxDataSources.ControlInfo
-


# IEaxDataSources.ControlInfo


## Синтаксис


ControlInfo: [IMetabaseObjectControlInfo](KeSom.chm::/Interface/IMetabaseObjectControlInfo/IMetabaseObjectControlInfo.htm);


## Описание


Свойство ControlInfo возвращает
 объект, содержащий информацию об источниках данных.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS_REPORT.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    ExpDs: IEaxDataSources;

	    ControlI: IMetabaseObjectControlInfo;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    ExpDs := Expr.DataSources;

	    ControlI := ExpDs.ControlInfo;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера, в переменной ControlI будет объект, содержащий
 информацию об источниках данных экспресс-отчёта.


См. также:


[IEaxDataSources](IEaxDataSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
