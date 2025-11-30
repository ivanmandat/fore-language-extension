# IModelling.Splice

IModelling.Splice
-


# IModelling.Splice


## Синтаксис


Splice(Output: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


       Input:
 [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


       Method:
 [MsSpliceType](../../Enums/MsSpliceType.htm);


       [Direction:
 [MsSpliceDirection](../../Enums/MsSpliceDirection.htm) = 0;]


       [BoundByDates:
 Boolean = False;]


       [StartDate:
 String = "";]


       [EndDate:
 String = ""]): Variant;


## Параметры


Output. Результирующая переменная;


Input. Переменная, которая
 будет совмещена с результирующей;


Method. Метод совмещения;


Direction. Направление совмещения;


BoundByDates. Признак использования
 даты начала и окончания совмещения ряда;


StartDate. Дата начала совмещения
 ряда;


EndDate. Дата окончания совмещения
 ряда.


## Описание


Метод Splice
 осуществляет совмещение переменных.


## Комментарии


Особенности задания параметров:


	- Direction. Необязательный
	 параметр для Fore. Значение по умолчанию: MsSpliceDirection.Both;


	- BoundByDates. Допустимые
	 значения:


		- True. Даты начала
		 и окончания совмещения ряда используются для совмещения переменных;


		- False. Даты начала
		 и окончания совмещения ряда игнорируются.


Необязательный параметр для Fore. Значение
 по умолчанию: False;


	- StartDate, EndDate.
	 Необязательные параметры для Fore. Значение по умолчанию не задано.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая более одной входной переменной.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

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

    Inp_1, Inp_2: String;

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

    // Запоминаем настройки
 расчета модели для точек первой входной переменной

    Inp_1 := TermInfo.TermInnerText;

    // Получаем вторую входную переменную

    TransVar := Transf.Inputs.Item(1);

    Slice := TransVar.Slices.Item(0);

    TermInfo := Transf.CreateTermInfo;

    TermInfo.Slice := Slice;

    // Задаем режим передачи переменной в расчет

    TermInfo.Type := MsFormulaTermType.Pointwise;

    // Запоминаем настройки
 расчета модели для точек второй входной переменной

    Inp_2 := TermInfo.TermInnerText;

    // Получаем выражение расчета модели

    Expr := Determ.Expression;

    Expr.References := "Ms";

    // Задаем выражение расчета модели

    Expr.AsString := "Splice(" + Inp_1 + ", " + Inp_2 + ",
 MsSpliceType.Butt, MsSpliceDirection.Both, True, " +

                            """" + "01.01.2003"
 + """" + ","
 + """" + "01.01.2006"
 + """" + ")";

    // Проверяем корректность выражения

    If Expr.Valid

        // Если выражение задано корректно, то сохраняем модель

        Then ModelObj.Save;

        // Если выражение некорректное, то выводим сообщение в окно консоли

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


После выполнения примера модель будет выполнять совмещение значений
 первой и второй входных переменных.


## Пример использования в выражениях


Выражение 1:


Splice({Brazil|BCA},{China|BCA},MsSpliceType.Pch,MsSpliceDirection.Backward,False)


Результат: выполнено совмещение значений показателей «Brazil|BCA»
 и «China|BCA» методом сращивания
 данных с темпами прироста в обратном направлении.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


Splice(X1,X2,MsSpliceType.Butt,MsSpliceDirection.Both,True,"01.01.2002","01.01.2007")


Результат: выполнено совмещение значений факторов «X1»
 и «X2» c 2002 по 2007 годы.


Применение: можно использовать в формулах моделей [контейнера
 моделирования](UiModelling.chm::/1_Modelling/UiModelling_First.htm).


См. также:


[IModelling](IModelling.htm)


База данных временных
 рядов: [Калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm),
 [Совмещение
 рядов](UiDw.chm::/Workbook/CalculatedSeries/Transformations/UiDw_cs_Overlapping.htm)


Контейнер моделирования:
 [Редактирование
 регрессора](UiNav.Chm::/GUI/ExpressionEditor.htm)/[формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
