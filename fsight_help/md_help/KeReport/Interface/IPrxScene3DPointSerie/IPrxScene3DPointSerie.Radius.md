# IPrxScene3DPointSerie.Radius

IPrxScene3DPointSerie.Radius
-


# IPrxScene3DPointSerie.Radius


## Синтаксис


Radius: String;


## Описание


Свойство Radius определяет диапазон
 значений радиусов для сфер (точек). Допустимые значения берутся из диапазона
 [0, 0.5].


## Пример


Для выполнения примера предполагается наличие регламентного отчёта с
 идентификатором «REGULAR_REPORT», на листе которого расположена трёхмерная
 сцена c исходными данными и данные в диапазоне «F1:F3». К отчету добавлен
 модуль, с помощью которого по гиперссылке вызывается процедура GetRadius.
 Подключите системные сборки: Report, Tab, Metabase, Drawing.


			Sub GetRadius;

Var

    Report: IPrxReport;

    Tab: ITabSheet;

    s: IPrxScene3D;

    ser: IPrxScene3DPointSerie;

Begin

    Report := PrxReport.ActiveReport;

    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

    s := Tab.Objects.Item(0).Extension As IPrxScene3D;

    ser := s.Series.Item(0) As IPrxScene3DPointSerie;

    ser.Radius := "F1:F3";

    ser.RadiusRange.Style.BackgroundColor := New GxColor.CreateRGB(0, 255, 0);

End Sub GetRadius;


После выполнения примера при нажатии на гиперссылку будут заданы значения
 радиусов для точек, а для ячеек, содержащих эти данные, будет использована
 заливка.


См. также:


[IPrxScene3DPointSerie](IPrxScene3DPointSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
