# IMsNonLinearControlFormulaTerm.UseUpperBound

IMsNonLinearControlFormulaTerm.UseUpperBound
-


# IMsNonLinearControlFormulaTerm.UseUpperBound


## Синтаксис


UseUpperBound: Boolean;


## Описание


Свойство UseUpperBound
 определяет, учитывать ли верхнюю границу для управляющей переменной.


## Комментарии


Допустимые значения:


	- True. Учитывается верхняя
	 граница управляющей переменной. Для задания значения границы используйте
	 свойство [IMsNonLinearControlFormulaTerm.UpperBound](IMsNonLinearControlFormulaTerm.UpperBound.htm);


	- False. Значение по умолчанию.
	 Верхняя граница управляющей переменной не учитывается.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS». В данном контейнере должна присутствовать
 задача оптимального управления с идентификатором «CONTROL_PROBLEM», рассчитываемая
 методом квадратичного программирования. Для задачи должны быть заданы
 управляющие переменные.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    ms: IMetabaseObjectDescriptor;

    probl: IMsProblem;

    controlProbl: IMsControlProblem;

    controlTerm: IMsNonLinearControlFormulaTerm;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    ms := mb.ItemById("MS");

    // Получаем задачу моделирования

    probl := mb.ItemByIdNamespace("CONTROL_PROBLEM", ms.Key).Edit As IMsProblem;

    controlProbl := probl.Details As IMsControlProblem;

    // Получаем первую управляющую переменную

    controlTerm := controlProbl.ControlVariables.Item(0) As IMsNonLinearControlFormulaTerm;

    // Задаем значения границ управляющей переменной

    controlTerm.UseLowerBound := True;

    controlTerm.LowerBound := -1;

    controlTerm.UseUpperBound := True;

    controlTerm.UpperBound := 1;

    // Сохраняем изменения

    (probl As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для первой управляющей переменной будут заданы
 значения нижней и верхней границ.


См. также:


[IMsNonLinearControlFormulaTerm](IMsNonLinearControlFormulaTerm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
