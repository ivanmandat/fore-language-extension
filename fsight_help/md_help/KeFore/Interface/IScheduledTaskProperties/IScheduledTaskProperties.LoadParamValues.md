# IScheduledTaskProperties.LoadParamValues

IScheduledTaskProperties.LoadParamValues
-


# IScheduledTaskProperties.LoadParamValues


## Синтаксис


LoadParamValues(Values: [IMetabaseObjectParamValues](KeSom.chm::/Interface/IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm)):
 Boolean;


## Параметры


Values - параметры объекта.


## Описание


Метод LoadParamValues проверяет
 заданы ли значения у параметров задачи. Метод возвращает True,
 в случае если у задачи заданы параметры, и False
 в противном случае.


## Пример


В рассматриваемом примере предполагается наличие в репозитории контейнера
 запланированных задач с идентификатором "TASK_CONTAINTER", который
 содержит задачу вычисления регламентного отчета с идентификатором «REPORT_TASK».


	Sub UserProc;

	    Var

	    MB : IMetabase;

	    Obj: IMetabaseObject;

	    Pare: IMetabaseObjectDescriptor;

	    Exe: ICalculateReportScheduledTask;

	    Prop: IScheduledTaskProperties;

	    Pars: IMetabaseObjectParams;

	    Vals: IMetabaseObjectParamValues;

	Begin

	    Mb := MetabaseClass.Active;

	    Pare := Mb.ItemById("TASK_CONTAINER").Bind;

	    If Pare = Null Then

	        Return;

	    End If;

	    Obj := Mb.ItemById("REPORT_TASK").Edit;

	    Pars := Obj.Params;

	    Exe := Obj As ICalculateReportScheduledTask;

	    Prop := Exe.Properties;

	    Vals := Prop.ParamValues;

	    If (Prop.LoadParamValues(Vals) <> True) Then

	        Vals := Pars.CreateEmptyValues;

	    End If;

	    Obj.Save;

	End Sub UserProc;


После выполнения примера для параметров задачи, значения которых не
 были ранее заданы, будут установлены пустые значения.


См. также:


[IScheduledTaskProperties](IScheduledTaskProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
