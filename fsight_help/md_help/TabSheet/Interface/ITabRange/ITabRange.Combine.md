# ITabRange.Combine

ITabRange.Combine
-


# ITabRange.Combine


## Синтаксис


Combine(Range: [ITabRange](ITabRange.htm);
 CombineMode: [TabRangeCombineMode](../../Enums/TabRangeCombineMode.htm)):
 [ITabRange](ITabRange.htm);


## Параметры


Range. Текущий диапазон элементов
 таблицы;


CombineMode. Способ изменения
 текущего диапазона.


## Описание


Метод Combine изменяет текущий
 диапазон.


## Комментарии


В зависимости от значения параметра CombineMode
 метод создает или дополняет текущий составной диапазон, указанный в качестве
 входного параметра.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с наименованием «Button1»,
 компонент UiErAnalyzer с наименованием
 «UiErAnalyzer1» и компонент TabSheetBox
 с наименованием «TabSheetBox1». Укажите «UiErAnalyzer1» в качестве источника
 данных для «TabSheetBox1». В качестве источника для «UiErAnalyzer1» укажите
 экспресс-отчёт, содержащий таблицу с данными.


Процедура является обработчиком события OnClick
 для кнопки «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Eax: IEaxAnalyzer;

    Grid: IEaxGrid;

    TR1: ITabRange;

    TR2: ITabRange;

Begin

    Eax := UiErAnalyzer1.ErAnalyzer;

    Grid := Eax.Grid;

    TR1 := Grid.TabSheet.ParseRange("B2:C2");

    TR2 := Grid.TabSheet.ParseRange("C2:D2");

    TR2 := TR2.Combine(TR1, TabRangeCombineMode.Xor_);

    Grid.KeepOnlyElements(TR2);

End Sub Button1OnClick;


При нажатии на кнопку в таблице останется диапазон, полученный после
 объединения исходных диапазонов с исключением их перекрытия.


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
