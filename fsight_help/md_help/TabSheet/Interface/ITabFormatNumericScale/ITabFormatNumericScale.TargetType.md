# ITabFormatNumericScale.TargetType

ITabFormatNumericScale.TargetType
-


# ITabFormatNumericScale.TargetType


## Синтаксис


TargetType: [TabFormatNumericScaleTargetType](../../Enums/TabFormatNumericScaleTargetType.htm);


## Описание


Свойство TargetType определяет
 область применения числовой шкалы.


## Комментарии


Для определения области цветовой шкалы используйте [ITabFormatScale.TargetType](../ITabFormatScale/ITabFormatScale.TargetType.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчета с идентификатором «REG_SCALE». Для ячеек диапазона «A0:K25» должны
 быть заданы любые значения. В примере содержится класс «DAdap», реализующий
 источник данных для условного формата ячеек.


Добавьте ссылки на системные сборки: Metabase, Report, Tab.


			// Реализуем источник данных

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

    Scale: ITabFormatNumericScale;

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

    FormCond.Type := TabConditionType.NumericScale;

    // Получим специфические настройки условного формата

    Scale := FormCond.Details As ITabFormatNumericScale;

    // Будем использовать автоматические значения

    Scale.UseAutoValues := True;

    // Стартовое значение для размера шрифта

    Scale.StartValue := 7;

    // Конечное значение для размера шрифта

    Scale.EndValue := 20;

    // Использовать числовую шкалу будем для размера шрифта

    Scale.TargetType := TabFormatNumericScaleTargetType.FontSize;

    // Сохраним изменения

    (Regrep As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера изменится размер значений ячеек диапазона «A0:K25»
 в соответствии с указанными параметрами.


См. также:


[ITabFormatNumericScale](ITabFormatNumericScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
