# IMetabaseObjectParamValuesEx.StateOptions

IMetabaseObjectParamValuesEx.StateOptions
-


# IMetabaseObjectParamValuesEx.StateOptions


## Синтаксис


StateOptions: Integer;


## Описание


Свойство StateOptions определяет
 дополнительное состояние, используемое при открытии регламентного отчета
 на просмотр.


## Комментарии


При задании StateOptions установка
 свойства [IPrxReportOptions.NoRecalcOnOpen](KeReport.chm::/Interface/IPrxReportOptions/IPrxReportOptions.NoRecalcOnOpen.htm)
 будет игнорироваться и:


	- при установке StateOptions = 1,
	 будет считаться, что в параметрах регламентного отчета флажок «Не вычислять отчет при открытии»
	 был установлен;


	- при установке StateOptions = 2,
	 будет считаться, что в параметрах регламентного отчета флажок «Не вычислять отчет при открытии»
	 не был установлен.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGULAR_REPORT».


Добавьте ссылки на системные сборки Metabase, Report.


			Sub UserProc;

Var

    MB: IMetabase;

    MBobj : IMetabaseObjectDescriptor;

    Param : IMetabaseObjectParamValues;

    ParamEx : IMetabaseObjectParamValuesEx;

    Report: IPrxReport;

    Recalc: Boolean;

Begin

    MB := MetabaseClass.Active;

    MBobj := MB.ItemById("REGULAR_REPORT").Bind;

    Param := MBobj.Params.CreateEmptyValues;

    Param.Item(0).Value := DateTime.Today;

    ParamEx := Param As IMetabaseObjectParamValuesEx;

    Report := MBobj.Open(Param) As IPrxReport;

    Recalc := Report.Options.NoRecalcOnOpen;

    If Recalc Then

        ParamEx.StateOptions := 2;

        Else

            ParamEx.StateOptions := 1;

    End If;

End Sub UserProc;


При выполнении примера будет выполнена проверка на значение, установленное
 в свойстве [IPrxReportOptions.NoRecalcOnOpen](KeReport.chm::/Interface/IPrxReportOptions/IPrxReportOptions.NoRecalcOnOpen.htm).
 В зависимости от этого значения будет установлено значение свойства StateOptions.


См. также:


[IMetabaseObjectParamValuesEx](IMetabaseObjectParamValuesEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
