# IPrxScene3DNamedPointSerie.PointsInRows

IPrxScene3DNamedPointSerie.PointsInRows
-


# IPrxScene3DNamedPointSerie.PointsInRows


## Синтаксис


PointsInRows: Boolean;


## Описание


Свойство PointsInRows определяет
 расположение наименований сфер в указанном диапазоне (в строках или столбцах).
 При установке свойства в True
 наименования для точек будут браться из строк диапазона, при установке
 свойства в False - из столбцов
 диапазона.


По умолчанию свойство установлено в True.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта с
 идентификатором «REGULAR_REPORT», на листе которого расположена трёхмерная
 сцена с определенными исходными данными и данные в диапазоне «B6:E6».
 К отчёту добавлен модуль, с помощью которого по гиперссылке вызывается
 процедура GetPointsInRows. Подключите системные сборки: Report, Tab, Metabase.


			Sub GetPointsInRows;

Var

    Report: IPrxReport;

    Tab: ITabSheet;

    s: IPrxScene3D;

    ser: IPrxScene3DNamedPointSerie;

Begin

    Report := PrxReport.ActiveReport;

    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

    s := Tab.Objects.Item(0).Extension As IPrxScene3D;

    ser := s.Series.Item(s.Series.Count - 1) As IPrxScene3DNamedPointSerie;

    If ser.PointsInRows Then

       ser.PointsInRows := False;

    End If;

    ser.Points := "B6:E6";

End Sub GetPointsInRows;


После выполнения примера при нажатии на гиперссылку наименования для
 точек будут браться из столбцов указанного диапазона.


См. также:


[IPrxScene3DNamedPointSerie](IPrxScene3DNamedPointSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
