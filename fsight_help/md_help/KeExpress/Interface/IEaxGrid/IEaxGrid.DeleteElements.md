# IEaxGrid.DeleteElements

IEaxGrid.DeleteElements
-


# IEaxGrid.DeleteElements


## Синтаксис


DeleteElements(Range: [ITabRange](TabSheet.chm::/Interface/ITabRange/ITabRange.htm);
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


Метод DeleteElements удаляет
 элементы из отметки, которые попали в указанный диапазон.


## Комментарии


В качестве значения параметра Range
 необходимо указать диапазон из ячеек заголовков, расположенных по столбцам/строкам.
 При выполнении метода элементы, которые отображались в указанных ячейках,
 будут исключены из отметки соответствующих измерений.


Метод исключает элементы того измерения, которое находится в переданном
 слоте.


Метод DeleteElements также может
 применяться для удаления [вычисляемых
 элементов](../IEaxDataAreaSlice/IEaxDataAreaSlice.CalculationOptions.htm).


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

	    Range: ITabRange;

	Begin

	    Eax := UiErAnalyzer1.Instance As IEaxAnalyzer;

	    Range := TabSheetBox1.Source.GetTabSheet.View.Selection.Range;

	    Eax.Grid.DeleteElements(Range);

	End Sub Button1OnClick;


При нажатии на кнопку из таблицы будут исключены данные по тем элементам,
 которые выделены в каком-либо заголовке.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
