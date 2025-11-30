# IPrxMapScale.MapScale

IPrxMapScale.MapScale
-


# IPrxMapScale.MapScale


## Синтаксис


MapScale: [IMapScale](Map.chm::/Interface/IMapScale/IMapScale.htm);


## Описание


Свойство MapScale возвращает
 объект, содержащий картографическую шкалу.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    MapScales: IPrxMapScales;

    MapScale: IPrxMapScale;

    Map: IMapScale;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("Report").Bind As IPrxReport;

    MapScales := Report.Scales;

    MapScale := MapScales.Item(0);

    Map := MapScale.MapScale;

    i := Map.Count;

End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 значений в первой шкале регламентного отчета. Идентификатор регламентного
 отчета - «Report».


См. также:


[IPrxMapScale](IPrxMapScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
