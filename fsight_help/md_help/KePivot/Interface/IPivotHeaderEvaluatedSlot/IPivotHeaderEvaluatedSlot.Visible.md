# IPivotHeaderEvaluatedSlot.Visible

IPivotHeaderEvaluatedSlot.Visible
-


# IPivotHeaderEvaluatedSlot.Visible


## Синтаксис


Visible: Boolean;


## Описание


Свойство Visible определяет,
 отображается ли вычисляемый столбец/строка.


## Комментарии


Допустимые значения:


	- True. Вычисляемый столбец/строка
	 отображается;


	- False. Вычисляемый столбец/строка
	 скрыт.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором «EXPRESS_SLOTS». Данный отчет должен содержать таблицу
 данных и вычисляемые столбцы.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


			Sub UserProc;

Var

    mb: IMetabase;

    Report: IEaxAnalyzer;

    Pivot: IPivot;

    pHeader: IPivotHeader;

    HeaderSlots: IPivotHeaderEvaluatedSlots;

    i: Integer;

    Slot: IPivotHeaderEvaluatedSlot;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем экспресс-отчет

    Report := mb.ItemById("EXPRESS_SLOTS").Edit As IEaxAnalyzer;

    // Получаем объект, на основе которого строится таблица данных

    Pivot := Report.Pivot;

    // Получаем параметры измерений, расположенных в боковике

    pHeader := Pivot.LeftHeader;

    // Получаем коллекцию вычисляемых столбцов, расположенных в боковике

    HeaderSlots := pHeader.EvaluatedSlots;

    // Скроем все видимые вычисляемые столбцы

    For i := 0 To HeaderSlots.Count - 1 Do

        Slot := HeaderSlots.Item(i);

        If Slot.Visible Then

            Slot.Visible := False;

        End If;

    End For;

    // Сохраняем изменения в отчете

    (Report As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера из таблицы будут скрыты все вычисляемые
 столбцы.


См. также:


[IPivotHeaderEvaluatedSlot](IPivotHeaderEvaluatedSlot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
