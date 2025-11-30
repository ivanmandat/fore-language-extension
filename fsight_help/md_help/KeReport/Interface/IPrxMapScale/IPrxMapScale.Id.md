# IPrxMapScale.Id

IPrxMapScale.Id
-


# IPrxMapScale.Id


## Синтаксис


Id: String;


## Описание


Свойство Id определяет идентификатор
 шкалы регламентного отчета.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    MapScales: IPrxMapScales;

    MapScale: IPrxMapScale;

    s: String;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("Report").Bind As IPrxReport;

    MapScales := Report.Scales;

    MapScale := MapScales.Item(0);

    s := MapScale.Id;

End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться идентификатор
 первой шкалы регламентного отчета. Идентификатор регламентного отчета
 - «Report».


См. также:


[IPrxMapScale](IPrxMapScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
