# IGxPenBase.DashStyle

IGxPenBase.DashStyle
-


# IGxPenBase.DashStyle


## Синтаксис


DashStyle: [GxDashStyle](../../Enums/GxDashStyle.htm);


## Описание


Свойство DashStyle определяет
 стиль изображения линии.


## Комментарии


В качестве значения данного свойства может быть установлено одно из
 значений [GxDashStyle](../../Enums/GxDashStyle.htm),
 отличное от [GxDashStyle.None](../../Enums/GxDashStyle.htm)
 и [GxDashStyle.Undefined](../../Enums/GxDashStyle.htm).
 При попытке установить значение [GxDashStyle.None](../../Enums/GxDashStyle.htm)
 или [GxDashStyle.Undefined](../../Enums/GxDashStyle.htm)
 будет произведена автоматическая замена стиля на [GxDashStyle.Solid](../../Enums/GxDashStyle.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие формы, на которой
 должны располагаться следующие компоненты:


	- EaxDocumentViewerBox
	 с идентификатором «EaxDocumentViewerBox1»;


	- UiErAnalyzer с идентификатором
	 «UiErAnalyzer1», который служит источником данных для «EaxDocumentViewerBox1».


Также для выполнения примера необходимо наличие экспресс-отчета с пузырьковой
 диаграммой, который служит источником данных для «UiErAnalyzer1».


			Sub UserProc;

Var

    EaxAnalyzer: IEaxAnalyzer;

    BC: IEaxBubbleChart;

    BCVZ: IVZBubbleChart;

    AxisX: IVZChartAxis;

    Pen: IGxPenBase;

Begin

    // Получим объект репозитория

    EaxAnalyzer := UiErAnalyzer1.ErAnalyzer;

    // Получим пузырьковую диаграмму

    BC := EaxAnalyzer.BubbleChart;

    BCVZ := BC.BubbleChart;

    // Получим ось Х

    AxisX := BCVZ.AxisX;

    // Создадим новое перо

    Pen := New GxPen.CreateSolid(GxColor.FromName("Red"));

    // Установим пунктирный тип линии

    Pen.DashStyle := GxDashStyle.Dash;

    // Зададим новое перо в качестве основного

    AxisX.Pen := Pen;

    // Зададим новый цвет пера

    Pen.Color := New GxColor.CreateRGB(120, 0, 120);

    // Зададим ширину пера

    Pen.Width := 5;

    // Обновим пузырьковую диаграмму

    BC.Refresh;

End Sub Userproc;


После выполнения примера ось Х пузырьковой диаграммы станет пунктирной,
 изменит цвет и ширину.


См. также:


[IGxPenBase](IGxPenBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
