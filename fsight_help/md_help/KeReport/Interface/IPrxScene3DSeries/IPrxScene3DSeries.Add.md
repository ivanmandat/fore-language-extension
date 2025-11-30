# IPrxScene3DSeries.Add

IPrxScene3DSeries.Add
-


# IPrxScene3DSeries.Add


## Синтаксис


Add(Type: [Scene3DSerieType](Chart.chm::/Enums/Scene3DSerieType.htm)):
 [IPrxScene3DSerie](../IPrxScene3DSerie/IPrxScene3DSerie.htm);


## Параметры


Type.
 Тип добавляемого ряда.


## Описание


Метод Add добавляет ряд в коллекцию.


Примечание.
 Ряд типа Points в коллекцию можно
 добавить только один раз.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGULAR_REPORT», на листе которого расположена трёхмерная
 сцена с несколькими рядами данных и данные в ячейках диапазона «В3:D3».
 Подключите системные сборки: Chart, Metabase, Report, Tab.


			Sub UserProc;

Var

    Report: IPrxReport;

    S: IPrxScene3D;

    Sers: IPrxScene3DSeries;

    Ser: IPrxScene3DPointSerie;

    MB: IMetabase;

    Tab: ITabSheet;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

    Tab := (Report.Sheets.Item(0) As IPRxTable).TabSheet;

    S := Tab.Objects.Item(0).Extension As IPrxScene3D;

    S.Series.Clear;

    Sers := S.Series;

    Ser := Sers.Add(Scene3DSerieType.Points) As IPrxScene3DPointSerie;

    Ser.X := "B1:B3";

    Ser.Y := "C1:C3";

    Ser.Z := "D1:D3";

    (Report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в регламентном отчете все ряды на трёхмерной
 сцене будут удалены и добавится заданный ряд сфер (точек).


См. также:


[IPrxScene3DSeries](IPrxScene3DSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
