# IEaxGrid.KeepOnlyElements

IEaxGrid.KeepOnlyElements
-


# IEaxGrid.KeepOnlyElements


## Синтаксис


KeepOnlyElements(Range: [ITabRange](TabSheet.chm::/Interface/ITabRange/ITabRange.htm);
 [SlotIndex: Integer = -1]);


## Параметры


Range. Диапазон ячеек таблицы;


SlotIndex. Индекс слота в заголовке.


Примечание.
 Параметр SlotIndex определяет,
 в каком измерении, входящем в заголовок, требуется изменить отметку. Если
 SlotIndex = -1, то
 отметка будет меняться в первом измерении.


## Описание


Метод KeepOnlyElements изменяет
 отметку таким образом, что в таблице доступным остается только указанный
 диапазон.


## Комментарии


В качестве значения параметра Range
 необходимо указать диапазон из ячеек заголовков, расположенных по столбцам/строкам.


Метод оставляет доступными элементы измерения, индекс которого передан
 в SlotIndex.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с наименованием «Button1»,
 компонент TabSheetBox с наименованием
 «TabSheetBox1» и компонент UiErAnalyzer
 с наименованием «UiErAnalyzer1». Укажите «UiErAnalyzer1» в качестве источника
 данных для компонента «TabSheetBox1».


В качестве источника данных для компонента «UiErAnalyzer1» укажите экспресс-отчёт.
 Установите для компонента «UiErAnalyzer1» свойство Active = True.


Процедура является обработчиком события OnClick для компонента «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Eax: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    TR: ITabRange;

	Begin

	    Eax := UiErAnalyzer1.ErAnalyzer;

	    Grid := Eax.Grid;

	    TR := Grid.TabSheet.ParseRange("C1:D2");

	    Grid.KeepOnlyElements(TR);

	End Sub Button1OnClick;


После выполнения примера в таблице останутся только ячейки указанного
 диапазона.


См. также:


[IEaxAnalyzer](../IEaxAnalyzer/IEaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
