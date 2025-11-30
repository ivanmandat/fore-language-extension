# IPrxScene3DSerie.Key

IPrxScene3DSerie.Key
-


# IPrxScene3DSerie.Key


## Синтаксис


Key: Integer;


## Описание


Свойство Key возвращает ключ
 ряда сцены.


## Пример


Для выполнения примера предполагается наличие трёхмерной сцены в регламентном
 отчете с идентификатором REGULAR_REPORT и данных в ячейках B1:E3. Задайте
 произвольный источник данных для трёхмерной сцены. Подключите системные
 сборки: Metabase, Report, Tab, Drawing.


			Sub UserProc;

Var

    Report: IPrxReport;

    Chart: IPrxScene3D;

    Tab: ITabSheet;

    MB: IMetabase;

    Ser: IPrxScene3DSerie;

Begin

    //Подключим регламентный отчет

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

    Tab := (Report.Sheets.Item(0) As IPrxTable).TabSheet;

    Chart := Tab.Objects.Item(0).Extension As IPrxScene3D;

    Ser := Chart.Series.Item(0);

    //Определим диапазон значений ряда по оси OX, OY, OZ

    Ser.X := "B1:E1";

    Ser.Y := "B2:E2";

    Ser.Z := "B3:E3";

    //Закрасим ячейки значений ряда по оси OX, OY, OZ в заданные цвета

    Ser.XRange.Style.BackgroundColor := New GxColor.CreateRGB(255, 0, 0);

    Ser.YRange.Style.BackgroundColor := New GxColor.CreateRGB(0, 255, 0);

    Ser.ZRange.Style.BackgroundColor := New GxColor.CreateRGB(0, 0, 255);

    //Выведем ключ и тип ряда сцены в заданные ячейки отчета

    Tab.CellValue(1, 6) := Ser.Key;

    Tab.CellValue(2, 6) := Ser.Type;

    (Report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера диапазон источника данных будет изменен, фон
 ячеек со значениями закрасится заданными цветами, будет выведен ключ и
 значение [типа ряда сцены](Chart.chm::/Enums/Scene3DSerieType.htm)
 в заданные ячейки.


См. также:


[IPrxScene3DSerie](IPrxScene3DSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
