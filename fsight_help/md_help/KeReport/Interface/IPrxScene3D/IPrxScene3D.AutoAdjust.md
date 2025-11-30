# IPrxScene3D.AutoAdjust

IPrxScene3D.AutoAdjust
-


# IPrxScene3D.AutoAdjust


## Синтаксис


AutoAdjust: Boolean;


## Описание


Свойство AutoAdjust определяет
 автоматическое изменение размеров указанных диапазонов для рядов в соответствии
 с производимыми изменениями: при вставке строк/столбцов - диапазон автоматически
 увеличивается, при удалении строк/столбцов - уменьшается.


При установке свойства в True
 будет включено автоматическое изменение диапазонов, при установке в False - выключено.


По умолчанию свойство имеет значение True.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта с
 идентификатором REGULAR_REPORT, на первом и втором листах которого расположена
 трёхмерная сцена с определенными исходными данными в диапазоне B1:D3
 и данные в пределах от 0 до 1 в диапазоне F1:F3. К отчету добавлен модуль
 с идентификатором Module, где описана процедура user,
 которая определяет значения для радиуса сфер (точек) и закрашивает ячейки
 взятых значений.


Добавьте ссылки на системные сборки:: Chart, Report, Tab, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    s: IPrxScene3D;

	    Tab: ITabSheet;

	    a: IScene3DSeriesClickArgs;

	    ser: IPrxScene3DPointSerie;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

	    Tab := (Report.Sheets.Item(0) As IPRxTable).TabSheet;

	    s := Tab.Objects.Item(0).Extension As IPrxScene3D;

	    s.Sheet := Report.Sheets.Item(1);

	    ser := s.Series.Item(0) As IPrxScene3DPointSerie;

	    ser.X := "B1:B3";

	    ser.Y := "C1:C3";

	    ser.Z := "D1:D3";

	    s.AutoAdjust := False;

	    s.SerieAction := "Module.user";

	    a := New Chart3DSerieClickArg.Create;

	    s.DoSerieClick(a);

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В регламентном отчёте на первом листе изменятся исходные данные для
 трёхмерной сцены, автоматическое изменение размеров указанных диапазонов
 для рядов будет отключено, выполнится заданный модуль для первого и второго
 листа, изменятся радиусы сфер (точек) и ячейки со значениями радиусов
 зальются заданным цветом.


См. также:


[IPrxScene3D](IPrxScene3D.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
