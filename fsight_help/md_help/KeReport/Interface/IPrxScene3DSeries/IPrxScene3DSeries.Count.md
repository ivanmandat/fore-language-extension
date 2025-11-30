# IPrxScene3DSeries.Count

IPrxScene3DSeries.Count
-


# IPrxScene3DSeries.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 рядов сцены.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGULAR_REPORT», на листе которого расположена трёхмерная
 сцена с несколькими рядами данных и данные в ячейках диапазона «В1:D4».
 Подключите системные сборки: Metabase, Report, Tab, Chart.


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

    Sers := S.Series;

    Ser := Sers.Item(0) As IPrxScene3DPointSerie;

    Ser.X := "B1:B4";

    Ser.Y := "C1:C4";

    Ser.Z := "D1:D4";

    Tab.CellValue(1, 6) := Sers.Count;

    Debug.WriteLine("Тип ряда сцены по найденному ключу имеет тип: " + Sers.FindByKey(Sers.Item(0).Key).Type.ToString);

    (Report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в регламентном отчете изменится первый ряд
 трёхмерной сцены и в ячейке G1 будет выведено количество рядов. В окне
 консоли появится [тип](Chart.chm::/Enums/Scene3DSerieType.htm)
 найденного ряда сцены.


См. также:


[IPrxScene3DSeries](IPrxScene3DSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
