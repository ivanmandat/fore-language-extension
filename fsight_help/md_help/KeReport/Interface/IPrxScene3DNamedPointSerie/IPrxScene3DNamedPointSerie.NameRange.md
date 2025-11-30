# IPrxScene3DNamedPointSerie.NameRange

IPrxScene3DNamedPointSerie.NameRange
-


# IPrxScene3DNamedPointSerie.NameRange


## Синтаксис


NameRange: [ITabRange](TabSheet.chm::/Interface/ITabRange/ITabRange.htm);


## Описание


Свойство NameRange определяет
 параметры ячейки (диапазона ячеек), содержащей наименование ряда.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта с
 идентификатором «REGULAR_REPORT», на листе которого расположена трёхмерная
 сцена с определенными исходными данными и данные в диапазоне «B1:E3».
 К отчету добавлен модуль, с помощью которого по гиперссылке вызывается
 процедура GetNameRange. Подключите системные сборки: Report, Tab, Metabase,
 Drawing.


			Sub GetNameRange;

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

    ser.NameRange.Style.BackgroundColor := New GxColor.CreateRGB(0, 255, 0);

    ser.PointsRange.Style.BackgroundColor := New GxColor.CreateRGB(0, 0, 255);

End Sub GetNameRange;


После выполнения примера при нажатии на гиперссылку для ячеек, содержащих
 наименование ряда и точек, будут использованы заданные заливки.


См. также:


[IPrxScene3DNamedPointSerie](IPrxScene3DNamedPointSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
