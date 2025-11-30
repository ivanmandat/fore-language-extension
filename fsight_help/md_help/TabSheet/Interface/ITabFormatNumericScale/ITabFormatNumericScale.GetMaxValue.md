# ITabFormatNumericScale.GetMaxValue

ITabFormatNumericScale.GetMaxValue
-


# ITabFormatNumericScale.GetMaxValue


## Синтаксис


GetMaxValue: Double;


## Описание


Метод GetMaxValue возвращает
 максимальное значение числовой шкалы.


## Комментарии


Если максимальное значение числовой шкалы не задано, то метод вернет
 значение «10».


Для определения минимального значения числовой шкалы используйте [ITabFormatNumericScale.GetMinValue](ITabFormatNumericScale.GetMinValue.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчета с идентификатором «REG_SCALE». Необходимо задать максимальные и
 минимальные значения цифровой шкалы для диапазона ячеек. Задание этих
 значений приведено в примере для [ITabFormatNumericScale.TargetType](ITabFormatNumericScale.TargetType.htm).


Добавьте ссылки на системные сборки: Metabase, Report, Tab.


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

    RegRep := MB.ItemById("REG_SCALE").Bind As IPrxReport;

    // Получим активный лист отчета

    Tab := RegRep.ActiveSheet As IPrxTable;

    // Получим таблицу листа отчета

    Sheet := Tab.TabSheet;

    // Получим диапазон ячеек

    Range := Sheet.ParseRange("A0:K25");

    // Получим условный формат

    FormCond := Range.FormatConditions.Item(0);

    // Получим специфические настройки условного формата

    Scale := FormCond.Details As ITabFormatNumericScale;

    // Выведем в окно консоли минимальный и максимальный размер шрифта

    Debug.WriteLine("Максимальный размер шрифта = " + Scale.GetMaxValue.ToString);

    Debug.WriteLine("Минимальный размер шрифта = " + Scale.GetMinValue.ToString);

End Sub UserProc;


После выполнения примера выведутся максимальный и минимальный размер
 шрифта.


См. также:


[ITabFormatNumericScale](ITabFormatNumericScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
