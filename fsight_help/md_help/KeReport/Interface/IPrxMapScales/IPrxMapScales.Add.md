# IPrxMapScales.Add

IPrxMapScales.Add
-


# IPrxMapScales.Add


## Синтаксис


Add(Scale: [PrxMapScale](../../Enums/PrxMapScale.htm)):
 [IPrxMapScale](../IPrxMapScale/IPrxMapScale.htm);


## Параметры


Scale - тип шкалы.


## Описание


Метод Add осуществляет добавление
 шкалы регламентного отчёта.


## Комментарии


Тип шкалы передается посредством параметра Scale.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    MapScales: IPrxMapScales;

    MapScale: IPrxMapScale;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("Report").Edit;

    Report := MObj As IPrxReport;

    MapScales := Report.Scales;

    MapScale := MapScales.Add(PrxMapScale.Numeric);

    MapScale.Id := "New_Scale";

    MObj.Save;

End Sub UserProc;


После выполнения примера в регламентном отчёте будет создана новая числовая
 шкала с идентификатором «New_Scale». Идентификатор регламентного отчёта
 - «Report».


См. также:


[IPrxMapScales](IPrxMapScales.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
