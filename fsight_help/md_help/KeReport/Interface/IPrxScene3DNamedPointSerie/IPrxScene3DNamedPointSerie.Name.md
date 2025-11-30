# IPrxScene3DNamedPointSerie.Name

IPrxScene3DNamedPointSerie.Name
-


# IPrxScene3DNamedPointSerie.Name


## Синтаксис


Name: String;


## Описание


Свойство Name определяет наименование
 ряда. Для определения имени ряда именованных сфер достаточно указать одну
 ячейку.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта с
 идентификатором «REGULAR_REPORT», на листе которого расположена трёхмерная
 сцена и данные в диапазоне «B1:E3» с наименованиями строк и столбцов.
 К отчету добавлен модуль, с помощью которого по гиперссылке вызывается
 процедура GetName. Подключите системные сборки: Chart, Report, Tab, Metabase.


			Sub GetName;

Var

    Report: IPrxReport;

    Tab: ITabSheet;

    s: IPrxScene3D;

    ser: IPrxScene3DNamedPointSerie;

Begin

    Report := PrxReport.ActiveReport;

    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

    s := Tab.Objects.Item(0).Extension As IPrxScene3D;

    ser := s.Series.Add(Scene3DSerieType.NamedPoints) As IPrxScene3DNamedPointSerie;

    ser.Name := "A1";

    ser.X := "B1:E1";

    ser.Y := "B2:E2";

    ser.Z := "B3:E3";

    ser.Points := "B0:E0";

End Sub GetName;


После выполнения примера при нажатии на гиперссылку будет создан ряд
 данных с наименованием по заданному диапазону.


См. также:


[IPrxScene3DNamedPointSerie](IPrxScene3DNamedPointSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
