# IModelling.Rebase

IModelling.Rebase
-


# IModelling.Rebase


## Синтаксис


Rebase(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


       BaseDate:
 String;


       [BasePeriod:
 [DimCalendarLevel](KeDims.chm::/Enums/DimCalendarLevel.htm)
 = 1;]


       [BaseValue:
 Integer = 100]): Variant;


## Параметры


Input. Переменная;


BaseDate. Дата, относительно
 которой рассчитывается функция;


BasePeriod. Календарная динамика
 для функции;


BaseValue. Базовое значение
 для расчета функции.


## Описание


Метод Rebase
 осуществляет применение функции Rebase к указанной переменной.


## Комментарии


Особенности задания параметров:


	- BasePeriod. Необязательный
	 параметр. Значение по умолчанию: DimCalendarLevel.Year
	 - годовая динамика;


	- BaseValue. Необязательный
	 параметр. Значение по умолчанию: «100».


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая хотя бы одну входную переменную.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserNvl;

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

    Expr.References := "Ms";

    // Задаем выражение расчета модели

    Expr.AsString := "Rebase(" +
 TermInfo.TermInnerText + ", "
 + """" + "01.01.2006" + """"
 + ")";

    // Проверяем корректность выражения

    If Expr.Valid

        // Если выражение задано корректно, то сохраняем модель

        Then ModelObj.Save;

        // Если выражение некорректное, то выводим сообщение в окно консоли

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserNvl;


В результате выполнения примера модель будет осуществлять преобразование
 первой входной переменной с использованием функции Rebase.


## Пример использования в выражениях


Выражение 1:


Rebase({Brazil|BCA},"2005A")


Результат: к показателю «Brazil|BCA»
 будет применена функция Rebase.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


Rebase(X1,"2000A")


Результат: к фактору «X1» будет
 применена функция Rebase.


Применение: можно использовать в формулах моделей [контейнера
 моделирования](UiModelling.chm::/1_Modelling/UiModelling_First.htm).


См. также:


[IModelling](IModelling.htm)


База данных временных
 рядов: [Калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm)


Контейнер моделирования:
 [Редактирование
 регрессора](UiNav.Chm::/GUI/ExpressionEditor.htm)/[формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
