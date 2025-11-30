# ILanerTable.CellRevisionDimension

ILanerTable.CellRevisionDimension
-


# ILanerTable.CellRevisionDimension


## Синтаксис


CellRevisionDimension(Row: Integer; Column: Integer):
 [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);


## Параметры


Row. Индекс строки.


Column.
 Индекс столбца.


## Описание


Свойство CellRevisionDimension
 возвращает справочник, содержащий данные о [ревизиях](UiDw.chm::/Revision/Revision_Work.htm)
 для указанной ячейки.


## Комментарии


Для получения последней ревизии, в рамках которой были изменены данные
 в ячейке, используйте свойство [ILanerTable.CellRevision](ILanerTable.CellRevision.htm).


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая книга базы данных временных
 рядов. Перед выполнением примера выделите один ряд в компоненте в LanerBox1.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Dimensions, Express, ExtCtrls,
 Forms, Laner, Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Laner: ILaner;

	    LanTbl: ILanerTable;

	    RevDimInst: IDimInstance;

	    Atts: IDimAttributesInstance;


	    Elems: IDimElements;

	    i, j: Integer;

	    Atr: IDimAttributeInstance;

	Begin

	    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

	    LanTbl := Laner.Execute;

	    // Получение справочника ревизий

	    RevDimInst := LanTbl.CellRevisionDimension(0, 0);

	    // Получение атрибутов справочника ревизий

	    Atts := RevDimInst.Attributes;

	    // Получение элементов справочника ревизий

	    Elems := RevDimInst.Elements;

	    // Вывод справочника ревизий в окно консоли

	    For i := 0 To Elems.Count - 1 Do

	        Debug.WriteLine("Элемент " + i.ToString);

	        For j := 0 To Atts.Count - 1 Do

	            Atr := Atts.Item(j);

	            Debug.Write(Atr.Attribute.Name + ": ");

	            Debug.WriteLine(Atr.Value(i));

	        End For;

	        Debug.WriteLine("");

	    End For;

	End Sub Button1OnClick;


После выполнения примера в окно консоли будет выведен справочник, содержащий
 данные о ревизиях, для ячейки, которая расположена в первой строке и первом
 столбце загруженной рабочей книги.


См. также:


[ILanerTable](ILanerTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
