# IModelling.R

IModelling.R
-


# IModelling.R


## Синтаксис


R(Period: [IMsPeriod](../IMsPeriod/IMsPeriod.htm);


  Code: String;


  Inputs: Array): Variant;


## Параметры


Period. Период, на котором
 рассчитывается метод;


Code. Выражение для расчёта
 метода;


Inputs. Массив входных переменных.


## Описание


Метод R выполняет преобразование
 данных с помощью методов пакета R.


## Комментарии


Для использования данного метода в репозитории должна быть настроена
 интеграция с R. Для настройки интеграции обратитесь к статье «[Интеграция
 с R](UiNav.chm::/02_Navigator/CommonSettings/Integration.htm#r)».


Особенности задания параметров:


	- Period. Если параметру
	 задано значение Null, то метод
	 рассчитывается на всём временном периоде;


	- Code. Выражение задаётся
	 на языке R. Более подробное описание языка R приведено в [документации
	 к R](http://cran.r-project.org/manuals.html). В выражении входные переменные обозначаются как X1, X2 и
	 так далее, где 1, 2 - это индекс переменной в массиве Inputs.
	 Индексация в массиве сплошная и начинается с единицы.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая хотя бы одну входную переменную.


В репозитории должна быть настроена интеграция с R.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserR;

Var

    Mb: IMetabase;

    ModelSpace, ModelObj: IMetabaseObject;

    Transf: IMsFormulaTransform;

    Formula: IMsFormula;

    Model: IMsModel;

    Determ: IMsDeterministicTransform;

    TransVar: IMsFormulaTransformVariable;

    Slice: IMsFormulaTransformSlice;

    TermInfo: IMsFormulaTermInfo;

    Expr: IExpression;

Begin

    // Получаем репозиторий

    Mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    ModelSpace := Mb.ItemById("MS").Bind;

    // Получаем модель

    ModelObj := Mb.ItemByIdNamespace("MODEL_D", ModelSpace.Key).Edit;

    Model := ModelObj As IMsModel;

    // Получаем параметры расчета модели

    Transf := Model.Transform;

    Formula := Transf.FormulaItem(0);

    Determ := Formula.Method As IMsDeterministicTransform;

    // Получаем первую входную переменную

    TransVar := Transf.Inputs.Item(0);

    Slice := TransVar.Slices.Item(0);

    TermInfo := Transf.CreateTermInfo;

    TermInfo.Slice := Slice;

    // Задаем режим передачи переменной в расчет

    TermInfo.Type := MsFormulaTermType.Pointwise;

    // Получаем выражение расчета модели

    Expr := Determ.Expression;

    Expr.References := "Ms;Stat";

    // Задаем выражение расчета модели

    Expr.AsString := "R(SetPeriod(" +

        """" + "01.01.2000" + """" + "," + """" + "01.01.2015" + """" + ")," +

        """" + "Y <- X1 + 1;" + """" + "," + TermInfo.TermInnerText + ") ";

    // Проверяем корректность выражения

    If Expr.Valid

        // Если выражение задано корректно, то сохраняем модель

        Then ModelObj.Save;

        // Если выражение некорректное, то выводим сообщение в окно консоли

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserR;


В результате выполнения примера модель детерминированного уравнения
 будет рассчитана с помощью R.


## Пример использования в выражениях


Выражение 1:


r(setperiod("01.01.2000", "01.01.2015"),
 "Y <- X1 + 1;", {Чикаго - население[t]})


Результат: значения временного ряда «Чикаго
 - население» будут увеличены на единицу с помощью методов пакета
 R.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


R(SetPeriod("01.01.2000", "01.01.2015"),
 "Y <- X1 + 1;", X1, X2)


Результат: значение переменной «X1»
 будет увеличено на единицу с помощью методов пакета R.


Применение: можно использовать в формулах моделей [контейнера
 моделирования](UiModelling.chm::/1_Modelling/UiModelling_First.htm).


См. также:


[IModelling](IModelling.htm)
 | База данных временных рядов: [методы R](UiDw.chm::/Workbook/CalculatedSeries/r_metods.htm) | Контейнер моделирования: модель «[R](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/R.htm)»


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
