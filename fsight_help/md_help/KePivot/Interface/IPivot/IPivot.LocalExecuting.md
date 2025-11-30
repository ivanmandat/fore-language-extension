# IPivot.LocalExecuting

IPivot.LocalExecuting
-


# IPivot.LocalExecuting


## Синтаксис


LocalExecuting: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство LocalExecuting определяет
 состояние вычислений.


## Комментарии


Для получения признака, готова ли таблица к расчёту данных, используйте
 свойство [IPivot.IsReadyToExecute](IPivot.IsReadyToExecute.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Pivot: IPivot;

Begin

    MB := MetabaseClass.Active;

    // Получим экспресс-отчёт

    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

    // Получим настройки отображения таблицы данных отчёта

    Pivot := Express.Pivot;

    // Определим состояние вычисления отчёта

    Pivot.LocalExecuting := TriState.OnOption;

    // Проверим, готова ли таблица к расчёту данных

    If Pivot.IsReadyToExecute Then

        Debug.WriteLine("Таблица готова к расчёту");

        Else

            Debug.WriteLine("Таблица не готова к расчёту");

    End If;

    Debug.WriteLine ("Состояние вычислений:");

    Debug.WriteLineIf(Pivot.LocalExecuting = -2, " Вычислять на сервисах");

    Debug.WriteLineIf(Pivot.LocalExecuting = -1, " Вычислять локально");

    Debug.WriteLineIf(Pivot.LocalExecuting = 0, " Не вычислять");

End Sub UserProc;


В результате выполнения примера в консоль будет выведена информация
 о готовности таблицы к расчёту и состоянии вычислений.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
