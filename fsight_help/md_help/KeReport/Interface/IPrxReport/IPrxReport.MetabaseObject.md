# IPrxReport.MetabaseObject

IPrxReport.MetabaseObject
-


# IPrxReport.MetabaseObject


## Синтаксис


MetabaseObject: [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm);


## Описание


Свойство MetabaseObject возвращает
 объект репозитория, соответствующий данному регламентному отчету.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    MObj: IMetabaseObject;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("Report").Bind As IPrxReport;

	    MObj := Report.MetabaseObject;

	    i := MObj.Key;

	End Sub UserProc;


После выполнения примера в переменной «i»
 будет содержаться ключ объекта репозитория, соответствующего регламентному
 отчету с идентификатором Report.


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
