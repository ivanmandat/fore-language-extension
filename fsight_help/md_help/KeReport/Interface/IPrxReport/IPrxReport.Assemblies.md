# IPrxReport.Assemblies

IPrxReport.Assemblies
-


# IPrxReport.Assemblies


## Синтаксис


Assemblies: [IPrxAssemblies](../IPrxAssemblies/IPrxAssemblies.htm);


## Описание


Свойство Assemblies возвращает
 коллекцию подключенных к регламентному отчету объектов среды разработки.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Assemb: IPrxAssemblies;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("Report").Bind As IPrxReport;

	    Assemb := Report.Assemblies;

	    i := Assemb.Count;

	End Sub UserProc;


После выполнения примера в переменной «i»
 будет содержаться количество подключенных к регламентному отчету объектов
 среды разработки.


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
