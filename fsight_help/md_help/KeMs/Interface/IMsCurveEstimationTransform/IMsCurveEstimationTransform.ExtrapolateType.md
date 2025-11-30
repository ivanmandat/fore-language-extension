# IMsCurveEstimationTransform.ExtrapolateType

IMsCurveEstimationTransform.ExtrapolateType
-


# IMsCurveEstimationTransform.ExtrapolateType


## Синтаксис


		ExtrapolateType: [DependenceType](StatLib.chm::/Enums/DependenceType.htm);


## Описание


Свойство ExtrapolateType определяет
 форму экстраполяции тренда.


## Комментарии


Экстраполяция - приближённое определение значений функции *f*(*x*)
 в точках *x*, лежащих вне отрезка [*x*0,*x**n*],
 по её значениям в точках *x*0 < *x*1
 < ... < *x**n*.


Форма экстраполяции определяется значением перечисления [DependenceType](StatLib.chm::/Enums/DependenceType.htm).
 Для универсального тренда применяются следующие формы:


	- DependenceType.PreviousValue.
	 Предыдущее значение;


	- DependenceType.Value.
	 Значение, заданное свойством [IMsCurveEstimationTransform.Value](IMsCurveEstimationTransform.Value.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором OBJ_MS, содержащим модель с идентификатором
 MODEL. Модель рассчитывается с помощью универсального тренда.


Добавьте ссылки на системные сборки: Ms, Metabase, Stat.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    MsDescrKey: Integer;

		    Model: IMsModel;

		    ModelTrans: IMsFormulaTransform;

		    Formula: IMsFormula;

		    CurveEstimation: IMsCurveEstimationTransform;

		Begin

		    Mb := MetabaseClass.Active;

		    MsDescrKey := Mb.ItemById("OBJ_MS").Key;

		    // Получение модели

		    Model := MB.ItemByIdNamespace("MODEL", MsDescrKey).Edit As IMsModel;

		    ModelTrans := Model.Transform;

		    // Настройка параметров расчета модели

		    Formula := ModelTrans.FormulaItem(0);

		    CurveEstimation := Formula.Method As IMsCurveEstimationTransform;

		    CurveEstimation.ExtrapolateType := DependenceType.Value;

		    CurveEstimation.Value := 31.3;

		    // Сохраняем параметры расчета модели

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера модель для расчёта тренда будет использовать
 экстраполяцию заданным значением.


См. также:


[IMsCurveEstimationTransform](IMsCurveEstimationTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
