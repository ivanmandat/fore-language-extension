# IScheduledTaskProperties.ParamValues

IScheduledTaskProperties.ParamValues
-


# IScheduledTaskProperties.ParamValues


## Синтаксис


ParamValues: [IMetabaseObjectParamValues](KeSom.chm::/Interface/IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm);


## Описание


Свойство ParamValues определяет
 значения параметров объекта, которые будут использованы при выполнении
 задачи.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 запланированных задач с идентификатором "TASK_CONTAINTER" и
 модуля с идентификатором "Module_1". В модуле имеется процедура
 "Main".


 Sub
 Main;


Var


MB : IMetabase;


CrInfo : IMetabaseObjectCreateInfo;


MObj : IMetabaseObject;


Exe : IExecuteSubScheduledTask;


Period : IScheduledTaskPeriodWeekly;


Prop : IScheduledTaskProperties;


sPar: String;


Pars: IMetabaseObjectParams;


Par: IMetabaseObjectParam;


Vals: IMetabaseObjectParamValues;


Val: IMetabaseObjectParamValue;


Begin


MB := MetabaseClass.Active;


CrInfo := MB.CreateCreateInfo;


CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_TASK_EXECUTESUB;


CrInfo.Id := "MODULE_EXECUTOR2";


CrInfo.Name := "Выполнение
 модуля";


CrInfo.Parent := MB.ItemById("TASK_CONTEINER");


MObj := MB.CreateObject(CrInfo).Edit;


sPar := "Item";


Pars := MObj.Params;


Par := Pars.FindById(sPar);


If
 Par = Null Then


Par := Pars.Add;


Par.Id := sPar;


End
 If;


Par.Name := sPar;


Par.DataType := DbDataType.Integer;


Vals := Pars.CreateEmptyValues;


Val := Vals.FindById(sPar);


Val.Value := 7;


Exe := MObj As
 IExecuteSubScheduledTask;


Prop := Exe.Properties;


Prop.ParamValues := Vals;


Exe.Assembly := (MB.ItemById("Module_1").Bind
 As IModule).Assembly;


Exe.SubName := "Main";


Period := Prop.CreatePeriod(ScheduledTaskPeriodType.Weekly)
 As IScheduledTaskPeriodWeekly;


Period.DaysOfWeek(CalendarDayOfWeek.Monday)
 := True;


Period.DaysOfWeek(CalendarDayOfWeek.Wednesday)
 := True;


Period.DaysOfWeek(CalendarDayOfWeek.Friday)
 := True;


Period.StartTime := DateTime.ComposeTimeOfDay(12,
 0, 0, 0);


Prop.Period := Period;


MObj.Save;


End
 Sub Main;


После выполнения примера в контейнере будет создана новая задача выполнения
 модуля. Модуль будет запускаться по понедельникам, средам и пятницам в
 "12:00". Для модуля будет задано значение параметра, которое
 можно использовать во время выполнения задачи.


См. также:


[IScheduledTaskProperties](IScheduledTaskProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
