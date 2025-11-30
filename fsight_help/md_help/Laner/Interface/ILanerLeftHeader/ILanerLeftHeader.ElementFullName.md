# ILanerLeftHeader.ElementFullName

ILanerLeftHeader.ElementFullName
-


# ILanerLeftHeader.ElementFullName


## Синтаксис


ElementFullName(SlotIndex: Integer; ElementIndex:
 Integer): String;


## Параметры


SlotIndex. Индекс слота в заголовке.


ElementIndex. Индекс элемента
 в заголовке.


## Описание


Свойство ElementFullName возвращает
 полное наименование указанного элемента боковика заголовка.


## Комментарии


Полное наименование элемента включает в себя его иерархию.


Значение параметра SlotIndex
 должно быть меньше значения свойства [ILanerHeader.SlotCount](../ILanerHeader/ILanerHeader.SlotCount.htm).


Значение параметра ElementIndex
 должно быть меньше значения свойства [ILanerHeader.ElementCount](../ILanerHeader/ILanerHeader.ElementCount.htm).


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов. В компоненте LanerBox должен быть отображен один или несколько
 атрибутов ряда.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Analyzer: IEaxAnalyzer;

	    Laner: Ilaner;

	    Table: ILanerTable;

	    LeftHeader: ILanerLeftHeader;

	    SlotCount: Integer;

	Begin

	    Analyzer := UiErAnalyzer1.ErAnalyzer;

	    Laner := Analyzer.Laner;

	    Table := Laner.Execute;

	    LeftHeader := Table.LeftHeader;

	    SlotCount := LeftHeader.SlotCount - 1;

	    If SlotCount > 0 Then

	        Debug.WriteLine(LeftHeader.ElementFullName(SlotCount, 0));

	    End If;

	End Sub Button1OnClick;


После выполнения примера в окно консоли будет выведено полное наименование
 первого элемента в последней колонке боковика.


См. также:


[ILanerLeftHeader](ILanerLeftHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
