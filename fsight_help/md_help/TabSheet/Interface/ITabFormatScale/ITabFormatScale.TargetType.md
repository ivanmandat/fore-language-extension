# ITabFormatScale.TargetType

ITabFormatScale.TargetType
-


# ITabFormatScale.TargetType


## Синтаксис


		TargetType: [TabFormatColorScaleTargetType](../../Enums/TabFormatColorScaleTargetType.htm);


## Описание


Свойство TargetType определяет
 область применения цветовой шкалы.


## Комментарии


Для определения области применения числовой шкалы используйте [ITabFormatNumericScale.TargetType](../ITabFormatNumericScale/ITabFormatNumericScale.TargetType.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчета с идентификатором REG_SCALE. Для ячеек диапазона «A0:K25» должны
 быть заданы любые значения. В примере содержится класс «DAdap», реализующий
 источник данных для условного формата ячеек.


Добавьте ссылки на системные сборки: Drawing, Metabase, Report, Tab.


					// Реализуем источник
		 данных

		Class DAdap: Object, ITabFormatDataAdapter

		    Public Function get_Data(Row: integer; Column: integer): Variant;

		    Begin

		        Return Row * Column;

		    End Function get_Data;

		End Class DAdap;


		Sub UserProc;

		Var

		    MB: IMetabase;

		    RegRep: IPrxReport;

		    Tab: IPrxTable;

		    Sheet: ITabSheet;

		    Range: ITabRange;

		    FormCond: ITabFormatCondition;

		    Scale: ITabFormatScale;

		Begin

		    // Получим репозиторий

		    MB := MetabaseClass.Active;

		    // Получим регламентный отчет

		    RegRep := MB.ItemById("REG_SCALE").Edit As IPrxReport;

		    // Получим активный лист отчета

		    Tab := RegRep.ActiveSheet As IPrxTable;

		    // Получим таблицу листа отчета

		    Sheet := Tab.TabSheet;

		    // Получим диапазон ячеек

		    Range := Sheet.ParseRange("A0:K25");

		    // Добавим новый условный формат в коллекцию

		    FormCond := Range.FormatConditions.Add;

		    // Добавим источник данных

		    FormCond.DataAdapter := New DAdap.Create;

		    // Зададим тип условного формата - числовая шкала

		    FormCond.Type := TabConditionType.Scale;

		    // Получим специфические настройки условного формата

		    Scale := FormCond.Details As ITabFormatScale;

		    // Будем использовать автоматические значения

		    Scale.UseAutoValues := True;

		    // Стартовый цвет

		    Scale.StartColor := GxColor.FromName("Blue");

		    // Конечный цвет

		    Scale.EndColor := GxColor.FromName("Green");

		    // Будем использовать цветовую шкалу для заливки фона ячеек

		    Scale.TargetType := TabFormatColorScaleTargetType.BkColor;

		    // Сохраним изменения

		    (Regrep As IMetabaseObject).Save;

		End Sub UserProc;


После выполнения примера изменится цвет фона ячеек для диапазона «A0:K25»
 в соответствии с указанными параметрами.


См. также:


[ITabFormatScale](ITabFormatScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
